from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired
from app.forms import PinForm


class PinFormEdit(PinForm):
    user_id = IntegerField("user id", validators=[DataRequired()])
    main_pic = StringField("main_pic", validators=[DataRequired()])
    title = StringField("title")
    body = StringField("body")
