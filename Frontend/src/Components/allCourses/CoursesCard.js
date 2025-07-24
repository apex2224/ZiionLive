import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';

import styles from './coursesCard.module.css'
import images from '../../assets/images';
import NavBar from '../head/Navbar';


const faqData = [
  {
    question: 'Question 1',
    answer: 'Lorem ipsum dolor sit amet consectetur. Eu tortor eget sed amet tortor enim iaculis ultricies sit at arcu amet nisi scelerisque aliquam diam.',
  },
  {
    question: 'Question 2',
    answer: 'Lorem ipsum dolor sit amet consectetur. Eu tortor eget sed amet tortor enim iaculis ultricies sit at arcu amet nisi scelerisque aliquam diam.',
  },
  {
    question: 'Question 3',
    answer: 'Lorem ipsum dolor sit amet consectetur. Eu tortor eget sed amet tortor enim iaculis ultricies sit at arcu amet nisi scelerisque aliquam diam.',
  },
  {
    question: 'Question 4',
    answer: 'Lorem ipsum dolor sit amet consectetur. Eu tortor eget sed amet tortor enim iaculis ultricies sit at arcu amet nisi scelerisque aliquam diam.',
  },
];


const topics = [
  { id: 1, title: 'Data Science', description: 'Best place to get everything right from the beginning with Mediator', color: '#f25c5c' },
  { id: 2, title: 'Web Development', description: 'JavaScript, React.js, Next.js, Node.js, Express.js, Redux, TypeScript, MongoDB, REST APIs', color: '#3498db' },
  { id: 3, title: 'Web Designing', description: 'Documentation for our REST & JS APIs.', color: '#000000' },
  { id: 4, title: 'Digital Marketing', description: 'Adjust Mediator for your needs.', color: '#00bfa5' },
  { id: 5, title: 'Artificial Intelligence', description: 'Everything related to your account: avatar, password, notifications & more.', color: '#f39c12' },
  { id: 6, title: 'Machine Learning', description: 'How to reply to your users using Mediators Inbox.', color: '#9b59b6' },
  { id: 7, title: 'Data Analytics', description: 'Having Trouble.?Find a solutions there!.', color: '#2b5971' },
  { id: 8, title: 'Mobile application Development', description: 'How touse Mediator integrations to external services', color: '#459c42' },
  { id: 9, title: 'PHP', description: 'Get the best Mediator Chatbot AI and Automations Hub.', color: '#000fac' },
  { id: 10, title: 'Graphic Designing', description: 'Automate Mediator to engage & target your visitors & users.', color: '#603418' },
]
const CoursesCard = () => {
    const navigate = useNavigate();

  const handleCardClick = (topic) => {
    navigate(`/allcourses/${(topic.title)}`);
  };

  return (
    <>
    <NavBar/>
    {/* hero section */}
    <section className={styles.coursesMainHeroSection}>
  <div className={styles.coursesMainHeroContainer}>
    <h1 className={styles.coursesMainHeroTitle}>All Courses</h1>
  </div>
</section>

<div className={styles.coursesBrowseSectionWrapper}>
  <h2 className={styles.coursesBrowseSectionHeading}>Browse All Courses</h2>
  <div className={styles.coursesBrowseSectionGrid}>
    {topics.map(topic => (
      <div
        key={topic.id}
        className={styles.coursesBrowseSectionCard}
        onClick={() => handleCardClick(topic)}
      >
    <img
  src={images.webDesign} 
  alt={topic.title}
  className={styles.coursesBrowseImage}
/>
        <div className={styles.coursesBrowseSectionText}>
          <span
            className={styles.coursesBrowseSectionLabel}
            style={{ backgroundColor: topic.color }}
          >
            {topic.title}
          </span>
          <p className={styles.coursesBrowseSectionDescription}>
            {topic.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  );
}


export default CoursesCard;
