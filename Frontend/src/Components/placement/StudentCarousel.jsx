import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import images from "../../assets/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./StudentCarousel.module.css";
import { NextArrows, PrevArrows } from "./CustomArrows";

function StudentCarousel() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Adjust slidesToShow based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) setSlidesToShow(3);   // Desktop
      else if (width >= 768) setSlidesToShow(2); // Tablet
      else setSlidesToShow(1);                  // Mobile
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const students = [
    { fname: "Sandeep", lname: "", company: "Atappisoft Technology", companyLogo: images.apiSoft, studentImg: images.sandeep, salary: "7", placedStudent: true },
    { fname: "Hemant", lname: "Tuteja", company: "Meritech", companyLogo: images.meritech, studentImg: images.hemant, salary: "10", placedStudent: false },
    { fname: "Sahil", lname: "Yadav", company: "Relience Jio", companyLogo: images.jio, studentImg: images.sahil, salary: "18", placedStudent: true },
    { fname: "Akash", lname: "Dhiman", company: "Coding Cafe", companyLogo: images.codingCafe, studentImg: images.akash, salary: "7.2", placedStudent: false },
    { fname: "Vitul", lname: "Bajwa", company: "DITS", companyLogo: images.dits, studentImg: images.vitun, salary: "4", placedStudent: true },
    { fname: "Maya", lname: "Joshi", company: "Ekarigar", companyLogo: images.eKarigar, studentImg: images.maya, salary: "4", placedStudent: false },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrows />,
    prevArrow: <PrevArrows />,
  };

  return (
    <section className={styles.section}>
      <Container fluid>
        <div className={styles.inner}>
          <div className={styles.top}>
            <h3 className={styles.heading}>
    Placements <span className={styles.highlight}>Overview</span>
  </h3>
  <p className={styles.subheading}>
    The World's Leading Companies <span className={styles.highlight}>Hire Our Talent</span>
  </p>
          </div>
          <Slider {...sliderSettings}>
            {students.map((student, idx) => (
              <div key={idx} className={styles.sliderItem}>
                <div className={`${styles.card} ${student.placedStudent ? styles.placed : styles.notPlaced}`}>
                  
                  {/* Student Image */}
                  <div className={styles.studentPicture}>
                    <img src={student.studentImg} alt={student.fname} />
                  </div>

                  {/* Company Logo Below Image */}
                  <div className={styles.studentCompanyLogo}>
                    <img src={student.companyLogo} alt={student.company} />
                  </div>

                  {/* Student Info */}
                  <div className={styles.studentInfo}>
                    <h4 className={styles.studentName}>
                      <span className={styles.fname}>{student.fname}</span>{" "}
                      <span className={styles.lname}>{student.lname}</span>
                    </h4>
                    <h5 className={styles.studentCompanyName}>Placed in {student.company}</h5>
                  </div>

                  {/* Salary */}
                  <div className={styles.package}>
                    <h4>
                      <sup>₹</sup>{student.salary} <span>LPA</span>
                    </h4>
                    <p>Salary Package</p>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
}

export default StudentCarousel;
