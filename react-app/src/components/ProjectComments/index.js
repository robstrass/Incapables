import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import style from './ProjectComments.module.css';
import CreateComment from "../CreateComment";
import EditComment from "../EditComment";
import DeleteComment from "../DeleteComment";

import * as commentActions from '../../store/comments';

export default function ProfileComments({ projectId }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);
    const commentsObj = useSelector(state => state.comments.all);
    const comments = Object.values(commentsObj);

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
            <div className={style.projectCommentsContainer}>
                <div className={style.projectCommentsHolder}>
                    <h2 className={style.projectCommentsTitle}>
                        { comments ? `${comments.length} Comments` : '0 Comments'}
                    </h2>
                    { comments ? comments?.map(comment => (
                        <div
                            key={comment.id}
                            className={style.projectCommentsDiv}
                        >
                            <h4 className={style.projectCommentsAuthor}>
                                {comment.author?.username} says:
                            </h4>
                            <p className={style.projectCommentsContent}>
                                {comment.content}
                            </p>
                            <div className={style.projectCommentsButtons}>
                                { user?.id === comment.user_id ?
                                    <>
                                        <div
                                            className={style.projectCommentsEdit}
                                            onClick={() => {
                                                setEditComment(true)
                                                setCurrentComment(comment.content)
                                                setCurrentCommentId(comment.id)
                                            }}
                                        >
                                            Edit
                                        </div>
                                        <div
                                            className={style.projectCommentsDelete}
                                            onClick={() => {
                                                setCurrentCommentId(comment.id)
                                                setDeleteComment(true)
                                                setCurrentComment(comment)
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
                            className={style.projectCommentsCreate}
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
