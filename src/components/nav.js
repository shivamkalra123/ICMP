import React, { useState, useEffect } from 'react';
import '../comp_css/nav.css';
import Image from '../media/logo.png';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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

  return (
    <div className={`parent_nav ${visible ? 'active' : 'hidden'}`}>
      <nav className={`navbar ${visible && prevScrollPos > 10 ? 'active' : ''}`}>
        <div className='wrapper'>
          <div className="trapezium">
            <div className="search-container">
              <ul className='nav-links'>
              <li><a className='b' href='#'>Academics</a> </li>
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
  );
}

export default Navbar;
