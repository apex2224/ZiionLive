 import React from 'react'
 import { Link } from 'react-router'
 import styles from './curiousSection.module.css'
 import images from '../../../assets/images'

 
 const CuriousSection = () => {
   return (
     <div>
       <div className={styles.curiousSectionWrapper}>
      <div className={styles.curiousSectionContainer}>
        <div className={styles.curiousSectionImage}>
          <img src={images.curiousimg} alt="Curious illustration" />
        </div>
        <div className={styles.curiousSectionContent}>
          <h2 className={styles.curiousSectionTitle}>Curious about Mediator?</h2>
          <p className={styles.curiousSectionText}>
            Book a demo with our experts to learn more about Mediator and how it can help your business
          </p>
          <div className={styles.curiousSectionButtons}>
            <button className={styles.curiousSectionDemoBtn}>Request a demo</button>
            <Link to='/signup'><button className={styles.curiousSectionFreeBtn}>Get started for free</button></Link>
          </div>
        </div>
      </div>
    </div>
     </div>
   )
 }
 
 export default CuriousSection
 