import React from 'react'
import '../../App.css'
import NavBar from './NavBar'
import SearchCountry from './SearchCountry'
import FilterRegion from './FilterRegion'
import Countries from './Countries'

const Home = ({URL}) => {

  return (
    <div className={`home`}>
        <NavBar/>
        <div className={`search-filter-container`}>
          <SearchCountry/>
          <FilterRegion URL={URL}/>
        </div>
        <Countries URL={URL}/>
    </div>
  )
}

export default Home