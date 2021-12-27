import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import style from './DeleteImage.module.css';
import * as imageActions from '../../store/images'

export default function DeleteImage({ setDeleteImageModal, projectId }) {
    const dispatch = useDispatch();

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
                        onClick={() => console.log('hello')}
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
