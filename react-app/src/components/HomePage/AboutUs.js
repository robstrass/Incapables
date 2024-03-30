import React from "react";

import style from "./HomePage.module.css";
import Footer from "../Footer";

import { COPY } from "../../shared/copyConstants";

export default function AboutUs() {
  return (
    <>
      <div className={style.aboutUsContainer}>
        <div className={style.aboutUsWrapper}>
          <div className={style.aboutUsTitleWrapper}>
            <h2 className={style.aboutUsTitle}>{COPY.ABOUT_US}</h2>
            <div className={style.aboutUsVideoContainer}>
              <iframe
                width="776"
                height="436"
                src="https://www.youtube.com/embed/k12h_FOInZg"
                title="Instructables - Explore. Share. Make."
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className={style.aboutUsStoryWrapper}>
            <h3 className={style.aboutUsStoryTitle}>{COPY.OUR_STORY}</h3>
            <p className={style.aboutUsStoryParagraph}>
              {COPY.OUR_STORY_PARAGRAPH}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
