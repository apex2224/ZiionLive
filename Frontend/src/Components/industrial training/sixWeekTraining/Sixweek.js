import React from "react";
import styles from "./sixweek.module.css";
import { FaChessKnight, FaComments } from "react-icons/fa";
import images from "../../../assets/images";
import Footer from "../../footer/Footer";
import Navbar from "../../head/Navbar";
import ReviewsSection from "../../reviews/ReviewsSection";
import ueCustom from '../../customHook/useCustom'


const floatingImages = [
    images.module1,
    images.module1,
    images.module1,
    images.module1,
    images.module1,
]


  const Sixweek =()=>{
      ueCustom(' Six Week Training | Ziion Technology')



  return (
    <>
    <Navbar/>
      {/* Hero Section */}
      <section className={styles.sixweekHero}>
        <div className={styles.sixweekContainer}>
          {/* Left Side Main Image */}
          <div className={styles.sixweekImageWrapper}>
            <img
              src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
              alt="Student learning"
              className={styles.sixweekImage}
            />
          </div>

          {/* Right Side Content */}
          <div className={styles.sixweekContent}>
            <h1 className={styles.sixweekHeading}>
              SIX WEEKS <br /> INDUSTRIAL <br /> TRAINING
            </h1>

            <div className={styles.sixweekTextRow}>
              <FaChessKnight className={styles.sixweekIcon} />
              <p className={styles.sixweekDescription}>
                Kickstart your career with practical, hands-on training in
                Full-Stack Development, UI/UX, Digital Marketing, and more.
              </p>
            </div>

            <button className={styles.sixweekButton}>Join Now</button>

            {/* Two Images Below Text */}
            <div className={styles.sixweekBottomImages}>
              <img
                src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg"
                alt="Classroom training"
                className={styles.sixweekSmallImage}
              />
              <img
                src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg"
                alt="Practical coding"
                className={styles.sixweekSmallImage}
              />
            </div>
          </div>
        </div>
      </section>

     

      {/* -------- About Section -------- */}
      <section className={styles.sixWeekSecondSection}>
        {/* Left Side - Images */}
        <div className={styles.imageGrid}>
          <div className={styles.imageBox}>
            <img src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg" alt="Team work" />
          </div>
          <div className={styles.imageBoxSmall}>
            <img src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg" alt="Discussion" />
          </div>
          <div className={styles.imageBoxSmall}>
            <img src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg" alt="Collaboration" />
          </div>
          <div className={styles.statsBox}>
            <div className={styles.icon}>⭐</div>
            <h3>500+</h3>
            <p>Students Trained</p>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={styles.content}>
          <p className={styles.subHeading}>ABOUT TRAINING</p>
          <h2 className={styles.heading}>
            Hands-on Learning for <br /> Future Professionals
          </h2>
          <p className={styles.description}>
            Our Six-Week Industrial Training focuses on real-world skills, live
            projects, and personalized mentorship to prepare you for industry
            challenges.
          </p>

          <div className={styles.points}>
            <p>» Practical coding sessions & live projects</p>
            <p>» Learn from industry experts & mentors</p>
            <p>» Certification upon successful completion</p>
          </div>

          <div className={styles.helpBox}>
            <FaComments className={styles.helpIcon} />
            <div>
              <p>Need help?</p>
              <strong>(+91) 98765-43210</strong>
            </div>
          </div>
        </div>
      </section>





      {/* -------- Six Week Third Section (Floating Images + Image Cards) -------- */}
  
    <section className={styles.coursesHeroContainer}>
      {/* Floating Images */}
      {floatingImages.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Course ${i + 1}`}
          className={`${styles.coursesFloatingImage} ${styles["coursesPos" + (i + 1)]}`}
        />
      ))}

      {/* Main Content */}
      <div className={styles.coursesHeroContent}>
        <h1 className={styles.coursesHeroHeading}>
          Six Week Industrial Training Program
        </h1>
        <p className={styles.coursesHeroSub}>
          Build hands-on skills with real projects, guided by industry experts.
        </p>
        <button className={styles.coursesHeroBtn}>Explore Courses</button>

        {/* Course Title */}
        <h3 className={styles.coursesHeroCourse}>Full Stack Development Course</h3>
      </div>
    </section>
      <ReviewsSection/>
    <Footer/>
  
      </>
  )

  }
export default Sixweek







