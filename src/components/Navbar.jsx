import { useState } from 'react';
import logo from "../assets/navLogo.png";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <span>BeatBliss</span>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#musicContainer">Music</a></li>
        <li><a href="#topSongs">Top Songs</a></li>
        <li><a href="#topSingers">Best Singers</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
