import React from 'react';
import { Link } from 'react-router-dom';

import ArrowRight from '../assets/arrow-right-thin.svg';

const Cards = () => {
    return (
        <section className="cards">
            <a href="https://www.deviantart.com/containement" target="_blank" rel="noopener noreferrer">
            <div className="card-cont">
                <h3>Design Board</h3>
                <img src={ArrowRight} alt="Card" />
            </div>
            </a> 
            <Link to="/about">
                <div className="card-cont">
                    <h3>About</h3>
                    <img src={ArrowRight} alt="Card" />
                </div>
            </Link> 
            <a href="https://github.com/shenry45">
                <div className="card-cont">
                    <h3>Portfolio</h3>
                    <img src={ArrowRight} alt="Card" />
                </div>
            </a> 
        </section>
    )
}

export default Cards;