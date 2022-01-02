import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import style from './EditComment.module.css';

export default function EditComment({ projectId, setEditComment }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user);

    const [editContent, setEditContent] = useState('');
    const [errors, setErrors] = useState('');

    const validate = () => {
        const validation = [];
        if (!editContent) validation.push('Your comment is empty');

        return validation;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);

        const errors = validate();

        if (errors && errors.length > 0) {
            return setErrors(errors);
        }

        const editedComment = {
            user_id: user.id,
            projectId,
            content: editContent,
        }
    }

    return (
        <>
            <div className={style.editCommentBackground}>
                henlo
            </div>
        </>
    )
}
