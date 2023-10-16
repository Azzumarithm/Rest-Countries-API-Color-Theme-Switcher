import React from 'react'
import '../../App.css'
import dropdownicon from '../../assets/images/dropdown-icon.png'
import { useGlobalContext } from '../Context/Context'


const FilterRegion = () => {

  const {uRL,setCountries, searchCountryResults, filterCountryResults, setFilterCountryResults, dropdownState, setDropDownState,region, setRegion, theme} = useGlobalContext()

  const handleFilterClick = (e) => {
    let target = e.target

    while (target && !target.classList.contains('filter-button')) {
      target = target.parentElement
    }

    if (target?.classList.contains('filter-button')){
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
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`dropdown-icon`} style= {dropdownState ? dropDownStyles : {}}>
          <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill={theme === 'Dark' ? `#ffffff` : `#000000`}/>
        </svg>
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