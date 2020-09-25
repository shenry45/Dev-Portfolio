import React from 'react';

import Headshot from '../assets/about-shawn-henry-portrait.jpg';

const AboutInfo = () => {
    return (
        <section className="about">
            <img src={Headshot} alt="Shawn Henry head" />
            <p>Growing up in Arizona gave me lots of indoor time to discover what I want to do, code and create. This developed into many forms: website design, photography, and image editing. Taking to web design came as a new world and potential for others to experience my creations.</p>
            <p>In the beginning I thought of Github as a place for the masterful, the elite, to change the world as we know it. Their ideas and hard work were a large inspiration to model myself after. Now I join them with my talents for the better.</p>
            <div className="icons">
                <div><span>i</span> Adventure</div>
                <div className="active"><span>i</span> Snowboarding</div>
                <div><span>i</span> 3D Design</div>
                <div><span>i</span> Gamer</div>
            </div>
        </section>
    )
}

export default AboutInfo;