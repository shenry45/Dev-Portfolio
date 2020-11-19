import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import Lines from '../assets/line-pattern.png';

const styles = {
    backgroundImage: `url(${Lines})`
};

const Hero = () => {
    return(
        <section className="hero" style={styles}>
            <h1>Evolve Your Websites</h1>
            <p>See how I can beneift your business by viewing my latest work.</p>
            <p className="accent"></p>
            <Link to="/projects">
                <Button title="View Projects"/>
            </Link>
        </section>
    )
}

export default Hero;