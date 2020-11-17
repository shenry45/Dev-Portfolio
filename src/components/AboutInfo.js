import React, { useState } from 'react';

import Headshot from '../assets/shawn-henry-headshot.jpg';

const AboutInfo = () => {
    const [activeIcon, changeCurrentIcon] = useState("adv");

    return (
        <section className="about">
            <img src={Headshot} alt="Shawn Henry head" />
            <div>
                <p>Growing up in Arizona gave me lots of indoor time to discover what I want to do, code and create. This developed into many forms: website design, photography, and image editing. Taking to web design came as a new world and potential for others to experience my creations.</p>
                <p>In the beginning I thought of Github as a place for the masterful, the elite, to change the world as we know it. Their ideas and hard work were a large inspiration to model myself after. Now I join them with my talents for the better.</p>
            </div>
            <div className="icons">
                <div
                    className={activeIcon === "adv" ? `active`: null}
                    onClick={() => changeCurrentIcon("adv")}
                ><span>i</span> Adventure</div>
                <div
                    className={activeIcon === "snow" ? `active`: null}
                    onClick={() => changeCurrentIcon("snow")}
                ><span>i</span> Snowboarding</div>
                <div 
                    className={activeIcon === "3d" ? `active`: null}
                    onClick={() => changeCurrentIcon("3d")}
                ><span>i</span> 3D Design</div>
                <div
                    className={activeIcon === "gamer" ? `active`: null}
                    onClick={() => changeCurrentIcon("gamer")}
                ><span>i</span> Gamer</div>
            </div>
        </section>
    )
}

export default AboutInfo;
