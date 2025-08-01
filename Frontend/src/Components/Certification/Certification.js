import React from 'react';
import styles from './certification.module.css';
import images from '../../assets/images';

const Certification = () => {
  return (
    <section className={styles.certificateSection}>
      <div className={styles.mainContainer}>
        <div className={styles.certificateImage}>
          <img src={images.certificatehero} alt="Ziion Certificate" />
        </div>

        <div className={styles.certificateContent}>
          <h2>WHAT BENEFITS AWAIT YOU AT ZIION TECHNOLOGY?</h2>
          <p className={styles.highlight}>
            Highly Acclaimed Program Over the Years, We've Educated Over 35,000+ Learners & Supported Them in Landing Their Initial IT Sector Role.
          </p>
          <p className={styles.description}>
            We Provide Fully Career-Focused Courses for Professionals, Entrepreneurs, High School Graduates, University Students, Small Business Owners, Marketing Experts & Career Changers at Reasonable Costs. We Empower Driven Individuals Like You to Shape Their Future by Teaching Skills That Every Sector Seeks.
          </p>
          <p className={styles.showcase}>
            <strong>Showcase Your Success</strong><br />
            Post it on LinkedIn, Twitter, and Facebook to enhance your profile. Highlight your accomplishment and share the news with peers and coworkers.
          </p>
        </div>
      </div>

      <div className={styles.certificateGallery}>
        <img src={images.certificate1} alt="Certificate Sample1" />
        <img src={images.certificate2} alt="Certificate Sample2" />
        <img src={images.certificate3} alt="Certificate Sample3" />
        <img src={images.certificate4} alt="Certificate Sample4" />
      </div>
    </section>
  );
};

export default Certification;