import React from 'react';

const SubHero = (props) => {
    return (
        <section className="sub-hero">
            <h1>{props.title}</h1>
            <p className="accent"></p>
        </section>
    )
}

export default SubHero;