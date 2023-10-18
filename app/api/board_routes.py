from flask import Blueprint, request, jsonify
from flask_login import login_required, current_user
from app.models import Board, Pin
from app import db
from app.forms import BoardForm, BoardPinForm
from app.models import board_pins
import json
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
            user_id=form.data["user_id"],
            coverpic=form.data["coverpic"],
            title=form.data["title"],
        )
        db.session.add(board)
        db.session.commit()
        return {'board': board.to_dict()}
    return {"errors": validation_errors_to_error_messages(form.errors)}, 400

@board_routes.route('/<int:boardId>', methods=['GET', 'POST', 'PUT'])
@login_required
def edit_board(boardId):
    board = Board.query.get(boardId)

    form = BoardForm()
    
    form['csrf_token'].data = request.cookies['csrf_token']

    if not board:
        return {"errors": ['board not found']}, 404
    
    if form.validate_on_submit():
        board.user_id = form.data["user_id"]
        board.coverpic = form.data["coverpic"]
        board.title = form.data["title"]
        db.session.commit()
        return {'board': board.to_dict()}
    print('----ERRORS', validation_errors_to_error_messages(form.errors))
    return {"errors": validation_errors_to_error_messages(form.errors)}, 400

@board_routes.route('/<int:boardId>', methods=['DELETE'])
@login_required
def delete_board(boardId):
    board = Board.query.get(boardId)
    if not board:
        return {"errors": ["board is not found"]}, 404

    if current_user.id != board.user_id:
        return {"errors": ["you are not authorized to edit this board"]}, 403
    db.session.delete(board)
    db.session.commit()
    return {"message": "board deleted"}

@board_routes.route('/add', methods=['PUT'])
@login_required
def add_image():
    form = BoardPinForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        board = Board.query.get(form.data['board_id'])
        pin = Pin.query.get(form.data['pin_id'])

        board.boards_pins.append(pin)

        db.session.commit()
        return {'board': board.to_dict()}
    else:
        return {"errors": validation_errors_to_error_messages(form.errors)}, 400
# @board_routes.route('/<int:boardId>/delete/<int:pin_id>', methods=['DELETE'])
# @login_required
# def delete_pin_board(boardId):
#     board = Board.query.get(boardId)
#     if not board:
#         return {"errors": ["board is not found"]}, 404

#     if current_user.id != board.user_id:
#         return {"errors": ["you are not authorized to edit this board"]}, 403
#     db.session.delete(board)
#     db.session.commit()
#     return {"message": "board deleted"}