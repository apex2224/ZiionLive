import React, { useState, useRef } from 'react'
import styles from './sixmonth.module.css'
import { FaTelegramPlane, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import images from '../../../assets/images';
import { faqs, steps, servicesData, courses } from './sixmonthData'
import ueCustom from '../../customHook/useCustom'
import Navbar from '../../head/Navbar';
import Footer from '../../footer/Footer';
import ReviewsSection from '../../reviews/ReviewsSection';


const Sixmonth = ()=>{
  ueCustom('Six Month Training | Ziion Technology')

  const [showForm, setShowForm] = useState(false);

  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    const [activeIndex, setActiveIndex] = useState(0);


  return(
    <>
    <Navbar/>
     <div className={styles.sixMonthHeroWrapper}>
  {/* Background Div */}
  <div className={styles.sixMonthHeroBg}></div>

  <div className={styles.sixMonthHeroContainer}>
    {/* Left Content */}
    <div className={styles.sixMonthHeroContent}>
      <p className={styles.sixMonthHeroWelcome}>Welcome to Tekko Software Training</p>
      <h1 className={styles.sixMonthHeroTitle}>
        Six Weeks <span className={styles.sixMonthHeroHighlight}>Industrial Training</span> <br />
        Program for Future IT Professionals
      </h1>
      <p className={styles.sixMonthHeroSubtitle}>
        Gain hands-on experience with real-world IT projects, guided by expert mentors. 
        Enhance your skills in software development, web technologies, and industry best practices.
      </p>

      <div className={styles.sixMonthHeroStats}>
        <div>
          <h2>50+</h2>
          <p>Practical Projects</p>
        </div>
        <div>
          <h2>10+</h2>
          <p>Expert Mentors</p>
        </div>
      </div>

      <button className={styles.sixMonthHeroBtn} onClick={() => setShowForm(true)}>
        Enroll Now
      </button>
    </div>

    {/* Right Image */}
    <div className={styles.sixMonthHeroImageWrapper}>
      <img 
        src={images.sixmonthHero}  // Replace with a relevant training image
        alt="Students Working on Projects" 
        className={styles.sixMonthHeroImage} 
      />
    </div>
  </div>
</div>


       
     


{/* enroll steps  */}

 <section className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.title}>
          How to Enroll in Six Months Industrial Training in <span>Chandigarh & Mohali?</span>
        </h2>
        <p className={styles.subtitle}>
          Join our 6 weeks industrial training in Chandigarh or Mohali with these simple steps,
          perfect for summer training for CSE students.
        </p>
        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.id} className={styles.step}>
              <div className={styles.icon}>{step.icon}</div>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <img src= {images.enroll} alt="Training" className={styles.image} />
      </div>
    </section>





      {/* company section  */}


 <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Side - FAQs */}
        <div className={styles.left}>
          <p className={styles.tag}>Grow & Development</p>
          <h2 className={styles.heading}>
            Modern Technology and <br />
            <span>Advancement Incentives</span>
          </h2>

          <div className={styles.faqWrapper}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <div
                  className={styles.faqTitle}
                  onClick={() => toggleFAQ(index)}
                >
                  <h4>{faq.title}</h4>
                  <span>{activeIndex === index ? "-" : "+"}</span>
                </div>
                {activeIndex === index && (
                  <div className={styles.faqContent}>
                    <img
                      src={faq.image}
                      alt={faq.title}
                      className={styles.faqImage}
                    />
                    <p>{faq.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className={styles.right}>
          <img src = {images.digital} alt="Company" className={styles.image} />
        </div>
      </div>
    </section>

            {/* why choose Us  */}
      

       <section className={styles.wrapper}>
      {/* Top Heading Section */}
      <div className={styles.headingSection}>
        <h2>
          <span className={styles.blue}>Why </span>
          <span className={styles.green}>Choose Us?</span>
        </h2>
        <p>Discover the benefits of our placement program.</p>
      </div>

      <div className={styles.container}>
        {/* Left Side - Single Image */}
        <div className={styles.imageWrapper}>
          <img src={images.founders} alt="Institute Directors" className={styles.founders} />
        </div>

        {/* Right Side - Content */}
        <div className={styles.content}>
          <h2>Best IT Institute in Chandigarh</h2>
          <p>
            <span>Industry-Focused Training</span> <br />
            Our programs align with the latest industry standards and skills.
          </p>
          <p>
            <span>Flexible Learning Options</span> <br />
            Choose from on-site, online, or blended learning formats.
          </p>
          <p>
            <span>Career Support</span> <br />
            Ongoing guidance and job placement assistance post-training.
          </p>
          <p>
            <span>Supportive Environment</span> <br />
            Collaborate, learn, and network in a supportive setting.
          </p>
          <p>
            <span>Results-Oriented</span> <br />
            Programs refined for optimal graduate success.
          </p>
          <p className={styles.highlight}>
            <strong>100% Job Placement</strong> <br />
            We partner with top companies to ensure our curriculum meets industry needs.
          </p>
        </div>
      </div>
    </section>


      {/* who can join us  */}

      <section className={styles.joinSection}>
        <h2 className={styles.heading}>
          Who can <span>Join us?</span>
        </h2>
        <p className={styles.subtext}>
          Master in-demand skills designed for students andn profesionals from various academic
          Backgrounds. 
        </p>

        <div className={styles.grid}>
          {courses.map((course, index)=> (
            <div key={index} className= {styles.card}>
              {course}
              </div>
          ))}
        </div>
      </section>


      
      {/* new section */}

      <section className={styles.weOfferSection}>
  <div className={styles.weOfferTop}>
    <p className={styles.weOfferSubheading}>Our Popular Services</p>
    <h2 className={styles.weOfferHeading}>
      We Run All kinds Of IT Services <br />
      <span>that vow Your Success</span>
    </h2>
  </div>

  <div className={styles.weOfferCards}>
    {servicesData.map((service, index) => (
      <div className={styles.weOfferCard} key={index}>
        <div className={styles.weOfferIcon}>{service.icon}</div>
        <h3 className={styles.weOfferTitle}>{service.title}</h3>
        <p className={styles.weOfferDesc}>{service.desc}</p>
        <img
          src={service.image}
          alt={service.title}
          className={styles.weOfferImage}
        />
      </div>
    ))}
  </div>
</section>


    {/* Contact Section */}
      <section className={styles.contactSection}>
      
        <div className={styles.formBox}>
  

          <form className={styles.form}>
            <input type="text" placeholder="Enter Name" />
            <input type="email" placeholder="Enter Email" />
            <input type="text" placeholder="Enter Phone" />
            <input type="text" placeholder="Enter city" />
            <textarea placeholder="Enter Message"></textarea>

            <div className={styles.buttons}>
              <button type="submit" className={styles.sendBtn}>SEND MESSAGE</button>
              <button type="reset" className={styles.resetBtn}>RESET</button>
            </div>
          </form>
        </div>

        
        <div className={styles.infoBox}>
          <h4 className={styles.subTitle}>NEED ANY HELP?</h4>

          <p className={styles.desc}>
            Ziiion Technology empowers businesses with innovative solutions,
            driving success through cutting-edge technology and exceptional
            services tailored to your needs.
          </p>

          <div className={styles.contactItem}>
            <FaTelegramPlane className={styles.icon} />
            <div>
              <h5>Visit Us</h5>
              <p>Building No. D152, 1st Floor, Phase 8, Industrial Area, Mohali</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.icon} />
            <div>
              <h5>Have any question?</h5>
              <p>+919878564224, +919779904224</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <div>
              <h5>Write Email</h5>
              <p>ziiontechnology@gmail.com</p>
            </div>
          </div>

          <div className={styles.socials}>
            <p>Follow Us</p>
            <div className={styles.icons}>
              <FaTwitter />
              <FaInstagram />
              <FaFacebookF />
            </div>
          </div>
        </div>
      </section>
      <ReviewsSection/>
    <Footer/>

    </>
  )
}
export default Sixmonth
