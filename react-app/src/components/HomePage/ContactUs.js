import react from "react";

import Footer from "../Footer";
import style from "./HomePage.module.css";

import { COPY } from "../../shared/copyConstants";

export default function ContactUs() {
  return (
    <>
      <div className={style.contactContainer}>
        <div className={style.contactWrapper}>
          <h1 className={style.contactHeader}>{COPY.CONTACT_US}</h1>
          <h4 className={style.contactMiniHeader}>{COPY.BUSINESS_HOURS}</h4>
          <p className={style.contactParagraph}>{COPY.HOURS}</p>
          <p className={style.contactParagraph}>{COPY.WORK}</p>
          <h4 className={style.contactMiniHeader}>{COPY.GENERAL_INQUIRIES}</h4>
          <p className={style.contactParagraph}>{COPY.EMAIL}</p>
          <h4 className={style.contactMiniHeader}>{COPY.TRADEMARK}</h4>
          <p className={style.contactParagraph}>{COPY.TRADEMARK_PARAGRAPH}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
