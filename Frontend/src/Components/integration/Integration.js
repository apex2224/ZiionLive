import React, { useEffect, useState} from 'react';
import styles from './integrationnextsection.module.css';
import Navbar  from '../head/Navbar';
import images from '../../assets/images';
import Footer from '../footer/Footer';
import ReviewsSection from '../reviews/ReviewsSection';
import StudentCarousel from '../placement/StudentCarousel';
import useCustom from '../customHook/useCustom'


// ✅ Replaced all Bs / Si / Md icons with FA icons
const features = [
  { image: images.kuk, text: "Kurukshetra University (KUK)" },
  { image: images.chitkara, text: "Chitkara University" },
  { image: images.lpu, text: "Lovely Professional University (LPU)" },
  { image: images.cgc, text: "Chandigarh Group of Colleges (CGC)" },
  { image: images.baddi, text: "Baddi University" },
  { image: images.pu, text: "Punjab University (PU)" },
  { image: images.mm, text: "Maharishi Markandeshwar University (MMU)" },
  { image: images.aimt, text: "Ambala Institute of Management & Technology (AIMT)" },
  { image: images.jmit, text: "JMIT Radaur" },
  { image: images.maimt, text: "Maharaja Agrasen Institute of Management & Technology (MAIMT)" },
  { image: images.timt, text: "TIMT Yamunanagar" },
  { image: images.cgc2, text: "CGC Landran" },
];


