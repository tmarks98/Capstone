from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Pin
from app import db
from app.forms import PinForm


pin_routes = Blueprint('pins', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages

@pin_routes.route("/")
def index():
    pins = Pin.query.all()
    return {'pins': [pin.to_dict() for pin in pins]}

@pin_routes.route('/new', methods=['POST'])
@login_required
def create_pin():
    form = PinForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    if form.validate_on_submit():
        pin = Pin(
            user_id = form.data["user_id"],
            main_pic = form.data["main_pic"],
            title = form.data["title"],
            body = form.data["body"],
        )
        db.session.add(pin)
        db.session.commit()
        return {'pin': pin.to_dict()}
    return {"errors": validation_errors_to_error_messages(form.errors)}, 400

@pin_routes.route('/<int:pinId>', methods=['GET', 'POST', 'PUT'])
@login_required
def edit_pin(pinId):
    pin = Pin.query.get(pinId)

    form = PinForm()
    
    form['csrf_token'].data = request.cookies['csrf_token']
    print('----FORM DATA', form.validate_on_submit)
    if not pin:
        return {"errors": ['Pin not found']}, 404
    
    if form.validate_on_submit():
        pin.user_id = form.data["user_id"]
        print('----PINS', pin.user_id)
        pin.main_pic = form.data["main_pic"]
        pin.title = form.data["title"]
        pin.body = form.data["body"]
        db.session.commit()
        return {'pin': pin.to_dict()}
    print('----ERRORS', validation_errors_to_error_messages(form.errors))
    return {"errors": validation_errors_to_error_messages(form.errors)}, 400

@pin_routes.route('/<int:pinId>', methods=['DELETE'])
@login_required
def delete_pin(pinId):
    pin = Pin.query.get(pinId)
    if not pin:
        return {"errors": ["pin is not found"]}, 404

    if current_user.id != pin.user_id:
        return {"errors": ["you are not authorized to edit this pin"]}, 403
    db.session.delete(pin)
    db.session.commit()
    return {"message": "pin deleted"}