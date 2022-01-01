import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import style from './EditImage.module.css';
import header from '../../assets/Instructables-Create-Header.png';
import { editImageThunk } from '../../store/images';

export default function EditImage({ setEditImageModal, projectId, imageId, oldImageContent }) {
    const dispatch = useDispatch();

    const [imageFile, setImageFile] = useState('');
    const [savedImageFile, setSavedImageFile] = useState('');
    const [imagePreview, setImagePreview] = useState('');
    const [savedImagePreview, setSavedImagePreview] = useState('');
    const [imageContent, setImageContent] = useState(oldImageContent);
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

    const handleSubmit = async (e) => {
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
        formData.append('imageId', imageId)

        await dispatch(editImageThunk(formData));
        setErrors([]);
        setImageContent('');
        setImageFile('');
        setImagePreview('');

        setEditImageModal(false);
    }

    return (
        <>
            <div
                className={style.editImageBackground}
                onClick={() => setEditImageModal(false)}
            ></div>
            <div className={style.editImageContainer}>
                <form
                    className={style.editImageForm}
                    onSubmit={handleSubmit}
                >
                    <h2 className={style.editImageTitle}>
                        Edit Step
                    </h2>
                    <div className={style.editImageInputDiv}>
                        <label
                            className={style.editImageLabel}
                            htmlFor='editImageFile'
                        >
                            {imagePreview ?
                            <img
                                src={imagePreview}
                                className={style.editImagePreview}
                            />
                            : <span className="material-icons addImagePreviewSpan"
                                style={{'fontSize':'48px'}}
                            >
                                cloud_upload
                            </span>}
                            <div className={style.editImageError}>
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
                            className={style.editImageInput}
                            id='addImageFile'
                            type='file'
                            accept='.jpg, .jpeg, .png, .gif'
                            onChange={setImage}
                        />
                    </div>
                    <div className={style.editImageInputDiv}>
                    <div className={style.editImageError}>
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
                            className={style.editImageTextArea}
                            value={imageContent}
                            onChange={(e) => setImageContent(e.target.value)}
                        />
                    </div>
                    <button className={style.editImageButton}>
                        Edit Step
                    </button>
                </form>
            </div>
        </>
    )
}
