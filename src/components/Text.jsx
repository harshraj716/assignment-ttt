import React from "react";
import styles from "../styles/Text.module.css";

const Text = ({ subtitle, number }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.rectangle}>{number}</div>
      <div className={styles.text}>{subtitle}</div>
    </div>
  );
};

export default Text;
