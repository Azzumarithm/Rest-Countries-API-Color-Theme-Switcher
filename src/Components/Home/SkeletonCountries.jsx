import React from 'react'
import SkeletonElement from './SkeletonElement'
import Shimmer from './Shimmer'
import '../../App.css'

const SkeletonCountries = () => {
  return (
    <div className={`skeleton-wrapper`}>
        <SkeletonElement type={`country-image`} />
        <SkeletonElement type={`country-name`} />
        <SkeletonElement type={`text`} />
        <SkeletonElement type={`text`} />
        <SkeletonElement type={`text`} />
        <Shimmer />

    </div>
  )
}

export default SkeletonCountries