import React from 'react'
import '../../App.css'
import { useGlobalContext } from '../Context/Context'
import Shimmer from './Shimmer'

const SkeletonElement = ({ type }) => {

    const { URL, searchCountryResults, region, countryCode, setCountryCode, countriesLimit, filterCountryResults, setFilterCountryResults } = useGlobalContext()
    const classes = `skeleton ${type}`
    return (

        <div className={classes}></div>
        
    )
}

export default SkeletonElement