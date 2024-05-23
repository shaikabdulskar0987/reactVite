import React from "react";
import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  return (
    <div className={`container ${styles.contact_section}`}>
      <h1>Contact us</h1>
      <p>
        LET'S CONNECT WE ARE HERE TO HELP YOU! WHETHER YOU HAVE A QUESTION,
        COMMENT OR JUST WANT TO A CHAT
      </p>
    </div>
  );
};

export default ContactHeader;
