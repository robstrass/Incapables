import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import style from './DeleteImage.module.css';
import * as imageActions from '../../store/images'

export default function DeleteImage({ setDeleteImageModal, imageId, project }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    console.log('imageId xxxxxxx', imageId)
    const handleSubmit = async (e) => {
        if (user.id === project.user_id) {
            await dispatch(imageActions.deleteImageThunk(imageId));
            setDeleteImageModal(false);
        }
    }

    return (
        <>
            <div
                className={style.deleteImageBackground}
                onClick={() => setDeleteImageModal(false)}
            >
            </div>
            <div className={style.deleteImageContainer}>
                <h3 className={style.deleteImageTitle}>
                    Are you sure?
                </h3>
                <div className={style.deleteImageButtons}>
                    <div
                        className={style.deleteImageSubmit}
                        onClick={handleSubmit}
                    >
                        Confirm
                    </div>
                    <div
                        className={style.deleteImageCancel}
                        onClick={() => setDeleteImageModal(false)}
                    >
                        Cancel
                    </div>
                </div>
            </div>
        </>
    )
}
