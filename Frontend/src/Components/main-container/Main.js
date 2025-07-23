import React, { useState } from "react"
import styles from "./Main.module.css"
import NavBar from "../head/Navbar"
import Conversationchatbot from "./Conversationchatbot";
import MainNextSection from "./MainNextsection";
import images from "../../assets/images";


const Main = () => {
  const [theme, setTheme] = useState('dark');

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

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
            <button className={styles.toggleBtn} onClick={handleToggle} title="Toggle Theme">
            {/* {theme === 'dark' ? 'light_theme' : 'dark_theme'} */}
            </button>
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>
           
            Next-Gen Skills <span className={styles.falldown}> for a</span> <br />
            <span className={styles.gradientText}> Next-Level Future</span>
          </h1>
          <p className={styles.subtitle}>
            We provide future ready technology training that could help people to become skilled, knowledgeable, and mindful of the tomorrow digital world.

          </p>
          <button className={styles.herobutton}>Talk to us</button>
        </div>
      </section>
      <MainNextSection />
      <Conversationchatbot />

     </>
  )
}

export default Main






