import React from "react";
import { Link } from "react-router-dom"
import styles from "./inprogress.module.css";

export default function InProgress({ onBack }) {
  return (
    <div className={styles.inProgressContainer}>
      <div className={styles.inProgressBox}>
        <h2 className={styles.inProgressMessage}>
          🚧 This feature is currently in progress 🚧
        </h2>
        <p className={styles.inProgressDescription}>
          We’re working hard to bring this feature to you soon.  
          Stay tuned — in future updates, you’ll get access to this functionality and more!
        </p>
        <Link to="/allcourses">
        <button className={styles.backBtn} onClick={onBack}>
          ⬅ Back to Home
        </button></Link>
      </div>
    </div>
  );
}
