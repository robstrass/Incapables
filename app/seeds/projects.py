from app.models import db, Project

def seed_projects():
    project1 = Project(
        user_id=1,
        category_id=1,
        title='Change your oil in the garage',
        content='After 30 years of changing the oil of my cars, I\'ve decided to share my knowledge with you all'
    )

    project2 = Project(
        user_id=1,
        category_id=1,
        title='',
        content=''
    )

    project3 = Project(
        user_id=1,
        category_id=1,
        title='',
        content=''
    )

    project4 = Project(
        user_id=1,
        category_id=1,
        title='',
        content=''
    )
