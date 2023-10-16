import React, { useEffect } from 'react'
import { useGlobalContext } from '../Context/Context'
import '../../App.css'

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import axios from "axios"
const apiToken = import.meta.env.VITE_REACT_MAP_TOKEN

const Country = () => {
  const { countryCode, setCountryCode, countries, setCountries, region, coordinates, setCoordinates, countryShortCode, setCountryShortCode, theme } = useGlobalContext()
  const [latitude, longitude] = coordinates

  const handleBackToHome = (e) => {
    setCountryCode(null)
  }

  const handleBordersClick = (e) => {
    let target = e.target
    while (target && !target.classList.contains('country-border-btn')) {
      target = target.parentElement
    }

    setCountryCode(e.target.textContent)
    setCountryShortCode(target.classList[1])
  }

  useEffect(() => {
    const geoCodeCountry = async () => {
      try {
        const response = await axios.get(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${countryCode}.json?access_token=${apiToken}`
        );

        const data = response.data;
        
        const countriesData = data.features
        for (let countryData of countriesData) {
          let apiShortCode = countryData["properties"]["short_code"]
          if (apiShortCode === countryShortCode.toLowerCase() || countryData["Matching_Text"] === countryCode) {
            let [longitude, latitude] = countryData.center;

            setCoordinates([latitude, longitude]);
            

          }
        }

      } catch (error) {
        console.error('Error geocoding country:', error)
      }
    }
    geoCodeCountry()
  }, [countryCode])


  return (
    <>

      <div className={`country-page-container`}>
        <button className="back-btn" onClick={handleBackToHome}>
          <svg fill={theme === 'Dark' ? `#ffffff` : `#000000`} height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 511.999 511.999" xml: space="preserve">
            <g>
              <g>
                <polygon points="511.999,145.102 470.412,145.102 470.412,235.206 79.606,235.206 200.941,113.871 171.535,84.465 0,255.999 
			171.535,427.533 200.941,398.128 79.606,276.792 511.999,276.792 		"/>
              </g>
            </g>
          </svg>Back</button>
        {
          countries.filter((country) => {
            return country.cca3 === countryCode
          }).map((country) => {

            const keys = Object.keys(country.name.nativeName || {})
            const bordersArray = country.borders

            const newBordersArray = bordersArray?.map((border) => {

              const matchingCountry = countries.find((country) => country.cca3 === border);
              if (matchingCountry) {
                return [border, matchingCountry.cca2];
              }
            })

            

            return (
              <>
                <div key={country.cca3} className={`country-page-subcontainer ${country.cca3}`}>
                  <img src={country.flags.png} alt={`country-page-image ${country.cca3}`} className={`country-page-image ${country.cca3}`} />

                  <div className="country-page-descriptions-container">
                    <h1 className="country-page-name">{country.name.common}</h1>

                    <div className="country-page-description-subcontainer">
                      <div className="country-desc first-column">
                        <p className={`country-page-description country-native-name`}><strong>Native Name</strong> : {`${country.name.nativeName?.[keys[0]]?.common || country.name.nativeName?.[keys[0]]?.official}`}
                        </p>
                        <p className={`country-page-description country-population`}><strong>Population</strong> : {`${country.population.toLocaleString()}`}
                        </p>
                        <p className={`country-page-description country-region`}><strong>Region</strong> : {`${country.region}`}
                        </p>
                        <p className={`country-page-description country-subregion`}><strong>Sub Region</strong> : {`${country.subregion}`}
                        </p>
                      </div>

                      <div className="country-desc second-column">
                        <p className={`country-page-description country-capital`}><strong>Capital</strong> : {`${country.capital}`}
                        </p>
                        <p className={`country-page-description country-currencies`}><strong>Currencies</strong> : {`${Object.keys(country.currencies || {})}`}
                        </p>
                        <p className={`country-page-description country-languages`}><strong>Languages</strong> : {`${Object.values(country.languages || {})}`}
                        </p>
                      </div>

                    </div>

                    {bordersArray && <div className="border-countries-container">
                      <p><strong>Border Countries:</strong></p>
                      <div className="country-border-btn-container">
                        {newBordersArray?.map((border) => {
                          return (
                            <button key={border[0]} className={`country-border-btn ${border[1]}`} onClick={handleBordersClick}>{border[0]}</button>
                          )
                        })}
                      </div>
                    </div>}
                  </div>
                </div>

                {latitude !== 0 && longitude !== 0 && (
                  <MapContainer key={`${latitude}-${longitude}`} center={[latitude, longitude]} zoom={5} scrollWheelZoom={true}>
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[latitude, longitude]} />
                  </MapContainer>
                )}
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Country