import Footer from "../Footer";
import style from "./HomePage.module.css";

import { COPY } from "../../shared/copyConstants";

export default function Help() {
  return (
    <>
      <div className={style.aboutUsContainer}>
        <div className={style.aboutUsWrapper}>
          <div className={style.aboutUsTitleWrapper}>
            <h2 className={style.helpPageTitle}>{COPY.HELP_CENTER}</h2>
            <p className={style.helpUsParagraph}>
              {COPY.HELP_CENTER_PARAGRAPH}
            </p>
          </div>
          <div className={style.aboutUsStoryWrapper}>
            <h3 className={style.aboutUsStoryTitle}>
              {COPY.HOW_TO_WRITE_INCAPABLE}
            </h3>
            <p className={style.helpPageStory}>
              {COPY.HOW_TO_WRITE_INCAPABLE_PARAGRAPH_1}
            </p>
            <p className={style.helpPageStory}>
              {COPY.HOW_TO_WRITE_INCAPABLE_PARAGRAPH_2}
            </p>
            <p className={style.helpPageStory}>
              {COPY.HOW_TO_WRITE_INCAPABLE_PARAGRAPH_3}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
