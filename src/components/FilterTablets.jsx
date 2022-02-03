import React from 'react'

import removeIcon from '../images/icon-remove.svg'

const FilterTablets = ({ filter, removeFilterHandler }) => {
    return (
        <div className="filter-tablet flex flex__ai-center ">
            <p className="filter-tablet__name">{filter}</p>
            <div className="remove-icon flex flex__ai-center flex__jc-center">
                <img
                    src={removeIcon}
                    alt="Remove Icon"
                    onClick={() => removeFilterHandler(filter)}
                />
            </div>
        </div>
    )
}

export default FilterTablets
