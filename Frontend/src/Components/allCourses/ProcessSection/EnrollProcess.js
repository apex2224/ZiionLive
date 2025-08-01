import React from 'react';
import styles from './enrollProcess.module.css';

const processSteps = [
  {
    number: '1',
    title: 'Learn from experts',
    text: 'Gain real knowledge and insights from top industry professionals with years of experience.',
    img: '/images/step1.png',
  },
  {
    number: '2',
    title: 'Work on live projects',
    text: 'Build your skills by working on actual industry projects that boost your portfolio.',
    img: '/images/step2.png',
  },
  {
    number: '3',
    title: 'Interview & placement',
    text: 'Get guidance on interview preparation and job placement assistance for your career growth.',
    img: '/images/step3.png',
  },
  {
    number: '4',
    title: 'Get Hired',
    text: 'Kickstart your professional journey with the confidence and skills to get hired.',
    img: '/images/step4.png',
  },
];

const EnrollProcess = () => {
  return (
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
    </section>
  );
};

export default EnrollProcess;
