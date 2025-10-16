import React from "react";
import styles from "./thankyou.module.css";
import images from "../../assets/images";


export default function ThankYou({ name = "" }) {
  return (
     <div className={styles.thankyouwrapper}>
         <section className={styles.thankyouContainer}>
        {/* Left: Image */}
        <div className={styles.thankyouLeft}>
          <img
            src={images.thankYou}
            alt="Submission successful"
            className={styles.thankyouImage}
          />
        </div>

        {/* Right: Content */}
        <div className={styles.thankyouRight}>
          <h1 className={styles.thankyouTitle}>
            Thank you{ name ? `, ${name}` : "" }! 🎉
          </h1>
          <p className={styles.thankyouSubtitle}>
            Your form has been submitted successfully.
          </p>

          <div className={styles.thankyouCard}>
            <p className={styles.thankyouMessage}>
              We’ve received your details and our team is already on it.
            </p>
            <ul className={styles.thankyouList}>
              <li>✔ A confirmation email has been sent to your inbox.</li>
              <li>✔ We’ll get back to you within 24–48 hours.</li>
              <li>✔ Need to update something? Just reply to the email.</li>
            </ul>
          </div>

          <div className={styles.thankyouActions}>
            <a href="/" className={styles.thankyouButton}>Back to Home</a>
           
          </div>

          <p className={styles.thankyouNote}>
            Tip: Save this page or your email for your records.
          </p>
        </div>
      </section>

     </div>
    
  );
}
