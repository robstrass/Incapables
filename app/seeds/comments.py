from app.models import db, Comment

def seed_comments():
    com1 = Comment(
        user_id=2,
        project_id=1,
        content='''
            Oooh fancy!
        '''
    )

    com2 = Comment(
        user_id=3,
        project_id=2,
        content='''
            Wowza
        '''
    )

    com3 = Comment(
        user_id=3,
        project_id=1,
        content='''
            That's so cool
        '''
    )

    com4 = Comment(
        user_id=2,
        project_id=2,
        content='''
            Interesting...
        '''
    )

    com5 = Comment(
        user_id=1,
        project_id=3,
        content='''
            Haha, so great
        '''
    )

    com6 = Comment(
        user_id=3,
        project_id=3,
        content='''
            This is genius
        '''
    )

    com7 = Comment(
        user_id=3,
        project_id=4,
        content='''
            That's not how you do it!!!!!!!!
        '''
    )

    com8 = Comment(
        user_id=2,
        project_id=4,
        content='''
            How is this a thing?
        '''
    )

    db.session.add(com1)
    db.session.add(com2)
    db.session.add(com3)
    db.session.add(com4)
    db.session.add(com5)
    db.session.add(com6)
    db.session.add(com7)
    db.session.add(com8)

    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
