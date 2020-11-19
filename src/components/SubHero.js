import React from 'react';

import Lines from '../assets/line-pattern.png';

const styles = {
    backgroundImage: `url(${Lines})`
};

const SubHero = (props) => {
    return (
        <section className="sub-hero" style={styles}>
            <h1>{props.title}</h1>
            <p className="accent"></p>
        </section>
    )
}

export default SubHero;