import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import "../styles/home.css";
const Home = () => {
  return (
    <section className="home">
      <div className="description">
        <h1>Little lemon</h1>
        <p>
          Experience the authentic taste of Italy and Mediterranean in every
          bite .
        </p>
        <div className="cta">
          <ButtonPrimary text="Reserve A Table" />
          <ButtonSecondary text="Order Online" />
        </div>
      </div>
    </section>
  );
};

export default Home;
