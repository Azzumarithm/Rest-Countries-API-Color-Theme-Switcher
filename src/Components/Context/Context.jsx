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

  return (
    <GlobalContext.Provider value={{URL, isLoading,setIsLoading,isError,setIsError,countries,setCountries}}>
      {children}
    </GlobalContext.Provider>


  )

}

export default Context