const Integration = () => {

  useCustom( 'Placement | Ziion Technology')

   const [projectCount, setProjectCount] = useState(0);
  const [industryCount, setIndustryCount] = useState(0);

  useEffect(() => {
    const animateCounter = (target, setter) => {
      let start = 0;
      const end = parseInt(target);
      let duration = 2000;
      let incrementTime = Math.floor(duration / end);
      const timer = setInterval(() => {
        start += 1;
        setter(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
    };

    animateCounter(150, setProjectCount);
    animateCounter(20, setIndustryCount);
  }, []);



  return (
    <div>
        <Navbar/>
        <div className={styles.integrationWrapper}>
      <div className={styles.integrationContent}>
        <h1 className={styles.integrationTitle}>
          <span className={styles.integrationPart1}>Learn With Us,</span><br></br>
<span className={styles.integrationPart2}> Provide</span>
<span className={styles.integrationPart3}><i>The Best Services</i></span>

        </h1>
      </div>
      <div className={styles.integrationBackground}>
        <img
          src={images.integrationHero} 
          alt="Innovative AI Background"
          className={styles.integrationImage}
        />
      </div>
    </div>







    <StudentCarousel/>

        <div className={styles.integrationNext}>
        <div className={styles.pageLayout}>
      <header className={styles.headerSection}>
        <span className={styles.titleIcon}>✨</span>
        <h1 className={styles.mainTitle}>Our Bright Stars</h1>
      </header>


     <main className={styles.contentArea}>
  <div className={styles.projectPanel}>
    <div className={styles.integrationimage}>
      <img
        src={images.nisha}
        alt="Frontend Developer"
        className={styles.projectVisual}
      />
    </div>
    <div className={styles.projectDetails}>
      <span className={styles.dateLabel}>10 Jan, 2025</span>
      <h2 className={styles.projectHeading}>Frontend Developer</h2>
      <p className={styles.projectText}>
        Building responsive, user-friendly web applications with modern
        technologies like React, JavaScript, and CSS to deliver seamless
        digital experiences.
      </p>
    </div>
  </div>
</main>

<main className={styles.contentArea}>
  <div className={styles.projectPanel}>
    <div className={styles.projectDetails}>
      <span className={styles.dateLabel}>12 Jan, 2025</span>
      <h2 className={styles.projectHeading}>Graphic Designing</h2>
      <p className={styles.projectText}>
        Creating visually appealing designs, logos, and branding assets
        using Adobe Creative Suite and modern design trends for impactful
        communication.
      </p>
    </div>
    <div className={styles.integrationimage}>
      <img
        src={images.nishaRani}
        alt="Graphic Designing"
        className={styles.projectVisual}
      />
    </div>
  </div>
</main>

<main className={styles.contentArea}>
  <div className={styles.projectPanel}>
    <div className={styles.integrationimage}>
      <img
        src={images.parmeet}
        alt="Frontend Developer"
        className={styles.projectVisual}
      />
    </div>
    <div className={styles.projectDetails}>
      <span className={styles.dateLabel}>10 Jan, 2025</span>
      <h2 className={styles.projectHeading}>Frontend Developer</h2>
      <p className={styles.projectText}>
        Focused on crafting clean UI components, performance optimization,
        and cross-browser compatibility for enhanced user interactions.
      </p>
    </div>
  </div>
</main>

<main className={styles.contentArea}>
  <div className={styles.projectPanel}>
    <div className={styles.projectDetails}>
      <span className={styles.dateLabel}>12 Jan, 2025</span>
      <h2 className={styles.projectHeading}>Frontend Developer</h2>
      <p className={styles.projectText}>
        Building modern, responsive, and user-friendly websites using
        technologies like React, JavaScript, HTML, and CSS to create seamless
        digital experiences across devices.
      </p>
    </div>
    <div className={styles.integrationimage}>
      <img
        src={images.raghav}
        alt="Frontend Developer"
        className={styles.projectVisual}
      />
    </div>
  </div>
</main>


<main className={styles.contentArea}>
  <div className={styles.projectPanel}>
    <div className={styles.integrationimage}>
      <img
        src={images.rupal}
        alt="Frontend Developer"
        className={styles.projectVisual}
      />
    </div>
    <div className={styles.projectDetails}>
      <span className={styles.dateLabel}>12 Jan, 2025</span>
      <h2 className={styles.projectHeading}>Frontend Developer</h2>
      <p className={styles.projectText}>
        Specializing in modern frameworks and delivering pixel-perfect,
        mobile-first websites with smooth animations and fast performance.
      </p>
    </div>
  </div>
</main>

<main className={styles.contentArea}>
  <div className={styles.projectPanel}>
    <div className={styles.projectDetails}>
      <span className={styles.dateLabel}>11 Jan, 2025</span>
      <h2 className={styles.projectHeading}>Frontend Development 
      </h2>
      <p className={styles.projectText}>
         Building responsive, user-friendly web applications with modern
        technologies like React, JavaScript, and CSS to deliver seamless
        digital experiences.
      </p>
    </div>
    <div className={styles.integrationimage}>
      <img
        src={images.shubham}
        alt="Frontend Development"
        className={styles.projectVisual}
      />
    </div>
  </div>
</main>

<main className={styles.contentArea}>
  <div className={styles.projectPanel}>
    <div className={styles.integrationimage}>
      <img
        src={images.simranjeet}
        alt="Data analytics"
        className={styles.projectVisual}
      />
    </div>
    <div className={styles.projectDetails}>
      <span className={styles.dateLabel}>12 Jan, 2025</span>
      <h2 className={styles.projectHeading}>Data Analytics</h2>
      <p className={styles.projectText}>
             Applying machine learning, predictive analytics, and data
             visualization to solve real-world challenges and uncover valuable
            insights from datasets.
      </p>
    </div>
  </div>
</main>
    </div>
        </div>



        {/* college */}

        {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2 className={styles.title}>Our College Partnership</h2>
        <p className={styles.subtitle}>Awesome Features</p>

        <div className={styles.grid}>
  {features.map((feature, index) => (
    <div key={index} className={styles.card}>
      <div className={styles.icon}>
        <img src={feature.image} alt={feature.text} />
      </div>
      <p>{feature.text}</p>
    </div>
  ))}
</div>

      </section>



        {/* placement third section */}
    <div>
  <section className={styles.integrationSection}>
    <div className={styles.mainContent}>
      <div className={styles.imageBox}>
        <div className={styles.statsContainer}>
          <div className={styles.statBox}>
            <h1>{projectCount}+</h1>
            <p>Students Placed</p>
          </div>
          <div className={styles.statBox}>
            <h1>{industryCount}+</h1>
            <p>Recruiting Companies</p>
          </div>
        </div>
        <img src={images.integrationThirdImg} alt="Placement Support" />
        <div className={styles.labelBox}>
          <p>
            Career Growth,<br />Tailored For You
          </p>
        </div>
      </div>

      <div className={styles.textBox}>
        <button className={styles.aboutBtn}>PLACEMENTS</button>
        <h2 className={styles.hTwo}>
          We provide dedicated placement support by connecting talented
          students with leading companies, ensuring the right career
          opportunities and industry exposure.
        </h2>
        <div className={styles.arrowSection}>
          <div className={styles.arrowIcon}></div>
          <p>
            Our placement team works closely with top recruiters across
            industries to provide internships and full-time roles. From
            skill-building workshops to interview preparation, we help you
            launch a successful career with confidence.
          </p>
        </div>
      </div>
    </div>
  </section>
</div>




    <ReviewsSection/>
    <Footer/>
    </div>
  );
};

export default Integration;