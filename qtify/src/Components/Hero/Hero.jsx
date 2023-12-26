import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <heading className={styles.text}>
        <h1>
          100 Thousand songs ad free <br></br>Over thousand podcast episodes
        </h1>
      </heading>
      <img className={styles.heroImage} src="./Hero.png" alt="Hero image" />
    </div>
  );
}

export default Hero;
