import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/headless-robo-tr.png';
import style from './Footer.module.css';

export default function Footer () {
    return (
        <footer className={style.homeFooter}>
            <div className={style.footerCategoriesContainer}>
                <div className={style.footerRobot}>
                    <img src={logo} className={style.footerRobotLogo} />
                </div>
                <div className={style.footerCategoriesWrapper}>
                    <h3 className={style.footerHeaders}>
                        Categories
                    </h3>
                    <ul className={style.footerCategories}>
                        <li>
                            <NavLink
                                className={style.footerCategoryOptions}
                                to={'/categories/1'}
                            >Workshop</NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={style.footerCategoryOptions}
                                to={'/categories/2'}
                            >Gardening</NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={style.footerCategoryOptions}
                                to={'/categories/3'}
                            >Living</NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={style.footerCategoryOptions}
                                to={'/categories/4'}
                            >Outside</NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={style.footerCategoryOptions}
                                to={'/categories/5'}
                            >Craft</NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={style.footerCategoryOptions}
                                to={'/categories/6'}
                            >Cooking</NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={style.footerCategoryOptions}
                                to={'/categories/7'}
                            >Miscellaneous</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.homeAboutContainer}>
                <div className={style.footerAboutUs}>
                    <h3 className={style.footerHeaders}>About Us</h3>
                    <div className={style.footerAboutUsContainer}>
                        <NavLink
                            className={style.footerAboutUs}
                            to={'/about'}
                        >Who We Are</NavLink>
                        <div>Why Publish?</div>
                    </div>
                </div>
                <div className={style.footerResources}>
                    <h3 className={style.footerHeaders}>Resources</h3>
                    <div className={style.footerResourcesContainer}>
                        <div>Help</div>
                        <div>Contact</div>
                    </div>
                </div>
                <div className={style.footerFindUs}>
                    <h3 className={style.footerHeaders}>
                        Find Us
                    </h3>
                    <div className={style.footerFindUsContainer}>
                        <a
                            className={style.footerFindUsLink}
                            href='https://www.linkedin.com/in/robstrasser-'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                src={'https://i.ibb.co/ZmrdqsC/linkedin.png'}
                                className={style.footerFindUsImg}
                            />
                        </a>
                        <a
                            className={style.footerFindUsLink}
                            href='https://github.com/robstrass'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <img
                                src={'https://i.ibb.co/b2ZmRL8/github.png'}
                                className={style.footerFindUsImg}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
