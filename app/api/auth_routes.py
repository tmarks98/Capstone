from flask import Blueprint, jsonify, session, request, abort, redirect
from google.oauth2 import id_token
from google_auth_oauthlib.flow import Flow
from pip._vendor import cachecontrol
import google.auth.transport.requests
from app.models import User, db
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from tempfile import NamedTemporaryFile
import json
import os
import pathlib
import requests

auth_routes = Blueprint('auth', __name__)
# auth_routes.secret_key = os.environ.get('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')

if os.environ.get('FLASK_ENV') == 'development': # checking if in local so our live site isnt compromised
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1" # to allow Http traffic for local dev

CLIENT_SECRET = os.getenv('GOOGLE_OAUTH_CLIENT_SECRET')
CLIENT_ID = os.getenv('GOOGLE_OAUTH_CLIENT_ID')

client_secrets = {
    "web": {
        "client_id": CLIENT_ID,
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_secret": CLIENT_SECRET,
        "redirect_uris": [
            "http://localhost:5000/callback"
        ]
    }
}

secrets = NamedTemporaryFile(delete=False)
with open(secrets.name, "w") as output:
    json.dump(client_secrets, output)

flow = Flow.from_client_secrets_file(
    client_secrets_file=secrets.name,
    scopes=[
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
        "openid"
    ],
    redirect_uri="http://localhost:5000/callback"
)

os.unlink(secrets.name)
os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"
def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User(
            username=form.data['username'],
            email=form.data['email'],
            password=form.data['password']
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401

@auth_routes.route("/callback")
def callback():
    # Fetching token
    flow.fetch_token(authorization_response=request.url)

    # CSRF protection
    if not session["state"] == request.args["state"]:
        abort(500)  # State does not match!

    credentials = flow.credentials
    request_session = requests.session()
    cached_session = cachecontrol.CacheControl(request_session)
    token_request = google.auth.transport.requests.Request(session=cached_session)

    # Verifying the JWT signature
    id_info = id_token.verify_oauth2_token(
        id_token=credentials._id_token,
        request=token_request,
        audience=GOOGLE_CLIENT_ID
    )

    # Generating new session for the authenticated user
    session["google_id"] = id_info.get("sub")
    session["name"] = id_info.get("name")

    # Check if user exists
    existing_user = User.query.filter(User.email == id_info["email"]).first()
    FINAL_REDIRECT_URL = "http://localhost:3000/" if os.environ.get('FLASK_ENV') == 'development' else 'https://spinterest.onrender.com'

    # If user does not exist, create a new user
    if not existing_user:
        user = User(
            username=id_info["name"],
            email=id_info["email"],
            password=GOOGLE_PASSWORD
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
    else:
        login_user(existing_user)

    return redirect(FINAL_REDIRECT_URL) # Redirect to the frontend

@auth_routes.route("/oauth_login")
def oauth_login():
    authorization_url, state = flow.authorization_url()
    print("AUTH URL: ", authorization_url) # I recommend that you print this value out to see what it's generating.
    # Ex: https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=NICE TRY&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fcallback&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&state=A0eZyFD4WH6AfqSj7XcdypQ0cMhwr9&access_type=offline
    # It SHOULD look a lot like the URL in the SECOND or THIRD line of our flow chart!
    # Note that in the auth url above the value 'access_type' is set to 'offline'. If you do not send this, the user will NOT see the Google Login screen!!
    # Additionally, note that this URL does NOT contain the 'code_challenge_method' value NOR the 'code_challenge' that can be seen in our flow chart.
    # This package may have been created BEFORE the official Oauth2 consortium began recommending PKCE even for back channel flows...
    # While implementation details are completely obscured by the method .authorization_url() let's note 2 things here.
    # 1) We ARE generating a random value for the 'state' variable. We save it to the session on the line below to compare later.
    # 2) The authorization URL
    # print("STATE: ", state)
    session["state"] = state
    return redirect(authorization_url) # This line technically will enact the SECOND and THIRD lines of our flow chart.


# After a successful login by our user, Google will send a verification code to the endpoint below.
# Using the verification code, we can request an authorization token from Google as long as we do it before it expires. I think 5 minutes...
# This endpoint is being hit by the 5th line in our flow chart.