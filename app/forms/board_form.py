from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length


class BoardForm(FlaskForm):
    user_id = IntegerField("user id", validators=[DataRequired()])
    coverpic = StringField("coverpic", validators=[DataRequired(), Length(min=6, max=250)])
    title = StringField("title", validators=[Length(min=3, max=28)])
