import { useEffect } from "react";
import { useGlobalContext } from "../Context/Context";
import axios from "axios"

export const useFetchCountries = () => {

    const {isLoading,setIsLoading,isError,setIsError,countries,setCountries,URL} = useGlobalContext()

    useEffect(() => {

        const fetchCountries = async () => {

          try {

            const resp = await axios(URL);

            // console.log(resp);

            if (resp.status !== 200) {

              setIsError(true);

              setIsLoading(false);

              return;

            }

            const countries = await resp.data;

            setCountries(countries);


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