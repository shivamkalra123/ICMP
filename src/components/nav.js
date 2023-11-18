import React, { useState, useEffect } from 'react';
import '../comp_css/nav.css';
import Image from '../media/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // Define menuOpen

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <div>
    <div className={`parent_nav ${visible ? 'active' : 'hidden'}`}>
      <nav className={`navbar ${visible && prevScrollPos > 10 ? 'active' : ''}`}>
        <div className='wrapper'>
          <div className="trapezium">
            <div className="search-container">
              <ul className='nav-links'>
                <li><Link className='b' to='/academic'>Academics</Link> </li>
                <li><a className='b' href='#'>Strategic</a> </li>
                <li><a className='b' href='#'>Priorities</a> </li>
                <li><a className='b' href='#'>Research</a> </li>
              </ul>
            </div>
          </div>
          <Link to="/">  <img className='logo' src={Image} alt='not_found' /></Link>
          <div className="trapezium1">
            <div className='link'>
              <ul className="nav-links">
                <li><Link className='b' to="/about-icmp">About Icmp</Link></li>
                <li><Link className='b' to="/faq">FAQ</Link></li>
                <li><Link className='b' to="/health">Mental Health</Link></li>
                <li><Link className='b' to="/login">Login</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      
    </div>
    <div className='respo'>
    <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`links ${menuOpen ? 'open' : ''}`}>
        <div><a href="#aboutus">About Us</a></div>
        <div><a href="#tracks">Tracks</a></div>
        <div><a href="#sponsors">Sponsors</a></div>
        <div><a href="#faq">FAQ</a></div>
      </div>
      <div><a href="#"><img className="momentum-logo" src={Image} alt="logo" /></a></div>
      </div>
    </div>
  );
}

export default Navbar;
