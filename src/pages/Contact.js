import React from 'react';

import SubHero from '../components/SubHero';
import ContactForm from '../components/ContactForm';
import Social from '../components/Social';

const Contact = () => {
    return (
        <>
            <SubHero title="Contact" />
            <ContactForm />
            <section>
                <h3>My Info:</h3>    
                <p>Email: shawn45henry@gmail.com</p>
                <p>Location: Lake Havasu City, AZ (accepting remote roles)</p>
                <a href="https://drive.google.com/file/d/12MGn3E722K6JsFHNeWTDKltyp0UBcegq/view?usp=sharing" alt="download my resume" target="_blank" rel="noopener noreferrer">
                    <button>Download Resume</button>
                </a>
            </section> 
            <Social />
            <p className="blank"></p>
        </>
    )
}

export default Contact;