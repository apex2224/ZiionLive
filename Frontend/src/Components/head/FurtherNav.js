import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import styles from './FurtherNav.module.css';

const FurtherNav = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const prevBtn = document.querySelector(`.${styles.carouselBtn}.${styles.prev}`);
    const nextBtn = document.querySelector(`.${styles.carouselBtn}.${styles.next}`);
    const scrollAmount = 200;

    const scrollLeft = () => carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    const scrollRight = () => carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });

    const updateButtonVisibility = () => {
      const isMobile = window.innerWidth <= 768;
      if (prevBtn && nextBtn) {
        prevBtn.style.display = isMobile ? 'block' : 'none';
        nextBtn.style.display = isMobile ? 'block' : 'none';
      }
    };

    updateButtonVisibility();
    window.addEventListener('resize', updateButtonVisibility);

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', scrollLeft);
      nextBtn.addEventListener('click', scrollRight);
    }

    return () => {
      window.removeEventListener('resize', updateButtonVisibility);
      if (prevBtn && nextBtn) {
        prevBtn.removeEventListener('click', scrollLeft);
        nextBtn.removeEventListener('click', scrollRight);
      }
    };
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.middleMenu} ref={carouselRef}>
        <ul className={styles.middleMenuList}>
          <li className={styles.menuItem}>
            <Link to="/widget" className={styles.furtherMenuLink}>
              <i className="icon fas fa-video"></i> Widget
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/aichatbot" className={styles.furtherMenuLink}>
              <i className="icon fas fa-robot"></i> AI Chatbot
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.furtherMenuLink}>
              <i className="icon fas fa-database"></i> CRM
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.furtherMenuLink}>
              <i className="icon fas fa-envelope"></i> Shared Inbox
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.furtherMenuLink}>
              <i className="icon fas fa-globe"></i> AI
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/knowledge" className={styles.furtherMenuLink}>
              <i className="icon fas fa-th-large"></i> Knowledge
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.furtherMenuLink}>
              <i className="icon fas fa-ticket-alt"></i> Ticketing System
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.furtherMenuLink}>
              <i className="icon fas fa-sync"></i> Status Page
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.furtherMenuLink}>
              <i className="icon fas fa-code"></i> Chat SDK
            </Link>
          </li>
        </ul>
      </div>

     

      {/* FontAwesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
    </div>
  );
};

export default FurtherNav;
