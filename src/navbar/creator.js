import React from "react";
import Algoria from "../icons/algoria.png";

export const Creator = () => (
  <div className="creator-container">
    <span className="creator-by">by </span>
    <img className="algoria" src={Algoria} alt="algoria" />
    <span className="creator-name">algolia</span>
  </div>
);
