import React, { useState, useEffect } from 'react'
import styles from './knowledgeTestimonials.module.css'

import images from '../../../assets/images';
import { reviews } from './KnowledgeData';




const KnowledgeTestimonials = () => {


  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview(prev => (prev + 1) % reviews.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  const review = reviews[activeReview];
  return (
    <>
      <section className={styles['testimonials-section']}>
        <div className={styles['testimonials-container']}>
          <div className={styles['testimonials-circleLayout']}>
            <img src={images.testimonialCircle} alt="Trustpilot" className={styles['testimonials-maincircle']} />
            <img src={images.circle2} alt="Client 1" className={`${styles['testimonials-client']} ${styles['testimonials-clientTop']}`} />
            <img src={images.circle2} alt="Client 2" className={`${styles['testimonials-client']} ${styles['testimonials-clientLeft']}`} />
            <img src={images.circle2} alt="Client 3" className={`${styles['testimonials-client']} ${styles['testimonials-clientRight']}`} />
            <img src={images.circle2} alt="Client 4" className={`${styles['testimonials-client']} ${styles['testimonials-clientBottom']}`} />
          </div>

          <div className={styles['testimonials-text']}>
  <h4 className={styles['testimonials-subHeading']}>TESTIMONIALS</h4>
  <h2 className={styles['testimonials-heading']}>What Our Clients Say About Us</h2>

  <div key={activeReview} className={styles['testimonial-fade']}>
    <p className={styles['testimonials-description']}>{review.text}</p>
    <h5 className={styles['testimonials-author']}>{review.author}</h5>
    <span className={styles['testimonials-designation']}>{review.designation}</span>
  </div>
</div>
        </div>
      </section>
    </>

  );
};


export default KnowledgeTestimonials
