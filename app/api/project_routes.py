from flask import Blueprint, request
from flask_login import login_required, current_user
from app.api.auth_routes import login, validation_errors_to_error_messages
from app.models import db, Project, Comment, Image
from app.forms import NewProjectForm, EditProjectForm, NewCommentForm, EditCommentForm, NewImageForm, EditImageForm
from app.aws_upload import (upload_file_to_s3, allowed_file, get_unique_filename)


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

# All Comments
@project_routes.route('/<int:projectId>/comments')
def all_comments(projectId):
    comments = Comment.query.filter(projectId == Comment.project_id)

    return { 'comments': [comment.to_dict() for comment in comments] }

# Add Comment
@project_routes.route('/<int:projectId>/comments', methods=['POST'])
@login_required
def add_comment(projectId):
    form = NewCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment = Comment (
            content = form.data['content'],
            project_id = projectId,
            user_id = current_user.id
        )

        db.session.add(comment)
        db.session.commit()
        return comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# Edit Comment
@project_routes.route('/<int:projectId>/comments/<int:commentId>', methods=['PUT'])
@login_required
def edit_comment(projectId, commentId):
    form = EditCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    comment = Comment.query.get(int(commentId))

    if form.validate_on_submit() and comment.user_id == current_user.id:
        comment.content = form.data['content']
        comment.project_id = projectId
        comment.user_id = current_user.id

        db.session.commit()
        return comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# All Images
@project_routes.route('/<int:projectId>/images')
def all_images(projectId):
    images = Image.query.filter(projectId == Image.project_id).all()

    return { 'images': [image.to_dict() for image in images] }

# Add Image
@project_routes.route('/<int:projectId>/images', methods=['POST'])
@login_required
def add_image(projectId):
    form = NewImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    project = Project.query.get(int(projectId))

    if "image" not in form.data:
        return {"errors": "image required"}, 400

    image = form.data["image"]

    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if "url" not in upload:
        return upload, 400

    url = upload["url"]

    if form.validate_on_submit() and project.user_id == current_user.id:
        image = Image(
            image = url,
            content = form.data['content'],
            project_id = projectId,
            user_id = current_user.id
        )

        db.session.add(image)
        db.session.commit()
        return image.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# Edit Image
@project_routes.route('/<int:projectId>/images/<int:imageId>', methods=['PUT'])
@login_required
def edit_image(projectId, imageId):
    form = EditImageForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    image = Image.query.get(int(imageId))
    print('imagexxxxxxx', image)

    if "image" not in form.data:
        return {"errors": "image required"}, 400

    imageAWS = form.data["image"]

    if not allowed_file(imageAWS.filename):
        return {"errors": "file type not permitted"}, 400

    imageAWS.filename = get_unique_filename(imageAWS.filename)

    upload = upload_file_to_s3(imageAWS)

    if "url" not in upload:
        return upload, 400

    url = upload["url"]

    if form.validate_on_submit() and image.user_id == current_user.id:
        image.image = url
        image.content = form.data['content']
        image.project_id = projectId
        image.user_id = current_user.id

        db.session.commit()
        return image.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400
