import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import style from './ProfileComments.module.css';
import * as commentActions from '../../store/comments';

export default function ProfileComments({ projectId }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const commentsObj = useSelector(state => state.comments.all);
    const comments = Object.values(commentsObj);
    console.log('comments bruh', comments);

    useEffect(() => {
        dispatch(commentActions.getCommentsThunk(projectId));
    }, [dispatch, projectId]);

    return (
        <div className={style.profileCommentsContainer}>
            <div className={style.profileCommentsHolder}>
                <h2 className={style.profileCommentsTitle}>
                    { comments ? `${comments.length} Comments` : '0 Comments'}
                </h2>
                { comments ? comments?.map(comment => (
                    <div
                        key={comment.id}
                        className={style.profileCommentsDiv}
                    >
                        <h4 className={style.profileCommentsAuthor}>
                            {comment.author?.username} says:
                        </h4>
                        <p className={style.profileCommentsContent}>
                            {comment.content}
                        </p>
                        <div className={style.profileCommentsButtons}>
                            <div className={style.profileCommentsEdit}>
                                Edit
                            </div>
                            <div className={style.profileCommentsDelete}>
                                Delete
                            </div>
                        </div>
                    </div>
                )) : null }
            </div>
        </div>
    )
}
