import React from 'react'
import "../../App.css"
import { useGlobalContext } from '../Context/Context'
import lightSearchIcon from '../../assets/images/search-icon-light.svg'

const SearchCountry = () => {

  const {countries,setSearchCountryResults,theme,isError} = useGlobalContext()
  
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchCountryResults(countries)

    if (isError){
      const countryResultsArray = countries.filter(country => {
        return country.name.toLowerCase().includes(e.target.value) || country.name.includes(e.target.value) || country.name.toUpperCase().includes(e.target.value)
        
      })
  
      setSearchCountryResults(countryResultsArray)
    }
    else {
      const countryResultsArray = countries.filter(country => {
        return country.name.common.toLowerCase().includes(e.target.value) || country.name.common.includes(e.target.value) || country.name.common.toUpperCase().includes(e.target.value)
        
      })
  
      setSearchCountryResults(countryResultsArray)
      
    }

    
  }
  
  return (
    <div className='search-country-container'>
        <input type="search" className={`search-input`} id={`search`} onChange={handleSearchChange} placeholder='Search for a country...' 
        style={{backgroundImage: theme ? `url(${lightSearchIcon})` : ''}}/>
    </div>
  )
}

export default SearchCountry