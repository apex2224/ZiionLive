import React, { useState } from 'react';
import styles from './Main.module.css';
import NavBar from '../head/Navbar';
import Conversationchatbot from './Conversationchatbot';
import MainNextSection from './MainNextsection';
import images from '../../assets/images';
import Form from '../form/Form'; // Import modal form
import Companies from '../tieupcompanies/Companies';
import useCustom from '../customHook/useCustom'



const Main = () => {
useCustom('Home | Ziion Technology')

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <NavBar />

      <section className={styles.heroSection}>
        <div className={styles.overlay}>
          <img src={images.circle} alt="chat bubble" className={styles.circle} />
          <img src={images.triangle} alt="tri icon" className={styles.triangle} />
          <img src={images.robot} alt="robot icon" className={styles.robot} title="Hii👋" />
          <img src={images.circle2} alt="robot icon" className={styles.circle2} />
          <img src={images.comment} alt="robot icon" className={styles.comment} />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>
            Learn In-Demand <span className={styles.falldown}>Tech Skills</span> <br />
            <span className={styles.gradientText}> Build Your Future</span>
          </h1>
          <p className={styles.subtitle}>
            Our courses are designed to help you master Web Development, Web Designing,
            Machine Learning, Mobile App Development, and PHP. We provide hands-on
            training, real-world projects, and industry-relevant skills to prepare you
            for tomorrow’s digital world.
          </p>

          <button className={styles.headerBtn} onClick={() => setShowForm(true)}>
            Talk to us
          </button>
                  <p className={styles.rating}>
          ⭐⭐⭐⭐⭐ 4.9 out of 5 Rating (overall 2047+ Reviews)
        </p>
        <p className={styles.trust}>
          Trusted by over <strong>5000+ students</strong> and{" "}
          <strong>40+ colleges and universities</strong>, to deliver excellence
          in tech.
        </p>
        </div>

        
      </section>

      <Companies />

      <MainNextSection />
      <Conversationchatbot />

      {showForm && <Form closeForm={() => setShowForm(false)} />}

    </>
  );
};

export default Main;  