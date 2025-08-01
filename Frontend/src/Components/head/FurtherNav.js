import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './FurtherNav.module.css';

const FurtherNav = () => {
  return (
    <div className={styles.middleMenu}>
      <ul className={styles.middleMenuList}>
        <li className={styles.menuItem}>
          <Link to="/allcourses" className={styles.furtherMenuLink}>
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
