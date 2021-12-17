from flask_wtf import FlaskForm
from wtforms import TextAreaField, StringField
from wtforms.validators import DataRequired

class NewImageForm(FlaskForm):
    image = StringField('image', validators=[DataRequired()])
    content = TextAreaField('content')
