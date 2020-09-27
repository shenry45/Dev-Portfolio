import React from 'react';
import { Link } from 'react-router-dom';

import ArrowRight from '../assets/arrow-right-thin.svg';

const Cards = () => {
    return (
        <section className="cards">
            <a href="https://www.deviantart.com/containement" target="blank">
            <div className="card-cont">
                <h3>Design Board</h3>
                <img src={ArrowRight} alt="Card" />
            </div>
            </a> 
            <Link to="/projects">
                <div className="card-cont">
                    <h3>Portfolio</h3>
                    <img src={ArrowRight} alt="Card" />
                </div>
            </Link> 
        </section>
    )
}

export default Cards;