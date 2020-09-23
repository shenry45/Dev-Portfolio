import React from 'react';
import PortfolioCard from '../components/PortfolioCard';

import SubHero from '../components/SubHero';
import Social from '../components/Social';

const Projects2 = () => {
    return (
        <>
            <SubHero title="Projects" />
            <section className="projects-cont cards">
                <PortfolioCard
                    title="Sports Car Showcase"
                    github="https://github.com/shenry45/MotoElegance"
                    imageID="sport"
                />
                <PortfolioCard
                    title="Community Book Rental" 
                    github="https://github.com/Neighborhood-Library"
                    hosted="https://neighborhood-library-sh.netlify.app/"
                    imageID=""
                />
                <PortfolioCard
                    title="Concert Ticket Searcher"
                    github="https://github.com/shenry45/BlackBox"
                    hosted="https://black-box-concerts.netlify.app/"
                    imageID=""
                />
                <PortfolioCard
                    title="Ecommerce Site"
                    github=""
                    hosted="https://prowatercraftracing.com/"
                    imageID=""
                />
            </section>
            <Social />
            <p className="blank"></p>
        </>
    )
}

export default Projects2;