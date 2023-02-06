import react from 'react';

import Footer from '../Footer';
import style from './HomePage.module.css';

export default function Help() {
    return (
        <>
            <div className={style.aboutUsContainer}>
                <div className={style.aboutUsWrapper}>
                    <div className={style.aboutUsTitleWrapper}>
                        <h2 className={style.helpPageTitle}>
                            Help Center
                        </h2>
                        <p className={style.helpUsParagraph}>
                            Writing a good incapable is a lot easier than you think! Take
                            a look at some of the incapables already written on the site
                            to get a feel for how things are written. Those will give you
                            a good idea for how to create a good incapable.

                            With so many incapables being created on the site all the time,
                            you should have plenty of ideas on what to do to get started on
                            your very own incapable.
                        </p>
                    </div>
                    <div className={style.aboutUsStoryWrapper}>
                        <h3 className={style.aboutUsStoryTitle}>How to Write an Incapable</h3>
                        <p className={style.helpPageStory}>
                            To start a new Incapable, go to the Publish button in the main
                            navigation bar at the top of the site. Once there, click "Log In"
                            or "Sign Up" if you don't have an account.<br></br>

                            You need to be a member of Incapables to author your own Incapable.
                            If you aren't already a member, feel free to sign up and join the
                            community. It's 100% free to join!
                        </p>
                        <p className={style.helpPageStory}>
                            Once you begin your Incapable, the first step is to name it. You'll
                            want your name to be simple, clear, and descriptive so others
                            will be able to identify exactly what your Incapable is about.<br></br>

                            Next, you'll want to give your incapable a brief description so
                            community members can see what your project is about. This will
                            help others get an idea of what your incapable does.<br></br>

                            Finally, you'll want to select a topic category for your incapable.
                            Categories help other members of the community find incapables that
                            they're interested in. Each project can only have one category,
                            so choose the category that best fits your incapable.
                        </p>
                        <p className={style.helpPageStory}>
                            After you've finished with those first steps, just press "Start
                            Incapable", and you'll be well on your way to creating your first
                            Incapable! Congratulations, and welcome to the Incapables community.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
