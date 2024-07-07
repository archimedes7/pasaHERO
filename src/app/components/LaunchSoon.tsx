// src/app/components/MainVideo.tsx// src/app/components/MainVideo.tsx
import React from "react";
import styles from "../page.module.css";

const MainVideo = () => {
  return (
    <div className={styles.videoContainer}>
      <div className={styles.overlay}>
        <h1 className={styles.launchText}>Launching Soon</h1>
      </div>
      <video className={styles.video} controls>
        <source src="/teaser.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MainVideo;
