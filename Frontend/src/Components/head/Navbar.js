import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import FurtherNav from './FurtherNav';
import images from '../../assets/images';

const Navbar = () => {
  const [showFurtherNav, setShowFurtherNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navWrapperRef = useRef();

  // ✅ Track screen resize for mobile state
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ Close menu on outside click
  const handleClickOutside = (e) => {
    if (navWrapperRef.current && !navWrapperRef.current.contains(e.target)) {
      setShowFurtherNav(false);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={navWrapperRef}>
      <nav className={styles.navbar}>
        {/* Left Logo */}
        <div className={styles.left}>
          <h1 className={styles.logo}>ZIION TECHNOLOGY</h1>
        </div>

        {/* ✅ Hamburger only if isMobile */}
        {isMobile && (
          <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <img src={images.hamburger} alt="hamburger" />
          </div>
        )}

        {/* Center Menu */}
        <div className={`${styles.center} ${menuOpen ? styles.showMenu : ''}`}>
          <ul className={styles.mainMenuUl}>
            <Link to="/" className={styles.link}><li className={styles.menu}>Home</li></Link>

            {/* Courses Dropdown */}
            <div
              className={styles.dropdownWrapper}
              onMouseEnter={() => !isMobile && setShowFurtherNav(true)}
              onMouseLeave={() => !isMobile && setShowFurtherNav(false)}
              onClick={() => isMobile && setShowFurtherNav(prev => !prev)}
            >
              <li className={styles.menu}>Courses</li>
              {showFurtherNav && (
                <div className={styles.middleMenu}>
                  <FurtherNav />
                </div>
              )}
            </div>

            <Link to="/services" className={styles.link}><li className={styles.menu}>Services</li></Link>
            <Link to="/placement" className={styles.link}><li className={styles.menu}>Placement</li></Link>
            <Link to="/aboutus" className={styles.link}><li className={styles.menu}>About Us</li></Link>
            <Link to="/contact-us" className={styles.link}><li className={styles.menu}>Contact Us</li></Link>
          </ul>
        </div>

        {/* Right Button */}
        <div className={styles.right}>
          <Link to="/signup">
            <button className={styles.headerBtn}>Download Certificate</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
