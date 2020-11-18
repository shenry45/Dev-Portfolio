import React from 'react';

import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Story from '../components/Story';
import Experience from '../components/Experience';
import Social from '../components/Social';

const HomeVersion2 = () => {
    return (
        <div id="home">
            <Hero />
            <Cards />
            <Story />
            <Experience />
            <Social />
            <p className="blank"></p>
        </div>
    )
}

export default HomeVersion2;