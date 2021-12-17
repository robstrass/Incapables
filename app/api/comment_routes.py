from flask import Blueprint, request
from flask_login import login_required, current_user
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import db, Comment

comment_routes = Blueprint('comments', __name__)

# Single Comment
@comment_routes.route('/<int:commentId>')
def all_comments(commentId):
    comment = Comment.query.get(int(commentId))

    return comment.to_dict()

@comment_routes.route('/<int:commentId>', methods=['DELETE'])
@login_required
def delete_comment(commentId):
    comment = Comment.query.get(int(commentId))
    if comment.user_id == current_user.id:
        db.session.delete(comment)
        db.session.commit()
        return comment.to_dict()
    return {'errors': 'You can\'t delete someone else\'s comment.'}
