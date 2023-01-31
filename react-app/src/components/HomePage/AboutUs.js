import React from 'react';

import style from './HomePage.module.css';

export default function AboutUs() {
    return (
        <div className={style.aboutUsContainer}>
            <div className={style.aboutUsWrapper}>
                <div className={style.aboutUsTitleWrapper}>
                    <h2 className={style.aboutUsTitle}>INCAPABLES IS A PLACE THAT LETS YOU EXPLORE, DOCUMENT, AND SHARE YOUR CREATIONS.</h2>
                    <div className={style.aboutUsVideoContainer}>
                        <iframe
                            width="776" height="436"
                            src="https://www.youtube.com/embed/k12h_FOInZg"
                            title="Instructables - Explore. Share. Make." frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
                <div className={style.aboutUsStoryWrapper}>
                    <h3 className={style.aboutUsStoryTitle}>Our Story</h3>
                    <p className={style.aboutUsStoryParagraph}>
                        Incapables was created by Rob Strasser as a spinoff of the popular DIY website
                        Instructables, where users can create step by step guides for activities, crafts,
                        hobbies, etc. Instead of making a direct clone, Rob wanted to key into his sarcastic
                        sense of humor and make this the opposite -- instead of helpful DIY guides,
                        Incapables serves as an anti guide, purposely, sometimes even hyperbolically,
                        incorrect instructions for said activities.

                        Incapables served as Rob's capstone project, marking the completion of his 6-month immersive
                        web development bootcamp. In this fullstack project, Rob utilized all the skills and knowledge
                        he picked up, both from working on other solo projects, and collaborating with colleagues.
                        This project utilizes a React and JavaScript front end, with Redux for state storage, and a
                        backend written in Python, with Flask, SQLAlchemy, and Amazon's S3 buckets for image storage. 
                    </p>
                </div>
            </div>
        </div>
    )
}
