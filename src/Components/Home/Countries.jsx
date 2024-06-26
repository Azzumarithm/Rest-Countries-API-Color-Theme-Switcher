import React, { useEffect } from 'react'
import '../../App.css'
import '../../../data.json'
import { useFetchCountries } from '../Actions/useFetchCountries'
import { useGlobalContext } from '../Context/Context'
import SkeletonElement from './SkeletonElement'
import Shimmer from './Shimmer'
import SkeletonCountries from './SkeletonCountries'


const Countries = () => {

    const { URL, searchCountryResults, region, countryCode, setCountryCode, countriesLimit, filterCountryResults, setFilterCountryResults, countryShortCode, setCountryShortCode} = useGlobalContext()

    const { isLoading, isError } = useFetchCountries(URL)
    
    const handleSelectCountry = (e) => {
        let target = e.target
        while (target && !target.classList.contains('country-subcontainer')) {
            target = target.parentElement
        }

        console.log(target.classList[1])
        console.log(target.classList[2].toLowerCase())

        setCountryCode(target.classList[1])
        setCountryShortCode(target.classList[2].toLowerCase())

    }

    useEffect(() => {
      }, [countriesLimit]);


    return (
        <>

            <div className={'countries-container'} onClick={handleSelectCountry}>
                
                {!isLoading && searchCountryResults?.filter((country) => {
                    if (region === null || region === "All") {
                        return country
                    }

                    return country.region === region
                }).slice(0, countriesLimit).map((country,index) => {
                    return (
                        <div key={index}className={`country-subcontainer ${country.cca3 || country.alpha3Code} ${country.cca2 || country.alpha2Code}`}>
                            <img src={country.flags.png} className={`country-image ${country.cca3 || country.alpha3Code}`} alt={`country-image ${country.cca3 || country.alpha3Code}`} />
                            <div className="country-descriptions">
                                <h2 className={`country-name`}>{country.name.common || country.name}</h2>
                                <p className={`country-description country-population`}>
                                    <strong>Population</strong> : {`${country.population.toLocaleString()}`}
                                </p>
                                <p className={`country-description country-region`}>
                                    <strong>Region</strong> : {`${country.region}`}
                                </p>
                                <p className={`country-description country-capital`}>
                                    <strong>Capital</strong> : {`${country.capital}`}
                                </p>
                            </div>


                        </div>
                    )

                })

                }

                {isLoading && Array.from({ length: countriesLimit }).map((index) => {

                    return (
                        <div className={`country-subcontainer`}>
                            <SkeletonCountries key={index} />
                        </div>
                    )
                })}



            </div>
        </>

    )
}

export default Countries
