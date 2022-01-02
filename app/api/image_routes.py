from flask import Blueprint
from flask_login import login_required, current_user
from app.models import db, Image

image_routes = Blueprint('images', __name__)

# Single Image
@image_routes.route('/<int:imageId>')
def one_image(imageId):
    image = Image.query.get(int(imageId))

    return image.to_dict()

@image_routes.route('/<int:imageId>', methods=['DELETE'])
@login_required
def delete_image(imageId):
    print('XXXXXXXXXXXXXXXXXXX', imageId)
    image = Image.query.get(int(imageId))
    print('current user', image.user_id, current_user.id)
    if image.user_id == current_user.id:
        db.session.delete(image)
        db.session.commit()
        return image.to_dict()
    return {'errors': 'You can\'t delete someone else\'s image.'}
