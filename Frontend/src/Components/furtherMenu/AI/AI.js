import React from 'react'
import styles from './AI.module.css'
import images from '../../../assets/images'
import { aiFeaturesData } from './AIData' 
import Navbar from '../../head/Navbar'
import { Link } from 'react-router'
import CuriousSection from '../CuriousSection/CuriousSection'
import KnowledgeTestimonials from '../Knowledge/KnowledgeTestimonials'
import Footer from '../../footer/Footer'


const AIPage = () => {
  return (
    <>
    <Navbar/>
       <section className={styles.AIHeroSection}>
        <img src={images.AIheroimg} alt="background" className={styles.AIBgImage} />
        <div className={styles.AIContent}>
          <h1 className={styles.AITitle}>
            <span className={`${styles.AIFalldown} ${styles.gradientText}`}>
              AI That Empowers Your Teams and Enhances Customer Support
            </span>
            <br />
          </h1>
          <p className={styles.AISubtitle}>
            Using modern machine learning, Mediator AI learns from your content to assist customers and teams with precision and a human touch.
          </p>
        <Link to='/signup'>  <button className={styles.AIHerobutton}>Get Started For Free</button></Link>
        </div>
      </section>

{/* next section of ai  */}
    <section className={styles.aistorageSection}>
      <h2 className={styles.aistorageTitle}>Secure Knowledge Storage</h2>
      <div className={styles.aistorageDiagramWrapper}>
        <img
          src={images.storageAi}
          alt="Secure Knowledge Storage Diagram"
          className={styles.aistorageDiagram}
        />
      </div>
      <p className={styles.aistorageDescription}>
       Mediator employs cutting-edge technologies like transmission encryption,
        security encryption, and account data isolation to maintain your data in
        a highly secure state. With multiple backups and robust cloud platforms,
        we guarantee rock-solid data security. Choose us for peace of mind and
        unwavering trust in your data's safety.
      </p>
    </section>


{/* workflow section */}
    <section className={styles.workflowSection}>
      <div className={styles.workflowBox}>
        <div className={styles.workflowStep}>
          <span className={styles.workflowLabel}>
            <svg className={styles.workflowIcon} viewBox="0 0 24 24" fill="none"><path d="M17 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM7 5h10v14H7V5z" fill="currentColor"/></svg>
            Check if team is away
          </span>
        </div>

        <div className={styles.workflowArrow}></div>

        <div className={styles.workflowCard}>
          <img src={images.workFlow} alt="Bot" className={styles.workflowBotIcon} />
          <div className={styles.workflowText}>AI Chatbot<br />Auto Reply</div>
        </div>

        <div className={styles.workflowArrow}></div>

        <div className={styles.workflowCircle}>+</div>
      </div>

      <h2 className={styles.workflowTitle}>
        It takes a drag and drop to<br />build your own <span>workflows</span>
      </h2>
    </section>

      <CuriousSection/>



      {/* ai feature */}

  <section className={styles.aifeatures}>
  <div className={styles.headerSection}>
    <p className={styles.smallHeading}>BUILT FOR INTELLIGENCE</p>
    <h2 className={styles.mainHeading}>SMARTER FEATURES, GREATER IMPACT</h2>
    <p className={styles.subHeading}>here is subheading..</p>
  </div>

  <div className={styles.aifeatureWrapper}>
    {aiFeaturesData.map((item, index) => (
      <div key={item.title}>
        {index === 2 && (
          <div className={styles.aiImageWrapper}>
            <img
              src={images.aifeature}
              alt="AI Robot"
              className={styles.aiImage}
            />
          </div>
        )}
        <div className={styles.featureBox}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      <KnowledgeTestimonials/>
      <Footer/>
    </>
  )
}

export default AIPage
