import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import styles from './Navbar.module.css';
import FurtherNav from './FurtherNav';
import images from '../../assets/images'

const Navbar = () => {
  const [showFurtherNav, setShowFurtherNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navWrapperRef = useRef(); // wraps navbar + submenu
  const allCoursesRef = useRef(); // specific ref for "All Courses" and submenu area

  // ✅ Close on outside click
  const handleClickOutside = (e) => {
    if (
      navWrapperRef.current &&
      !navWrapperRef.current.contains(e.target)
    ) {
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
        {/* Left */}
        <div className={styles.left}>
          <h1 className={styles.logo}>ZIION TECHNOLOGY</h1>
        </div>

        {/* Hamburger for mobile */}
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src={images.hamburger} alt='hamburger' />
        </div>

        {/* Center */}
        <div
          className={`${styles.center} ${menuOpen ? styles.showMenu : ''}`}
        >
          <ul className={styles.mainMenuUl}>
            <Link to="/" className={styles.link}>
              <li className={styles.menu}>Home</li>
            </Link>

            {/* ✅ All Courses Dropdown */}
            <div ref={allCoursesRef}>
              <li
                className={styles.menu}
                onClick={() => setShowFurtherNav((prev) => !prev)}
                onMouseEnter={() => window.innerWidth > 768 && setShowFurtherNav(true)}
                onMouseLeave={() => window.innerWidth > 768 && setShowFurtherNav(false)}
              >
                Courses
              </li>
              {showFurtherNav && <FurtherNav />}
            </div>

            <Link to="/services" className={styles.link}>
              <li className={styles.menu}>Services</li>
            </Link>
            <Link to="/placement" className={styles.link}>
              <li className={styles.menu}>Placement</li>
            </Link>
            <Link to="/aboutus" className={styles.link}>
              <li className={styles.menu}>About US</li>
            </Link>
            <Link to="/contact-us" className={styles.link}>
              <li className={styles.menu}>Contact Us</li>
            </Link>
          </ul>
        </div>

        {/* Right */}
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
