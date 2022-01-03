import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import style from './ProfileComments.module.css';
import CreateComment from "../CreateComment";
import EditComment from "../EditComment";
import DeleteComment from "../DeleteComment";

import * as commentActions from '../../store/comments';

export default function ProfileComments({ projectId }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const commentsObj = useSelector(state => state.comments.all);
    const comments = Object.values(commentsObj);
    console.log('comments bruh', comments);

    const [createComment, setCreateComment] = useState(false);
    const [editComment, setEditComment] = useState(false);
    const [deleteComment, setDeleteComment] = useState(false);
    const [currentComment, setCurrentComment] = useState('');
    const [currentCommentId, setCurrentCommentId] = useState('');

    useEffect(() => {
        dispatch(commentActions.getCommentsThunk(projectId));
    }, [dispatch, projectId]);

    return (
        <>
            { createComment && (
                <CreateComment
                    projectId={projectId}
                    setCreateComment={setCreateComment}
                />
            )}
            { editComment && (
                <EditComment
                    projectId={projectId}
                    setEditComment={setEditComment}
                    currentCommentId={currentCommentId}
                    currentComment={currentComment}
                />
            )}
            { deleteComment && (
                <DeleteComment
                    setDeleteComment={setDeleteComment}
                    currentComment={currentComment}
                    currentCommentId={currentCommentId}
                />
            )}
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
                                { user?.id === comment.user_id ?
                                    <>
                                        <div
                                            className={style.profileCommentsEdit}
                                            onClick={() => {
                                                setEditComment(true)
                                                setCurrentComment(comment.content)
                                                setCurrentCommentId(comment.id)
                                            }}
                                        >
                                            Edit
                                        </div>
                                        <div
                                            className={style.profileCommentsDelete}
                                            onClick={() => {
                                                setCurrentCommentId(comment.id)
                                                setDeleteComment(true)
                                            }}
                                        >
                                            Delete
                                        </div>
                                    </>
                                : null}
                            </div>
                        </div>
                    )) : null }
                    { user ?
                        <div
                            className={style.profileCommentsCreate}
                            onClick={() => setCreateComment(true)}
                        >
                            Add a Comment
                        </div>
                    : null}
                </div>
            </div>
        </>
    )
}
