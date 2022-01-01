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

    img15 = Image(
        project_id=8,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632018/olive-oil_tjuhn2.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img16 = Image(
        project_id=8,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632019/oil-pressure_f6w7ve.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img17 = Image(
        project_id=9,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632292/squirrel-feeder_jxdgjq.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img18 = Image(
        project_id=9,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632285/birb-feeder_fqotbb.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img19 = Image(
        project_id=10,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632818/broken-window_e5nhwg.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img20 = Image(
        project_id=10,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632823/windex_oq8lry.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img21 = Image(
        project_id=11,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639633704/uncooked-spaghetti_qezw8p.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img22 = Image(
        project_id=11,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639633709/spaghetti_dnzwu2.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img23 = Image(
        project_id=12,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901499/weed-wacker_x1qcfb.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img24 = Image(
        project_id=12,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901504/small-plants_vifowb.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img25 = Image(
        project_id=13,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901476/messy-shed_dgsvl4.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img26 = Image(
        project_id=13,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901463/clean-shed_kp24me.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img27 = Image(
        project_id=14,
        user_id=3,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901476/lego-cluster_eno66y.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img28 = Image(
        project_id=14,
        user_id=3,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901462/built-lego_shlz3p.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img29 = Image(
        project_id=15,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632019/oil-pressure_f6w7ve.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img30 = Image(
        project_id=15,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632018/olive-oil_tjuhn2.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img31 = Image(
        project_id=16,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632285/birb-feeder_fqotbb.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img32 = Image(
        project_id=16,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632292/squirrel-feeder_jxdgjq.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img33 = Image(
        project_id=17,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632823/windex_oq8lry.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img34 = Image(
        project_id=17,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632818/broken-window_e5nhwg.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img35 = Image(
        project_id=18,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639633709/spaghetti_dnzwu2.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img36 = Image(
        project_id=18,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639633704/uncooked-spaghetti_qezw8p.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img37 = Image(
        project_id=19,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901504/small-plants_vifowb.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img38 = Image(
        project_id=19,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901499/weed-wacker_x1qcfb.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img39 = Image(
        project_id=20,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901463/clean-shed_kp24me.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img40 = Image(
        project_id=20,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901476/messy-shed_dgsvl4.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img41 = Image(
        project_id=21,
        user_id=3,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901462/built-lego_shlz3p.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img42 = Image(
        project_id=21,
        user_id=3,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901476/lego-cluster_eno66y.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img43 = Image(
        project_id=22,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632018/olive-oil_tjuhn2.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img44 = Image(
        project_id=22,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632019/oil-pressure_f6w7ve.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img45 = Image(
        project_id=23,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632292/squirrel-feeder_jxdgjq.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img46 = Image(
        project_id=23,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632285/birb-feeder_fqotbb.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img47 = Image(
        project_id=24,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632818/broken-window_e5nhwg.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img48 = Image(
        project_id=24,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639632823/windex_oq8lry.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img49 = Image(
        project_id=25,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639633704/uncooked-spaghetti_qezw8p.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img50 = Image(
        project_id=25,
        user_id=1,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1639633709/spaghetti_dnzwu2.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img51 = Image(
        project_id=26,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901499/weed-wacker_x1qcfb.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img52 = Image(
        project_id=26,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901504/small-plants_vifowb.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img53 = Image(
        project_id=27,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901476/messy-shed_dgsvl4.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img54 = Image(
        project_id=27,
        user_id=2,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901463/clean-shed_kp24me.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img55 = Image(
        project_id=28,
        user_id=3,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901476/lego-cluster_eno66y.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
        '''
    )

    img56 = Image(
        project_id=28,
        user_id=3,
        image='https://res.cloudinary.com/depdd11lz/image/upload/v1640901462/built-lego_shlz3p.jpg',
        content='''
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
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
    db.session.add(img15)
    db.session.add(img16)
    db.session.add(img17)
    db.session.add(img18)
    db.session.add(img19)
    db.session.add(img20)
    db.session.add(img21)
    db.session.add(img22)
    db.session.add(img23)
    db.session.add(img24)
    db.session.add(img25)
    db.session.add(img26)
    db.session.add(img27)
    db.session.add(img28)
    db.session.add(img29)
    db.session.add(img30)
    db.session.add(img31)
    db.session.add(img32)
    db.session.add(img33)
    db.session.add(img34)
    db.session.add(img35)
    db.session.add(img36)
    db.session.add(img37)
    db.session.add(img38)
    db.session.add(img39)
    db.session.add(img40)
    db.session.add(img41)
    db.session.add(img42)
    db.session.add(img43)
    db.session.add(img44)
    db.session.add(img45)
    db.session.add(img46)
    db.session.add(img47)
    db.session.add(img48)
    db.session.add(img49)
    db.session.add(img50)
    db.session.add(img51)
    db.session.add(img52)
    db.session.add(img53)
    db.session.add(img54)
    db.session.add(img55)
    db.session.add(img56)


    db.session.commit()

def undo_images():
    db.session.execute('TRUNCATE images RESTART IDENTITY CASCADE;')
    db.session.commit()
