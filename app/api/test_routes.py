from flask import Blueprint, request, jsonify
from app.models import Board

test_routes = Blueprint('test', __name__)

@test_routes.route('/check-pin-in-board', methods=['GET'])
def check_pin_in_board():
    board_id = request.args.get('board_id', type=int) # or however you wish to get this
    pin_id_to_check = request.args.get('pin_id', type=int)

    board = Board.query.get(board_id)

    if not board:
        return jsonify({"error": "Board not found"}), 404

    is_pin_in_board = any(pin.id == pin_id_to_check for pin in board.boards_pins)

    if is_pin_in_board:
        return jsonify({"message": f"Pin with ID {pin_id_to_check} is part of the board with ID {board_id}"})
    else:
        return jsonify({"message": f"Pin with ID {pin_id_to_check} is not part of the board with ID {board_id}"})
