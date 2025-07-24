import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './helpTopicArticles.module.css';

const articles = {
  'Data Science': [
    { title: 'How to use the Mediator Inbox for the first time', summary: 'Dedicated video overview for first-time users.' },
    { title: 'Getting Started With Mediator for Customer Support', summary: 'Everything you need to start with Mediator.' },
  ],
  'Install Mediator': [
    { title: 'Installing Mediator on your website', summary: 'Step-by-step guide to install Mediator on any platform.' },
  ],
  'Developers': [
    { title: 'Using Mediator JS SDK', summary: 'Guide to integrate Mediator into your frontend apps.' },
  ],
  'Customization':[
    {
      title: 'Customizing Mediator UI', summary: 'How to customize Mediator UI to fit your brand.',
    }
  ]

};
const HelpTopicArticles=()=> {
  const { topicName } = useParams(); 
  const navigate = useNavigate();

  
  const topicArticles = articles[topicName] || [];  

  return (
    <div className={styles.helpBrowseSectionArticleView}>
      <button className={styles.helpBrowseSectionBackBtn} onClick={() => navigate('/help')}>
        ← Back
      </button>
      <h3 className={styles.helpBrowseSectionArticleTitle}>Articles on: {topicName}</h3>
      <div className={styles.helpBrowseSectionArticles}>
        {topicArticles.length > 0 ? (
          topicArticles.map((article, index) => (
            <div key={index} className={styles.helpBrowseSectionArticleCard}>
              <h4 className={styles.article_title}>{article.title}</h4>
              <p className={styles.article_summary}>{article.summary}</p>
            </div> 
          ))
        ) : (
          <p>No articles available for this topic.</p>
        )}
      </div>
    </div>
  );
}
export default HelpTopicArticles