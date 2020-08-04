import React from 'react';

import Portrait from '../assets/about-shawn-henry-portrait.jpg';

const About = () => {
    return (
        <section className="about">
            <h1>About</h1>
            <hr />
            <div className="container">
                <div>
                    <img src={Portrait} alt="portrait" />
                </div>
                <div className="details">
                    <p>Growing up in Arizona gave me lots of time to discover what I want to do, code and create. This developed into many forms, some being: website design, photography, and image editing. Taking to web design came as a new world and potential for others to experience my creations. </p>
                    <p>I always thought of Github as a place for the masterful, the elite, to change the world as we know it. Their ideas and hard work were a large inspiration to model myself after.</p>
                    <div>
                        <i class="fas fa-cube">3D Designer</i>
                        <i class="fas fa-gamepad">Gamer</i>
                        <i class="fas fa-motorcycle">Motorcyclist</i>
                        <i class="fas fa-cogs">Mechanic</i>
                        <i class="fas fa-snowboarding">Snowboarder</i>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;