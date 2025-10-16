// Loader.js
import React from "react";
import styles from "./loading.module.css";
import images from "../../assets/images";

function Loading() {
  return (
    <div className={styles.loaderWrapper}>
      <img src={images.ziionLogo} alt="Logo" className={styles.logo} />
      <p>Loading...</p>
    </div>
  );
}

export default Loading;
