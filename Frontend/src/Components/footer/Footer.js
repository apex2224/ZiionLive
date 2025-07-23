// Footer.jsx
import React from "react";
import styles from "./footer.module.css";
import images from "../../assets/images"; 

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className="container">
        {/* Glare Heading */}
        <div className={`${styles.footerCta} pt-5 pb-5`}>
          <h1 className={styles.glareText}>Ziion Technology</h1>

          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className={`${styles.singleCta} ${styles.ctaAlignSmall}`}>
                <i className="fas fa-map-marker-alt"></i>
                <div className={styles.ctaText}>
                  <h4>Find us</h4>
                  <span>D-152, Phase 8, Industrial Area, Mohali</span>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-4 mb-30">
              <div className={styles.singleCta}>
                <i className="fas fa-phone"></i>
                <div className={styles.ctaText}>
                  <h4>Call us</h4>
                  <span>9878564224, 9779904224</span>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-4 mb-30">
              <div className={`${styles.singleCta} ${styles.mailFooter}`}>
                <i className="far fa-envelope-open"></i>
                <div className={styles.ctaText}>
                  <h4>Mail us</h4>
                  <span>ziiontechnology@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Main Content */}
        <div className={`${styles.footerContent} pt-5 pb-5`}>
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className={styles.footerWidget}>
                <div className={styles.footerLogo}>
                  <img src={images.logoWhite} alt="logo" />
                </div>
                <div className={styles.footerText}>
                  <p>
                    Ziion Technology is a comprehensive platform offering web
                    development, Python programming, data science, AI/ML and
                    digital marketing trainings in Chandigarh/Mohali.
                  </p>
                </div>
                <div className={styles.footerSocialIcon}>
                  <span>Follow us</span>
                  <a href="#"><i className={`fab fa-facebook-f ${styles.facebookBg}`}></i></a>
                  <a href="#"><i className={`fab fa-linkedin ${styles.linkedinBg}`}></i></a>
                  <a href="#"><i className={`fab fa-instagram ${styles.instagramBg}`}></i></a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className={styles.footerWidget}>
                <div className={styles.footerWidgetHeading}>
                  <h3>Quick Links</h3>
                </div>
                <ul>
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">Graphic Designing</a></li>
                  <li><a href="#">Digital Marketing</a></li>
                  <li><a href="#">Python</a></li>
                  <li><a href="#">AI/ML</a></li>
                  <li><a href="#">Data Science</a></li>
                  <li><a href="#">Mobile App Development</a></li>
                  <li><a href="#">PHP</a></li>
                  <li><a href="#">Six Week Training</a></li>
                  <li><a href="#">Six Month Training</a></li>
                </ul>
              </div>
            </div>

            {/* Useful Links */}
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className={styles.footerWidget}>
                <div className={styles.footerWidgetHeading}>
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Placement</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Expert Team</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Latest News</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
       
      </div>
    </footer>
  );
};

export default Footer;
