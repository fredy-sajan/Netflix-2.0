// Hooks
import React, { useEffect, useState } from 'react';

// CSS import
import './stylesheet/style.css';

// Asset's import
import netflixLogo from '../../assets/images/netflix-logo/netflix-logo.png';
import netflixAvatarLogo from '../../assets/images/netflix-avatar-logo/netflix-avatar.png';


function NavBar() {

  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav_bar ${show && 'nav_background_color'}`}>
      <div className="nav_contents">

        <div className="netflix_logo_div">
          <img className='netflix_logo' src={netflixLogo} alt="Logo" />
        </div>

        <div className="netflix_avatar_logo_div">
          <img className='netflix_avatar_logo' src={netflixAvatarLogo} alt="Avatar_Logo" />
        </div>

      </div>
    </div>
  )
}

export default NavBar