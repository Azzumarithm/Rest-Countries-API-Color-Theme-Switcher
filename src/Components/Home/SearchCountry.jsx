import React from 'react'
import "../../App.css"
import { useGlobalContext } from '../Context/Context'
import lightSearchIcon from '../../assets/images/search-icon-light.svg'

const SearchCountry = () => {

  const {countries,setSearchCountryResults,theme} = useGlobalContext()
  
  // const lightSearchIconStyle = {
  //   backgroundImage: `url(${lightSearchIcon})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: '7% center',
  //   backgroundSize: '20px 20px',
  // };
  

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchCountryResults(countries)

    const countryResultsArray = countries.filter(country => {
      return country.name.common.toLowerCase().includes(e.target.value) || country.name.common.includes(e.target.value) || country.name.common.toUpperCase().includes(e.target.value)
      
    })
    setSearchCountryResults(countryResultsArray)
  }
  
  return (
    <div className='search-country-container'>
        <input type="search" className={`search-input`} id={`search`} onChange={handleSearchChange} placeholder='Search for a country...' 
        style={{backgroundImage: theme ? `url(${lightSearchIcon})` : ''}}/>
    </div>
  )
}

export default SearchCountry