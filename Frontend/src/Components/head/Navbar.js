import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import FurtherNav from './FurtherNav';
import images from '../../assets/images';

const Navbar = () => {
  const [showFurtherNav, setShowFurtherNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [furtherNavLocked, setFurtherNavLocked] = useState(false); // track if menu is manually opened

  const navWrapperRef = useRef();
  const coursesRef = useRef();
  const furtherNavRef = useRef();
  const justClickedCourses = useRef(false); // to delay outside click close

  // Update screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Click outside logic
  const handleClickOutside = (e) => {
    if (justClickedCourses.current) return;

    if (
      navWrapperRef.current &&
      !navWrapperRef.current.contains(e.target) &&
      (!furtherNavRef.current || !furtherNavRef.current.contains(e.target))
    ) {
      setShowFurtherNav(false);
      setFurtherNavLocked(false);
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMobileMenu = () => {
    if (isMobile) {
      setMenuOpen(false);
      setShowFurtherNav(false);
      setFurtherNavLocked(false);
    }
  };

  const handleCoursesClick = () => {
    setShowFurtherNav(true);
    setFurtherNavLocked(true);
    justClickedCourses.current = true;
    setTimeout(() => {
      justClickedCourses.current = false;
    }, 100);
  };

  return (
    <>
      <div ref={navWrapperRef}>
        <nav className={styles.navbar}>
          <div className={styles.left}>
            <h1 className={styles.logo}>ZIION TECHNOLOGY</h1>
          </div>

          {isMobile && (
            <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
              <img src={images.hamburger} alt="hamburger" />
            </div>
          )}

          <div className={`${styles.mainMenuContainer} ${menuOpen ? styles.showMenu : ''}`}>
            <ul className={styles.mainMenuList}>
              <Link to="/" className={styles.link} onClick={closeMobileMenu}>
                <li className={styles.mainMenuItem}>Home</li>
              </Link>

              {/* Courses menu item */}
              <li
                className={styles.mainMenuItem}
                ref={coursesRef}
                onClick={handleCoursesClick}
                onMouseEnter={() => !isMobile && setShowFurtherNav(true)}
                onMouseLeave={() => !isMobile && !furtherNavLocked && setShowFurtherNav(false)}
              >
                Courses
              </li>

              <Link to="/services" className={styles.link} onClick={closeMobileMenu}>
                <li className={styles.mainMenuItem}>Services</li>
              </Link>
              <Link to="/placement" className={styles.link} onClick={closeMobileMenu}>
                <li className={styles.mainMenuItem}>Placement</li>
              </Link>
              <Link to="/aboutus" className={styles.link} onClick={closeMobileMenu}>
                <li className={styles.mainMenuItem}>About Us</li>
              </Link>
              <Link to="/contact-us" className={styles.link} onClick={closeMobileMenu}>
                <li className={styles.mainMenuItem}>Contact Us</li>
              </Link>
            </ul>
          </div>

          <div className={styles.right}>
            <Link to="/signup">
              <button className={styles.headerBtn}>Download Certificate</button>
            </Link>
          </div>
        </nav>
      </div>

      {/* FurtherNav menu (dropdown content) */}
      {showFurtherNav && (
        <div ref={furtherNavRef} className={styles.externalFurtherNav}>
          <FurtherNav />
        </div>
      )}
    </>
  );
};

export default Navbar;
