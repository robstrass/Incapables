import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import style from './CreateComment.module.css';
import { postCommentThunk } from "../../store/comments";

export default function CreateComment({ projectId, setCreateComment }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);

    const validate = () => {
        const validation = [];
        if (!content) validation.push('Your comment is empty.')

        return validation;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const errors = validate();

        if (errors && errors.length > 0) {
            return setErrors(errors);
        }

        const newComment = {
            user_id: user.id,
            projectId,
            content
        }
        
        await dispatch(postCommentThunk(newComment));
        setCreateComment(false)
    }

    return (
        <>
            <div
                className={style.createCommentBackground}
                onClick={() => setCreateComment(false)}
            ></div>
            <div className={style.createCommentContainer}>
                <form
                    className={style.createCommentForm}
                    onSubmit={handleSubmit}
                >
                    <p className={style.createCommentPolicy}>
                        We have a be nice policy. Please keep your sarcasm civil.
                    </p>
                    <label
                        className={style.createCommentLabel}
                        htmlFor='createComment'
                    >
                        <span className={style.createCommentErrors}>
                            {errors.length > 0 && errors.map(error => (
                                error.includes('comment')
                            )) ? errors.map(error => error.includes('comment') ?
                            `${error}` : null) : null}
                        </span>
                    </label>
                    <textarea
                        className={style.createCommentTextArea}
                        id='createComment'
                        value={content}
                        placeholder='Add a comment...'
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <div className={style.createCommentButtons}>
                        <button className={style.createCommentSubmit}>
                            Post
                        </button>
                        <div
                            className={style.createCommentCancel}
                            onClick={() => setCreateComment(false)}
                        >
                            Cancel
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
