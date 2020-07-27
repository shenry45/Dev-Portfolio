import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <Link to="/projects">
                <button>PROJECTS</button>
            </Link>
            <Link to="/about">
                <button>ABOUT</button>
            </Link>
            <Link to="/contact">
                <button>CONTACT</button>
            </Link>
        </nav>
    )
}

export default NavBar;