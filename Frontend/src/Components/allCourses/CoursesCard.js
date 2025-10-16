// CoursesCard.jsx
import React from 'react';
import { useNavigate } from 'react-router';
import styles from './coursesCard.module.css';
import images from '../../assets/images';
import NavBar from '../head/Navbar';
import Footer from '../footer/Footer';
import useCustom from '../customHook/useCustom'


const topics = [
  { id: 1, route: 'data-science', title: 'DataScience', label: 'Data Science', description: 'Learn Data Science from scratch.', color: '#f25c5c', images: images.datascience },
  { id: 2, route: 'web-development', title: 'WebDevelopment', label: 'Web Development', description: 'Frontend, Backend, Fullstack...', color: '#9b59b6', images: images.webdev },
  { id: 3, route: 'web-designing', title: 'webdesigning', label: 'Web Designing', description: 'UI/UX design fundamentals.', color: '#f39c12', images: images.webdesigning },
  { id: 4, route: 'digital-marketing', title: 'DigitalMarketing', label: 'Digital Marketing', description: 'SEO, Ads, Campaigns, Analytics.', color: '#459c42', images: images.digital },
  { id: 5, route: 'ai', title: 'ArtificialIntelligence', label: 'Artificial Intelligence', description: 'Everything related to your account: avatar, password, notifications & more.', color: '#f25c5c', images: images.ai },
  { id: 6, route: 'ml', title: 'MachineLearning', label: 'Machine Learning', description: 'How to reply to your users using Mediators Inbox.', color: '#9b59b6', images: images.ml },
  { id: 7, route: 'data-analytics', title: 'Data Analytics', label: 'Data Analytics', description: 'Having Trouble.?Find a solutions there!.', color: '#f39c12', images: images.dataAnalytics },
  { id: 8, route: 'mobileapp', title: 'Mobile App Development', label: 'Mobile Application Development', description: 'How to use Mediator integrations to external services', color: '#459c42', images: images.mobileapp },
  { id: 9, route: 'php', title: 'PHP', label: 'PHP', description: 'Get the best Mediator Chatbot AI and Automations Hub.', color: '#f25c5c', images: images.php },
  { id: 10, route: 'graphic', title: 'Graphic Designing', label: 'Graphic Designing', description: 'Automate Mediator to engage & target your visitors & users.', color: '#9b59b6',images: images.graphic },
  { id: 11, route: 'cloud-computing', title: 'Cloud Computing', label: 'Cloud Computing', description: 'Leverage scalable cloud solutions to optimize performance, storage, and deployments.', color: '#459c42', images: images.cloud },
{ id: 12, route: 'devops', title: 'DevOps', label: 'DevOps', description: 'Implement CI/CD pipelines, automate workflows, and improve collaboration between development and operations.', color: '#e67e22', images: images.devOps },

];

const CoursesCard = () => {
      useCustom('AllCourses | Ziion Technology')

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
    <p className={styles.coursesMainHeroSubtitle}>
      Explore a wide range of technology courses designed to help you gain 
      in-demand skills, from Web Development and Data Science to AI, Cloud 
      Computing, and more.
    </p>

    {/* Down Arrow */}
    <div className={styles.downArrow}>
      ↓
    </div>
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
      <Footer/>
    </>
  );
};

export default CoursesCard;
