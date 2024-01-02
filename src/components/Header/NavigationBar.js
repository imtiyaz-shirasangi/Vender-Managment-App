import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";

const NavigationBar = () => {
  return (
    <nav className={classes.nav}>
    <header>
        Vender Managment App
    </header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/vender">Add Vender</Link>
        </li>
        <li>
          <Link to="/venderlist">Vender List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
