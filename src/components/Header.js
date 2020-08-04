import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from './NavBar.js';

const Header = () => {
    return (
        <header>
            <div>
            <p className="title"><Link to="/">Shawn Henry</Link></p>
            </div>
            <NavBar />
        </header>
    )
}

export default Header;