import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <heading className={styles.text}>
        <h1>100 Thousand Songs, ad-free </h1>
        <h1>Over thousand podcast episodes</h1>
      </heading>
      <img className={styles.heroImage} src="./Hero.png" alt="Hero image" />
    </div>
  );
}

export default Hero;
