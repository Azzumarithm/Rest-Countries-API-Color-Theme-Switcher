import React from 'react'
import '../../App.css'
import NavBar from './NavBar'
import SearchCountry from './SearchCountry'
import FilterRegion from './FilterRegion'
import Countries from './Countries'
import Country from '../Country/Country'
import { useGlobalContext } from '../Context/Context'
import LoadMoreCountries from './LoadMoreCountries'

const Home = () => {
  
  const {URL,countryCode, setCountryCode,searchCountryResults,countriesLimit,filterCountryResults, setFilterCountryResults} = useGlobalContext()
  return (
    <div className={`home`}>
        <NavBar/>
        {countryCode === null &&
          <div className={`search-filter-container`}>
            <SearchCountry/>
            <FilterRegion />
          </div>
        }
        {countryCode === null && <Countries/>}
        {countryCode !== null && <Country/>}
        
        {countryCode === null && (countriesLimit < filterCountryResults?.length) && <LoadMoreCountries/>}
    </div>
  )
}

export default Home