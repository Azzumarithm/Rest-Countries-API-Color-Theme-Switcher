import React from 'react'
import "../../App.css"

const SearchCountry = ({URL}) => {

  const handleSearchInput = (e) => {

  }
  
  return (
    <div className='search-country-container'>
        <input type="search" className={'search-input'} onChange={handleSearchInput} placeholder='Search for a country...'/>
    </div>
  )
}

export default SearchCountry