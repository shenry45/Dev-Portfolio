import React from 'react';

const Story = () => {
    return (
        <section className="story">
            <iframe src="https://www.youtube.com/embed/LDU_Txk06tM" title="My Personal Story Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" allowfullscreen></iframe>
            <div>
                <h2>My Story</h2>
                <p className="accent"></p>
            </div>
        </section>
    )
}

export default Story;