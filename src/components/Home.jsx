import React, { useEffect, useState } from 'react'

import backgroundHeader from '../images/bg-header-desktop.svg'
import FilterTablets from './FilterTablets'
import { data } from '../data'
import JobList from './JobList'

const Home = () => {
    const [listings, setListings] = useState([])
    const [filters, setFilters] = useState([])

    useEffect(() => {
        //   check if filters array is empty
        if (filters.length === 0) {
            setListings(data)
        }
    }, [filters.length])

    // filter listings
    const filterListings = (filterBy = null) => {
        // if filter has been addded already then do not add to filter bar
        if (!filters.includes(filterBy) && filterBy !== null) {
            setFilters([...filters, filterBy])
        }

        // filter listings
        const filteredListings = listings.filter((listing) =>
            [
                ...listing.languages,
                ...listing.tools,
                listing.role,
                listing.level,
            ].includes(filterBy)
        )

        setListings(filteredListings)
    }

    // remove filter tablets
    const removeFilterHandler = (filter) => {
        const removeFilter = filters.filter((item) => item !== filter)
        setFilters(removeFilter)
    }

    console.log('listings', listings)

    const showFilterBar =
        filters.length > 0
            ? 'home__filter-bar flex flex__ai-center flex__jc-between show-filter-bar'
            : 'home__filter-bar flex flex__ai-center flex__jc-between'

    return (
        <section className="home">
            <header className="home__header">
                <img src={backgroundHeader} alt="Green header background" />
            </header>

            <div className={showFilterBar}>
                <div className="filter-tablets-box flex flex__ai-center">
                    {filters.map((filter) => (
                        <FilterTablets
                            filter={filter}
                            removeFilterHandler={removeFilterHandler}
                        />
                    ))}
                </div>
                <p className="clear" onClick={() => setFilters([])}>
                    Clear
                </p>
            </div>

            <div className="home__listings-box flex ">
                {listings?.map((listing) => (
                    <JobList
                        key={listing.id}
                        listing={listing}
                        filterListings={filterListings}
                    />
                ))}
            </div>
        </section>
    )
}

export default Home

//show-filter-bar
