import React from 'react'
import '../../App.css'
import dropdownicon from '../../assets/images/dropdown-icon.png'
import { useGlobalContext } from '../Context/Context'


const FilterRegion = () => {

  const {uRL,setCountries, searchCountryResults, filterCountryResults, setFilterCountryResults, dropdownState, setDropDownState,region, setRegion} = useGlobalContext()

  const handleFilterClick = (e) => {
    let target = e.target

    while (target && !target.classList.contains('filter-button')) {
      target = target.parentElement
    }

    if (target.classList.contains('filter-button')){
      setDropDownState(!dropdownState)

    }

  }

  const handleFilterRegion = (e) => {
    let target = e.target

    while (target && !target.classList.contains('country-region-list')) {
      target = target.parentElement
    }


    const regionName = target.textContent;
    setRegion(regionName)

  }

  const dropDownStyles = {
    rotate: '180deg'
  }

  const filterListStyles = {
    backgroundColor: 'rgb(149, 240, 250)'
  }



  return (
    <div className={'filter-region-container'} onClick={handleFilterClick}>
      <div className={'filter-button'}>
        <h1 className={'filter-title'}><strong>Filter by Region</strong></h1>
        <img src={dropdownicon} alt="dropdown-icon" className='dropdown-icon' style= {dropdownState ? dropDownStyles : {}}/>
      </div>
      <div className={'filter-list'} style={dropdownState ? {display:'none'} : {}} onClick={handleFilterRegion}>
        <ul>
          <li className={`country-region-list`} style={region === "All" ? filterListStyles : {}}>All</li>
          <li className={`country-region-list`} style={region === "Africa" ? filterListStyles : {}}>Africa</li>
          <li className={`country-region-list`} style={region === "Americas" ? filterListStyles : {}}>Americas</li>
          <li className={`country-region-list`} style={region === "Antarctic" ? filterListStyles : {}}>Antarctic</li>
          <li className={`country-region-list`} style={region === "Asia" ? filterListStyles : {}}>Asia</li>
          <li className={`country-region-list`} style={region === "Europe" ? filterListStyles : {}}>Europe</li>
          <li className={`country-region-list`} style={region === "Oceania" ? filterListStyles : {}}>Oceania</li>
        </ul>
      </div>
    </div>
  )
}

export default FilterRegion