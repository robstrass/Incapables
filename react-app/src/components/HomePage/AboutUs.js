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
                    <h3>Our Story</h3>
                    <p className={style.aboutUsStoryParagraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim nec enim
                        sit amet feugiat. Integer commodo aliquam tempor. Suspendisse mattis rhoncus fringilla.
                        Proin quis magna sit amet massa rhoncus maximus eget nec purus. Pellentesque accumsan
                        elementum tortor vitae aliquam. Quisque accumsan, massa sit amet imperdiet egestas,
                        purus libero imperdiet ante, a efficitur leo dui ac tellus. Praesent ac maximus risus,
                        vitae gravida nibh. Sed ullamcorper, nunc vel viverra ultrices, nibh tortor cursus massa,
                        at elementum nibh nulla sit amet risus. Nam fermentum magna et imperdiet viverra. Duis
                        blandit posuere quam, quis tincidunt sem viverra ac. Donec euismod, nisl ac euismod
                        scelerisque, nunc lacus dictum enim, ac faucibus dolor nulla quis est. Pellentesque
                        maximus felis et fringilla mattis. Morbi aliquet dolor justo, quis convallis lectus
                        placerat in. Aliquam erat volutpat.
                    </p>
                </div>
            </div>
        </div>
    )
}
