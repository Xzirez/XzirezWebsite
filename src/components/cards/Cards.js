import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import ionic from "../../assets/images/ionic.png";
import lier from "../../assets/images/logo-lier.jpg";
import riptide from "../../assets/images/riptide.png";

function Cards() {
  return (
    <div className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={ionic}
              text="Bachelor Project: Mobile Application For Millum AS"
              label="Ionic Angular"
              path="/projects/bachelor"
            />
            <CardItem
              src={riptide}
              text="Solana Riptide Hackathon - Vyper"
              label="Next.js"
              path="/projects/solanaRipTide"
            />
            <CardItem
              src={lier}
              text="Mobile Application For Lier Municipale"
              label="React, Node.JS, AWS"
              path="/projects/lier"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
