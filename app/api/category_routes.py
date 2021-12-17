from flask import Blueprint
from app.models import db, Category

category_routes = Blueprint('categories', __name__)

# All Categories
@category_routes.route('/')
def categories():
    categories = Category.query.all()

    return {'categories': [category.to_dict() for category in categories]}

# Specific Category
@category_routes.route('/<int:categoryId>')
def one_category(categoryId):
    category = Category.query.get(int(categoryId))

    return category.to_dict()
