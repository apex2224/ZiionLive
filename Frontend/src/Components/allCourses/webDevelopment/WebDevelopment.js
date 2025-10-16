import React, { useState, useEffect, useRef } from 'react'
import styles from './webDev.module.css'
import images from '../../../assets/images'
import Navbar from '../../head/Navbar';
import Footer from '../../footer/Footer';
import { heroPhrases, statsData, chooseUsLeftItems, chooseUsRightItems, careerOpportunities, faqQuestions, syllabusData, leftScrollCards } from './webdevData';
import EnrollProcess from '../ProcessSection/EnrollProcess';
import Certification from '../../Certification/Certification';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Form from '../../form/Form'
import ReviewsSection from '../../reviews/ReviewsSection';
import SecondForm from '../../secondForm/SecondForm';


const rightScrollCards = [
    { image: images.raghav },
    { image: images.jasmeet },
    { image: images.parmeet },
    { image: images.nisha },
    { image: images.rupal },
    { image: images.shubham },
    { image: images.simranjeet },
    { image: images.simrat },
    { image: images.abhishek },
    { image: images.arunesh },

];

const CARD_WIDTH = 300; // px
const VIDEO_WIDTH = 310; // px



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
        setTimeout(() => setIsDeleting(true), 1200); // pause before deleting
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrasesArray.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentPhraseIndex, phrasesArray]);

  return text;
}
const WebDevelopment = () => {
  const [showForm, setShowForm] = useState(false);
  const typedOutput = useCustomTypewriter(heroPhrases);

      const [active, setActive] = useState(null);
  

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


  const [selected, setSelected] = useState(Object.keys(syllabusData)[0] || '');


// placement //
  // Top (left → right)
    const [topIndex, setTopIndex] = useState(0);
    const [topTransition, setTopTransition] = useState(true);

    // Bottom (right → left)
    const [bottomIndex, setBottomIndex] = useState(0);
    const [bottomTransition, setBottomTransition] = useState(true);

    // Carousel play/pause state
    const [isTopPaused, setIsTopPaused] = useState(false);
    const [isBottomPaused, setIsBottomPaused] = useState(false);

    // Auto move top carousel
    useEffect(() => {
        if (isTopPaused) return;
        const id = setInterval(() => {
            setTopIndex((prev) => prev + 1);
        }, 2000);
        return () => clearInterval(id);
    }, [isTopPaused]);

    // Auto move bottom carousel
    useEffect(() => {
        if (isBottomPaused) return;
        const id = setInterval(() => {
            setBottomIndex((prev) => prev + 1);
        }, 2200);
        return () => clearInterval(id);
    }, [isBottomPaused]);

    // Reset loop for top
    useEffect(() => {
        if (topIndex >= rightScrollCards.length) {
            setTimeout(() => {
                setTopTransition(false);
                setTopIndex(0);
                requestAnimationFrame(() => setTopTransition(true));
            }, 800);
        }
    }, [topIndex]);

    // Reset loop for bottom
    useEffect(() => {
        if (bottomIndex >= leftScrollCards.length) {
            setTimeout(() => {
                setBottomTransition(false);
                setBottomIndex(0);
                requestAnimationFrame(() => setBottomTransition(true));
            }, 800);
        }
    }, [bottomIndex]);

    // Pause on hover handlers
    const handleTopMouseEnter = () => setIsTopPaused(true);
    const handleTopMouseLeave = () => setIsTopPaused(false);

    const handleBottomMouseEnter = () => setIsBottomPaused(true);
    const handleBottomMouseLeave = () => setIsBottomPaused(false);

    // Manual buttons
    const handleTopPrev = () => {
        setTopIndex((prev) => (prev === 0 ? rightScrollCards.length - 1 : prev - 1));
    };
    const handleTopNext = () => {
        setTopIndex((prev) => (prev === rightScrollCards.length - 1 ? 0 : prev + 1));
    };

    const handleBottomPrev = () => {
        setBottomIndex((prev) => (prev === 0 ? leftScrollCards.length - 1 : prev - 1));
    };
    const handleBottomNext = () => {
        setBottomIndex((prev) => (prev === leftScrollCards.length - 1 ? 0 : prev + 1));
    };


  return (
    <div>
      <Navbar />
      <section className={styles.webDesigningHeroSection}>
        <div className={styles.overlay}>
          <img src={images.mongo} alt="mongo" className={styles.mongo} />
          <img src={images.express} alt="express" className={styles.express} />
          <img src={images.html} alt="html" className={styles.html} />
          <img src={images.js} alt="js" className={styles.js} />
          <img src={images.css} alt="css" className={styles.css} />


        </div>
        <div className={styles.webDesigning}>
          <img src={images.knowledgeHeroImage} alt="background" className={styles.webDesigningBgImage} />
        </div>

        <div className={styles.webDesigningContent}>
          <h1 className={styles.webDesigningTitle}>
            <span className={`${styles.webDesigningFalldown} ${styles.gradientText}`}>
              Web Development Course in Chandigarh <br />
              <span className={styles.typedText}>{typedOutput}</span>
              <span className={styles.cursor}>|</span>
            </span>
          </h1>
          <h2 className={styles.webDesigningSubtitle}>
            Our Web Development Course is designed to provide hands-on training with a focus on HTML, CSS, JavaScript, Bootstrap, React, Node.js, and more. We help you build responsive, dynamic, and scalable websites that meet modern industry standards.
          </h2>
          <button className={styles.herobutton} onClick={() => setShowForm(true)}>
            Talk to us
          </button>
        </div>
        {showForm && <Form closeForm={() => setShowForm(false)} />}

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



      {/* tools section */}

      <section className={styles.toolsMain}>
        <h1>Tools</h1>
        <div className={styles.webdevtoolsContainer}>

          {/* HTML */}
          <div className={styles.webdevtools}>
            <div className={styles.textBlock}>
              <h3 className={styles.title}>HTML</h3>
              <p className={styles.toolDescription}>
                HTML (HyperText Markup Language) forms the backbone of web development by structuring web pages using elements like headings, paragraphs, and links.
              </p>
            </div>
            <div className={styles.webdevtoolsFeature}>
              <img src={images.html} alt="HTML" className={styles.webdevtoolsFeatureImg} />
            </div>
          </div>

          {/* CSS */}
          <div className={styles.webdevtools}>
            <div className={styles.webdevtoolsFeature}>
              <img src={images.css} alt="CSS" className={styles.webdevtoolsFeatureImg} />
            </div>
            <div className={styles.textBlock}>
              <h3 className={styles.title}>CSS</h3>
              <p className={styles.toolDescription}>
                CSS (Cascading Style Sheets) handles the visual design of web pages by controlling layout, colors, fonts, and responsiveness.
              </p>
            </div>
          </div>

          {/* JavaScript */}
          <div className={styles.webdevtools}>
            <div className={styles.textBlock}>
              <h3 className={styles.title}>JavaScript</h3>
              <p className={styles.toolDescription}>
                JavaScript adds interactivity and dynamic behavior to web pages, enabling features like animations, data validation, and API calls.
              </p>
            </div>
            <div className={styles.webdevtoolsFeature}>
              <img src={images.js} alt="JavaScript" className={styles.webdevtoolsFeatureImg} />
            </div>
          </div>

          {/* React */}
          <div className={styles.webdevtools}>
            <div className={styles.webdevtoolsFeature}>
              <img src={images.react} alt="React" className={styles.webdevtoolsFeatureImg} />
            </div>
            <div className={styles.textBlock}>
              <h3 className={styles.title}>React</h3>
              <p className={styles.toolDescription}>
                React is a popular JavaScript library for building fast and modular user interfaces using reusable components and virtual DOM.
              </p>
            </div>
          </div>

          {/* MongoDB */}
          <div className={styles.webdevtools}>
            <div className={styles.textBlock}>
              <h3 className={styles.title}>MongoDB</h3>
              <p className={styles.toolDescription}>
                MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it ideal for modern, scalable web applications.
              </p>
            </div>
            <div className={styles.webdevtoolsFeature}>
              <img src={images.mongo} alt="MongoDB" className={styles.webdevtoolsFeatureImg} />
            </div>
          </div>

          {/* Express.js */}
          <div className={styles.webdevtools}>
            <div className={styles.webdevtoolsFeature}>
              <img src={images.express} alt="Express.js" className={styles.webdevtoolsFeatureImg} />
            </div>
            <div className={styles.textBlock}>
              <h3 className={styles.title}>Express.js</h3>
              <p className={styles.toolDescription}>
                Express.js is a lightweight Node.js framework that simplifies building server-side applications and APIs with robust routing capabilities.
              </p>
            </div>
          </div>

          {/* Node.js */}
          <div className={styles.webdevtools}>
            <div className={styles.textBlock}>
              <h3 className={styles.title}>Node.js</h3>
              <p className={styles.toolDescription}>
                Node.js is a runtime environment that allows developers to run JavaScript on the server side, enabling full-stack JavaScript development.
              </p>
            </div>
            <div className={styles.webdevtoolsFeature}>
              <img src={images.nodejs} alt="Node.js" className={styles.webdevtoolsFeatureImg} />
            </div>
          </div>

          {/* Next.js */}
          <div className={styles.webdevtools}>
            <div className={styles.webdevtoolsFeature}>
              <img src={images.nextjs} alt="Next.js" className={styles.webdevtoolsFeatureImg} />
            </div>
            <div className={styles.textBlock}>
              <h3 className={styles.title}>Next.js</h3>
              <p className={styles.toolDescription}>
                Next.js is a React-based framework for building high-performance, SEO-friendly web applications with features like SSR and static site generation.
              </p>
            </div>
          </div>

        </div>
        <button className={styles.herobutton} onClick={() => setShowForm(true)}>
          Talk to us
        </button>
      </section>



      {/* what will you learn */}
      <div className={styles.learncontainer}>
        <h1 className={styles.whatHeading}>Who Can Join Our Web Development Course?</h1>
        <p className={styles.subheading}>
          Explore our <strong>Web Development training course</strong> curriculum to discover the essential skills you'll gain.
          Certiwise is one of India’s leading industrial training institutes, offering practical, job-ready training to our <strong>trainees</strong>.
        </p>

        <div className={styles.roadmapBox}>
          <div className={styles.leftSection}>
            <div className={styles.whoCanJoinSection}>
              <h2 className={styles.sectionTitle}>Who Can Join & What You'll Gain</h2>
              <ul className={styles.pointsList}>
                <li className={styles.pointItem}>
                  <span className={styles.arrow}>→</span>
                  <div>
                    <strong>Students (10th/12th Pass)</strong><br />
                    Build your foundation in HTML, CSS, and JavaScript. Start your journey toward a tech career early and gain skills to create your first website.
                  </div>
                </li>

                <li className={styles.pointItem}>
                  <span className={styles.arrow}>→</span>
                  <div>
                    <strong>Graduates / Job Seekers</strong><br />
                    Get industry-ready with full-stack skills and portfolio projects. Secure job roles like front-end developer, web designer, or junior developer.
                  </div>
                </li>

                <li className={styles.pointItem}>
                  <span className={styles.arrow}>→</span>
                  <div>
                    <strong>Freelancers & Entrepreneurs</strong><br />
                    Build and manage your own websites or client projects. Launch your business online and promote your services through a strong web presence.
                  </div>
                </li>

                <li className={styles.pointItem}>
                  <span className={styles.arrow}>→</span>
                  <div>
                    <strong>Working Professionals (Upskilling)</strong><br />
                    Add web development to your skillset to shift into tech roles or manage websites and web apps within your current organization.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.rightSection}>
            <img
              src={images.willGet}
              alt="Web Development Roadmap"
              className={styles.whatlearnimg}
            />
          </div>
        </div>
      </div>


      <EnrollProcess />
      
      {/* placemnet */}
       <div>
                  <h1 className={styles.storyHeading}>Our Success Story</h1>
      
      
                  {/* 🔹 Bottom: videos, right → left */}
                  <div className={styles.leftCarouselWrapper}>
                      <div
                          className={styles.leftCarousel}
                          style={{
                              transform: `translateX(-${bottomIndex * VIDEO_WIDTH}px)`,
                              transition: bottomTransition ? "transform 0.8s ease-in-out" : "none",
                          }}
                          onMouseEnter={handleBottomMouseEnter}
                          onMouseLeave={handleBottomMouseLeave}
                      >
                          {[...leftScrollCards, ...leftScrollCards].map((item, i) => (
                              <div key={i} className={styles.leftCard}>
                                  <iframe
                                      src={item.iframe}
                                      className={styles.leftIframe}
                                      title={`video-${i}`}
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowFullScreen
                                      loading="lazy"
                                  />
                                  <div className={styles.leftProfileSection}>{item.name}</div>
                                  <div className={styles.leftCompanySection}>{item.company}</div>
                              </div>
                          ))}
                      </div>
                      <div className={styles.carouselButtons}>
                          <button onClick={handleBottomPrev} className={styles.carouselBtn}>◀️</button>
                          <button onClick={handleBottomNext} className={styles.carouselBtn}>▶️</button>
                      </div>
                  </div>

                  
                  {/* 🔹 Top: images, left → right */}
                  <div className={styles.carouselWrapper}>
                      <div
                          className={styles.carousel}
                          style={{
                              // Start far left, move towards 0
                              transform: `translateX(${-rightScrollCards.length * CARD_WIDTH + topIndex * CARD_WIDTH
                                  }px)`,
                              transition: topTransition ? "transform 0.8s ease-in-out" : "none",
                          }}
                          onMouseEnter={handleTopMouseEnter}
                          onMouseLeave={handleTopMouseLeave}
                      >
                          {[...rightScrollCards, ...rightScrollCards].map((item, i) => (
                              <div key={i} className={styles.card}>
                                  <img src={item.image} alt="student" className={styles.cardImage} />
                              </div>
                          ))}
                      </div>
                      <div className={styles.carouselButtons}>
                          <button onClick={handleTopPrev} className={styles.carouselBtn}>◀️</button>
                          <button onClick={handleTopNext} className={styles.carouselBtn}>▶️</button>
                      </div>
      
                  </div>
              </div>
      
      




      {/* sylabus */}
      <div className={styles.syllabusContainer}>
        <h1>What Will Our Trainees Learn In Web Development Training</h1>
<p>Explore our <strong>Web Development training course</strong> curriculum to know exactly what skills you will gain. Ziion Technology is one of India’s leading industrial training institutes, offering comprehensive training to our <strong>trainees</strong> in front-end and back-end development, databases, frameworks, and building dynamic full-stack applications.</p>

        
         <div className={styles.syllabusWrapper}>
                     {/* Left side - topic list */}
                     <div className={styles.topicList}>
                       <ul className={styles.syllabusList}>
                         {Object.keys(syllabusData).map((topic) => (
                           <li
                             key={topic}
                             className={`${styles.topicItem} ${selected === topic ? styles.active : ''}`}
                             onClick={() => setSelected(topic)}
                           >
                             {topic}
                           </li>
                         ))}
                       </ul>
                     </div>
                   
                     {/* Right side - topic details */}
                     <div className={styles.topicDetails}>
                       <h3>{selected}:</h3>
                       <ul className={styles.syllabusList}>
                         {syllabusData[selected]?.map((item, index) => (
                           <li key={index}>{item}</li>
                         ))}
                       </ul>
                     </div>
                     </div>
      </div>


      






{/* project */}
<div className={styles.projectBackModal}>
  <section className={styles.projectSection}>
    
    {/* Heading */}
    <div className={styles.projectSectionHeader}>
      <h2 className={styles.projectSectionHeading}>
        Web Development Projects Showcasing Expertise
      </h2>
    </div>

    {/* Grid */}
    <div className={styles.projectSectionGrid}>
      
      {/* Project 1 */}
      <div className={`${styles.projectSectionCard} ${styles.project1}`}>
        <div className={styles.projectSectionIconWrapper}>
          <div className={styles.projectSectionIcon}>🌐</div>
        </div>
        <div className={styles.projectSectionContent}>
          <h3 className={styles.projectSectionTitle}>Responsive Portfolio Website</h3>
          <p className={styles.projectSectionDesc}>
            Built a fully responsive personal portfolio using React and Tailwind CSS, optimized for desktop and mobile devices.
          </p>
        </div>
      </div>

      {/* Project 2 */}
      <div className={`${styles.projectSectionCard} ${styles.project2}`}>
        <div className={styles.projectSectionIconWrapper}>
          <div className={styles.projectSectionIcon}>🛠️</div>
        </div>
        <div className={styles.projectSectionContent}>
          <h3 className={styles.projectSectionTitle}>E-Commerce Platform</h3>
          <p className={styles.projectSectionDesc}>
            Developed a MERN stack e-commerce application with product catalog, cart, payments, and admin dashboard.
          </p>
        </div>
      </div>

      {/* Project 3 */}
      <div className={`${styles.projectSectionCard} ${styles.project3}`}>
        <div className={styles.projectSectionIconWrapper}>
          <div className={styles.projectSectionIcon}>📱</div>
        </div>
        <div className={styles.projectSectionContent}>
          <h3 className={styles.projectSectionTitle}>Progressive Web App (PWA)</h3>
          <p className={styles.projectSectionDesc}>
            Built a PWA with offline support, push notifications, and installable features for enhanced user experience.
          </p>
        </div>
      </div>

      {/* Project 4 */}
      <div className={`${styles.projectSectionCard} ${styles.project4}`}>
        <div className={styles.projectSectionIconWrapper}>
          <div className={styles.projectSectionIcon}>⚡</div>
        </div>
        <div className={styles.projectSectionContent}>
          <h3 className={styles.projectSectionTitle}>Real-Time Chat Application</h3>
          <p className={styles.projectSectionDesc}>
            Implemented a real-time chat app using Socket.io and Node.js with authentication and private messaging.
          </p>
        </div>
      </div>

      {/* Project 5 */}
      <div className={`${styles.projectSectionCard} ${styles.project5}`}>
        <div className={styles.projectSectionIconWrapper}>
          <div className={styles.projectSectionIcon}>📊</div>
        </div>
        <div className={styles.projectSectionContent}>
          <h3 className={styles.projectSectionTitle}>Data Visualization Dashboard</h3>
          <p className={styles.projectSectionDesc}>
            Designed an analytics dashboard with Chart.js and D3.js to visualize business KPIs interactively.
          </p>
        </div>
      </div>

      {/* Project 6 */}
      <div className={`${styles.projectSectionCard} ${styles.project6}`}>
        <div className={styles.projectSectionIconWrapper}>
          <div className={styles.projectSectionIcon}>🔐</div>
        </div>
        <div className={styles.projectSectionContent}>
          <h3 className={styles.projectSectionTitle}>Authentication System</h3>
          <p className={styles.projectSectionDesc}>
            Built a secure login system with JWT, OAuth integration, and role-based access control.
          </p>
        </div>
      </div>

      {/* Project 7 */}
      <div className={`${styles.projectSectionCard} ${styles.project7}`}>
        <div className={styles.projectSectionIconWrapper}>
          <div className={styles.projectSectionIcon}>☁️</div>
        </div>
        <div className={styles.projectSectionContent}>
          <h3 className={styles.projectSectionTitle}>Cloud Deployment</h3>
          <p className={styles.projectSectionDesc}>
            Deployed full-stack applications on AWS and Vercel with CI/CD pipelines and scalability in mind.
          </p>
        </div>
      </div>

      {/* Project 8 */}
      <div className={`${styles.projectSectionCard} ${styles.project8}`}>
        <div className={styles.projectSectionIconWrapper}>
          <div className={styles.projectSectionIcon}>🖼️</div>
        </div>
        <div className={styles.projectSectionContent}>
          <h3 className={styles.projectSectionTitle}>Image Optimization Tool</h3>
          <p className={styles.projectSectionDesc}>
            Created a Next.js tool to compress and optimize images for performance and SEO improvements.
          </p>
        </div>
      </div>

      {/* Project 9 */}
      <div className={`${styles.projectSectionCard} ${styles.project9}`}>
        <div className={styles.projectSectionIconWrapper}>
          <div className={styles.projectSectionIcon}>🤖</div>
        </div>
        <div className={styles.projectSectionContent}>
          <h3 className={styles.projectSectionTitle}>AI-Powered Blog Generator</h3>
          <p className={styles.projectSectionDesc}>
            Integrated OpenAI API to auto-generate SEO-friendly blog posts with rich text editor support.
          </p>
        </div>
      </div>

    </div>
  </section>
</div>







 {/* achievers */}

<section className={styles.achieversSection}>
  <div className={styles.achieversInner}>
    <h2 id="achievers-title" className={styles.achieversTitle}>
      <span className={styles.shimmer}>Our Achievers</span>
    </h2>

    <p className={styles.achieversSubtitle}>
      From <span className={styles.highlight}>classroom</span> to{" "}
      <span className={styles.highlight}>career</span> — turning ambition into offers at leading companies.
    </p>
  </div>

  <div className={styles.appFeatureContainer}>
    {/* Aayush - Data Science */}
    <div
      className={`${styles.appFeatureCard} ${active === 'nisha' ? styles.active : ''}`}
      onMouseEnter={() => setActive('nisha')}
      onMouseLeave={() => setActive(null)}
    >
      <img src={images.aayushDs} className={styles.appFeatureImage} alt="Aayush" />
      <div className={styles.appFeatureOverlay}>
        {active === 'nisha' && (
          <p className={styles.appFeatureText}>
            “Data is powerful — those who master it, master the future.”
          </p>
        )}
      </div>
    </div>

    {/* Abhishek - Data Science */}
    <div
      className={`${styles.appFeatureCard} ${active === 'parmeet' ? styles.active : ''}`}
      onMouseEnter={() => setActive('parmeet')}
      onMouseLeave={() => setActive(null)}
    >
      <img src={images.abhishekDs} className={styles.appFeatureImage} alt="Abhishek" />
      <div className={styles.appFeatureOverlay}>
        {active === 'parmeet' && (
          <p className={styles.appFeatureText}>
            “Consistency in learning turns raw data into career-changing insights.”
          </p>
        )}
      </div>
    </div>

    {/* Aryan - Data Science */}
    <div
      className={`${styles.appFeatureCard} ${active === 'raghav' ? styles.active : ''}`}
      onMouseEnter={() => setActive('raghav')}
      onMouseLeave={() => setActive(null)}
    >
      <img src={images.aryanDs} className={styles.appFeatureImage} alt="Aryan" />
      <div className={styles.appFeatureOverlay}>
        {active === 'raghav' && (
          <p className={styles.appFeatureText}>
            “Every dataset is a new opportunity — embrace the challenge.”
          </p>
        )}
      </div>
    </div>

    {/* Harmanpreet - Data Science */}
    <div
      className={`${styles.appFeatureCard} ${active === 'rupalpreet' ? styles.active : ''}`}
      onMouseEnter={() => setActive('rupalpreet')}
      onMouseLeave={() => setActive(null)}
    >
      <img src={images.harmanPreetDs} className={styles.appFeatureImage} alt="Harmanpreet" />
      <div className={styles.appFeatureOverlay}>
        {active === 'rupalpreet' && (
          <p className={styles.appFeatureText}>
            “Failures are just experiments — keep iterating, keep improving.”
          </p>
        )}
      </div>
    </div>

    {/* Manan Manglesh - Data Science */}
    <div
      className={`${styles.appFeatureCard} ${active === 'shubham' ? styles.active : ''}`}
      onMouseEnter={() => setActive('shubham')}
      onMouseLeave={() => setActive(null)}
    >
      <img src={images.mananMangleshDs} className={styles.appFeatureImage} alt="Manan Manglesh" />
      <div className={styles.appFeatureOverlay}>
        {active === 'shubham' && (
          <p className={styles.appFeatureText}>
            “In Data Science, persistence trains the mind like algorithms train the model.”
          </p>
        )}
      </div>
    </div>

    {/* Mohit Kumar - Data Science */}
    <div
      className={`${styles.appFeatureCard} ${active === 'app' ? styles.active : ''}`}
      onMouseEnter={() => setActive('app')}
      onMouseLeave={() => setActive(null)}
    >
      <img src={images.mohitKumarDataScience} className={styles.appFeatureImage} alt="Mohit Kumar" />
      <div className={styles.appFeatureOverlay}>
        {active === 'app' && (
          <p className={styles.appFeatureText}>
            “Innovate with data, create with code, and build your tomorrow.”
          </p>
        )}
      </div>
    </div>

    {/* Raman Deep - Data Science */}
    <div
      className={`${styles.appFeatureCard} ${active === 'marketing' ? styles.active : ''}`}
      onMouseEnter={() => setActive('marketing')}
      onMouseLeave={() => setActive(null)}
    >
      <img src={images.ramanDeepDs} className={styles.appFeatureImage} alt="Raman Deep" />
      <div className={styles.appFeatureOverlay}>
        {active === 'marketing' && (
          <p className={styles.appFeatureText}>
            “Passion for data and persistence in learning define a true achiever.”
          </p>
        )}
      </div>
    </div>
  </div>
</section>






      {/* career oportunities */}


      {/* career oportunities */}
      <div className={styles.carerrOpportunities}>
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

        <button className={styles.herobutton} onClick={() => setShowForm(true)}>
          Talk to us
        </button>

      </div>

      {/* why choose us section  */}

      <section className={styles.whychooseusSection}>
        <div className={styles.whychooseusTitleBlock}>
          <p className={styles.whychooseusTagline}>BUILD FUTURE-READY WEBSITES</p>
          <h2 className={styles.whychooseusHeading}>
            Why Choose <span>Ziion Technology</span> For Web Development In Mohali?
          </h2>
          <p className={styles.whychooseusSubtitle}>
            Ziion Technology empowers every student with hands-on experience in <strong>Web Development Training</strong> and provides 100% job assistance to help kickstart your career in the tech industry.
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
            <img src={images.whyChooseImg} alt="Graduate Illustration" />
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


      <ReviewsSection/>






      {/* faq section */}


      <div className={styles.faqContainer}>
        <div className={styles.faqContent}>
          <div className={styles.faqLeft}>
            <h1 className={styles.faqHeading}>Frequently Asked Questions</h1>


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




{/* certificate */}
<section className={styles.certificateSection}>
      <div className={styles.mainContainer}>
        <div className={styles.certificateImage}>
          <img src={images.certificatehero} alt="Ziion Certificate" />
        </div>

        <div className={styles.certificateContent}>
          <h2>WHAT BENEFITS AWAIT YOU AT ZIION TECHNOLOGY?</h2>
          <p className={styles.highlight}>
            Highly Acclaimed Program Over the Years, We've Educated Over 35,000+ Learners & Supported Them in Landing Their Initial IT Sector Role.
          </p>
          <p className={styles.description}>
            We Provide Fully Career-Focused Courses for Professionals, Entrepreneurs, High School Graduates, University Students, Small Business Owners, Marketing Experts & Career Changers at Reasonable Costs. We Empower Driven Individuals Like You to Shape Their Future by Teaching Skills That Every Sector Seeks.
          </p>
          <p className={styles.showcase}>
            <strong>Showcase Your Success</strong><br />
            Post it on LinkedIn, Twitter, and Facebook to enhance your profile. Highlight your accomplishment and share the news with peers and coworkers.
          </p>
        </div>
      </div>

      <div className={styles.certificateGallery}>
        <img src={images.jasmeet} alt="Certificate Sample1" />
        <img src={images.nisha} alt="Certificate Sample2" />
        <img src={images.raghav} alt="Certificate Sample3" />
        <img src={images.arunesh} alt="Certificate Sample4" />
      </div>
    </section>




    <SecondForm/>

      <Footer />
    </div>
  )
}
export default WebDevelopment;