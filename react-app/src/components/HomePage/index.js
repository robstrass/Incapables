import React from 'react';
import { useSelector } from 'react-redux';

import './HomePage.module.css';

export default function HomePage() {
    const user = useSelector(state => state.session.user)

    return (
        <div>hello</div>
    )
}
