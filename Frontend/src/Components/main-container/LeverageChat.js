import React,{ useState } from 'react';
import styles from './LeverageChat.module.css';
import images from '../../assets/images';
import { Link } from 'react-router-dom'
import ReviewsSection from '../reviews/ReviewsSection';
import SecondForm from '../secondForm/SecondForm'





const MainContent = () => {

  const [showForm, setShowForm] = useState(false);

   const faqs = [
      {
        id: 1,
        question: "What Type Of Websites Can I Build With This Theme?",
        answer: "You can build a variety of websites such as business, portfolio, e-commerce, blog, and more with this theme. It’s highly customizable to suit your needs."
      },
      {
        id: 2,
        question: "Will I Get All The Demos For Single Purchase With Lifetime Validity?",
        answer: "Yes, with a single purchase, you get access to all demos with lifetime validity, including future updates and support."
      },
      {
        id: 3,
        question: "Can I Change The Theme Language To My Local Language?",
        answer: "Absolutely! The theme supports multi-language options, and you can easily integrate your local language using translation plugins."
      },
      {
        id: 4,
        question: "Why The Price Of Aiglobe Is Affordable Compared To Other Themes Providing Similar Features?",
        answer: "Aiglobe offers competitive pricing by optimizing development costs and providing a streamlined feature set without compromising quality."
      },
      {
        id: 5,
        question: "Is There A Money-Back Guarantee?",
        answer: "Yes, we offer a 30-day money-back guarantee if you’re not satisfied with the theme."
      },
      {
        id: 6,
        question: "How Can I Get Support For Customization?",
        answer: "You can reach our support team via email or our dedicated support portal for assistance with customization."
      },
      {
        id: 7,
        question: "Can I Use This Theme For Multiple Websites?",
        answer: "The license allows use on a single site. For multiple sites, you’ll need to purchase additional licenses."
      }
    ];
  const [expanded, setExpanded] = useState(null);


  const handleToggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };
  return (
    <>

      <div className={styles["main-content"]}>
      <div className={styles["content-wrapper"]}>
        <div className={styles["text-section"]}>
          <h1>Empowering Students with Future-Ready Skills</h1>
<p>
  At Ziion Technology, we go beyond traditional learning methods to provide 
  industry-relevant training programs. Our courses are designed to help students 
  gain hands-on experience in fields like Web Development, Data Science, Artificial 
  Intelligence, Mobile App Development, and Graphic Designing. With expert mentors, 
  practical projects, and career-focused guidance, we prepare learners to excel in 
  today’s competitive world.
</p>

         <Link to="/placement">
           <button className={styles.headerBtn}>Learn More</button>
         </Link>
        </div>
        <div className={styles["code-section"]}>
          <div className={styles["code-block"]}>
            <div className={styles["code-circle"]}>
              <span className={styles.circle}></span>
              <span className={styles.circle}></span>
              <span className={styles.circle}></span>
              <hr className={styles.hello}></hr>
            </div>
            <pre>
              <code>

                {`
                  <div className={styles["main-content"]}>
      <div className={styles["content-wrapper"]}>
        <div className={styles["text-section"]}>
          <h1>Leverage a chatbot API to build an AI Chatbot</h1>
          <p>
            Want to go deeper than the usual chatbot platform? Modern solutions like Mediator
            let you craft AI-native workflows using a dedicated chatbot API. Available in 5
            different API libraries, we’ve made it easier for you to connect your data to our
            customer service platform. Simply connect a third-party LLM tool such as
            Dialogflow, OpenAI, Llama or Claude to bring AI to your customer experience!
          </p>
          <button className={styles["learn-more-btn"]}>Learn More</button>
        </div>
        <div className={styles["code-section"]}>
          <div className={styles["code-block"]}>
            <div className={styles["code-circle"]}>
              <span className={styles.circle}></span>
              <span className={styles.circle}></span>
              <span className={styles.circle}></span>
              <hr className={styles.hello}></hr>
            </div>
            <pre>
              <code>

              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
                `}

              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>

    <div>






    
    <section className={styles.faqNextContainer}>
     <div className={styles.left}>
  <h1 className={styles.title}>Empowering Learners with Innovative Education</h1>
  <p className={styles.subtitle}>
    At Ziion EdTech, we specialize in providing next-generation online learning, 
    skill development programs, and digital solutions that prepare students and professionals 
    for the future of work. Our mission is to make learning accessible, engaging, and impactful 
    through technology, creativity, and expertise.
  </p>
  <Link to='/placement'>
                  <button className={styles.headerBtn} onClick={() => setShowForm(true)}>
             Talk to us
           </button>
  </Link>
</div>



      <div className={styles.right}>
        <div className={`${styles.card} ${styles.blue}`} style={{ backgroundImage: `url(${images.cornerImage})` }}>
          <h2 className={styles.number}>200+</h2>
          <p className={styles.label}>Partner Companies</p>
        </div>
        <div>
          <div className={`${styles.card} ${styles.green}`} style={{ backgroundImage: `url(${images.cornerImage})` }}>
            <h2 className={styles.number}>5000+</h2>
            <p className={styles.label}>Student Enroll</p>
          </div>
          <div className={`${styles.card} ${styles.red}`} style={{ backgroundImage: `url(${images.cornerImage})` }}>
            <h2 className={styles.number}>98%</h2>
            <p className={styles.label}>Job Placement</p>
          </div>
        </div>
      </div>
    </section>

    </div>
    
    <ReviewsSection/>
                <SecondForm/>

    </>
  );
};

export default MainContent;
