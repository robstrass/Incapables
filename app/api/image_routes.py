from flask import Blueprint
from flask_login import login_required, current_user
from app.models import db, Image

image_routes = Blueprint('images', __name__)

# Single Image
@image_routes.route('/<int:imageId>')
def one_image(imageId):
    image = Image.query.get(int(imageId))

    return image.to_dict()
