import React, { useEffect, useState} from 'react';
import styles from './integrationnextsection.module.css';
import Navbar  from '../head/Navbar';
import images from '../../assets/images';


const Integration = () => {

   const [projectCount, setProjectCount] = useState(0);
  const [industryCount, setIndustryCount] = useState(0);

  useEffect(() => {
    const animateCounter = (target, setter) => {
      let start = 0;
      const end = parseInt(target);
      let duration = 2000;
      let incrementTime = Math.floor(duration / end);
      const timer = setInterval(() => {
        start += 1;
        setter(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    };

    animateCounter(150, setProjectCount);
    animateCounter(20, setIndustryCount);
  }, []);
  return (
    <div>
        <Navbar/>
        <div className={styles.integrationWrapper}>
      <div className={styles.integrationContent}>
        <h1 className={styles.integrationTitle}>
          <span className={styles.integrationPart1}>INNOVATIVE</span><br></br>
          <span className={styles.integrationPart2}>AI</span>
          <span className={styles.integrationPart3}><i>SOLUTIONS</i></span>
        </h1>
      </div>
      <div className={styles.integrationBackground}>
        <img
          src={images.integrationHero} // Replace with your futuristic image URL
          alt="Innovative AI Background"
          className={styles.integrationImage}
        />
      </div>
    </div>

        <div className={styles.integrationNext}>
        <div className={styles.pageLayout}>
      <header className={styles.headerSection}>
        <span className={styles.titleIcon}>✨</span>
        <h1 className={styles.mainTitle}>PROJECTS</h1>
      </header>


      <main className={styles.contentArea}>
        <div className={styles.projectPanel}>
          <div className={styles.integrationimage}>
            <img
            src={images.integrationImage} // Replace with your hummingbird image URL
            alt="Hummingbird Project"
            className={styles.projectVisual}/></div>
          <div className={styles.projectDetails}>
            <span className={styles.dateLabel}>25 July, 2024</span>
            <h2 className={styles.projectHeading}>Machine Learning</h2>
            <p className={styles.projectText}>
              Duise sagittise rosend acum oneste curos adipiscing contacting the everyday agency seconder overseas
            </p>
            <a href="#" className={styles.actionLink}>Explore Now ›</a>
          </div>
        </div>
      </main>

      <main className={styles.contentArea}>
        <div className={styles.projectPanel}>
         
          <div className={styles.projectDetails}>
            <span className={styles.dateLabel}>25 July, 2024</span>
            <h2 className={styles.projectHeading}>Machine Learning</h2>
            <p className={styles.projectText}>
              Duise sagittise rosend acum oneste curos adipiscing contacting the everyday agency seconder overseas
            </p>
            <a href="#" className={styles.actionLink}>Explore Now ›</a>
          </div>
          <div className={styles.integrationimage}>
            <img
            src={images.integrationImage2} 
            alt="Hummingbird Project"
            className={styles.projectVisual}/></div>
        </div>
      </main>


      <main className={styles.contentArea}>
        <div className={styles.projectPanel}>
          <div className={styles.integrationimage}>
            <img
            src={images.integrationImage3} // Replace with your hummingbird image URL
            alt="Hummingbird Project"
            className={styles.projectVisual}/></div>
          <div className={styles.projectDetails}>
            <span className={styles.dateLabel}>25 July, 2024</span>
            <h2 className={styles.projectHeading}>Machine Learning</h2>
            <p className={styles.projectText}>
              Duise sagittise rosend acum oneste curos adipiscing contacting the everyday agency seconder overseas
            </p>
            <a href="#" className={styles.actionLink}>Explore Now ›</a>
          </div>
        </div>
      </main>
    </div>

        </div>
    <div>
     <section className={styles.integrationSection}>
      
      <div className={styles.mainContent}>
        <div className={styles.imageBox}>
          <div className={styles.statsContainer}>
        <div className={styles.statBox}>
          <h1>{projectCount}+</h1>
          <p>AI Projects Delivered</p>
        </div>
        <div className={styles.statBox}>
          <h1>{industryCount}+</h1>
          <p>Industries Served</p>
        </div>
      </div>
          <img src={images.integrationThirdImg} alt="AI Robot" />
          <div className={styles.labelBox}>
            <p>AI-Driven Growth,<br />Tailored For You</p>
          </div>
        </div>
        <div className={styles.textBox}>
          <button className={styles.aboutBtn}>ABOUT US</button>
          <h2 className={styles.hTwo}>
            We are a cutting-edge AI agency by innovation and purpose technology
            with human insight, we intelligent solution that transform businesses,
            accelerate growth
          </h2>
          <div className={styles.arrowSection}>
            <div className={styles.arrowIcon}></div>
            <p>
              We are a cutting-edge AI agency fueled by innovation and purpose. Combining
              advance technology with human insight, we deliver intelligent solution that
              drive transformation & accelerate business growth.
            </p>
          </div>
        </div>
      </div>
    </section>        
    </div>
    </div>
  );
};

export default Integration;