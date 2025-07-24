import React,{Fragment,useState} from 'react'
import styles from './sharedInbox.module.css'
import images from '../../../assets/images'
import { Link } from 'react-router'
import Navbar from '../../head/Navbar'
import Footer from '../../footer/Footer'
import KnowledgeTestimonials from '../Knowledge/KnowledgeTestimonials'
import { SharedInboxArticles,checklist_items,significantSteps,widgets} from './SharedInboxData'
import { FaCheckCircle, FaPlus } from 'react-icons/fa';
import SharedInboxProcess from './SharedInboxProcess'
import SharedInboxInfo from './SharedInfo'


const SharedInbox = () => {

   

  

    // for knowldege checklist
         const [openIndex, setOpenIndex] = useState(null);
      
        const toggleItem = (index) => {
          setOpenIndex(openIndex === index ? null : index);
        };
  return (
    <Fragment>
    <Navbar/>
       <section className={styles.SharedInboxHeroSection}>
        <img src={images.AIheroimg} alt="background" className={styles.SharedInboxBgImage} />
        <div className={styles.SharedInboxContent}>
          <h1 className={styles.SharedInboxTitle}>
            <span className={`${styles.SharedInboxFalldown} ${styles.gradientText}`}>
              A Shared Inbox for Seamless Team Collaboration
            </span>
            <br />
          </h1>
          <p className={styles.SharedInboxSubtitle}>
            Bring your team together with a collaborative inbox that centralizes messages from every channel. Manage customer interactions efficiently, respond faster, and deliver a seamless support experience—all from a single, powerful workspace.
          </p>
        <Link to='/signup'>  <button className={styles.SharedInboxHerobutton}>Get Started For Free</button></Link>
        </div>
      </section>

      <SharedInboxProcess/>


    
{/* SIGNIFICANT SECTION */}

<section className={styles.significantSection}>
          <h2 className={styles.significantTitle}>Significant things you wouldn't want to miss</h2>
          <div className={styles.significantItemsWrapper}>
            {significantSteps.map((item, idx) => (
              <div className={styles.significantItemCard} key={idx}>
                <img src={item.icon} alt={item.title} className={styles.icon} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>


      
      <KnowledgeTestimonials/>

      
    <section className={styles['checklist-wrapper']}>
  <h2 className={styles['checklist-heading']}>
    Choosing the Right Omnichannel Inbox for Your Business
  </h2>
  <p className={styles['checklist-subtext']}>
    As communication channels multiply, selecting the right shared inbox solution is crucial. To guide you, we've identified 6 essential factors to consider when evaluating your next omnichannel inbox provider.
  </p>

    <div className={styles['checklist-box']}>
  <div className={styles['checklist-left']}>
    <h3>Ensure your next provider meets these must-haves</h3>
    <p>
      These 6 key factors will help your team confidently choose the right collaborative inbox in a crowded market.
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
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

<SharedInboxInfo/>

      <Footer/>
      </Fragment>

  )
}

export default SharedInbox
