import React from 'react'

import backgroundHeader from '../images/bg-header-desktop.svg'

const Home = () => {
    return (
        <section className="home">
            {/* banner */}
            <header className="home__header">
                <img src={backgroundHeader} alt="Green header background" />
            </header>
            {/* listings */}
            <div className="home__listings-box"></div>
        </section>
    )
}

export default Home
