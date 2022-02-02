import React from 'react'

import backgroundHeader from '../images/bg-header-desktop.svg'
import FilterTablets from './FilterTablets'

const Home = () => {
    return (
        <section className="home">
            {/* banner */}
            <header className="home__header">
                <img src={backgroundHeader} alt="Green header background" />
            </header>

            {/* filter bar */}
            <div className="home__filter-bar flex flex__ai-center flex__jc-between">
                <div className="filter-tablets-box flex flex__ai-center">
                    <FilterTablets />
                    <FilterTablets />
                    <FilterTablets />
                    <FilterTablets />
                </div>
                <p className="clear">Clear</p>
            </div>

            {/* listings */}
            <div className="home__listings-box"></div>
        </section>
    )
}

export default Home
