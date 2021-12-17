from app.api.auth_routes import validation_errors_to_error_messages
from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Project, Comment
from app.forms import NewProjectForm, EditProjectForm, NewCommentForm


project_routes = Blueprint('projects', __name__)

# All projects
@project_routes.route('/')
def all_projects():
    projects = Project.query.all()

    return { 'projects': [project.to_dict() for project in projects] }

# Single Project
@project_routes.route('/<int:projectId>')
def one_project(projectId):
    project = Project.query.get(int(projectId))

    return project.to_dict()

@project_routes.route('/', methods=['POST'])
@login_required
def new_project():
    form = NewProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        project = Project(
            user_id=current_user.id,
            category_id=form.data['category_id'],
            title=form.data['title'],
            content=form.data['content']
        )

        db.session.add(project)
        db.session.commit()
        return project.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@project_routes.route('/<int:projectId>', methods=['PUT'])
@login_required
def edit_project(projectId):
    form = EditProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    project = Project.query.get(int(projectId))

    if form.validate_on_submit() and project.user_id == current_user.id:
        project.title = form.data['title']
        project.content = form.data['content']
        project.category_id = form.data['category_id']

        db.session.commit()
        return project.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@project_routes.route('/<int:projectId>', methods=['DELETE'])
@login_required
def delete_project(projectId):
    project = Project.query.get(int(projectId))
    if project.user_id == current_user.id:
        db.session.delete(project)
        db.session.commit()
        return project.to_dict()
    return {'errors': 'You cannot delete someone else\'s projects'}

@project_routes.route('/<int:projectId>/comments', methods=['POST'])
# @login_required
def add_comment(projectId):
    form = NewCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = Comment (
            content = form.data['content'],
            project_id = projectId,
            user_id = 2
        )

        db.session.add(comment)
        db.session.commit()
        return comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400
