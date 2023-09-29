import React from 'react'
import '../../App.css'
import '../../../data.json'
import { useFetchCountries } from '../Actions/useFetchCountries'
import { useGlobalContext } from '../Context/Context'


const Countries = () => {

    const { URL, searchCountryResults, region, countryCode, setCountryCode, countriesLimit, filterCountryResults, setFilterCountryResults } = useGlobalContext()

    const { isLoading, isError } = useFetchCountries(URL)

    if (isLoading) {

        return <h2>Loading...</h2>;

    }


    if (isError) {

        return <h2>There was an error...</h2>;

    }

    const handleSelectCountry = (e) => {
        let target = e.target
        while (target && !target.classList.contains('country-subcontainer')) {
            target = target.parentElement
        }

        setCountryCode(target.classList[1])

    }


    return (
        <div className={'countries-container'} onClick={handleSelectCountry}>
            {searchCountryResults?.filter((country) => {
                if (region === null || region === "All"){
                    return country
                }

                return country.region === region
            }).slice(0,countriesLimit).map((country) => {
                return (
                    <div key={country.flag} className={`country-subcontainer ${country.cca3}`}>
                        <img src={country.flags.png} className={`country-image ${country.cca3}`} alt={`country-image ${country.cca3}`} />

                        <div className="country-descriptions">
                            <h2 className={`country-name`}>{country.name.common}</h2>

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
                
            })}
        </div>

    )
}

export default Countries