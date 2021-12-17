from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Comment

comment_routes = Blueprint('comments', __name__)

# Single Comment
@comment_routes.route('/<int:commentId>')
def all_comments(commentId):
    comment = Comment.query.get(int(commentId))

    return comment.to_dict()
