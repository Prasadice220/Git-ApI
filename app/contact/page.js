import React from "react";
import styles from "./styles.module.css";
const contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.description}>
        For any inquiries or assistance, please feel free to reach out to us.
      </p>
      <div className={styles.contactInfo}>
        <div className={styles.infoItem}>
          <span className={styles.icon}>
            <i className="fas fa-phone"></i>
          </span>
          <span className={styles.info}>8779849708</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.icon}>
            <i className="fas fa-envelope"></i>
          </span>
          <span className={styles.info}>prasadiyer25@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default contact;
