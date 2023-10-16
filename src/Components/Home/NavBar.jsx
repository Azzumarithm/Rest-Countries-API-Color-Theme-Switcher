import React, { useEffect } from 'react';
import '../../App.css';
import sunnyicon from '../../assets/images/sunny-outline.svg';
import moonicon from '../../assets/images/moon-outline.svg';
import { useGlobalContext } from '../Context/Context';

const NavBar = () => {
  const { theme, setTheme, themeLocalStorage } = useGlobalContext();

  
  useEffect(() => {
    
    if (themeLocalStorage === 'Dark') {
      document.body.classList.add('darkmode');
    } else {
      document.body.classList.remove('darkmode');
    }
  });

  const handleTheme = (e) => {
    e.preventDefault()
    if (themeLocalStorage === 'Dark') {
      localStorage.setItem('themeLocalStorage', '');
    } else {
      localStorage.setItem('themeLocalStorage', 'Dark');
    }

    setTheme(localStorage.getItem('themeLocalStorage'))

  };

  return (
    <div className={`navbar`}>
      <h1 className={`navbar-title`}>Where in the world?</h1>
      <div className={`theme`}>
        {/* <img src={theme ? sunnyicon : moonicon} className={`theme-icon ${theme ? 'sun-theme' : 'moon-theme'} `} alt="theme-icon" /> */}
        {!theme ? <svg xmlns="http://www.w3.org/2000/svg" className={`theme-icon`} viewBox="0 0 512 512"><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg> :
        
        <svg xmlns="http://www.w3.org/2000/svg" className={`theme-icon`} viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"/><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/></svg>}
        <button className={'theme-btn'} onClick={handleTheme}>
          {theme ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
