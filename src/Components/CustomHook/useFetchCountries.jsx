import { useEffect } from "react";
import { useGlobalContext } from "../Context/Context";


export const useFetchCountries = () => {

    const {isLoading,setIsLoading,isError,setIsError,countries,setCountries,URL} = useGlobalContext()

    useEffect(() => {

        const fetchCountries = async () => {

          try {

            const resp = await fetch(URL);

            // console.log(resp);

            if (!resp.ok) {

              setIsError(true);

              setIsLoading(false);

              return;

            }

            const countries = await resp.json();

            setCountries(countries);
            console.table(countries)

          } catch (error) {

            setIsError(true);

            // console.log(error);

          }

          // hide loading

          setIsLoading(false);

        };

        fetchCountries();

      }, []);

  

      return {isLoading,isError, countries}
}