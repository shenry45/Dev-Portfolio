import React from 'react';

const Contact = () => {
    return (
        <section className="contact">
            <h1>Contact Me</h1>
            <hr />
            <form>
                <label>Name</label>
                <input />
                <label>Email</label>
                <input />
                <label>Message</label>
                <input />
                <button type="submit">Send Message</button>
            </form>
        </section>
    )
}

export default Contact;