from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Board
from app import db
from app.forms import BoardForm
# from app.forms import PinForm

board_routes = Blueprint('boards', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@board_routes.route("/")
def index():
    boards = Board.query.all()
    return {'boards': [board.to_dict() for board in boards]}

@board_routes.route('/new', methods=['POST'])
@login_required
def create_board():
    form = BoardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    if form.validate_on_submit():
        board = Board(
            user_id = form.data["user_id"],
            coverpic = form.data["coverpic"],
            title = form.data["title"],
        )
        db.session.add(board)
        db.session.commit()
        return {'board': board.to_dict()}
    return {"errors": validation_errors_to_error_messages(form.errors)}, 400