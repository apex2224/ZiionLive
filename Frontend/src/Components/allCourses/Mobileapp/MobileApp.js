import React, { useState, useEffect,useRef } from 'react'
import styles from './mobileApp.module.css'
import images from '../../../assets/images'
import Navbar from '../../head/Navbar';
import Footer from '../../footer/Footer';
import { heroPhrases, statsData,chooseUsLeftItems, chooseUsRightItems, careerOpportunities, faqQuestions,syllabusData,leftScrollCards} from './mobileAppdata';
import EnrollProcess from '../ProcessSection/EnrollProcess';
import Certification from '../../Certification/Certification';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Form from '../../form/Form'
import {
  SiAndroidstudio,
  SiXcode,
  SiReact,
  SiFlutter,
  SiFirebase,
  SiJavascript,
  SiDart,
  // SiVisualstudiocode 
} from 'react-icons/si';
import ReviewsSection from '../../reviews/ReviewsSection';
import SecondForm from '../../secondForm/SecondForm';
import StudentCarousel from '../../placement/StudentCarousel';



const rightScrollCards = [
    { image: images.simratMl },
    { image: images.arshdeepMl },
    { image: images.harnoorMl },
    { image: images.arshdeepSinghMl },
    { image: images.devagyaPy },
    { image: images.gurshanPy },
    { image: images.simranjeet },
    { image: images.simrat },
    { image: images.abhishek },
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

const MobileApp= () => {
    const [showForm, setShowForm] = useState(false);
  
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
                <SiAndroidstudio className={styles.html} color="#3DDC84" />
                <SiXcode className={styles.css} color="#1575F9" />
                <SiReact className={styles.js} color="#61DAFB" />
                <SiFlutter className={styles.react} color="#02569B" />
                <SiFirebase className={styles.bootstrap} color="#FFCA28" />
            </div>

            <div className={styles.webDesigning}>
              <img
                src={images.knowledgeHeroImage}
                alt="Mobile App Development Background"
                className={styles.webDesigningBgImage}
              />
            </div>

            <div className={styles.webDesigningContent}>
              <h1 className={styles.webDesigningTitle}>
                <span className={`${styles.webDesigningFalldown} ${styles.gradientText}`}>
                  Mobile App Development Course in Chandigarh <br />
                  <span className={styles.typedText}>{typedOutput}</span>
                  <span className={styles.cursor}>|</span>
                </span>
              </h1>

              <h2 className={styles.webDesigningSubtitle}>
                Our Mobile App Course provides hands-on experience with Android, iOS, and cross-platform tools like Flutter and React Native.
              </h2>

<button className={styles.herobutton} onClick={() => setShowForm(true)}>
            Talk to us
          </button>
          {showForm && <Form closeForm={() => setShowForm(false)} />}            </div>
          </section>
      {/*Stat Section*/}
      <div className={styles.statsWrapper}>
        {statsData.map((stat, index) => (
          <div className={styles.statCircle} key={index}>
            <div className={styles.rotatingRing}></div> {/* Fixed class name */}
            <div className={styles.statContent}>
              <h2 className={styles.statValue}>{stat.value}</h2>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>





{/* Tool Section - Mobile App Development Focused */}
<section className={styles.toolsMain}>
  <h1>Tools</h1>
  <div className={styles.webdevtoolsContainer}>

    <div className={styles.webdevtools}>
      <div className={styles.textBlock}>
        <h3 className={styles.title}>Android Studio</h3>
        <p className={styles.toolDescription}>
          The official IDE for Android app development, offering robust tools for building and testing Android applications.
        </p>
      </div>
      <div className={styles.webdevtoolsFeature}>
        <SiAndroidstudio size={60} color="#3DDC84" className={styles.tooName}/>
      </div>
    </div>

    <div className={styles.webdevtools}>
      <div className={styles.webdevtoolsFeature}>
        <SiXcode size={60} color="#147EFB" className={styles.tooName}/>
      </div>
      <div className={styles.textBlock}>
        <h3 className={styles.title}>Xcode</h3>
        <p className={styles.toolDescription}>
          Apple's official IDE for iOS development, used for creating applications for iPhone, iPad, and other Apple devices.
        </p>
      </div>
    </div>

    <div className={styles.webdevtools}>
      <div className={styles.textBlock}>
        <h3 className={styles.title}>React Native</h3>
        <p className={styles.toolDescription}>
          A popular JavaScript framework for building cross-platform mobile apps using a single codebase.
        </p>
      </div>
      <div className={styles.webdevtoolsFeature}>
        <SiReact size={60} color="#61DBFB" className={styles.tooName}/>
      </div>
    </div>

    <div className={styles.webdevtools}>
      <div className={styles.webdevtoolsFeature}>
        <SiFlutter size={60} color="#02569B" className={styles.tooName}/>
      </div>
      <div className={styles.textBlock}>
        <h3 className={styles.title}>Flutter</h3>
        <p className={styles.toolDescription}>
          A UI toolkit from Google for building natively compiled apps for mobile, web, and desktop from a single codebase.
        </p>
      </div>
    </div>

    <div className={styles.webdevtools}>
      <div className={styles.textBlock}>
        <h3 className={styles.title}>Firebase</h3>
        <p className={styles.toolDescription}>
          A comprehensive app development platform providing backend services like authentication, database, and hosting.
        </p>
      </div>
      <div className={styles.webdevtoolsFeature}>
        <SiFirebase size={60} color="#FFCA28" className={styles.tooName}/>
      </div>
    </div>

    <div className={styles.webdevtools}>
      <div className={styles.webdevtoolsFeature}>
        <SiJavascript size={60} color="#F7DF1E" className={styles.tooName}/>
      </div>
      <div className={styles.textBlock}>
        <h3 className={styles.title}>JavaScript</h3>
        <p className={styles.toolDescription}>
          The programming language used in frameworks like React Native to build cross-platform mobile apps.
        </p>
      </div>
    </div>

    <div className={styles.webdevtools}>
      <div className={styles.textBlock}>
        <h3 className={styles.title}>Dart</h3>
        <p className={styles.toolDescription}>
          A modern language developed by Google used with Flutter to create fast and expressive apps.
        </p>
      </div>
      <div className={styles.webdevtoolsFeature}>
        <SiDart size={60} color="#0175C2" className={styles.tooName}/>
      </div>
    </div>

    <div className={styles.webdevtools}>
      <div className={styles.webdevtoolsFeature}>
        <img src={images.vsCode} className={styles.tooName}/>
      </div>
      <div className={styles.textBlock}>
        <h3 className={styles.title}>VS Code</h3>
        <p className={styles.toolDescription}>
          A lightweight but powerful source code editor with support for mobile app development tools and extensions.
        </p>
      </div>
    </div>

  </div>
  <button className={styles.herobutton} onClick={() => setShowForm(true)}>
            Talk to us
          </button>
</section>




      {/* what will you learn */}
<div className={styles.container}>
  <h1 className={styles.whatHeading}>Who Can Join Our Mobile App Development Course?</h1>
  <p className={styles.subheading}>
    Our <strong>Mobile App Development course</strong> is designed for anyone passionate about building mobile apps. Whether you're a 10th or 12th pass student looking to dive into tech early, a graduate ready to master a high-demand skill, a job seeker aiming for top roles, a freelancer expanding into mobile projects, or an entrepreneur launching your own app — this course welcomes you. No coding background required, just a passion to learn and create.
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
              Step into the world of mobile technology! Learn to build basic Android/iOS apps and open the door to tech internships and junior developer roles.
            </div>
          </li>

          <li className={styles.pointItem}>
            <span className={styles.arrow}>→</span>
            <div>
              <strong>Graduates / Job Seekers</strong><br />
              Stand out in interviews by adding mobile app development to your skillset. Master real tools like React Native, Flutter, and Android Studio to land roles in tech.
            </div>
          </li>

          <li className={styles.pointItem}>
            <span className={styles.arrow}>→</span>
            <div>
              <strong>Freelancers & Entrepreneurs</strong><br />
              Launch your own mobile apps or take on freelance app development projects. Build solutions for your business or clients using cutting-edge tools.
            </div>
          </li>

          <li className={styles.pointItem}>
            <span className={styles.arrow}>→</span>
            <div>
              <strong>Working Professionals (Upskilling)</strong><br />
              Broaden your expertise by adding mobile development to your resume. Shift into app-centric roles or build internal tools and apps for your company.
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div className={styles.rightSection}>
      <img
        src={images.willGet}
        alt="Mobile App Development Roadmap"
        className={styles.whatlearnimg}
      />
    </div>
  </div>
</div>





<EnrollProcess/>

{/* placemnet */}
 <div>
            <h1 className={styles.storyHeading}>Our Success Story</h1>

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
        </div>





<StudentCarousel/>





        {/* sylabus */}
   <div className={styles.syllabusContainer}>
  <h1>What Will Our Trainees Learn In Web Designing Training</h1>
  <p>Explore our <strong>Data Science training course</strong> curriculum to know what you are going to learn exactly.
         Ziion Technology is one of India’s leading industrial training institutes, offering comprehensive training to our <strong>trainees</strong>.</p>

   
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
          <p className={styles.whychooseusTagline}>MASTER NEW SKILLS</p>
          <h2 className={styles.whychooseusHeading}>
            Why Choose <span>Ziion Technology</span> For Machine Learning In Mohali?
          </h2>
          <p className={styles.whychooseusSubtitle}>
            Ziion Technology enables every student to develop exceptional skills in <strong>Machine Learning Training</strong> and guarantees 100% job assistance in the industry.
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




{/* certificate */}
{/* <section className={styles.certificateSection}>
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
        <img src={images.nisha} alt="Certificate Sample1" />
        <img src={images.kavya} alt="Certificate Sample2" />
        <img src={images.kritish} alt="Certificate Sample3" />
        <img src={images.mohit} alt="Certificate Sample4" />
      </div>
    </section> */}



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


      <SecondForm/>
      <Footer />
    </div>
  )
}
export default MobileApp;