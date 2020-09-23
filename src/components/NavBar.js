import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '../assets/menu-icon.svg';

const NavBar = () => {
    const [menu, toggleMenu] = useState(false);

    return (
        <nav>
            <div className="desktop">
                <Link to="/projects">
                    <button>PROJECTS</button>
                </Link>
                <Link to="/about">
                    <button>ABOUT</button>
                </Link>
                <Link to="/contact">
                    <button>CONTACT</button>
                </Link>
            </div>
            <div className="mobile">
                <button onClick={() => toggleMenu(!menu)}>
                    <img src={MenuIcon} alt="menu icon" />
                </button>
                { menu ?
                        <div className="modal-menu">
                            <Link to="/projects" onClick={() => toggleMenu(!menu)}>
                                <button>PROJECTS</button>
                            </Link>
                            <Link to="/about" onClick={() => toggleMenu(!menu)}>
                                <button>ABOUT</button>
                            </Link>
                            <Link to="/contact" onClick={() => toggleMenu(!menu)}>
                                <button>CONTACT</button>
                            </Link>
                        </div>
                    :
                        null
                }
            </div>
        </nav>
    )
};

export default NavBar;