import React, { useState, createContext, useContext, ReactNode, useEffect } from "react";

import "../../App.css";

const GlobalContext = createContext(undefined);

const URL = "https://restcountries.com/v3.1/all"



export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalContextProvider");
  }
  return context;
};



const Context = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState(false);

  const [countries, setCountries] = useState(null);

  const [region, setRegion] = useState("All")

  const [filterCountryResults, setFilterCountryResults] = useState([])

  const [searchCountryResults, setSearchCountryResults] = useState([])

  const [countriesLimit, setCountriesLimit] = useState(8)

  const [dropdownState, setDropDownState] = useState(true)

  const [countryCode, setCountryCode] = useState(null)

  const [countryShortCode, setCountryShortCode] = useState(null)

  const [coordinates, setCoordinates] = useState([0,0])

  let themeLocalStorage = localStorage.getItem('themeLocalStorage');

  const [theme, setTheme] = useState(themeLocalStorage)

  useEffect(() => {
    setSearchCountryResults(countries)
  }, [countries])


  useEffect(() => {

    const filterResults = () => {
      if (region === null || region === 'All') {

        setFilterCountryResults(searchCountryResults);
      } else {

        const filteredResults = searchCountryResults.filter(
          (country) => country.region === region
        );
        setFilterCountryResults(filteredResults);
      }
    };


    filterResults();
  }, [region, searchCountryResults, setFilterCountryResults]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    })
  }, []);

  

  return (
    <GlobalContext.Provider value={{ URL, isLoading, setIsLoading, isError, setIsError, countries, setCountries, searchCountryResults, setSearchCountryResults, filterCountryResults, setFilterCountryResults, dropdownState, setDropDownState, region, setRegion, countryCode, setCountryCode, countriesLimit, setCountriesLimit,isVisible,coordinates, setCoordinates,theme, setTheme,themeLocalStorage,countryShortCode, setCountryShortCode}}>
      {children}
    </GlobalContext.Provider>


  )

}

export default Context
