import React from 'react';

const Projects = () => {
    return (
        <section>
            <h1>Projects</h1>
            <hr />
            <div className="projects">
                <div className="container">
                    <img src="/assets/triangle-background.jpg" alt="triangle background" />
                    <div>
                        <h3>Neighborhood Library</h3>
                        <p>Local book rental project designed for neighbors to share books in their community.
                        <br/><br/>Technologies Used:</p>
                        <ul>
                            <li>React</li>
                            <li>OAuth</li>
                            <li>Socket.io</li>
                            <li>PostgreSQL</li>
                        </ul>
                        <i class="fab fa-github"></i>
                        <i class="fas fa-sign-in-alt"></i>
                    </div>
                </div>
                <div className="container">
                    <img src="/assets/triangle-background.jpg" alt="triangle background" />
                    <div>
                        <h3>"How To" Database</h3>
                        <p>Nulla in metus rhoncus, ullamcorper turpis vel, ultricies turpis. In pellentesque turpis a scelerisque ornare. Curabitur sagittis, felis bibendum semper laoreet, nisl quam ultrices nunc, non facilisis elit lectus fringilla nisl. Donec in erat augue. Etiam rutrum aliquam urna, id feugiat purus hendrerit at. Integer eget lacus aliquet dolor vehicula sollicitudin.<br/><br/>Technologies Used:</p>
                        <ul>
                            <li>React</li>
                            <li>OAuth</li>
                            <li>Socket.io</li>
                            <li>PostgreSQL</li>
                        </ul>
                        <i class="fab fa-github"></i>
                        <i class="fas fa-sign-in-alt"></i>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Projects;