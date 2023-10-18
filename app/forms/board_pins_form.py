from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired

class BoardPinForm(FlaskForm):
    board_id = IntegerField('board Id', validators=[DataRequired()])
    pin_id = IntegerField('pin Id', validators=[DataRequired()])
