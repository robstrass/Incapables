from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, Project

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


# Get User's Projects
@user_routes.route('/<int:id>/projects')
# @login_required
def user_projects(id):
    projects = Project.query.filter(Project.user_id == id).all()

    return {'projects': [project.to_dict() for project in projects]}
