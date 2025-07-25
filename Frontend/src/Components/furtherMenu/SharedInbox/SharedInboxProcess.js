import React,{Fragment,useState} from 'react'
import styles from './sharedInboxProcess.module.css'
import images from '../../../assets/images'
import {widgets,processSteps} from './SharedInboxData'
import CuriousSection from '../CuriousSection/CuriousSection'


const SharedInboxProcess = () => {
      // widget section

    
       const [active, setActive] = useState(widgets[0]);
        const [openId, setOpenId] = useState(widgets[0].id);
      
        const handleClick = (widget) => {
          setActive(widget);
          setOpenId(prev => prev === widget.id ? null : widget.id);
        };


  return (
    <Fragment>
 {/* widget section */}
      <div className={styles.widgetsContainer}>
      <div className={styles.widgetsLeftPanel}>
        <h1 className={styles.heading}>
          Make them<br />feel unique
        </h1>
        <div className={styles.widgetsList}>
          {widgets.map(widget => (
            <div
              key={widget.id}
              className={`${styles.widgetItem} ${active.id === widget.id ? styles.active : ''} ${openId === widget.id ? styles.expanded : ''}`}
              onClick={() => handleClick(widget)}
            >
              <div className={styles.widgetHeader}>
                <span className={styles.widgetIcon}>{widget.icon}</span>
                <span className={styles.widgetTitle}>{widget.title}</span>
              </div>
              {openId === widget.id && (
                <div className={styles.widgetContent}>
                  {widget.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.widgetsRightPanel}>
        <img src={images[active.image]} alt="Widget View" className={styles.widgetImage} />
      </div>
    </div>


{/* process section */}
      <section className={styles.processSection}>
          <div className={styles.header}>
            <span className={styles.label}>WORK PROCESS</span>
            <h2>We Follow Four Simple Steps</h2>
            <p>We are leading technology solutions providing company all over the world doing over 40 years lorem ipsum dolor sit amet.</p>
          </div>
    
          <div className={styles.stepsContainer}>
            {processSteps.map((step, index) => (
              <div className={styles.stepCard} key={index}>
                <div className={styles.iconWrapper}>
                  <img src={step.img} alt={step.title} className={styles.iconImage} />
                  <span className={styles.stepNumber}>{step.number}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

      <CuriousSection/>


{/* workflow section */}
       <section className={styles.workflowSection}>
        <h2 className={styles.workflowTitle}>
        It takes a drag and drop to<br />build your own <span>workflows</span>
      </h2>
      <div className={styles.workflowBox}>
        <div className={styles.workflowStep}>
          <span className={styles.workflowLabel}>
            <svg className={styles.workflowIcon} viewBox="0 0 24 24" fill="none"><path d="M17 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM7 5h10v14H7V5z" fill="currentColor"/></svg>
            Check if team is away
          </span>
        </div>

        <div className={styles.workflowArrow}></div>

        <div className={styles.workflowCard}>
          <img src={images.workFlow} alt="Bot" className={styles.workflowBotIcon} />
          <div className={styles.workflowText}>AI Chatbot<br />Auto Reply</div>
        </div>

        <div className={styles.workflowArrow}></div>

        <div className={styles.workflowCircle}>+</div>
      </div>

      
    </section>




    </Fragment>
  )
}

export default SharedInboxProcess
