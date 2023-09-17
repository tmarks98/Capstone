from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length


class PinForm(FlaskForm):
    user_id = IntegerField("user id", validators=[DataRequired()])
    main_pic = StringField("main_pic", validators=[DataRequired()])
    title = StringField("title", validators=[DataRequired(), Length(min=3, max=35)])
    body = StringField("body", validators=[DataRequired(), Length(min=3, max=120)])
