import React from "react";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
function Navbar({ searchData }) {
  return (
    <nav>
      <a href="/">
        <Logo />
      </a>
      <Search
        placeholder={"Search a album of your choice"}
        searchData={searchData}
      ></Search>
      <Button>Give feedback</Button>
    </nav>
  );
}

export default Navbar;
