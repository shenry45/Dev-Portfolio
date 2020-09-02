import React from 'react';

import Library from '../assets/neighborhood-library-show-image.jpg';
import Concerts from '../assets/concert-searcher-show-image.jpg';
// import HowTo from '../assets/how-to-database-show-image.jpg';
import JetParts from '../assets/jet-ski-parts-image.jpg';
import SportsCar from '../assets/elegant-vehicle-website-image.jpg';

const Projects = () => {
    return (
        <section>
            <h1>Projects</h1>
            <hr />
            <div className="projects">
                <div className="container">
                    <div className="cover">
                        <img src={JetParts} alt="jet ski parts website" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h2>Jet Ski Parts Seller (Pro Watercraft)</h2>
                            <p>Ecommerce store selling performance handling parts for jet skis.</p>
                            <p>My team role is theme updates, product population, and troubleshooting (ie. hosting, emails, etc.).</p>
                            <h4>Technologies Used:</h4>
                            <ul>
                                <li>Wordpress</li>
                                <li>WooCommerce</li>
                                <li>CPanel</li>
                                <li>HTML / CSS</li>
                                <li>Vanilla Javascript</li>
                            </ul>
                        </div>
                        <span>
                            <a href="https://prowatercraftracing.com/" rel="noopener noreferrer" target="_blank">
                                <i className="fas fa-sign-in-alt"></i>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="container">
                    <div className="cover">
                        <img src={SportsCar} alt="elegant sports car website" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h2>Sports Car Showcase (MotoElegance)</h2>
                            <p>Display of the Chevrolet Corvette and it's features.</p>
                            <p>I am the sole developer to develop the layout and styling.</p>
                            <h4>Technologies Used:</h4>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                        <span>
                            <a href="https://github.com/shenry45/MotoElegance" rel="noopener noreferrer" target="_blank">
                                <i className="fab fa-github"></i>                        
                            </a>
                            <a rel="noopener noreferrer" target="_blank">
                                <i className="fas fa-sign-in-alt"></i>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="container">
                    <div className="cover"><img src={Library} alt="neighborhood library website" /></div>
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
                        <img src={Concerts} alt="concert searcher website" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h2>Concert Ticket Searcher (Black Box)</h2>
                            <p>Community database of how-to tips and tricks for making everyone's lives easier.</p>
                            <p>I am the sole developer to interact with the TicketMaster API and develop the layout as well as the styling.</p>
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
                            <a href="https://black-box-concerts.netlify.app/" rel="noopener noreferrer" target="_blank">
                                <i className="fas fa-sign-in-alt"></i>
                            </a>
                        </span>
                    </div>
                </div>
                {/* <div className="container">
                    <div className="cover">
                        <img src={HowTo} alt="how to database website" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h2>How-To Database</h2>
                            <p>Community database of how-to tips and tricks for making everyone's lives easier.</p>
                            <p>My team role was developing the login and register UI.</p>
                            <h4>Technologies Used:</h4>
                            <ul>
                                <li>React.js</li>
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
                </div> */}
            </div>
        </section>
    )
};

export default Projects;