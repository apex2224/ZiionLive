import React, {  useState, useRef, useEffect } from 'react'
import styles from './dataScience.module.css'
import images from '../../../assets/images'
import Navbar from '../../head/Navbar';
import Footer from '../../footer/Footer';
import { statsData, heroPhrases, chooseUsLeftItems, chooseUsRightItems, careerOpportunities,faqQuestions,syllabusData,projectData } from './dataScienceData';
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

const DataScience= () => {
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
  const [selected, setSelected] = useState("CSS, CSS3");

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
      <section className={styles.webDesigningHeroSection}>
        <div className={styles.webDesigning}>
          <img src={images.knowledgeHeroImage} alt="background" className={styles.webDesigningBgImage} />
        </div>

        <div className={styles.webDesigningContent}>
          <h1 className={styles.webDesigningTitle}>
      <span className={`${styles.webDesigningFalldown} ${styles.gradientText}`}>
       AI-Driven Data Science Course in Chandigarh
<br />
        <span className={styles.typedText}>{typedOutput}</span>
        <span className={styles.cursor}>|</span>
      </span>
    </h1>
          <h2 className={styles.webDesigningSubtitle}>
Learn to transform raw data into powerful predictions and intelligent solutions, building the core skills essential for Artificial Intelligence and Machine Learning, with our top-rated Data Science course in Chandigarh.
          </h2>
          <button className={styles.webDesigningHerobutton}>View Demo →</button>
        </div>
      </section>

      {/* stat section */}
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
    
{/* tools container */}
<section className={styles.toolsMain}>
  <h1>tools</h1>
<div className={styles.webdevtoolsContainer}>
      <div className={styles.webdevtools}>
        <div className={styles.textBlock}>
          <h3 className={styles.title}>Python</h3>
          <p className={styles.description}>
            Python is the most widely used programming language in Data Science due to its simplicity and powerful libraries like NumPy, Pandas, and Matplotlib.
          </p>
        </div>
        <div className={styles.webdevtoolsFeature}>
          <img src={images.python} alt="Python for Data Science" className={styles.webdevtoolsFeatureImg} />
        </div>
      </div>

      <div className={styles.webdevtools}>
        <div className={styles.webdevtoolsFeature}>
          <img src={images.tensorflow} alt="TensorFlow" className={styles.webdevtoolsFeatureImg} />
        </div>
        <div className={styles.textBlock}>
          <h3 className={styles.title}>TensorFlow</h3>
          <p className={styles.description}>
            TensorFlow is an open-source machine learning framework developed by Google, ideal for building deep learning models.
          </p>
        </div>
      </div>

      <div className={styles.webdevtools}>
        <div className={styles.textBlock}>
          <h3 className={styles.title}>Scikit-learn</h3>
          <p className={styles.description}>
            Scikit-learn is a Python library that provides simple and efficient tools for data mining, machine learning, and data analysis.
          </p>
        </div>
        <div className={styles.webdevtoolsFeature}>
          <img src={images.sklearn} alt="Scikit-learn" className={styles.webdevtoolsFeatureImg} />
        </div>
      </div>

      <div className={styles.webdevtools}>
        <div className={styles.webdevtoolsFeature}>
          <img src={images.pytorch} alt="Keras" className={styles.webdevtoolsFeatureImg} />
        </div>
         <div className={styles.textBlock}>
          <h3 className={styles.title}>PyTorch</h3>
          <p className={styles.description}>
            Developed by Facebook, PyTorch is popular for its dynamic computational graph and is widely used for research and production in deep learning.
          </p>
        </div>
      </div>

        <div className={styles.webdevtools}>
        <div className={styles.textBlock}>
          <h3 className={styles.title}>NumPy</h3>
          <p className={styles.description}>
            A foundational library for numerical computing in Python, NumPy supports large, multi-dimensional arrays and matrices along with mathematical functions.
          </p>
        </div>
        <div className={styles.webdevtoolsFeature}>
          <img src={images.numpy} alt="NumPy" className={styles.webdevtoolsFeatureImg} />
        </div>
      </div>

      
      <div className={styles.webdevtools}>
        <div className={styles.webdevtoolsFeature}>
          <img src={images.matplotlib} alt="Matplotlib" className={styles.webdevtoolsFeatureImg} />
        </div>
        <div className={styles.textBlock}>
          <h3 className={styles.title}>Matplotlib</h3>
          <p className={styles.description}>
            Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python.
          </p>
        </div>
      </div>

      <div className={styles.webdevtools}>
        <div className={styles.textBlock}>
          <h3 className={styles.title}>Jupyter Notebook</h3>
          <p className={styles.description}>
            Jupyter Notebook is an open-source web application that allows you to create and share documents containing live code, equations, and visualizations.
          </p>
        </div>
        <div className={styles.webdevtoolsFeature}>
          <img src={images.jupyter} alt="Jupyter Notebook" className={styles.webdevtoolsFeatureImg} />
        </div>
      </div>

      
      <div className={styles.webdevtools}>
        <div className={styles.webdevtoolsFeature}>
          <img src={images.seaborn} alt="Matplotlib" className={styles.webdevtoolsFeatureImg} />
        </div>
        <div className={styles.textBlock}>
          <h3 className={styles.title}>Seaborn</h3>
          <p className={styles.description}>
            Seaborn is built on top of Matplotlib and provides a high-level interface for drawing attractive and informative statistical graphics.
          </p>
        </div>
      </div>
    </div>

</section>


      {/* what will you learn */}
      <div className={styles.container}>
        <h1 className={styles.heading}>What Will Our Trainees Learn In Data Science Training?</h1>
        <p className={styles.subheading}>
          Explore our <strong>Data Science training course</strong> curriculum to know what you are going to learn exactly.
         Ziion Technology is one of India’s leading industrial training institutes, offering comprehensive training to our <strong>trainees</strong>.
        </p>

        <div className={styles.roadmapBox}>
          <div className={styles.leftSection}>
            <div className={styles.whoCanJoinSection}>
              <h2 className={styles.sectionTitle}>Who Can Join & What You'll Gain</h2>
              <ul className={styles.pointsList}>
                <li className={styles.pointItem}>
                  <span className={styles.arrow}>→</span>
                  <div>
                    <strong>Aspiring Data Scientist</strong><br />
                     Beginners with an analytical mindset eager to enter the field.

                  </div>
                </li>
                <li className={styles.pointItem}>
                  <span className={styles.arrow}>→</span>
                  <div>
                    <strong>Software Developers/Engineers</strong><br />
                     Looking to transition into data-centric roles.


                  </div>
                </li>

                <li className={styles.pointItem}>
                  <span className={styles.arrow}>→</span>
                  <div>
                    <strong>Analysts & Statisticians</strong><br />
Wanting to upgrade skills with modern tools and machine learning techniques.                  </div>
                </li>

                <li className={styles.pointItem}>
                  <span className={styles.arrow}>→</span>
                  <div>
                    <strong>Academics & Researchers</strong><br />
                      Seeking practical applications for their theoretical knowledge.
                  </div>
                </li>

                <li className={styles.pointItem}>
                  <span className={styles.arrow}>→</span>
                  <div>
                    <strong>Any Professional</strong><br />
          With a keen interest in data, problem-solving, and a desire to make data-driven decisions.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.rightSection}>
            <img
              src={images.willGet}
              alt="Web Training Roadmap"
              className={styles.whatlearnimg}
            />
          </div>
        </div>
      </div>

