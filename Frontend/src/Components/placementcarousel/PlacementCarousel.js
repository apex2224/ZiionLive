import React from 'react';
import styles from './PlacementCarousel.module.css';
import images from '../../assets/images'

const rightScrollCards = [
  { name: "Mandeep Singh", company: "Techo AI",image:images.aichatfeature1 },
  { name: "Simran Kaur", company: "CodeBase",image:images.aichatfeature1  },
  { name: "Amit Sharma", company: "Designify",image:images.aichatfeature1  },
  { name: "Priya Kapoor", company: "DevStack",image:images.aichatfeature1  },
  { name: "Rohit Verma", company: "Bitwise",image:images.aichatfeature1  },
  { name: "Anjali Das", company: "BrightTech",image:images.aichatfeature1  },
  { name: "Karan Mehta", company: "NextGen",image:images.aichatfeature1  },
  { name: "Tanya Gill", company: "CodeCraft",image:images.aichatfeature1  },
];


const leftScrollCards = [
  { name: "Ravi Kumar", company: "Pixel Logic",
    iframe:"https://youtube.com/shorts/jqavyDF02so?si=n0PfvdyQvLDIn5gX" },
  { name: "Neha Rani", company: "Softway Inc.",
    iframe:"https://youtube.com/shorts/jqavyDF02so?si=n0PfvdyQvLDIn5gX"  },
  { name: "Arjun Mehta", company: "CloudSync",
    iframe:"https://youtube.com/shorts/jqavyDF02so?si=n0PfvdyQvLDIn5gX"  },
  { name: "Harshit Jain", company: "AiFuel",
    iframe:"https://youtube.com/shorts/jqavyDF02so?si=n0PfvdyQvLDIn5gX"  },
  { name: "Sakshi Yadav", company: "ThinkStack",
    iframe:"https://youtube.com/shorts/jqavyDF02so?si=n0PfvdyQvLDIn5gX"  },
  { name: "Dev Sharma", company: "Macroverse",
    iframe:"https://youtube.com/shorts/jqavyDF02so?si=n0PfvdyQvLDIn5gX"  },
  { name: "Ishita Malhotra", company: "Skysoft",
    iframe:"https://youtube.com/shorts/jqavyDF02so?si=n0PfvdyQvLDIn5gX"  },
  { name: "Nikhil Bansal", company: "Logicode",
    iframe:"https://youtube.com/shorts/jqavyDF02so?si=n0PfvdyQvLDIn5gX"  },
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
         <div className={styles.carouselWrapper}><h1 className={styles.storyHeading}>Our Success Story</h1></div>
         {renderCards(rightScrollCards, 'left')} {/* Top row scrolls left */}
         {renderCards(leftScrollCards, 'right')} {/* Bottom row scrolls right */}
       </div>
  );
};

export default PlacementCarousel;
