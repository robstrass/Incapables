import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import style from './AddImage.module.css';

export default function AddImage() {
    const dispatch = useDispatch();

    const [imageFile, setImageFile] = useState('');
    const [savedImageFile, setSavedImageFile] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [oldImagePreview, setImagePreview] = useState('');

    return (
        <div className={style.addImageContainer}>
            <form
                className={style.addImageForm}
            >
                <h2 className={style.addImageTitle}>
                    Add a Step
                </h2>
                <div className={style.addImageInputDiv}>
                    <label
                        className={style.addImageLabel}
                        htmlFor='addImageFile'
                    >
                        <span className="material-icons">
                            cloud_upload
                        </span>
                    </label>
                    <input
                        className={style.addImageInput}
                        id='addImageFile'
                        type='file'
                        accept='.jpg, .jpeg, .png, .gif'
                    />
                </div>
                <div className={style.addImageInputDiv}>
                    <label
                        className={style.addImageLabel}
                        htmlFor='addImageContent'
                    >
                        Add Step Instructions
                    </label>
                    <textarea
                        className={style.addImageTextArea}
                        placeholder='Add a step...'
                    />
                </div>
            </form>
        </div>
    )
}
