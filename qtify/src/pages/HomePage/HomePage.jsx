import React from "react";
import { useOutletContext } from "react-router-dom";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
import styles from "./HomePage.module.css";

function HomePage() {
  const { data } = useOutletContext();
  const { topAlbums, newAlbums, songs } = data;

  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        {/* <Section title="Songs" data={songs} type="songs" /> */}
      </div>
    </>
  );
}
export default HomePage;
