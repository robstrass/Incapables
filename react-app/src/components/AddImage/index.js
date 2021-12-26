import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import style from './AddImage.module.css';

export default function AddImage() {
    const dispatch = useDispatch();

    const [imageModal, setImageModal] = useState(false);

    return (
        <div className={style.addImageContainer}>
            <div>henlo</div>
        </div>
    )
}
