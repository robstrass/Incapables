from flask_wtf import FlaskForm
from wtforms import TextField
from wtforms.validators import DataRequired

class EditCommentForm(FlaskForm):
    content = TextField('content', validators=[DataRequired()])
