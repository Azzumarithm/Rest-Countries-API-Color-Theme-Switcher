import React from 'react'
import { useGlobalContext } from '../Context/Context'
import '../../App.css'


const Country = () => {
  const { countryCode, setCountryCode, countries, setCountries,region } = useGlobalContext()

  const handleBackToHome = (e) => {
    setCountryCode(null)
  }
  
  const handleBordersClick = (e) => {
    let target = e.target

    setCountryCode(e.target.textContent)
  }
  
  return (
    <div className={`country-page-container`}>
      <button className="back-btn" onClick={handleBackToHome}>Back</button>
      {
        countries.filter((country) => {
          return country.cca3 === countryCode
        }).map((country) => {

          const keys = Object.keys(country.name.nativeName || {})
          const bordersArray = country.borders
          return (
            <>
              <div key={country.flag} className={`country-page-container ${country.cca3}`}>
                <img src={country.flags.png} alt={`country-page-image ${country.cca3}`} className={`country-page-image ${country.cca3}`} />

                <div className="country-page-descriptions-container">
                  <h1 className="country-page-name">{country.name.common}</h1>

                  <div className="country-page-description-subcontainer">
                    <p className={`country-page-description country-native-name`}><strong>Native Name</strong> : {`${country.name.nativeName?.[keys[0]]?.common || country.name.nativeName?.[keys[0]]?.official}`}
                    </p>
                    <p className={`country-page-description country-population`}><strong>Population</strong> : {`${country.population.toLocaleString()}`}
                    </p>
                    <p className={`country-page-description country-region`}><strong>Region</strong> : {`${country.region}`}
                    </p>
                    <p className={`country-page-description country-region`}><strong>Sub Region</strong> : {`${country.subregion}`}
                    </p>
                    <p className={`country-page-description country-region`}><strong>Capital</strong> : {`${country.capital}`}
                    </p>
                    <p className={`country-page-description country-region`}><strong>Currencies</strong> : {`${Object.keys(country.currencies || {})}`}
                    </p>
                    <p className={`country-page-description country-region`}><strong>Languages</strong> : {`${Object.values(country.languages || {})}`}
                    </p>

                  </div>

                  {bordersArray && <div className="border-countries-container">
                    <p><strong>Border Countries:</strong></p>
                    {bordersArray?.map((border) => {
                      return (
                        <button className="country-border" onClick={handleBordersClick}>{border}</button>
                      )
                    })}
                  </div>}
                </div>
              </div>
            </>
          )
        })
      }
    </div>
  )
}

export default Country