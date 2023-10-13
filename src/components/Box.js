import "../css/Box.css";
import "../css/Loader.css";
import "../css/Blackhole.css";
import Home from "./Home.js";
import Info from "./Info.js";
import Portfolio from "./Portfolio.js";
import Photography from "./Photography.js";
import Contact from "./Contact.js";
import Dot from "./Dot.js";
import React, { useEffect, useState } from "react";

const Box = () => {
  // Logic for loading screen
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1250);
  }, []);

  const [selected, setSelected] = useState("home");
  const handleSelect = (value) => {
    if (value !== selected) {
      setSelected(value);
    }
  };

  // Logic for selectedComponent
  let selectedComponent;
  switch (selected) {
    case "home":
      selectedComponent = <Home selected={selected} />;
      break;
    case "info":
      selectedComponent = <Info selected={selected} />;
      break;
    case "portfolio":
      selectedComponent = <Portfolio selected={selected} />;
      break;
    // case "photography":
    //   selectedComponent = <Photography selected={selected} />;
    //   break;
    case "contact":
      selectedComponent = <Contact selected={selected} />;
      break;
    default:
      selectedComponent = <Home selected={selected} />;
      break;
  }

  // Logic for return;
  return (
    <div className="box-wrapper">
      {loading ? (
        <div className="loader-wrapper">
          <h1 className="loader-header">LEO CHUNG</h1>
          <h3 className="loader-subheader">DEVELOPER</h3>
        </div>
      ) : (
        <div className="box-container">
          {/* Titles */}
          <div className="titles-wrapper">
            <h1 className="home-header">Leo Chung</h1>
            <h3 className="home-subheader">Developer</h3>
          </div>
          {/* List */}
          <div className="list-container">
            <ul className="unordered-list">
              <li onClick={() => handleSelect("home")}>
                {selected === "home" ? <Dot /> : <a href="#home">Home</a>}
              </li>
              <li onClick={() => handleSelect("info")}>
                {selected === "info" ? <Dot /> : <a href="#info">Info</a>}
              </li>
              <li onClick={() => handleSelect("portfolio")}>
                {selected === "portfolio" ? (
                  <Dot />
                ) : (
                  <a href="#portfolio">Portfolio</a>
                )}
              </li>
              {/* <li onClick={() => handleSelect("photography")}>
                {selected === "photography" ? (
                  <Dot />
                ) : (
                  <a href="#photography">Photography</a>
                )}
              </li> */}
              <li onClick={() => handleSelect("contact")}>
                {selected === "contact" ? (
                  <Dot />
                ) : (
                  <a href="#contact">Contact</a>
                )}
              </li>
            </ul>
          </div>
          {/* Selected Component */}
          {selectedComponent}

          {/* Canvas Component */}
          <div id="blackhole">
            <div className="centerHover">
              <span>Click!</span>
            </div>
            <canvas id="blackhole-canvas" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Box;
