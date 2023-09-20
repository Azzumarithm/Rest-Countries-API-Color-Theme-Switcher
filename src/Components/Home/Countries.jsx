import React from 'react'
import '../../App.css'
import '../../../data.json'
import { useFetchCountries } from '../CustomHook/useFetchCountries'


const Countries = ({ URL }) => {

    const { isLoading, isError, countries} = useFetchCountries(URL)

    if (isLoading) {

        return <h2>Loading...</h2>;

    }

    if (isError) {

        return <h2>There was an error...</h2>;

    }

    // const countryArray = Object.values(countries)

    // console.log(countryArray)

    return (
        <div className={'countries-container'}>
            {countries.map((country) => {
                
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