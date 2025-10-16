import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import FurtherNav from './FurtherNav';
import images from '../../assets/images';
import StudentSearch from '../admin/Studentform';
import Refrencenumber from '../refrenceNumber/Rerencenumber';
import Help from '../help/Help';

const Navbar = () => {
  const [showFurtherNav, setShowFurtherNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [refrenceForm, setRefrenceForm] = useState(false);


  // loading //
    const [showDashboard, setShowDashboard] = useState(false);


  const navWrapperRef = useRef(null);
  const furtherNavRef = useRef(null);

  // Update isMobile state on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close submenu/menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowFurtherNav(false);
      setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close submenu/menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navWrapperRef.current &&
        !navWrapperRef.current.contains(e.target) &&
        (!furtherNavRef.current || !furtherNavRef.current.contains(e.target))
      ) {
        setShowFurtherNav(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeAllMenus = () => {
    setShowFurtherNav(false);
    setMenuOpen(false);
  };

  const handleCoursesClick = () => {
    if (isMobile) {
      setShowFurtherNav((prev) => !prev);
    } else {
      setShowFurtherNav(true);
    }
  };

  const handleCloseForm = () => {
    setRefrenceForm(false);
  };

  return (
    <>
      <div ref={navWrapperRef} className={styles['parent-navbar']}>
        <nav className={styles.navbar}>
          <div className={styles.left}>
            <Link to="/" onClick={closeAllMenus}>
              <img src={images.ziionLogo} alt="Logo" />
            </Link>
          </div>

          {/* Hamburger for mobile */}
          {isMobile && (
            <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
              {images?.hamburger ? (
                <img src={images.hamburger} alt="hamburger" />
              ) : (
                <span className={styles.hamburgerFallback}>☰</span>
              )}
            </div>
          )}

          {/* Main menu */}
          <div className={`${styles.mainMenuContainer} ${menuOpen ? styles.showMenu : ''}`}>
            <ul className={styles.mainMenuList}>
              <Link to="/" className={styles.link} onClick={closeAllMenus}>
                <li className={styles.mainMenuItem}>Home</li>
              </Link>

              <li
                className={styles.mainMenuItem}
                onClick={handleCoursesClick}
                onMouseEnter={() => !isMobile && setShowFurtherNav(true)}
              >
                Courses
                {showFurtherNav && (
                  <div
                    ref={furtherNavRef}
                    className={isMobile ? styles.mobileFurtherNav : styles.externalFurtherNav}
                  >
                    <FurtherNav />
                  </div>
                )}
              </li>

              <Link to="/services" className={styles.link} onClick={closeAllMenus}>
                <li className={styles.mainMenuItem}>Services</li>
              </Link>

              <Link to="/placement" className={styles.link} onClick={closeAllMenus}>
                <li className={styles.mainMenuItem}>Placement</li>
              </Link>

              <Link to="/aboutus" className={styles.link} onClick={closeAllMenus}>
                <li className={styles.mainMenuItem}>About Us</li>
              </Link>

              <Link to="/contact-us" className={styles.link} onClick={closeAllMenus}>
                <li className={styles.mainMenuItem}>Contact Us</li>
                {showDashboard && <Help /> }
              </Link>

              {/* Mobile-only Download button inside menu */}
{isMobile && (
  <li className={styles.mainMenuItem}>
    <button
      className={styles.headerBtn}
      onClick={() => {
        setRefrenceForm(true);
        closeAllMenus();
      }}
    >
      Download Certificate
    </button>

    {refrenceForm && <div className={styles.refrenceForm}>
        <Refrencenumber onClose={handleCloseForm} />
      </div>}
  </li>
)}            </ul>

            {/* Desktop download button */}
            {!isMobile && (
              <button
                className={styles.headerBtn}
                onClick={() => {
                  setRefrenceForm(true);
                  closeAllMenus();
                }}
              >
                Download Certificate
              </button>
            )}
          </div>

          {refrenceForm && 
            <div>
              <Refrencenumber onClose={handleCloseForm} />
            </div>
          }
        </nav>
      </div>

      {/* Desktop submenu outside navbar */}
      {!isMobile && showFurtherNav && (
        <div ref={furtherNavRef} className={styles.externalFurtherNav}>
          <FurtherNav />
        </div>
      )}
    </>
  );
};

export default Navbar;
