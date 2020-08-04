import React from 'react';

import Library from '../assets/neighborhood-library-show-image.jpg';
import Concerts from '../assets/concert-searcher-show-image.jpg';

const Projects = () => {
    return (
        <section>
            <h1>Projects</h1>
            <hr />
            <div className="projects">
                <div className="container">
                    <div className="cover">
                        <img src={Library} alt="neighborhood library summary" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h2>Neighborhood Library</h2>
                            <p>Local book rental project designed for neighbors to share books in their community.</p>
                            <p>My team role was developing the overall UI and getting the backend authentication and FE handling operational. Impliented live chat feature between clients.</p>
                            <h4>Technologies Used:</h4>
                            <ul>
                                <li>React.js</li>
                                <li>Express.js</li>
                                <li>Passport.js</li>
                                <li>OAuth</li>
                                <li>Socket.IO</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                        <span>
                            <a href="https://github.com/Neighborhood-Library" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-github"></i>                        
                            </a>
                            <a href="https://neighborhood-library-sh.netlify.app/" rel="noopener noreferrer" target="_blank">
                                <i className="fas fa-sign-in-alt"></i>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="container">
                    <div className="cover">
                        <img src={Concerts} alt="concert searcher summary" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h2>Concert Ticket Searcher (Black Box)</h2>
                            <p>Community database of how-to tips and tricks for making everyone's lives easier.</p>
                            <p>My team role was developing the login and register UI.</p>
                            <h4>Technologies Used:</h4>
                            <ul>
                                <li>React.js</li>
                                <li>CSS</li>
                                <li>API Fetch</li>
                            </ul>
                        </div>
                        <span>
                            <a href="https://github.com/shenry45/BlackBox" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-github"></i>                        
                            </a>
                            <a href="#" rel="noopener noreferrer" target="_blank">
                                <i className="fas fa-sign-in-alt"></i>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="container">
                    <div className="cover">
                        <img src={Library} alt="neighborhood library summary" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h2>How-To Database</h2>
                            <p>Community database of how-to tips and tricks for making everyone's lives easier.</p>
                            <p>My team role was developing the login and register UI.</p>
                            <h4>Technologies Used:</h4>
                            <ul>
                                <li>React</li>
                            </ul>
                        </div>
                        <span>
                            <a href="https://github.com/how-to-build" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-github"></i>                        
                            </a>
                            <a href="https://how-to-db.netlify.app/" rel="noopener noreferrer" target="_blank">
                                <i className="fas fa-sign-in-alt"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Projects;