import react from 'react';

import Footer from '../Footer';
import style from './HomePage.module.css';

export default function Help() {
    return (
        <div className={style.helpPageContainer}>
            <div className={style.helpPageWrapper}>
                <h2 className={style.helpPageTitle}>
                    Help Center
                </h2>
            </div>
        </div>
    )
}
