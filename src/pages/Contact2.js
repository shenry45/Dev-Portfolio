import React from 'react';

import SubHero from '../components/SubHero';
import ContactForm from '../components/ContactForm';
import Social from '../components/Social';

const Contact = () => {
    return (
        <>
            <SubHero title="Contact" />
            <ContactForm />
            <Social />
            <p className="blank"></p>
        </>
    )
}

export default Contact;