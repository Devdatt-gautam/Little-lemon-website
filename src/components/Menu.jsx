import React, { useState } from "react";
import FilterButton from "./FilterButton";
import Card from "./Card";
import "../styles/menu.css";
import greeksalad from "../assets/greeksalad.jpg";
import dishes from "../components/dishes";
const Menu = () => {
  const [items, setItems] = useState([...dishes]);
  const category = [
    ...new Set(
      dishes.map((elem) => {
        return elem.category;
      })
    ),
  ];
  const filter = (cat) => {
    setItems([
      ...dishes.filter((curElem) => {
        return curElem.category === cat;
      }),
    ]);
  };
  return (
    <section className="menu" id="menu">
      <h3 className="menu-heading">Our menu</h3>
      <div className="filter-buttons">
        <FilterButton
          filter={() => setItems([...dishes])}
          name={"all"}
          key={0}
        />
        {category.map((curElem) => {
          return (
            <FilterButton
              filter={filter}
              name={curElem}
              key={category.indexOf(curElem) + 1}
            />
          );
        })}
      </div>
      <div className="dishes">
        {items.map((curElem) => {
          const { name, description, price, image, index } = curElem;
          return (
            <Card
              name={name}
              price={price}
              description={description}
              key={index}
            >
              <img src={image} alt={name} loading="lazy" />
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