<EnrollProcess/>
      
          {/* sylabus */}
   <div className={styles.syllabusContainer}>
  <h1>What Will Our Trainees Learn In Web Designing Training</h1>
  <p>Explore our <strong>Data Science training course</strong> curriculum to know what you are going to learn exactly.
         Ziion Technology is one of India’s leading industrial training institutes, offering comprehensive training to our <strong>trainees</strong>.</p>

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


{/* projects */}
 <div className={styles.projectforwebdesigning_container}>
      <h2 className={styles.projectforwebdesigning_heading}>Build Real-Time Projects to be Industry-Ready</h2>
      <p className={styles.projectforwebdesigning_subheading}>
        At Tutort, you learn and grow in the same way that you would on the job. You will learn the fundamentals,
        receive guidance from our mentors, solve real-world problems, and work your way to the top - all while doing
        professional work on real-time projects.
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

      <PlacementCarousel/>

      {/* career oportunities */}

      <div>
        <h2 className={styles.opportunitiesheading}>
          💼 Career  <span> Opportunities</span> After This Course.
        </h2>
        <div className={styles.careerOpportunitiesGrid}>
          {careerOpportunities.map((service, index) => (
            <div
              key={index}
              className={`${styles.careerCard} ${styles.curveTopRight} ${styles.curveBottomLeft}`}
            >
              <div className={styles.careerCardContent}>
                <div className={styles.careerIcon}></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* why choose us section  */}

      <section className={styles.whychooseusSection}>
        <div className={styles.whychooseusTitleBlock}>
          <p className={styles.whychooseusTagline}>MASTER NEW SKILLS</p>
          <h2 className={styles.whychooseusHeading}>
            Why Choose <span>Ziion Technology</span> For Data Science Course In Mohali?
          </h2>
          <p className={styles.whychooseusSubtitle}>
            Ziion Technology enables every student to develop exceptional skills in <strong>Data Science Training</strong> and guarantees 100% job assistance in the industry.
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

      <Certification/>

{/* faq section */}


       <div className={styles.faqContainer}>
  <div className={styles.faqContent}>
    <div className={styles.faqLeft}>
      <h1 className={styles.faqHeading}>Frequently Asked Questions</h1>
      {/* <p className={styles.faqDescription}>
        Blandit nunc sapien orci egestas scelerisque mattis. Pulvinar pellentesque cursus ornare neque non mi pellentesque adipiscing mollis.
      </p> */}

      <div className={styles.faqFaqs}>
        {faqQuestions.map((item, index) => (
          <div key={index} className={styles.faqFaqCard}>
            <div
              className={styles.faqFaqHeader}
              onClick={() => toggleFAQ(index)}
            >
              <span className={styles.faqIconCircle}>
                {openIndex === index ? '−' : '+'}
              </span>
              <span className={styles.faqQuestionText}>{item.question}</span>
            </div>
            {openIndex === index && (
              <div
                ref={(el) => (faqRefs.current[index] = el)}
                className={styles.faqFaqBody}
              >
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
  )
}
export default DataScience;