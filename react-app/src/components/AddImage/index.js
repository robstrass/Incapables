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
        if (imageContent.length > 250) validateErrors.push('content : Your description is too long.');

        return validateErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validate();

        if (errors && errors.length > 0) {
            return setErrors(errors);
        }

        const formData = new FormData();

        formData.append('content', imageContent);
        formData.append('image', imageFile);
        formData.append('projectId', projectId);

        await dispatch(imageActions.postImageThunk(formData));
        setErrors([]);
        setImageContent('');
        setImageFile('');
        setImagePreview('');
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
                        <div className={style.addImageError}>
                        {errors.length > 0 &&
                            errors.map((error) => error.includes("image"))
                                ? errors.map((error) =>
                                    error.includes("image")
                                    ? `${error.split(":")[1]}`
                                    : null
                                )
                                : null}
                        </div>
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
                    <div className={style.addImageError}>
                    {errors.length > 0 &&
                        errors.map((error) => error.includes("content"))
                            ? errors.map((error) =>
                                error.includes("content")
                                ? `${error.split(":")[1]}`
                                : null
                            )
                            : null}
                    </div>
                    <textarea
                        className={style.addImageTextArea}
                        placeholder='Add a step...'
                        value={imageContent}
                        onChange={(e) => setImageContent(e.target.value)}
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
