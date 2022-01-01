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

    project5 = Project(
        user_id=2,
        category_id=2,
        title='Planting your Garden',
        content='The gardening hack your neighbor won\'t show you.'
    )

    project6 = Project(
        user_id=2,
        category_id=4,
        title='Organizing the Shed',
        content='Your shed is always cluttered - fix it with these tips!'
    )

    project7 = Project(
        user_id=3,
        category_id=7,
        title='Legos',
        content='Fun project to enjoy with your kids'
    )

    project8 = Project(
        user_id=1,
        category_id=1,
        title='Olive Oil',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project9 = Project(
        user_id=1,
        category_id=5,
        title='Squirrel Feeder',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project10 = Project(
        user_id=2,
        category_id=3,
        title='Clean those dirty windows with ease',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project11 = Project(
        user_id=1,
        category_id=6,
        title='Pasta Mama',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project12 = Project(
        user_id=2,
        category_id=2,
        title='Planting your Garden',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project13 = Project(
        user_id=2,
        category_id=4,
        title='Unorganized Chaos',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project14 = Project(
        user_id=3,
        category_id=7,
        title='Building Lego Walls',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project15 = Project(
        user_id=1,
        category_id=1,
        title='Sed ut perspiciatis unde omnis iste',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project16 = Project(
        user_id=1,
        category_id=5,
        title='Sed ut perspiciatis unde omnis iste',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project17 = Project(
        user_id=2,
        category_id=3,
        title='Sed ut perspiciatis unde omnis iste',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project18 = Project(
        user_id=1,
        category_id=6,
        title='Sed ut perspiciatis unde omnis iste',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project19 = Project(
        user_id=2,
        category_id=2,
        title='Sed ut perspiciatis unde omnis iste',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project20 = Project(
        user_id=2,
        category_id=4,
        title='Sed ut perspiciatis unde omnis iste',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project21 = Project(
        user_id=3,
        category_id=7,
        title='Sed ut perspiciatis unde omnis iste',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project22 = Project(
        user_id=1,
        category_id=1,
        title='Sed ut perspiciatis unde omnis iste',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project23 = Project(
        user_id=1,
        category_id=5,
        title='Sed ut perspiciatis unde omnis iste',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project24 = Project(
        user_id=2,
        category_id=3,
        title='Sed ut perspiciatis unde omnis iste',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project25 = Project(
        user_id=1,
        category_id=6,
        title='Sed ut perspiciatis unde omnis iste',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project26 = Project(
        user_id=2,
        category_id=2,
        title='Sed ut perspiciatis unde omnis iste',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project27 = Project(
        user_id=2,
        category_id=4,
        title='Sed ut perspiciatis unde omnis iste',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    project28 = Project(
        user_id=3,
        category_id=7,
        title='Sed ut perspiciatis unde omnis iste',
        content='''Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'''
    )

    db.session.add(project1)
    db.session.add(project2)
    db.session.add(project3)
    db.session.add(project4)
    db.session.add(project5)
    db.session.add(project6)
    db.session.add(project7)
    db.session.add(project8)
    db.session.add(project9)
    db.session.add(project10)
    db.session.add(project11)
    db.session.add(project12)
    db.session.add(project13)
    db.session.add(project14)
    db.session.add(project15)
    db.session.add(project16)
    db.session.add(project17)
    db.session.add(project18)
    db.session.add(project19)
    db.session.add(project20)
    db.session.add(project21)
    db.session.add(project22)
    db.session.add(project23)
    db.session.add(project24)
    db.session.add(project25)
    db.session.add(project26)
    db.session.add(project27)
    db.session.add(project28)

    db.session.commit()

def undo_projects():
    db.session.execute('TRUNCATE projects RESTART IDENTITY CASCADE;')
    db.session.commit()
