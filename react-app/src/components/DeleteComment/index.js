import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import style from './DeleteComment.module.css';
import { deleteCommentThunk } from '../../store/comments';

export default function DeleteComment({ setDeleteComment, currentCommentId, currentComment }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const handleSubmit = async (e) => {
        if (user.id === currentComment.user_id) {
            const commentId = currentCommentId
            await dispatch(deleteCommentThunk(commentId));
            setDeleteComment(false);
        }
    }

    return (
        <>
            <div
                className={style.deleteCommentBackground}
                onClick={() => setDeleteComment(false)}
            ></div>
            <div className={style.deleteCommentContainer}>
                <h3 className={style.deleteCommentTitle}>
                    Permanently delete?
                </h3>
                <div className={style.deleteCommentButtons}>
                    <div
                        className={style.deleteCommentSubmit}
                        onClick={handleSubmit}
                    >
                        Confirm
                    </div>
                    <div
                        className={style.deleteCommentCancel}
                        onClick={() => setDeleteComment(false)}
                    >
                        Cancel
                    </div>
                </div>
            </div>
        </>
    )
}
