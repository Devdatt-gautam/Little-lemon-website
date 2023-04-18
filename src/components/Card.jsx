import React from "react";
import "../styles/card.css";
import "url";
const Card = ({ name, price, description, children }) => {
  return (
    <div className="card">
      <div className="card-image">{children}</div>
      <h4 className="card-heading">{name}</h4>
      <p className="card-description">{description}</p>
      <button className="add">{price}</button>
    </div>
  );
};

export default Card;
