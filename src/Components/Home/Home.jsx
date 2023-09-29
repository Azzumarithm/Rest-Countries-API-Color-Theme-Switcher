import React, { useEffect } from 'react'
import '../../App.css'
import NavBar from './NavBar'
import SearchCountry from './SearchCountry'
import FilterRegion from './FilterRegion'
import Countries from './Countries'
import Country from '../Country/Country'
import { useGlobalContext } from '../Context/Context'
import LoadMoreCountries from './LoadMoreCountries'
import BackToUpBtn from './BackToUpBtn'

const Home = () => {

  const { URL, countryCode, setCountryCode, searchCountryResults, countriesLimit, filterCountryResults, setFilterCountryResults, isVisible } = useGlobalContext()


  return (
    <div className={`home`}>
      <NavBar />
      {countryCode === null &&
        <div className={`search-filter-container`}>
          <SearchCountry />
          <FilterRegion />
        </div>
      }
      {countryCode === null && <Countries />}
      {countryCode !== null && <Country />}

      {countryCode === null && (countriesLimit < filterCountryResults?.length) && <LoadMoreCountries />}

      <div className="back-to-position-btn-container">
        {isVisible && <BackToUpBtn />}
      
      </div>
    </div>
  )
}

export default Home