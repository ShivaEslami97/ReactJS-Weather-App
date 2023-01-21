import styles from "./Loading.module.css";
import React from "react";

const Loading = () => {
  return (
    <div className={styles["cube-wrapper"]}>
      <div className={styles["cube-folding"]}>
        <span className={styles.leaf1}></span>
        <span className={styles.leaf2}></span>
        <span className={styles.leaf3}></span>
        <span className={styles.leaf4}></span>
      </div>
      <span className={styles.loading} data-name="Loading">
        Loading
      </span>
    </div>
  );
};

export default Loading;
