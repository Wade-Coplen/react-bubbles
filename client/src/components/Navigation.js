import React from 'react';
import {Link} from 'react-router-dom';

export default function Navigation() {
    return (
        <div className= 'main-nav'>
            <Link to = '/login' >Log In</Link>
            <Link to = '/colorlist'>Colors</Link>
        </div>
    )
}