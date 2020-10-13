import React from 'react';

import SubHero from '../components/SubHero';
import Social from '../components/Social';
import AboutInfo from '../components/AboutInfo';

const About2 = () => {
    return (
        <>
            <SubHero title="About" />
            <AboutInfo />
            <Social />
            <p className="blank"></p>
        </>
    )
}
   
export default About2;