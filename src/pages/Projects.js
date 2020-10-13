import React from 'react';
import { Link } from 'react-router-dom';

import PortfolioCard from '../components/PortfolioCard';
import SubHero from '../components/SubHero';
import Social from '../components/Social';
import Button from '../components/Button';

import SportsCar from '../assets/elegant-vehicle-website-image.jpg';
import BookRental from '../assets/neighborhood-library-show-image.jpg';
import ConcertTickets from '../assets/concert-searcher-show-image.jpg';
import JetSki from '../assets/jet-ski-parts-image.jpg';

const Projects2 = () => {
    return (
        <>
            <SubHero title="Projects" />
            <section className="projects-cont cards">
                <PortfolioCard
                    title="Sports Car Showcase"
                    github="https://github.com/shenry45/MotoElegance"
                    image={SportsCar}
                />
                <PortfolioCard
                    title="Community Book Rental" 
                    github="https://github.com/Neighborhood-Library"
                    hosted="https://neighborhood-library-sh.netlify.app/"
                    image={BookRental}
                />
                <PortfolioCard
                    title="Concert Ticket Searcher"
                    github="https://github.com/shenry45/BlackBox"
                    hosted="https://black-box-concerts.netlify.app/"
                    image={ConcertTickets}
                />
                <PortfolioCard
                    title="Ecommerce Site"
                    github=""
                    hosted="https://prowatercraftracing.com/"
                    image={JetSki}
                />
            </section>
            <section className="project-cta">
                <h2>Now, what do you think?</h2>
                
                <Link to="/contact">
                    <Button title="Contact Me"/>
                </Link>
            </section>
            <Social />
            <p className="blank"></p>
        </>
    )
}

export default Projects2;