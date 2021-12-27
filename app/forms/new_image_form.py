from flask_wtf import FlaskForm
from wtforms import TextAreaField, FileField
from wtforms.validators import DataRequired

class NewImageForm(FlaskForm):
    image = FileField('image', validators=[DataRequired()])
    content = TextAreaField('content')
