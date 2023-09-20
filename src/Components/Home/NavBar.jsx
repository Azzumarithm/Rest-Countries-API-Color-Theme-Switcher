import React from 'react'
import '../../App.css'
import sunnyicon from '../../assets/images/sunny-outline.svg'
import moonicon from '../../assets/images/moon-outline.svg'

const NavBar = () => {
  return (

    <div className={`navbar`}>
      <h1 className={`navbar-title`}>Where in the world?</h1>
      <div className={`theme`}>
        <img src={moonicon} className={'theme-icon'} alt="theme-icon"/>
        <button className={'theme-btn'}>Dark Mode</button>
      </div>
    </div>


  )
}

export default NavBar