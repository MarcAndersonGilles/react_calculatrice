import React, { useRef } from 'react';

import "../sass/scss/navbar.scss";

import { Link } from 'react-router-dom';

function Navbar() {
  const hamburgerRef = useRef(null);
  const navbarRef = useRef(null);

  const handleClick = () => {
    try {
      hamburgerRef.current.classList.toggle("active");
      navbarRef.current.classList.toggle("active");
    } catch (error) {
      console.error(error);
    }
  }

  const handleLinkClick = () => {
    hamburgerRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  }

  return (
    <nav className ="navbar">
  
        <div ref={hamburgerRef} className="hamburger-lines" onClick={handleClick}>
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
      
        

        <ul ref={navbarRef} className="navbar__list ">
          <li className="navbar__item">
            <Link to="/" className="navbar__link" onClick={handleLinkClick}>Application</Link>
          </li>
          {/* <li className="navbar__item">
            <Link to="/about" className="navbar__link" onClick={handleLinkClick}>Catalogue</Link>
          </li> */}
          {/* <li className="navbar__item">
            <Link to="/profile" className="navbar__link" onClick={handleLinkClick}>Contact</Link>
          </li> */}
        </ul>
      
        
    </nav>
  );
};

export default Navbar;
