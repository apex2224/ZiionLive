import React,{useState,useEffect} from "react";
import styles from "./AboutUs.module.css";
import NavBar from "../head/Navbar";
import images from "../../assets/images";
import Footer from "../footer/Footer";
import axios from "axios";



// const pricingPlans = [
//   {
//     name: "Basic",
//     price: "Free",
//     features: [
//       "2 seats included",
//       "Unlimited chat history",
//       "Livechat",
//       "Mobile apps",
//       "Basic integrations",
//     ],
//     buttonText: "Get Started",
//     isPopular: false,
//   },
//   {
//     name: "Pro",
//     price: "$25",
//     period: "/ month",
//     features: [
//       "4 seats included",
//       "Unlimited chat history",
//       "Livechat + Email",
//       "Advanced integrations",
//       "Shared inbox",
//     ],
//     buttonText: "Try for 14 days",
//     isPopular: true,
//   },
//   {
//     name: "Unlimited",
//     price: "$95",
//     period: "/ month",
//     features: [
//       "Unlimited seats",
//       "Unlimited chat history",
//       "Livechat + Email + More",
//       "Premium integrations",
//       "Advanced analytics",
//     ],
//     buttonText: "Try for 14 days",
//     isPopular: false,
//   },
// ];


// /  all plans
// /assign  user assign a plan 
// /upgrade  to updgrade


const AboutUs = () => {

   const [plans, setPlans] = useState([]);

  useEffect(() => {
  axios.get("http://localhost:5000/api/plans/")
      .then(res => {
      console.log(res.data);         
      setPlans(res.data.plans);
    })
    .catch(err => console.error("Error fetching plans:", err));
}, []);
  return (
   <>

   <NavBar/>
    <section className={styles.pricingHeroSection}>
      <img src={images.pricingBack} alt="background" className={styles.pricingBack} />
        <div className={styles.pricingHeroContainer}>
          <h1 className={styles.pricingHeroTitle}>Where Digital Dreams </h1>
          <h2 className={styles.pricingHeroSubtitle}>
            Meet Real Result
          </h2>
        </div>
      </section>

      <section className={styles.pricingSection}>
        
        <div className={styles.pricingContainer}>
          {plans.map((plan => (
            <div key={plan._id} className={styles.pricingCard}>
              <h2>{plan.name}</h2>
              <div className={styles.price}>
                <span className={styles.amount}>
                  {plan.price === 0 ? "Free" : `$${plan.price}`}
                </span>
                <span className={styles.period}>
                  {plan.price === 0 ? "" : "/ month"}
                </span>
              </div>
              <ul className={styles.features}>
                {plan.features.map((feature, id) => (
                  <li key={id}>{feature}</li>
                ))}
              </ul>
              <button className={styles.priceButton}>
                {plan.trialDays === 0 ? "Get Started" : `Try for ${plan.trialDays} days`}
              </button>
            </div>
          )))}
        </div>
      </section>

    {/* <section className={styles.excellentSection}>
      <div className={styles.excellentHeader}>
        <button className={styles.featureTag}>FEATURES</button>
        <h2 className={styles.excellentTitle}>
          Excellent Response with <span className={styles.smartAI}>Smart AI</span>
        </h2>
        <p className={styles.excellentSubtitle}>
          Refine chatbot intelligence through continuous learning and customization options
        </p>
        </div>

      <div className={styles.excellentGrid}>
        <div className={styles.featureCard}>
          <img
            src={images.pricingFourthSection1}
            alt="Multi Language Support"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>Multi-Language Support</h3>
          <p className={styles.cardText}>
            Connect with global users with auto-translates messages, ensuring smooth conversations
            in multiple languages.
          </p>
        </div>

        <div className={styles.featureCard}>
          <img
            src={images.pricingFourthSection2}
            alt="AI Training Center"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>AI Training Center</h3>
          <p className={styles.cardText}>
            Continuously improve your chatbot’s intelligence, dedicated space to train responses
            for better interactions.
          </p>
        </div> 

        <div className={styles.featureCard}>
          <img
            src={images.pricingFourthSection3}
            alt="Customer Insights"
            className={styles.cardImage}
          />
          <h3 className={styles.cardTitle}>Personal Customer Insights</h3>
          <p className={styles.cardText}>
            Gain valuable insights with AI that learns customer preferences, providing engaging
            support experience every time.
          </p>
        </div>
      </div>
    </section> */}

{/* founder message section */}

<section className={styles['founder-main-container']}>
     <h1 className={styles['founder-title']}>
           A note from <span className={styles.highlight}> Our Visionary</span> 
          </h1> 

    <section className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.contentLeft}>
          <span className={styles['founders-name']}>Mr. Phillip Verma</span><br></br>
          {/* <h1 className={styles.heading}>
            Automate Business, <span className={styles.highlight}>Stream</span> More Revenue
          </h1> */}
          <p className={styles['founder-message']}>
          This journey began with a dream to make digital skills simple, useful, and life-changing for anyone willing to learn. Today, that dream lives on in every course we create and every service we deliver. We’re here to grow together with honesty, care, and a whole lot of heart.

          </p>
          <div className={styles.pricingStats}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingValue}>68%</div>
              <div className={styles.pricingLabel}>Operating Cost Efficiency</div>
            </div>
            <div className={styles.pricingCard}>
              <div className={styles.pricingValue}>201+</div>
              <div className={styles.pricingLabel}>Business Trust Us</div>
            </div>
          </div>
        </div>
        <div className={styles['founder-imageSection']}>
          <img src={images.FounderImg1} alt="Business Analytics" className={styles['founder-image']} />
        </div>
      </div>


       <div className={styles.heroSection}>

       <div className={styles['founder-imageSection']}>
          <img src={images.FounderImg2} alt="Business Analytics"  className={styles['founder-image']}/>
        </div>
        <div className={styles.contentLeft}>
          <span className={styles['founders-name']}>Mrs. Rashmi Bansal</span><br></br>
          {/* <h1 className={styles.heading}>
            Automate Business, <span className={styles.highlight}>Stream</span> More Revenue
          </h1> */}
          <p className={styles['founder-message']}>
          What we had was little: passion, sense and a firm conviction that digital skills can lead to opening doors. Since that time, the thing that we have created is not only a company; it is a place where people can learn, develop and go somewhere, bearing in mind that they do this together.
Thank you for choosing us to go with you.

          </p>
          <div className={styles.pricingStats}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingValue}>68%</div>
              <div className={styles.pricingLabel}>Operating Cost Efficiency</div>
            </div>
            <div className={styles.pricingCard}>
              <div className={styles.pricingValue}>201+</div>
              <div className={styles.pricingLabel}>Business Trust Us</div>
            </div>
          </div>
        </div>
       
      </div>
    </section>

    </section>


  
   
        <Footer/>

   </>
  );
};

export default AboutUs;