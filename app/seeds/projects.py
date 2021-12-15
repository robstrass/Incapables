from app.models import db, Project

def seed_projects():
    project1 = Project(
        user_id=1,
        category_id=1,
        title='Change your oil in the garage',
        content='''After 30 years of changing the oil of my cars,
            I\'ve decided to share my knowledge with you all'''
    )

    project2 = Project(
        user_id=1,
        category_id=5,
        title='Bird Feeder',
        content='I have the perfect solution to your bird feeder issues'
    )

    project3 = Project(
        user_id=2,
        category_id=3,
        title='Clean those dirty windows with ease',
        content='The one method Windex doesn\'t want you to know!'
    )

    project4 = Project(
        user_id=1,
        category_id=6,
        title='Spaghetti',
        content='Better than yo mama\'s'
    )
