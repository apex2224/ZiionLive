import React, { useState, useEffect } from 'react'
import styles from './webdesigning.module.css'
import images from '../../../assets/images'
import Navbar from '../../head/Navbar';
import Footer from '../../footer/Footer';

// stats //
const statsData = [
  { value: '135K', label: 'Students Enrolled' },
  { value: '20+', label: 'Overall Branches' },
  { value: '3000+', label: 'Placed Students' },
  { value: '13+', label: 'Years Of Experience' }
];


// career oportunities //
const servicesGrid = [
  {
    title: "Web Designer",
    description:
      "A Web Designing course equips you with the skills to build responsive and visually appealing websites. It opens up career opportunities in IT companies, digital agencies, and startups. As the demand for online presence grows, skilled web designers are becoming increasingly valuable in the job market.",
  },
  {
    title: "UI Designer",
    description:
      "A UI Designing course prepares you to craft visually appealing and user-friendly interfaces for websites and applications. It opens up career paths in tech companies, design agencies, and product teams. As digital products grow, skilled UI designers are essential to creating engaging user experiences.",
  },
  {
    title: "Front-End Developer",
    description:
      "A career as a Front-End Developer offers exciting opportunities in IT companies, tech startups, and digital agencies. With strong demand for web development skills, you can work on building modern websites and web applications. This role also opens paths to remote work, freelancing, and high-paying jobs globally.",
  },
  {
    title: "WordPress Developers",
    description:
      "WordPress Developers are in high demand across web agencies, startups, and freelance platforms. With millions of sites powered by WordPress, this role offers great career growth, flexibility, and remote work opportunities.",
  },
  {
    title: "Freelancer / Blogger",
    description:
      "Freelancing and blogging offer flexible career paths with unlimited earning potential. You can work with global clients, build your personal brand, or monetize your content through ads and affiliate marketing. This field is ideal for creative, self-driven individuals.",
  },
  {
    title: "Neural Network Integration",
    description:
      "Leverage the power of AI to build scalable artificial and biological neural networks and ensure swift and efficient info processing.",
  },
];

// why choose us //


const leftItems = [
  { icon: '🧑‍🏫', text: '100% Practical Training' },
  { icon: '💼', text: 'Apply For Job In The IT Sector' },
  { icon: '📚', text: '25+ Case Studies' },
  { icon: '💳', text: '0% EMI Option Available' },
  { icon: '🧠', text: 'No Technical Background is Needed' },
];

const rightItems = [
  { icon: '✅', text: '100% Job Assurance' },
  { icon: '📜', text: 'Certification' },
  { icon: '🤝', text: '1200+ Placement Partners' },
  { icon: '👨‍💻', text: 'Learn from Developers' },
  { icon: '📝', text: 'Free Interview Preparations' },
];

const phrases = [
  'Become a Professional',
  'Become a Web Designer'
]

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
const Webdesigning = () => {
  const typedOutput = useCustomTypewriter(phrases);


// sylabus //

const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    "Introduction to Data Science",
    "Introduction to Python",
    "Python Basics",
    "Python Packages",
    "Importing Data",
    "Manipulating Data"
  ];

  const topicDetails = {
    "Introduction to Data Science": "What is Data Science?",
    "Introduction to Python": "What is Python Programming?",
    "Python Basics": "Basics of Python Syntax",
    "Python Packages": "Common Python Libraries",
    "Importing Data": "Data Import Techniques",
    "Manipulating Data": "Data Manipulation Methods"
  };

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
        Web Designing Course in Chandigarh <br />
        <span className={styles.typedText}>{typedOutput}</span>
        <span className={styles.cursor}>|</span>
      </span>
    </h1>
          <h2 className={styles.webDesigningSubtitle}>
            Our Web Designing Course is designed to provide hands-on training with a focus on HTML, CSS, JavaScript, Bootstrap, WordPress, and more. We help you learn how to build responsive, user-friendly websites that meet industry standards.
          </h2>
          <button className={styles.webDesigningHerobutton}>View Demo →</button>
        </div>
      </section>

      {/* stat section */}
       <div className={styles.statsWrapper}>
      {statsData.map((stat, index) => (
        <div className={styles.statCircle} key={index}>
          <div className={styles.rotatingRing}></div>
          <div className={styles.statContent}>
            <h2 className={styles.statValue}>{stat.value}</h2>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
        </div>
      ))}
    </div>


      {/* what will you learn */}
      <div className={styles.container}>
        <h1 className={styles.heading}>Who Can Join Our Web Designing Course?</h1>
