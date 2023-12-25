import React from "react";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import Search from "../Search/Search";
function Navbar() {
  return (
    <nav>
      <img src="./Logo.png" alt="Logo" />
      <Search placeholder={"Search a album of your choice"}></Search>
      <Button>Give your feedback</Button>
    </nav>
  );
}

export default Navbar;
