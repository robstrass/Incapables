import React from 'react';
import { useSelector } from 'react-redux';

import style from './HomePage.module.css';

export default function HomePage() {
    const user = useSelector(state => state.session.user)

    return (
        <div className={style.homeContainer}>
            <div className={style.homeFeatured}>
                Featured Projects
            </div>
            <div className={style.homeInfoContainer}>
                <div className={style.homeInfoSingleDiv}>
                    <h2 className={style.homeInfoTitle}>
                        STEP-BY-STEP
                    </h2>
                    <p className={style.homeInfoContent}>
                        Content
                    </p>
                </div>
                <div className={style.homeInfoSingleDiv}>
                    <h2 className={style.homeInfoTitle}>
                        CURATED BY YOUR PEERS
                    </h2>
                    <p className={style.homeInfoContent}>
                        Content
                    </p>
                </div>
                <div className={style.homeInfoSingleDiv}>
                    <h2 className={style.homeInfoTitle}>
                        FAMILY FRIENDLY
                    </h2>
                    <p className={style.homeInfoContent}>
                        Content
                    </p>
                </div>
            </div>
        </div>
    )
}
