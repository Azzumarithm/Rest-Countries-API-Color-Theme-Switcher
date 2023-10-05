import React from 'react'
import '../../App.css'
import '../../../data.json'
import { useFetchCountries } from '../Actions/useFetchCountries'
import { useGlobalContext } from '../Context/Context'
import SkeletonElement from './SkeletonElement'
import Shimmer from './Shimmer'


const Countries = () => {

    const { URL, searchCountryResults, region, countryCode, setCountryCode, countriesLimit, filterCountryResults, setFilterCountryResults ,countryShortCode, setCountryShortCode} = useGlobalContext()

    const { isLoading, isError } = useFetchCountries(URL)



    const handleSelectCountry = (e) => {
        let target = e.target
        while (target && !target.classList.contains('country-subcontainer')) {
            target = target.parentElement
        }

        setCountryCode(target.classList[1])
        setCountryShortCode(target.classList[2].toLowerCase())

    }


    return (
        <>
            
            <div className={'countries-container'} onClick={handleSelectCountry}>
                {searchCountryResults?.filter((country) => {
                    if (region === null || region === "All"){
                        return country
                    }

                    return country.region === region
                }).slice(0,countriesLimit).map((country) => {
                    return (
                        <div key={country.flag} className={`country-subcontainer ${country.cca3} ${country.cca2}`}>
                            {isLoading === true ? <SkeletonElement type={`country-image`}/> : <img src={country.flags.png} className={`country-image ${country.cca3}`} alt={`country-image ${country.cca3}`} />}

                            <div className="country-descriptions">
                                {isLoading === true ? <SkeletonElement type={`country-name`}/> : <h2 className={`country-name`}>{country.name.common}</h2>}

                                {isLoading === true ? <SkeletonElement type={`text`}/> : <p className={`country-description country-population`}>
                                    <strong>Population</strong> : {`${country.population.toLocaleString()}`}
                                </p>}
                                {isLoading === true ?  <SkeletonElement type={`text`}/> :<p className={`country-description country-region`}>
                                    <strong>Region</strong> : {`${country.region}`}
                                </p>}
                                {isLoading === true ?  <SkeletonElement type={`text`}/> :<p className={`country-description country-capital`}>
                                    <strong>Capital</strong> : {`${country.capital}`}
                                </p>}
                            </div>
                            {isLoading && <Shimmer/>}
                        </div>
                    )
                    
                })}
            </div>
        </>
        
    )
}

export default Countries