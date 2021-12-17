from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Comment

comment_routes = Blueprint('comments', __name__)

# All comments for a
# @comment_routes.route('/<int:projectId')
# def all_comments():
#     comments = Comment.query
