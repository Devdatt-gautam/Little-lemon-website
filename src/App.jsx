import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import "./index.css";
const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <About />
      <Menu />
    </div>
  );
};

export default App;
