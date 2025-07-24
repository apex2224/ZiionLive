import React, {Fragment} from 'react';
import styles from './knowledgeProcess.module.css';
import images from '../../../assets/images';
import { Link } from 'react-router';
import {significantSteps} from './KnowledgeData';
import { processSteps} from './KnowledgeData';
import CuriousSection from '../CuriousSection/CuriousSection'






const KnowledgeProcess = () => {
  return (
<Fragment>
    <section className={styles.processSection}>
      <div className={styles.header}>
        <span className={styles.label}>WORK PROCESS</span>
        <h2>We Follow Four Simple Steps</h2>
        <p>We are leading technology solutions providing company all over the world doing over 40 years lorem ipsum dolor sit amet.</p>
      </div>

      <div className={styles.stepsContainer}>
        {processSteps.map((step, index) => (
          <div className={styles.stepCard} key={index}>
            <div className={styles.iconWrapper}>
              <img src={step.img} alt={step.title} className={styles.iconImage} />
              <span className={styles.stepNumber}>{step.number}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>

 <CuriousSection/>

   {/* significant section */}

    <section className={styles.significantSection}>
          <h2 className={styles.significantTitle}>Significant things you wouldn't want to miss</h2>
          <div className={styles.significantItemsWrapper}>
            {significantSteps.map((item, idx) => (
              <div className={styles.significantItemCard} key={idx}>
                <img src={item.icon} alt={item.title} className={styles.icon} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>



      

    </Fragment>
  );
};

export default KnowledgeProcess;
