from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class BoardForm(FlaskForm):
    user_id = IntegerField("user id", validators=[DataRequired()])
    coverpic = StringField("coverpic", validators=[DataRequired()])
    title = StringField("title")
