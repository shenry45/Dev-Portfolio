import React from 'react';

import GithubIcon from '../assets/github-white.svg';
import ArrowRight from '../assets/arrow-right-thin.svg';

const PortfolioCard = (props) => {
    return (
        <div className="card-cont" id={props.imageID}>
            <h3>{props.title}</h3>
            <div>
                {
                    props.github ? (
                        <a href={props.github}>
                            <img src={GithubIcon} alt="Card" />
                        </a>
                    ) : null
                }
                {
                    props.hosted ? (
                        <a href={props.hosted}>
                            <img src={ArrowRight} alt="Card" />
                        </a>
                    ) : null
                }
            </div>
        </div>
    )
}

export default PortfolioCard;