import React from 'react'

import removeIcon from '../images/icon-remove.svg'

const FilterTablets = () => {
    return (
        <div className="filter-tablet flex flex__ai-center">
            <p className="filter-tablet__name">Frontend</p>
            <div className="remove-icon flex flex__ai-center flex__jc-center">
                <img src={removeIcon} alt="Remove Icon" />
            </div>
        </div>
    )
}

export default FilterTablets
