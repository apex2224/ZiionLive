import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Coversationchatbot.module.css'
import Footer from '../footer/Footer'
import LeverageChat from './LeverageChat'
import images from '../../assets/images'

const Conversationchatbot = () => {
  return (
    <div>
      <div className={styles.chatbotContainer}>
        <div className={styles.skillabText}>Ziion Technology</div>

        <div className={styles.integrationGrid}>

          <div style={{ top: '15%', left: '-5%' }} className={styles.appdiv}>
            <Link to="/web-development" className={styles.integrationLink}>
              <div><button className={styles.integrationButton}>Web Development</button></div>
              <div><img src={images.react} className={styles.app} alt="web development" /></div>
            </Link>
          </div>

          <div style={{ top: '10%', left: '40%' }} className={styles.appdiv}>
            <Link to="/ai" className={styles.integrationLink}>
              <div><button className={styles.integrationButton}>AI</button></div>
              <div><img src={images.scikitlearn} className={styles.app} alt="web development" /></div>
            </Link>
          </div>

          <div style={{ top: '42%', left: '-20%' }} className={styles.appdiv}>
            <Link to="/data-analytics" className={styles.integrationLink}>
              <button className={styles.integrationButton}>Data Analytics</button>
              <img src={images.tenserflow} className={styles.app} alt="data analytics" />
            </Link>
          </div>

          <div style={{ top: '35%', left: '15%' }} className={styles.appdiv}>
            <Link to="/digital-marketing" className={styles.integrationLink}>
              <button className={styles.integrationButton}>Digital Marketing</button>
              <img src={images.googleSheet} className={styles.app} alt="digital marketing" />
            </Link>
          </div>

          <div style={{ top: '40%', left: '90%' }} className={styles.appdiv}>
            <Link to="/ml" className={styles.integrationLink}>
              <button className={styles.integrationButton}>ML</button>
              <img src={images.pandas} className={styles.app} alt="ai-ml" />
            </Link>
          </div>

          <div style={{ top: '60%', left: '70%' }} className={styles.appdiv}>
            <Link to="/graphic-designing" className={styles.integrationLink}>
              <button className={styles.integrationButton}>Graphic Designing</button>
              <img src={images.adobe} className={styles.app} alt="graphic designing" />
            </Link>
          </div>

          <div style={{ top: '20%', left: '80%' }} className={styles.appdiv}>
            <Link to="/data-science" className={styles.integrationLink}>
              <button className={styles.integrationButton}>Data Science</button>
              <img src={images.python} className={styles.app} alt="data science" />
            </Link>
          </div>

          <div style={{ top: '40%', left: '50%' }} className={styles.appdiv}>
            <Link to="/web-designing" className={styles.integrationLink}>
              <button className={styles.integrationButton}>Web Designing</button>
              <img src={images.css} className={styles.app} alt="web designing" />
            </Link>
          </div>

          <div style={{ top: '60%', left: '20%' }} className={styles.appdiv}>
            <Link to="/mobileapp" className={styles.integrationLink}>
              <button className={styles.integrationButton}>Mobile App Development</button>
              <img src={images.mobileapp} className={styles.app} alt="mobile app development" />
            </Link>
          </div>

        </div>
      </div>

      <LeverageChat />
      
      <Footer />
    </div>
  )
}

export default Conversationchatbot
