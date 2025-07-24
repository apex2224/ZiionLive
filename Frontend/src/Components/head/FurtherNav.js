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
  
      <div className={styles.middleMenu} ref={carouselRef}>
        <ul className={styles.middleMenuList}>
         
          <li className={styles.menuItem}>
            <Link to="#" className={styles.furtherMenuLink}>
              <i className="icon fas fa-sync"></i> All Courses
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="#" className={styles.furtherMenuLink}>
              <i className="icon fas fa-code"></i> Industrial Training
            </Link>
          </li>
        </ul>
      </div>
        
  );
};

export default FurtherNav;
