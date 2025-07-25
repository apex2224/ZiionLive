import React, { useState,Fragment } from "react";
import styles from "./knowledgeArticles.module.css";
import {checklist_items } from '../Knowledge/KnowledgeData';
import { FaCheckCircle, FaPlus } from 'react-icons/fa';
import images from "../../../assets/images";

const KnowledgeArticles = () => {

  
  // for knowldege checklist
     const [openIndex, setOpenIndex] = useState(null);
  
    const toggleItem = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <Fragment>
  

    
    <section className={styles.productMainsection}>
      <h4 className={styles.subheading}>OUR PRODUCT</h4>
      <h2 className={styles.heading}>Recent AI solutions Product</h2>
      <p className={styles.description}>
        There are many variations of passages of Lorem Ipsum are many variations of passages of lorem Ipsum available but .suffered.
      </p>

      <div className={styles.cardsWrapper}>
        {/* LEFT CARD */}
        <div className={styles.card}>
          <div className={styles.content}>
            <h3>AI-Powered Business Solutions</h3>
            <p>
              <a href="#">AI chat bot</a> we are dedicated is the safeguarding your digital.
            </p>

            <ul className={styles.features}>
              <li><FaCheckCircle className={styles.icon} /> Advanced automation & analytics</li>
              <li><FaCheckCircle className={styles.icon} /> API access with higher rate limits</li>
            </ul>

            <button className={styles.demoButton}>
              <FaPlus /> Get a Demo
            </button>
          </div>

          <div className={styles.image}>
            <img src={images.robotanimate} alt="AI Solution" />
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className={styles.card}>
          <div className={styles.image}>
            <img src={images.knowledgeHeroImage} alt="Statistics Illustration" />
          </div>

          <div className={styles.statsBox}>
            <div className={styles.statItem}>
              <h3>25k+</h3>
              <p>Project Complete</p>
            </div>
            <div className={styles.statItem}>
              <h3>40m+</h3>
              <p>Data Inducted</p>
            </div>
          </div>
        </div>
      </div>
    </section>



    {/* knowledge checklist */}


     <section className={styles['checklist-wrapper']}>
      <h2 className={styles['checklist-heading']}>
        How to choose your next knowledge base system for customer service?
      </h2>
      <p className={styles['checklist-subtext']}>
        These 6 key elements are here to help companies navigate the competitive landscape of
        knowledge management systems.
      </p>

      <div className={styles['checklist-box']}>
        <div className={styles['checklist-left']}>
          <h3>Make sure your next provider checks these boxes!</h3>
          <p>
            To help companies choose the right tool, we've gathered 6 key factors.
          </p>
          <img
            src={images.checklist}
            alt=" Chatbot with multiple data"
            className={styles['checklist-image']}
          />
        </div>

        <div className={styles['checklist-right']}>
          {checklist_items.map((item, index) => (
            <div
              key={index}
              className={`${styles['checklist-accordionItem']} ${
                openIndex === index ? styles['checklist-open'] : ''
              }`}
              onClick={() => toggleItem(index)}
            >
              <div className={styles['checklist-accordionHeader']}>
                <span>
                   <i className={`${item.icons} ${styles['checklist-icon']}`}></i> {item.title}
                </span>
                <FaPlus className={styles['checklist-plusIcon']} />
              </div>
              {openIndex === index && (
                <div className={styles['checklist-accordionContent']}>
                  <p>Details about {item.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    </Fragment>
  );
};

export default KnowledgeArticles;
