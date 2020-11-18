import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    return (
        <section className="contact">
            <h2>Get in Touch</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    rows="8"
                    onChange={e => setMessage(e.target.value)}
                />
                <button
                    onClick={async e => {
                        e.preventDefault();

                        if (!name || !email || !message) {
                            alert('Please fill in all the form fields.')
                            return
                        }

                        await emailjs
                            .send(process.env.REACT_APP_MAIL_SERVICE, process.env.REACT_APP_MAIL_TEMPLATE, {from_name: name, reply_to: email, message_html: message}, process.env.REACT_APP_MAIL_USER)
                            .then(function(response) {
                                setSuccess(true);
                            }, function(error) {
                                setSuccess(false)
                            });
                    }}    
                >Send Message</button>
            </form>
            {
                success ? <div className="success">Message sent successfully!</div> : ''
            }
        </section>
    )
}

export default ContactForm;