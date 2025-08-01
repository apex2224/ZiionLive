// CoursesCard.jsx
import React from 'react';
import { useNavigate } from 'react-router';
import styles from './coursesCard.module.css';
import images from '../../assets/images';
import NavBar from '../head/Navbar';

const topics = [
  { id: 1, route: 'data-science', title: 'DataScience', label: 'Data Science', description: 'Learn Data Science from scratch.', color: '#f25c5c', images: images.datascience },
  { id: 2, route: 'web-development', title: 'WebDevelopment', label: 'Web Development', description: 'Frontend, Backend, Fullstack...', color: '#3498db', images: images.webdev },
  { id: 3, route: 'web-designing', title: 'webdesigning', label: 'Web Designing', description: 'UI/UX design fundamentals.', color: '#000000', images: images.webdesigning },
  { id: 4, route: 'digital-marketing', title: 'DigitalMarketing', label: 'Digital Marketing', description: 'SEO, Ads, Campaigns, Analytics.', color: '#00bfa5', images: images.digital },
  { id: 5, route: 'ai', title: 'ArtificialIntelligence', label: 'Artificial Intelligence', description: 'Everything related to your account: avatar, password, notifications & more.', color: '#f39c12', images: images.ai },
  { id: 6, route: 'ml', title: 'MachineLearning', label: 'Machine Learning', description: 'How to reply to your users using Mediators Inbox.', color: '#9b59b6', images: images.ml },
  { id: 7, route: 'data-analytics', title: 'Data Analytics', label: 'Data Analytics', description: 'Having Trouble.?Find a solutions there!.', color: '#2b5971' },
  { id: 8, route: 'mobileapp', title: 'Mobile App Development', label: 'Mobile Application Development', description: 'How to use Mediator integrations to external services', color: '#459c42', images: images.mobileapp },
  { id: 9, route: 'php', title: 'PHP', label: 'PHP', description: 'Get the best Mediator Chatbot AI and Automations Hub.', color: '#000fac' },
  { id: 10, route: 'graphic', title: 'Graphic Designing', label: 'Graphic Designing', description: 'Automate Mediator to engage & target your visitors & users.', color: '#603418',images: images.graphic },
];

const CoursesCard = () => {
  const navigate = useNavigate();

  const handleCardClick = (topic) => {
    navigate(`/allcourses/${topic.route}`);
  };

  return (
    <>
      <NavBar />
      <section className={styles.coursesMainHeroSection}>
        <div className={styles.coursesMainHeroContainer}>
          <h1 className={styles.coursesMainHeroTitle}>All Courses</h1>
        </div>
      </section>

      <div className={styles.coursesBrowseSectionWrapper}>
        <h2 className={styles.coursesBrowseSectionHeading}>Browse All Courses</h2>
        <div className={styles.coursesBrowseSectionGrid}>
          {topics.map((topic) => (
            <div
              key={topic.id}
              className={styles.coursesBrowseSectionCard}
              onClick={() => handleCardClick(topic)}
            >
              <img src={topic.images} alt={topic.label} className={styles.coursesBrowseImage} />
              <div className={styles.coursesBrowseSectionText}>
                <span
                  className={styles.coursesBrowseSectionLabel}
                  style={{ backgroundColor: topic.color }}
                >
                  {topic.label}
                </span>
                <p className={styles.coursesBrowseSectionDescription}>{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursesCard;
