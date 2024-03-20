import style from "./HomePage.module.css";

import { COPY } from "../../shared/copyConstants";

export default function HomePageInfo() {
  const homeInfo = [
    [COPY.STEP_BY_STEP, COPY.HOMEPAGE_1],
    [COPY.CURATED_BY_YOUR_PEERS, COPY.HOMEPAGE_2],
    [COPY.FAMILY_FRIENDLY, COPY.HOMEPAGE_3],
  ];

  return (
    <>
      {homeInfo.map(info => (
        <div className={style.homeInfoSingleDiv}>
          <h2 className={style.homeInfoTitle}>{info[0]}</h2>
          <p className={style.homeInfoContent}>{info[1]}</p>
        </div>
      ))}
    </>
  );
}
