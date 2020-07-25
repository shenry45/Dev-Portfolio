import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="hero-container">
            <div className="hero">
                <p>Designing visually pleasing designs in the cleanest manner.</p>
                <Link to="/portfolio">
                    <button>My Portfolio</button>
                </Link>
            </div>
        </section>
    )
}

export default Home;