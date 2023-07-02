import React from "react";
import BannerImage from "../assets/banner.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input name="name" type="text" placeholder="Enter full name ..." />
          <label htmlFor="email">Email</label>
          <input name="email" type="text" placeholder="Enter an email ..." />
          <label htmlFor="mesage">Message</label>
          <textarea name="name" type="text" placeholder="Enter message ..." />
          <button className="submit">Send Mesaage</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
