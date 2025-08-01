import React, { useState, useEffect, useRef } from 'react';
import styles from './ML.module.css';
import images from '../../../assets/images';
import Navbar from '../../head/Navbar';
import Footer from '../../footer/Footer';
import {
  heroPhrases,
  statsData,
  chooseUsLeftItems,
  chooseUsRightItems,
  careerOpportunities,
  faqQuestions,
  syllabusData,
  projectData
} from './MLdata';
import EnrollProcess from '../ProcessSection/EnrollProcess';
import Certification from '../../Certification/Certification';
import PlacementCarousel from '../../placementcarousel/PlacementCarousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const useCustomTypewriter = (phrasesArray) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrasesArray[currentPhraseIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrasesArray.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentPhraseIndex, phrasesArray]);

  return text;
};

const MachineLearning = () => {
  const typedOutput = useCustomTypewriter(heroPhrases);

  // FAQ toggle
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    faqRefs.current.forEach((ref, i) => {
      if (ref) {
        if (i === openIndex) {
          ref.classList.add(styles.openBody);
        } else {
          ref.classList.remove(styles.openBody);
        }
      }
    });
  }, [openIndex]);

  // Syllabus tab
  const [selected, setSelected] = useState("Supervised Learning");

  // Projects slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 4;

  const nextProject = () => {
    if (currentIndex + visibleCount < projectData.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleProjects = projectData.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.webDesigningHeroSection}>
        <div className={styles.webDesigning}>
          <img src={images.knowledgeHeroImage} alt="background" className={styles.webDesigningBgImage} />
        </div>

        <div className={styles.webDesigningContent}>
          <h1 className={styles.webDesigningTitle}>
            <span className={`${styles.webDesigningFalldown} ${styles.gradientText}`}>
              Machine Learning Course in Chandigarh <br />
              <span className={styles.typedText}>{typedOutput}</span>
              <span className={styles.cursor}>|</span>
            </span>
          </h1>
          <h2 className={styles.webDesigningSubtitle}>
            Our Machine Learning Course is designed to provide hands-on training with real-world tools and techniques.
          </h2>
          <button className={styles.webDesigningHerobutton}>View Demo →</button>
        </div>
      </section>

      {/* Stats */}
      <div className={styles.statsWrapper}>
        {statsData.map((stat, index) => (
          <div className={styles.statCircle} key={index}>
            <div className={styles.statsrotatingRing}></div>
            <div className={styles.statContent}>
              <h2 className={styles.statValue}>{stat.value}</h2>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Who Can Join */}
      <div className={styles.learncontainer}>
        <h1 className={styles.heading}>Who Can Join Our Machine Learning Course?</h1>
        <p className={styles.subheading}>
          Explore our <strong>Machine Learning training course</strong> curriculum to know what you'll learn.
        </p>

        <div className={styles.roadmapBox}>
          <div className={styles.leftSection}>
            <div className={styles.whoCanJoinSection}>
              <h2 className={styles.sectionTitle}>Who Can Join & What You'll Gain</h2>
              <ul className={styles.pointsList}>
                <li className={styles.pointItem}><span className={styles.arrow}>→</span><div><strong>Students (10th/12th Pass)</strong><br /> Get early exposure to real-world tech skills.</div></li>
                <li className={styles.pointItem}><span className={styles.arrow}>→</span><div><strong>Graduates / Job Seekers</strong><br /> Master job-relevant tools.</div></li>
                <li className={styles.pointItem}><span className={styles.arrow}>→</span><div><strong>Freelancers & Entrepreneurs</strong><br /> Build projects, promote brands.</div></li>
                <li className={styles.pointItem}><span className={styles.arrow}>→</span><div><strong>Working Professionals</strong><br /> Stay competitive and upskill.</div></li>
              </ul>
            </div>
          </div>

          <div className={styles.rightSection}>
            <img src={images.willGet} alt="Training Roadmap" className={styles.whatlearnimg} />
          </div>
        </div>
      </div>

      <EnrollProcess />

      {/* Syllabus Section */}
      <div className={styles.syllabusContainer}>
        <h1>Course Syllabus</h1>
        <p>Explore our in-depth syllabus and training modules.</p>

        <div className={styles.syllabusWrapper}>
          <div className={styles.topicList}>
            {Object.keys(syllabusData).map((topic) => (
              <div
                key={topic}
                className={`${styles.topicItem} ${selected === topic ? styles.active : ''}`}
                onClick={() => setSelected(topic)}
              >
                {topic}
              </div>
            ))}
          </div>

          <div className={styles.topicDetails}>
            <h3>{selected}:</h3>
            <ul>
              {syllabusData[selected].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className={styles.projectforwebdesigning_container}>
        <h2 className={styles.projectforwebdesigning_heading}>Build Real-Time Projects</h2>
        <p className={styles.projectforwebdesigning_subheading}>
          Learn by doing real-world ML projects.
        </p>

        <div className={styles.projectforwebdesigning_slider}>
          <button onClick={prevProject} className={styles.projectforwebdesigning_arrow} disabled={currentIndex === 0}>
            <FaArrowLeft />
          </button>

          <div className={styles.projectforwebdesigning_cardContainer}>
            {visibleProjects.map((project, index) => (
              <div key={index} className={styles.projectforwebdesigning_card}>
                <div className={styles.projectforwebdesigning_company}>{project.company}</div>
                <h3 className={styles.projectforwebdesigning_title}>{project.title}</h3>
                <p className={styles.projectforwebdesigning_description}>{project.description}</p>
                <div className={styles.projectforwebdesigning_tags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.projectforwebdesigning_tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextProject}
            className={styles.projectforwebdesigning_arrow}
            disabled={currentIndex + visibleCount >= projectData.length}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <PlacementCarousel />

      {/* Career Opportunities */}
      <div>
        <h2 className={styles.opportunitiesheading}>💼 Career <span>Opportunities</span> After This Course</h2>
        <div className={styles.careerOpportunitiesGrid}>
          {careerOpportunities.map((service, index) => (
            <div key={index} className={`${styles.careerCard} ${styles.curveTopRight} ${styles.curveBottomLeft}`}>
              <div className={styles.careerCardContent}>
                <div className={styles.careerIcon}></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <section className={styles.whychooseusSection}>
        <div className={styles.whychooseusTitleBlock}>
          <p className={styles.whychooseusTagline}>MASTER NEW SKILLS</p>
          <h2 className={styles.whychooseusHeading}>
            Why Choose <span>Ziion Technology</span> For Machine Learning Training?
          </h2>
          <p className={styles.whychooseusSubtitle}>
            Learn from industry experts with job-ready skills and projects.
          </p>
        </div>

        <div className={styles.whychooseusGrid}>
          <div className={styles.whychooseusList}>
            {chooseUsLeftItems.map((item, index) => (
              <div className={styles.whychooseusItem} key={index}>
                <span className={styles.whychooseusIcon}>{item.icon}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className={styles.whychooseusImage}>
            <img src="" alt="Graduate Illustration" />
          </div>

          <div className={styles.whychooseusList}>
            {chooseUsRightItems.map((item, index) => (
              <div className={styles.whychooseusItem} key={index}>
                <span className={styles.whychooseusIcon}>{item.icon}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Certification />

      {/* FAQ Section */}
      <div className={styles.faqContainer}>
        <div className={styles.faqContent}>
          <div className={styles.faqLeft}>
            <h1 className={styles.faqHeading}>Frequently Asked Questions</h1>
            <div className={styles.faqFaqs}>
              {faqQuestions.map((item, index) => (
                <div key={index} className={styles.faqFaqCard}>
                  <div className={styles.faqFaqHeader} onClick={() => toggleFAQ(index)}>
                    <span className={styles.faqIconCircle}>
                      {openIndex === index ? '−' : '+'}
                    </span>
                    <span className={styles.faqQuestionText}>{item.question}</span>
                  </div>
                  {openIndex === index && (
                    <div ref={(el) => (faqRefs.current[index] = el)} className={styles.faqFaqBody}>
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MachineLearning;
