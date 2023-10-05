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
    if (themeLocalStorage === '') {
      localStorage.setItem('themeLocalStorage', 'Dark');
    } else {
      localStorage.setItem('themeLocalStorage', '');
    }

    setTheme(localStorage.getItem('themeLocalStorage'))

  };

  return (
    <div className={`navbar`}>
      <h1 className={`navbar-title`}>Where in the world?</h1>
      <div className={`theme`}>
        {theme === '' && <img src={moonicon} className={'theme-icon'} alt="theme-icon" />}
        {theme === 'Dark' && (
          <img src={sunnyicon} className={'theme-icon'} alt="theme-icon" />
        )}
        <button className={'theme-btn'} onClick={handleTheme}>
          {theme === '' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
