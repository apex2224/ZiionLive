import React from 'react';
import styles from './PlacementCarousel.module.css';

const leftScrollCards = [
  { name: "Mandeep Singh", company: "Techo AI" },
  { name: "Simran Kaur", company: "CodeBase" },
  { name: "Amit Sharma", company: "Designify" },
  { name: "Priya Kapoor", company: "DevStack" },
  { name: "Rohit Verma", company: "Bitwise" },
  { name: "Anjali Das", company: "BrightTech" },
  { name: "Karan Mehta", company: "NextGen" },
  { name: "Tanya Gill", company: "CodeCraft" },
];

const rightScrollCards = [
  { name: "Ravi Kumar", company: "Pixel Logic" },
  { name: "Neha Rani", company: "Softway Inc." },
  { name: "Arjun Mehta", company: "CloudSync" },
  { name: "Harshit Jain", company: "AiFuel" },
  { name: "Sakshi Yadav", company: "ThinkStack" },
  { name: "Dev Sharma", company: "Macroverse" },
  { name: "Ishita Malhotra", company: "Skysoft" },
  { name: "Nikhil Bansal", company: "Logicode" },
];

const PlacementCarousel = () => {
  const renderCards = (cards, direction) => (
    
    <div className={styles.carouselWrapper}>
     
      <div className={`${styles.carousel} ${direction === 'right' ? styles.scrollRight : styles.scrollLeft}`}>
        <div className={styles.cardContainer}>
          
          {cards.concat(cards).map((content, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.profileSection}>{content.name}</div>
              <div className={styles.companySection}>{content.company}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h1 className={styles.placementheading}>SUCCESS STORIES</h1>
      {renderCards(rightScrollCards, 'left')} {/* Top row scrolls left */}
      {renderCards(leftScrollCards, 'right')} {/* Bottom row scrolls right */}
    </div>
  );
};

export default PlacementCarousel;
