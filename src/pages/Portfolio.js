import React from 'react';
import Library from '../assets/neighborhood-library-show-image.jpg';

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
                    <div>
                        <h3>Neighborhood Library</h3>
                        <p>Local book rental project designed for neighbors to share books in their community.</p>
                        <h4>Technologies Used:</h4>
                        <ul>
                            <li>React</li>
                            <li>OAuth</li>
                            <li>Socket.io</li>
                            <li>PostgreSQL</li>
                        </ul>
                        <span>
                            <i className="fab fa-github"></i>
                            <i className="fas fa-sign-in-alt"></i>
                        </span>
                    </div>
                </div>
                <div className="container">
                    <img src="/assets/triangle-background.jpg" alt="triangle background" />
                    <div>
                        <h3>"How To" Database</h3>
                        <p>Communial sharing of DIY projects for the makers.</p>
                        <ul>
                            <li>React</li>
                            <li>PostgreSQL</li>
                        </ul>
                        <i className="fab fa-github"></i>
                        <i className="fas fa-sign-in-alt"></i>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Projects;