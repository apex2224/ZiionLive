import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./companies.module.css";
import images from "../../assets/images";

const companies = [
  { src: images.accenture,  name: "accenture " },
  { src: images.appliedInformation,  name: "appliedInformation" },
  { src: images.applify,  name: " applify" },
  { src: images.bookMyShow,  name: "bookMyShow" },
  { src: images.capgemini,  name: "capgemini" },
  { src: images.cloudFirst,  name: "cloudFirst" },
  { src: images.cognization,  name: "cognization " },
  { src: images.firstCry,  name: " firstCry" },
  { src: images.ibm,  name: "ibm " },
  { src: images.infosys,  name: " infosys" },
  { src: images.nureca,  name: " nureca" },
  { src: images.oracle,  name: " oracle" },
  { src: images.persistance,  name: " Infpersistanceotech" },
  { src: images.sanrai,  name: " sanrai" },
  { src: images.tata,  name: " tata" },

];

export default function Companies() {
  return (
    <div className={styles.sectionSecond}>
      <h2 className={styles.sectionTitle}>Our Tie-Up Companies</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className={styles.swiper}
      >
        {companies.map((company, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.companyCard}>
              <img
                src={company.src}
                alt={company.name}
                className={styles.companyImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
