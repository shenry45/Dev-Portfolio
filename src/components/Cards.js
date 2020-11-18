import React from 'react';
import { Link } from 'react-router-dom';

import ArrowRight from '../assets/arrow-right-thin.svg';

const Cards = () => {
    return (
        <section className="cards">
            <div>
                <h2>Why me?</h2>
                <p>In my current position, I manage the websites and graphic displays for <a href="https://prowatercraftracing.com/" target="_blank" rel="noopener noreferrer">ProWatercraft LLC</a> (online retailer) and <a href="https://lowandmean.com" target="_blank" rel="noopener noreferrer">Low and Mean LLC</a> (online retailer). I analyze webpage statistics to notice trends and employ retention strategies. I am a fast learner that works well with a team as well as solo with little oversight.
</p>
            </div>
            <div>
                <a href="https://github.com/shenry45">
                    <div className="card-cont">
                        <h3>Code Library</h3>
                        <img src={ArrowRight} alt="Card" />
                    </div>
                </a> 
                <Link to="/about">
                    <div className="card-cont">
                        <h3>About</h3>
                        <img src={ArrowRight} alt="Card" />
                    </div>
                </Link> 
                <a href="https://www.deviantart.com/containement" target="_blank" rel="noopener noreferrer">
                <div className="card-cont">
                    <h3>Design Board</h3>
                    <img src={ArrowRight} alt="Card" />
                </div>
                </a> 
            </div>
        </section>
    )
}

export default Cards;