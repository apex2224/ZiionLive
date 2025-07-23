import React from 'react'
import styles from './wordpress.module.css'
import images from '../../../assets/images'

function Wordpress() { 
  return (
    <div>
    <div className={styles.integrateWordPressWrapper}>
      <div className={styles.integrateWordPressImageContainer}>
        <img
          src=""
          alt="Background"
          className={styles.integrateWordPressImage}
        />
        <div className={styles.integrateWordPressOverlay}>
          <h1 className={styles.integrateWordPressHeading}>
            <span className={styles.integrateWordPressBold}>LET'S WORK</span>
            <span className={styles.integrateWordPressOutline}>TOGETHER</span>
          </h1>
        </div>
      </div>
    </div>

     <div className={styles.wpHeroSection}>
      <div className={styles.wpImageWrapper}>
        <img src={images.wordpressApp} alt="Background" className={styles.wpHeroImage} />
      </div>
      <div className={styles.wpOverlayContent}>
        <p className={styles.wpWelcomeText}>WELCOME TO NEXTMIND</p>
        <h1 className={styles.wpTitle}>
          AI-Driven solutions for a <br /> smarter tomorrow
        </h1>
        <p className={styles.wpDescription}>
          We are a cutting-edge AI agency fueled by innovation and purpose.
          Combining advanced technology with human insight.
        </p>
        <div className={styles.wpIconBox}>
          <span className={styles.wpIcon}>↗</span>
        </div>
      </div>  
    </div>


     <div className={styles.integrateWordPressWrapper}>
      <div className={styles.integrateWordPressImageContainer}>
        <img
          src=""
          alt="Background"
          className={styles.integrateWordPressImage}
        />
        <div className={styles.integrateWordPressOverlay}>
          <h1 className={styles.integrateWordPressHeading}>
            <span className={styles.integrateWordPressBold}>LET'S WORK</span>
            <span className={styles.integrateWordPressOutline}>TOGETHER</span>
          </h1>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Wordpress
