import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import style from './SingleCategory.module.css';
import * as categoryActions from '../../store/categories';

export default function SingleCategory() {
    const dispatch = useDispatch();
    const { categoryId } = useParams();

    return (
        <div className={style.singleCategoryContainer}>
            henlo
        </div>
    )
}
