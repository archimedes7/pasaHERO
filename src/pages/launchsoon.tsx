// src/app/components/MainVideo.tsx// src/app/components/MainVideo.tsx
import React from "react";
import { useRouter } from "next/router";
import styles from "../../src/app/page.module.css";

const LaunchSoon = () => {
  const router = useRouter();

  const handleVideoEnd = () => {
    router.push("/");
  };

  return (
    <div className={styles.videoContainer}>
      <div className={styles.overlay}>
        <h1 className={styles.launchText}>Launching Soon</h1>
      </div>
      <video
        className={styles.video}
        autoPlay
        onEnded={handleVideoEnd}
        controls
      >
        <source src="/teaser.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LaunchSoon;
