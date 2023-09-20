import React from 'react'
import '../../App.css'
import '../../../data.json'
import { useFetchCountries } from '../Actions/useFetchCountries'
import { useGlobalContext } from '../Context/Context'


const Countries = ({ URL }) => {

    const {searchCountryResults,filterCountryResults,region} = useGlobalContext()

    const { isLoading, isError} = useFetchCountries(URL)

    if (isLoading) {

        return <h2>Loading...</h2>;

    }
    

    if (isError) {

        return <h2>There was an error...</h2>;

    }

    return (
        <div className={'countries-container'}>
            {searchCountryResults?.filter((country) => {
                if (region === null || region === "Worldwide"){
                    return country
                }

                return country.region === region
            }).map((country) => {
                
                return (
                    <div key={country.flag} className={`country-subcontainer ${country.name.common}`}>
                        <img src={country.flags.png} className={`country-image ${country.name.common}`} alt={`country-image${country.name.common}`} />

                        <div className="country-descriptions">
                            <h2 className={`country-name`}>{country.name.common}</h2>

                            <p className={`country-description country-population`}>
                                <strong>Population</strong> : {`${country.population}`}
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