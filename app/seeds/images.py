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

    img1 = Image(
        project_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632018/olive-oil_tjuhn2.jpg',
        content='''
            Stop wasting your time picking up synthetic
            and grab yourself some all natural olive oil.
            Not only is it cheaper, but who doesn't love
            non-processed oil?
        '''
    )

    img1 = Image(
        project_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632285/birb-feeder_fqotbb.jpg',
        content='''
            Many people have their bird feeders locked away
            so that the seeds are only able to be accessed
            by birds. This is wrong in so many ways.
        '''
    )

    img1 = Image(
        project_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632292/squirrel-feeder_jxdgjq.jpg',
        content='''
            Bird feeders need to be open like this so that
            it's fair for the other animals. Don't play
            favorites with nature.
        '''
    )

    img1 = Image(
        project_id=3,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632823/windex_oq8lry.jpg',
        content='''
            Windex is the go to window cleaner for obvious reasons.
            It gets the job done, but one problem common across
            all households is the streaks left behind.
        '''
    )

    img1 = Image(
        project_id=3,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632818/broken-window_e5nhwg.jpg',
        content='''
            You can solve your streaky windows by simply taking the
            largest stone you can find and throwing it through the
            window. Boom, no more streaks. You're welcome.
        '''
    )

    img1 = Image(
        project_id=4,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639633709/spaghetti_dnzwu2.jpg',
        content='''
            Making spaghetti is fairly trivial, but often done
            wrong. Cooking your pasta too long can turn a
            classic dish into a disaster.
        '''
    )

    img1 = Image(
        project_id=4,
        image='',
        content='''
            To prevent overcooking, don't even bother boiling
            your water. Place your noodles in the pot while you
            cook your sauce and meat, then when you're done,
            simply remove the noodles and pour your sauce over
            them. 
        '''
    )
