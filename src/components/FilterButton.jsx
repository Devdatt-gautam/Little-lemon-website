import React from "react";
import "../styles/filter.css";
const FilterButton = ({ filter, name }) => {
  return (
    <button
      onClick={() => {
        filter(name);
      }}
      className="filter"
    >
      {name}
    </button>
  );
};

export default FilterButton;
