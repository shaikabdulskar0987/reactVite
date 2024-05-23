import React from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <nav className={`${styles.nav_bar} container`}>
        <div className="logo">
          <img
            href="#"
            className={`${styles.logo_icon}`}
            src="/images/contactus.png"
            alt="logo"
          />
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
