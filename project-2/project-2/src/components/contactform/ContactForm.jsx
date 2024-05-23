import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { MdOutlineCall } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import Button from "../button/Button";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  const [fname, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [text, settext] = useState("");
  const onSubmitForm = (event) => {
    event.preventDefault();

    setFName(event.target[0].value);
    setEmail(event.target[1].value);
    settext(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<FaMessage fontSize="24px" />}
          ></Button>
          <Button
            text="VIA CALL"
            icon={<MdOutlineCall fontSize="24px" />}
          ></Button>
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL CALL"
          icon={<HiMail fontSize="24px" />}
        ></Button>

        <form onSubmit={onSubmitForm}>
          <div className={styles.form_control}>
            <label htmlFor="full_name">Full Name</label>
            <input type="text" name="full_name"></input>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email"></input>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Message</label>
            <textarea name="text" rows="8"></textarea>
          </div>
          <div className={styles.submit_btn}>
            <Button text="SUBMIT"></Button>
          </div>
          <div>
            {/* {`Full Name: ${fname} \n Email id: ${email} \n Message: ${text}`} */}
            {`Full Name: ${fname}`}
            <br />
            {`Email id: ${email}`}
            <br />

            {`Message: ${text}`}
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact_us.png" alt="contact us img" />
      </div>
    </section>
  );
};

export default ContactForm;
