import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../Context/Context'
import '../../App.css'


const LoadMoreCountries = () => {

    const {countries,setCountries, searchCountryResults, setSearchCountryResults, countriesLimit, setCountriesLimit,region} = useGlobalContext()

    const handleLoadMoreClick = (e) => {
        setCountriesLimit((prevState) => {
            return prevState + 8
        })
    }

    useEffect(() => {
        setCountriesLimit((prevState) => {
            return 8
        })
    },[region])
    
    return (
        <div className='loadmorecountries-container'>
          <button className="loadmorecountries-btn" onClick={handleLoadMoreClick}>Load more</button>  
        </div>
    )
}

export default LoadMoreCountries