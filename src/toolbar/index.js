import React from "react";

export const Toolbar = () => (
  <div className="toolbar-container">
    <span className="toolbar-text">Search</span>
    <select className="toolbar-select">
      <option value="stories">Stories</option>
    </select>
    <span className="toolbar-text">by</span>
    <select className="toolbar-select">
      <option value="popularity">Popularity</option>
    </select>
    <span className="toolbar-text">for</span>
    <select className="toolbar-select">
      <option value="alltime">All time</option>
    </select>
  </div>
);
