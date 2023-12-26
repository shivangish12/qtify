import React from "react";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import Search from "../Search/Search";
function Navbar({ searchData }) {
  return (
    <nav>
      <a href="/">
        <img src="./Logo.png" alt="Logo" />
      </a>
      <Search
        placeholder={"Search a album of your choice"}
        searchData={searchData}
      ></Search>
      <Button>Give your feedback</Button>
    </nav>
  );
}

export default Navbar;