<p className={styles.subheading}>
  Our <strong>Web Designing course</strong>  Whether you're a 10th or 12th pass student exploring career options, a graduate seeking in-demand skills, a job seeker aiming to stand out, a freelancer ready to expand your portfolio, or an entrepreneur building a digital brand — this course is made for you. No prior experience needed, just your willingness to learn and grow.

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
                    Turn your curiosity into a career! Get early exposure to real-world tech skills and unlock internships or junior roles in web, design, or digital sectors.
                  </div>
                </li>

                <li className={styles.pointItem}>
                  <span className={styles.arrow}>→</span>
                  <div>
                    <strong>Graduates / Job Seekers</strong><br />
                    Bridge the gap between education and employment. Master job-relevant tools and confidently apply for high-demand roles in tech, marketing, or business.
                  </div>
                </li>

                <li className={styles.pointItem}>
                  <span className={styles.arrow}>→</span>
                  <div>
                    <strong>Freelancers & Entrepreneurs</strong><br />
                    Transform your ideas into income. Learn to build websites, promote your brand online, and scale your freelance services or startup with digital excellence.
                  </div>
                </li>

                <li className={styles.pointItem}>
                  <span className={styles.arrow}>→</span>
                  <div>
                    <strong>Working Professionals (Upskilling)</strong><br />
                    Future-proof your career. Stay ahead in your field, shift into trending tech roles, or gain the edge for promotions and leadership opportunities.
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

        {/* sylabus */}
     <div className={styles.container}>
      <div className={styles.leftPanel}>
        <div className={styles.header}>Data Science with Python</div>
        {topics.map((topic, index) => (
          <div
            key={index}
            className={styles.topic}
            onClick={() => setSelectedTopic(topic)}
          >
            {topic}
          </div>
        ))}
      </div>
      <div className={styles.rightPanel}>
        <h2 className={styles.title}>Topics:</h2>
        {selectedTopic ? (
          <ul className={styles.list}>
            <li>{topicDetails[selectedTopic]}</li>
          </ul>
        ) : (
          <ul className={styles.list}>
            <li>What is Data Science?</li>
            <li>What is Machine Learning?</li>
            <li>What is Deep Learning?</li>
            <li>What is AI?</li>
            <li>Data Analytics & its types</li>
          </ul>
        )}
        <button className={styles.button}>Download Curriculum</button>
      </div>
    </div>

      {/* career oportunities */}

      <div>
        <h2 className={styles.opportunitiesheading}>
          💼 Career  <span> Opportunities</span> After This Course.
        </h2>
        <div className={styles.careerOpportunitiesGrid}>
          {servicesGrid.map((service, index) => (
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
            Why Choose <span>Certiwise</span> For Digital Marketing Course In Mohali?
          </h2>
          <p className={styles.whychooseusSubtitle}>
            Certiwise enables every student to develop exceptional skills in <strong>Digital Marketing Training</strong> and guarantees 100% job assistance in the industry.
          </p>
        </div>

        <div className={styles.whychooseusGrid}>
          <div className={styles.whychooseusList}>
            {leftItems.map((item, index) => (
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
            {rightItems.map((item, index) => (
              <div className={styles.whychooseusItem} key={index}>
                <span className={styles.whychooseusIcon}>{item.icon}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
export default Webdesigning;