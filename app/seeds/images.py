from app.models import db, Image

def seed_images():
    img1 = Image(
        project_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632019/oil-pressure_f6w7ve.jpg',
        content='''
            Cars need oil changes regularly. Every 20-30k
            miles, you should be changing that oil to keep
            things running smooth and crisp.
        '''
    )

    img2 = Image(
        project_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632018/olive-oil_tjuhn2.jpg',
        content='''
            Stop wasting your time picking up synthetic
            and grab yourself some all natural olive oil.
            Not only is it cheaper, but who doesn't love
            non-processed oil?
        '''
    )

    img3 = Image(
        project_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632285/birb-feeder_fqotbb.jpg',
        content='''
            Many people have their bird feeders locked away
            so that the seeds are only able to be accessed
            by birds. This is wrong in so many ways.
        '''
    )

    img4 = Image(
        project_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632292/squirrel-feeder_jxdgjq.jpg',
        content='''
            Bird feeders need to be open like this so that
            it's fair for the other animals. Don't play
            favorites with nature.
        '''
    )

    img5 = Image(
        project_id=3,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632823/windex_oq8lry.jpg',
        content='''
            Windex is the go to window cleaner for obvious reasons.
            It gets the job done, but one problem common across
            all households is the streaks left behind.
        '''
    )

    img6 = Image(
        project_id=3,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632818/broken-window_e5nhwg.jpg',
        content='''
            You can solve your streaky windows by simply taking the
            largest stone you can find and throwing it through the
            window. Boom, no more streaks. You're welcome.
        '''
    )

    img7 = Image(
        project_id=4,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639633709/spaghetti_dnzwu2.jpg',
        content='''
            Making spaghetti is fairly trivial, but often done
            wrong. Cooking your pasta too long can turn a
            classic dish into a disaster.
        '''
    )

    img8 = Image(
        project_id=4,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639633704/uncooked-spaghetti_qezw8p.jpg',
        content='''
            To prevent overcooking, don't even bother boiling
            your water. Place your noodles in the pot while you
            cook your sauce and meat, then when you're done,
            simply remove the noodles and pour your sauce over
            them.
        '''
    )

    db.session.add(img1)
    db.session.add(img2)
    db.session.add(img3)
    db.session.add(img4)
    db.session.add(img5)
    db.session.add(img6)
    db.session.add(img7)
    db.session.add(img8)

    db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
