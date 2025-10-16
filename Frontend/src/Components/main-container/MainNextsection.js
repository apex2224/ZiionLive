// src/components/Card.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import styles from './MainNextSection.module.css';
import Homefeature from './Homefeature'
import images from '../../assets/images';
import Form from '../form/Form'




const MainNextSection = () => {


  const [showForm, setShowForm] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState("software"); // default image
 
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>

      <div className={styles.cardContainer}>
       <div className={styles.card}>
  <div className={styles.cardImage}>
    <img src={images.trainingImg} alt="Courses" />
  </div>
  <div className={styles.cardContent}>
    <h2 className={styles.cardTitle}>Courses</h2>
    <p className={styles.description}>
     Learn high-demand digital skills like web, mobile, AI, design, and marketing to boost your career, income, and future opportunities.
    </p>
    <Link to='/allcourses'>
      <button className={styles.headerBtn}>Know More</button>
    </Link>
  </div>
</div>

<div className={styles.card}>
  <div className={styles.cardImage}>
    <img src={images.trainingImg2} alt="Trainings" />
  </div>
  <div className={styles.cardContent}>
    <h2 className={styles.cardTitle}>Trainings</h2>
    <p className={styles.description}>
      Upgrade your career in the shortest time with training in web development, digital marketing, graphic designing, data analytics, AI, and others.
    </p>
    <Link to='/industrial-training'>
      <button className={styles.headerBtn}>Know More</button>
    </Link>
  </div>
</div>

<div className={styles.card}>
  <div className={styles.cardImage}>
    <img src={images.trainingImg3} alt="IT Services" />
  </div>
  <div className={styles.cardContent}>
    <h2 className={styles.cardTitle}>IT Services</h2>
    <p className={styles.description}>
      We deliver smart, scalable IT solutions—from cloud services and cybersecurity to software development, IT support, and infrastructure management.


    </p>
    <Link to='/services'>
      <button className={styles.headerBtn}>Know More</button>
    </Link>
  </div>
</div>

      </div>



<div className={styles.heroThirdSection}>
  <div className={styles.industry}>
    {/* Sidebar */}
    <div className={styles.sidebar}>
      {/* Web Development */}
      <div
        className={`${styles.category} ${selectedCategory === "webdev" ? styles.active : ""}`}
        onClick={() => handleCategoryClick("webdev")}
      >
        <span className={styles.icon}>💻</span>
        <div>
          <h3 className={styles.categoryTitle}>Web Development</h3>
          <p className={styles.categorySubtitle}>
            Learn to build responsive websites and web apps
          </p>
        </div>
      </div>

      {/* Digital Marketing */}
      <div
        className={`${styles.category} ${selectedCategory === "digitalmarketing" ? styles.active : ""}`}
        onClick={() => handleCategoryClick("digitalmarketing")}
      >
        <span className={styles.icon}>📈</span>
        <div>
          <h3 className={styles.categoryTitle}>Digital Marketing</h3>
          <p className={styles.categorySubtitle}>
            Master SEO, social media, and online advertising
          </p>
        </div>
      </div>

      {/* Data Science */}
      <div
        className={`${styles.category} ${selectedCategory === "datascience" ? styles.active : ""}`}
        onClick={() => handleCategoryClick("datascience")}
      >
        <span className={styles.icon}>🧠</span>
        <div>
          <h3 className={styles.categoryTitle}>Data Science</h3>
          <p className={styles.categorySubtitle}>
            Analyze data and build predictive models
          </p>
        </div>
      </div>

      {/* Analytics */}
      <div
        className={`${styles.category} ${selectedCategory === "analytics" ? styles.active : ""}`}
        onClick={() => handleCategoryClick("analytics")}
      >
        <span className={styles.icon}>📊</span>
        <div>
          <h3 className={styles.categoryTitle}>Analytics</h3>
          <p className={styles.categorySubtitle}>
            Turn data into actionable business insights
          </p>
        </div>
      </div>
    </div>

    {/* Main content */}
    <div className={styles.mainContent}>
      <h1 className={styles.title}>
        {selectedCategory === "webdev" && "Web Development Course"}
        {selectedCategory === "digitalmarketing" && "Digital Marketing Course"}
        {selectedCategory === "datascience" && "Data Science Course"}
        {selectedCategory === "analytics" && "Analytics Course"}
      </h1>

      <p className={styles.description}>
        {selectedCategory === "webdev" &&
          "Learn front-end and back-end web development, including HTML, CSS, JavaScript, and modern frameworks like React and Node.js."}
        {selectedCategory === "digitalmarketing" &&
          "Master the art of online marketing, including SEO, social media campaigns, email marketing, and Google Ads."}
        {selectedCategory === "datascience" &&
          "Gain skills in data analysis, machine learning, Python, R, and statistical modeling to make data-driven decisions."}
        {selectedCategory === "analytics" &&
          "Learn to analyze business data, create dashboards, and generate actionable insights using tools like Excel, Tableau, and Power BI."}
      </p>

      <div className={styles.illustration}>
        <img
          src={
            selectedCategory === "webdev"
              ? images.webdev
              : selectedCategory === "digitalmarketing"
              ? images.digital
              : selectedCategory === "datascience"
              ? images.datascience
              : images.webdesigning
          }
          alt={`${selectedCategory} illustration`}
          className={styles.industryimage}
        />
      </div>
    </div>
  </div>
</div>










    {/* BACK-IMAGE */}
      <div className={styles.wpHeroSection}>
        <div className={styles.overlay}>
          <div className={styles.wpImageWrapper}>
            <img src={images.wordpressApp} alt="Background" className={styles.wpHeroImage} />
          </div>
          <div className={styles.wpOverlayContent}>
            <p className={styles.wpWelcomeText}>WELCOME TO ZIION TECHNOLOGY</p>
<h1 className={styles.wpTitle}>
  Learn, Build & Grow with <br /> Our Professional IT Courses
</h1>
<p className={styles.wpDescription}>
  At Ziion Technology, we provide industry-focused training programs designed to
  equip learners with practical skills and knowledge. From Web Development, Data
  Science, and Artificial Intelligence to Cloud Computing, Cybersecurity, and
  Digital Marketing — our courses empower students and professionals to succeed
  in today’s competitive tech landscape.
</p>


            <div className={styles.wpIconBox}>
              <button className={styles.headerBtn} onClick={() => setShowForm(true)}>Talk to us</button>
            </div>
          </div>
        </div>

        {showForm && <Form closeForm={() => setShowForm(false)} />}
      </div>

      <div>
      </div>

      <Homefeature />

    </div>
  );
};

export default MainNextSection;