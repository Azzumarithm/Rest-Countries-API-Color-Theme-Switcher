import React from 'react'
import '../../App.css'
import dropdownicon from '../../assets/images/dropdown-icon.png'

const FilterRegion = () => {
  return (
    <div className={'filter-region-container'}>
      <div className={'filter-button'}>
        <h1 className={'filter-title'}>Filter by region</h1>
        <img src={dropdownicon} alt="dropdown-icon" className='dropdown-icon'/>
      </div>
      <div className={'filter-list'}>

      </div>
    </div>
  )
}

export default FilterRegion