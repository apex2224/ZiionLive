import React from 'react';
import styles from './sharedInfo.module.css';
import { sharedInboxContent } from './SharedInboxData';


const SharedInboxInfo = () => {
  return (
    <section className={styles.container}>
      {sharedInboxContent.map((item, index) => (
        <div
          key={index}
          className={`${styles.block} ${index % 2 !== 0 ? styles.reverse : ''}`}
        >
          <div className={styles.image}>
            <img src={item.image} alt={item.heading} />
          </div>
          <div className={styles.text}>
            <h2>{item.heading}</h2>
            <p>{item.description1}</p>
            <p>{item.description2}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SharedInboxInfo;
