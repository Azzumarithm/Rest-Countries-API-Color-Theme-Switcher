import React from 'react'
import "../../App.css"
import { useGlobalContext } from '../Context/Context'


const SearchCountry = () => {

  const {countries,setSearchCountryResults} = useGlobalContext()
  

  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchCountryResults(countries)

    const countryResultsArray = countries.filter(country => {
      return country.name.common.toLowerCase().includes(e.target.value) || country.name.common.includes(e.target.value) || country.name.common.toUpperCase().includes(e.target.value)
      
    })
   
    console.log(countryResultsArray)
    setSearchCountryResults(countryResultsArray)
  }
  
  return (
    <div className='search-country-container'>
        <input type="search" className={`search-input`} id={`search`} onChange={handleSearchChange} placeholder='Search for a country...'/>
    </div>
  )
}

export default SearchCountry