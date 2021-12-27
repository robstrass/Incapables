import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import style from './AddImage.module.css';
import * as imageActions from '../../store/images';

export default function AddImage() {
    const dispatch = useDispatch();
    const { projectId } = useParams();

    const [imageFile, setImageFile] = useState('');
    const [savedImageFile, setSavedImageFile] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [savedImagePreview, setSavedImagePreview] = useState('');
    const [imageContent, setImageContent] = useState('');
    const [errors, setErrors] = useState('');

    const setImage = (e) => {
        let file = e.target.files[0];

        setImageFile(e.target.files[0]);
        if (file) {
            setSavedImageFile(file);

            file = URL.createObjectURL(file);
            setImagePreview(file);
            setSavedImagePreview(file)
        } else {
            setImageFile(savedImageFile);
            setImagePreview(savedImagePreview);
        }
    }

    const validate = () => {
        const validateErrors = [];

        if (!imageFile) validateErrors.push('image : Please select an image.');
        if (!imageContent) validateErrors.push('content : Please explain your step.');

        return validateErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validate();

        if (errors && errors.length > 0) {
            console.log(errors)
            return setErrors(errors);
        }

        const formData = new FormData();

        formData.append('content', imageContent);
        formData.append('image', imageFile);
        formData.append('projectId', projectId);

    }

    return (
        <div className={style.addImageContainer}>
            <form
                className={style.addImageForm}
                onSubmit={handleSubmit}
            >
                <h2 className={style.addImageTitle}>
                    Add a Step
                </h2>
                <div className={style.addImageInputDiv}>
                    <label
                        className={style.addImageLabel}
                        htmlFor='addImageFile'
                    >
                        {imagePreview ?
                        <img
                            src={imagePreview}
                            className={style.addImagePreview}
                        />
                        : <span className="material-icons addImagePreviewSpan"
                            style={{'fontSize':'48px'}}
                        >
                            cloud_upload
                        </span>}
                    </label>
                    <input
                        className={style.addImageInput}
                        id='addImageFile'
                        type='file'
                        accept='.jpg, .jpeg, .png, .gif'
                        onChange={setImage}
                    />
                </div>
                <div className={style.addImageInputDiv}>
                    <textarea
                        className={style.addImageTextArea}
                        placeholder='Add a step...'
                    />
                </div>
                <button
                    className={style.addImageButton}
                >
                    Add Step
                </button>
            </form>
        </div>
    )
}
