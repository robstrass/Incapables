from app.models import db, Category

def seed_categories():
    cat1 = Category(
        category='Workshop'
    )

    cat2 = Category(
        category='Gardening'
    )

    cat3 = Category(
        category='Living'
    )

    cat4 = Category(
        category='Outside'
    )

    cat5 = Category(
        category='Craft'
    )

    cat6 = Category(
        category='Cooking'
    )

    cat7 = Category(
        category='Miscellaneous'
    )

    db.session.add(cat1)
    db.session.add(cat2)
    db.session.add(cat3)
    db.session.add(cat4)
    db.session.add(cat5)
    db.session.add(cat6)
    db.session.add(cat7)

    db.session.commit()

def undo_users():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
