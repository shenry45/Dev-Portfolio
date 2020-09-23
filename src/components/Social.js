import React from 'react';

import LinkedInIcon from '../assets/linkedin.svg';
import GithubIcon from '../assets/github.svg';
import EmailIcon from '../assets/email.svg';

const Social = () => {
    return (
        <section className="social">
            <p>Social</p>
            <div>
                <a href="https://www.linkedin.com/in/shawn-p-henry/" target="blank">
                    <img src={LinkedInIcon} alt="See my LinkedIn Profile" />
                </a>
                <a href="https://github.com/shenry45" target="blank">
                    <img src={GithubIcon} alt="Check out my Github" />
                </a>
                <a href="mailto:shawn45henry@gmail.com" target="blank">
                    <img src={EmailIcon} alt="Send me an email!" />
                </a>
                <p className="accent"></p>
            </div>
        </section>
    )
}

export default Social;