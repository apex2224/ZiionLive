import React,{useState,useEffect} from "react";
import styles from "./Pricing.module.css";
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


const Pricing = () => {

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
          <h1 className={styles.pricingHeroTitle}>Discover Our Pricing</h1>
          <p className={styles.pricingHeroSubtitle}>
            Find the perfect package for your business needs.
          </p>
        </div>
      </section>

      <section className={styles.pricingSection}>
        <div className={styles.pricingHeader}>
          <h1>Pricing Plans</h1>
          <p>
            Each new account gets access to all Mediator features. Try it free for 14
            days and see if it fits your needs!
          </p>
        </div>
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

    <section className={styles.excellentSection}>
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
    </section>

    <section className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.contentLeft}>
          <button className={styles.ctaButton}>GET ROI FAST</button>
          <h1 className={styles.heading}>
            Automate Business, <span className={styles.highlight}>Stream</span> More Revenue
          </h1>
          <p className={styles.description}>
            HAIchat is an innovative AI chatbot service designed to automate customer support,
            improve lead generation, and boost engagement.
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
        <div className={styles.imageSection}>
          <img src={images.pricingImg} alt="Business Analytics" />
        </div>
      </div>
    </section>
        <Footer/>

   </>
  );
};

export default Pricing;