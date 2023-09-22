import React from 'react'
import '../../App.css'
import NavBar from './NavBar'
import SearchCountry from './SearchCountry'
import FilterRegion from './FilterRegion'
import Countries from './Countries'
import Country from '../Country/Country'
import { useGlobalContext } from '../Context/Context'

const Home = () => {
  
  const {URL,countryCode, setCountryCode} = useGlobalContext()
  return (
    <div className={`home`}>
        <NavBar/>
        <div className={`search-filter-container`}>
          {countryCode === null && <SearchCountry/>}
          {countryCode === null && <FilterRegion />}
        </div>
        {countryCode === null && <Countries/>}
        {countryCode !== null && <Country/>}
        
    </div>
  )
}

export default Home