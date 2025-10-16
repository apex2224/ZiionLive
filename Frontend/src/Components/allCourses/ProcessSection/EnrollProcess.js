import React, { useState } from 'react';
import styles from './enrollProcess.module.css';
import images from '../../../assets/images';
import Form from '../../form/Form'

const processSteps = [
  {
    number: '1',
    title: 'Learn from experts',
    text: 'Gain real knowledge and insights from top industry professionals with years of experience.',
    img: images.enroll1
  },
  {
    number: '2',
    title: 'Work on live projects',
    text: 'Build your skills by working on actual industry projects that boost your portfolio.',
    img: images.enroll2
  },
  {
    number: '3',
    title: 'Interview & placement',
    text: 'Get guidance on interview preparation and job placement assistance for your career growth.',
    img: images.enroll3
  },
  {
    number: '4',
    title: 'Get Hired',
    text: 'Kickstart your professional journey with the confidence and skills to get hired.',
    img: images.enroll4
  },
];

const EnrollProcess = () => {
    const [showForm, setShowForm] = useState(false);
  
  return (
    <>
    <section className={styles.processSection}>
      <div className={styles.header}>
        <span className={styles.label}>ENROLL PROCESS</span>
        <h2 className={styles.processHeading}>We Follow Four Simple Steps</h2>
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

      <button className={styles.herobutton} onClick={() => setShowForm(true)}>
                  Enroll Now
                </button>
    </section>
          {showForm && <Form closeForm={() => setShowForm(false)} />}
    </>
  );
};

export default EnrollProcess;
