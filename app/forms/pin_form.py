from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, DateTimeField
from wtforms.validators import DataRequired, ValidationError

class PinForm(FlaskForm):
  user_id = IntegerField("user id", validators=[DataRequired()])
  main_pic = StringField("main_pic", validators=[DataRequired()])
  title = StringField("title")
  body = StringField("body")