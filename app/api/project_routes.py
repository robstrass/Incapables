from app.api.auth_routes import validation_errors_to_error_messages
from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Project
from app.forms import NewProjectForm

project_routes = Blueprint('projects', __name__)

# All projects
@project_routes.route('/')
@login_required
def all_projects():
    projects = Project.query.all()
    print('asndlasnd', projects)

    return { 'projects': [project.to_dict() for project in projects] }

@project_routes.route('/', methods=['POST'])
@login_required
def new_project():
    form = NewProjectForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        project = Project(
            user_id=current_user,
            category_id=form.data['category_id'],
            title=form.data['title'],
            content=form.data['content']
        )

        db.session.add(project)
        db.session.commit()
        return project.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400
