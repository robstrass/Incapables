from flask import Blueprint
from flask_login import login_required
from app.models import Project

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
