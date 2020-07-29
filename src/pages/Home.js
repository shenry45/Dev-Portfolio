import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="hero-container">
            <div className="hero">
                <p>Producing elegant designs with functionality to back it up.</p>
                <Link to="/projects">
                    <button>My Projects</button>
                </Link>
            </div>
            <div className="hero-accent img"></div>
            <div className="hero-accent bg"></div>
        </section>
    )
}

export default Home;