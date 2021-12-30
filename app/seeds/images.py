from app.models import db, Image

def seed_images():
    img1 = Image(
        project_id=1,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632019/oil-pressure_f6w7ve.jpg',
        content='''
            Cars need oil changes regularly. Every 20-30k
            miles, you should be changing that oil to keep
            things running smooth and crisp.
        '''
    )

    img2 = Image(
        project_id=1,
        user_id=1,
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
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632285/birb-feeder_fqotbb.jpg',
        content='''
            Many people have their bird feeders locked away
            so that the seeds are only able to be accessed
            by birds. This is wrong in so many ways.
        '''
    )

    img4 = Image(
        project_id=2,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632292/squirrel-feeder_jxdgjq.jpg',
        content='''
            Bird feeders need to be open like this so that
            it's fair for the other animals. Don't play
            favorites with nature.
        '''
    )

    img5 = Image(
        project_id=3,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632823/windex_oq8lry.jpg',
        content='''
            Windex is the go to window cleaner for obvious reasons.
            It gets the job done, but one problem common across
            all households is the streaks left behind.
        '''
    )

    img6 = Image(
        project_id=3,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632818/broken-window_e5nhwg.jpg',
        content='''
            You can solve your streaky windows by simply taking the
            largest stone you can find and throwing it through the
            window. Boom, no more streaks. You're welcome.
        '''
    )

    img7 = Image(
        project_id=4,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639633709/spaghetti_dnzwu2.jpg',
        content='''
            Making spaghetti is fairly trivial, but often done
            wrong. Cooking your pasta too long can turn a
            classic dish into a disaster.
        '''
    )

    img8 = Image(
        project_id=4,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639633704/uncooked-spaghetti_qezw8p.jpg',
        content='''
            To prevent overcooking, don't even bother boiling
            your water. Place your noodles in the pot while you
            cook your sauce and meat, then when you're done,
            simply remove the noodles and pour your sauce over
            them.
        '''
    )

    img9 = Image(
        project_id=5,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901504/small-plants_vifowb.jpg',
        content='''
            The first step to any good garden is to make sure
            the soil has proper nutrients. Once you've determined
            your soil is good, plant your seeds in rows.
        '''
    )

    img10 = Image(
        project_id=5,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901499/weed-wacker_x1qcfb.jpg',
        content='''
            Once your new plants start to sprout, wait a few weeks
            until they start growing vertically. Once they're at least
            6 inches off the ground, take your weed wacker through the
            rows of plants you made previously.
        '''
    )

    img11 = Image(
        project_id=6,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901463/clean-shed_kp24me.jpg',
        content='''
            There is nothing worse than a cluttered shed. What
            better way to keep things right where you need them
            than on shelves along the wall?
        '''
    )

    img12 = Image(
        project_id=6,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901476/messy-shed_dgsvl4.jpg',
        content='''
            The problem with having organized shelves is that
            stuff is always out of reach. And not to mention,
            that means lots of clean-up. No thanks, just throw
            it close to your workstation, like so.
        '''
    )

    img13 = Image(
        project_id=7,
        user_id=3,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901462/built-lego_shlz3p.jpg',
        content='''
            When looking for something to do with your kid,
            Legos are often a great choice. You can build
            almost anything out of them, and boys especially
            love them.
        '''
    )

    img14 = Image(
        project_id=7,
        user_id=3,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901476/lego-cluster_eno66y.jpg',
        content='''
            Unfortunately, Legos don't look very good with the
            colors all mixed together. If you have mix-matched
            Lego creations, take them and throw them on the floor
            until they all break apart into a nice pile.
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
    db.session.add(img9)
    db.session.add(img10)
    db.session.add(img11)
    db.session.add(img12)
    db.session.add(img13)
    db.session.add(img14)


    db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
