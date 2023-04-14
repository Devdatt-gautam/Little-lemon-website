import React from "react";
import Chefs from "../assets/chef.png";
import "../styles/about.css";
const About = () => {
  return (
    <section className="about" id="about">
      <aside className="heading">
        <h2>About Us</h2>
      </aside>
      <div className="chef-profile">
        <img src={Chefs} alt="Our owners" />
      </div>
      <article className="about-description">
        <p>
          <strong>Welcome to Little Lemon,</strong> where traditional
          Mediterranean cuisine meets a modern twist! We are a family-owned
          restaurant located in the heart of Chicago, Illinois, serving up
          delicious dishes inspired by Italian, Greek, and Turkish culture. Our
          restaurant is owned by two Italian brothers,{" "}
          <strong>Mario and Adrian,</strong> who share a passion for food and
          hospitality. Mario, our head chef, brings his experience cooking in
          Italy and family recipes to our menu. Adrian, our marketing guru, led
          the effort to expand our menu beyond classic Italian dishes and
          incorporate other Mediterranean cuisines. Whether you're looking for a
          quick bite or a leisurely meal,{" "}
          <strong>Little Lemon is the perfect destination for you.</strong>
        </p>
      </article>
    </section>
  );
};

export default About;
