import React from 'react';

import Button from './Button';

const Hero = () => {
    return(
        <section className="hero">
            <h1>Evolve Your Websites</h1>
            <p>See how I can beneift your business by viewing my latest work.</p>
            <p className="accent"></p>
            <a href="/projects" rel="noreferrer">
                <Button title="View Projects"/>
            </a>
        </section>
    )
}

export default Hero;