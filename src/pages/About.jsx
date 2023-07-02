import React from "react";
import BannerImage from "../assets/banner.jpg";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam atque
          ipsa doloribus neque veritatis tenetur aliquam debitis unde, maxime
          placeat et hic, velit vel. Mollitia obcaecati dolore doloremque fugit
          laborum?
        </p>
      </div>
    </div>
  );
};

export default About;
