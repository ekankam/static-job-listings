import React from 'react'

const JobList = ({ listing, filterListings }) => {
    const listingNew = listing.featured === true && listing.new === true

    const clickHandler = (skills) => filterListings(skills)

    return (
        <div
            className={
                listingNew
                    ? 'home__listing flex flex__ai-center flex__jc-between green-border-left'
                    : 'home__listing flex flex__ai-center flex__jc-between'
            }
        >
            <div className="logo">
                <img src={listing.logo} alt={listing.company} />
            </div>
            <div className="contents flex flex__ai-center flex__jc-between">
                <div className="job-info">
                    <div className="new-featured flex flex__ai-center">
                        <p className="company-name">{listing.company}</p>
                        {listing.new && (
                            <div className="tag">
                                <p>new!</p>
                            </div>
                        )}
                        {listing.featured && (
                            <div className="tag bg-black">
                                <p>featured</p>
                            </div>
                        )}
                    </div>
                    <h3 className="position">{listing.position}</h3>
                    <ul className="job-items flex flex__ai-center">
                        <li className="job-item">{listing.postedAt}</li>
                        <span>.</span>
                        <li className="job-item">{listing.contract}</li>
                        <span>.</span>
                        <li className="job-item">{listing.location}</li>
                    </ul>
                </div>
                <span className="line"></span>
                <div className="job-categories flex flex__ai-center flex__jc-center">
                    <p
                        className="category"
                        onClick={() => clickHandler(listing.role)}
                    >
                        {listing.role}
                    </p>
                    <p
                        className="category"
                        onClick={() => clickHandler(listing.level)}
                    >
                        {listing.level}
                    </p>
                    {listing.languages.length > 0 &&
                        listing.languages.map((lang, index) => (
                            <p
                                key={index}
                                className="category"
                                onClick={() => clickHandler(lang)}
                            >
                                {lang}
                            </p>
                        ))}
                    {listing.tools.length > 0 &&
                        listing.tools.map((tool, index) => (
                            <p
                                key={index}
                                className="category"
                                onClick={() => clickHandler(tool)}
                            >
                                {tool}
                            </p>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default JobList
