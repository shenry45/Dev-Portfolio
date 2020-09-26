import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '../assets/menu-icon.svg';
import MenuCloseIcon from '../assets/arrow-down.svg';

const NavBar = () => {
    const [menu, toggleMenu] = useState(false);

    return (
        <nav>
            {/* <div className="desktop">
                <Link to="/projects">
                    <button>PROJECTS</button>
                </Link>
                <Link to="/about">
                    <button>ABOUT</button>
                </Link>
                <Link to="/contact">
                    <button>CONTACT</button>
                </Link>
            </div> */}
            <div className="mobile">
                <button onClick={() => toggleMenu(!menu)}>
                    <img src={MenuIcon} alt="menu icon" />
                </button>
                { menu ?
                        <div className="modal-menu">
                            <img src={MenuCloseIcon} onClick={() => toggleMenu(!menu)} alt="Close menu" />
                            <Link to="/" onClick={() => toggleMenu(!menu)}>
                                <button>Home</button>
                            </Link>
                            <Link to="/projects" onClick={() => toggleMenu(!menu)}>
                                <button>Projects</button>
                            </Link>
                            <Link to="/about" onClick={() => toggleMenu(!menu)}>
                                <button>About</button>
                            </Link>
                            <Link to="/contact" onClick={() => toggleMenu(!menu)}>
                                <button>Contact</button>
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