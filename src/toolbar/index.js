import React from "react";

export const Toolbar = props => (
  <div className="toolbar-container">
    <span className="toolbar-text">Search</span>
    <select className="toolbar-select">
      <option value="stories">Stories</option>
    </select>
    <span className="toolbar-text">by</span>
    <select
      className="toolbar-select"
      onChange={e => props.handleSelectChange(e.target.value)}
    >
      <option value="popularity">Popularity</option>
      <option value="rating">Rating</option>
    </select>
    <span className="toolbar-text">for</span>
    <select className="toolbar-select">
      <option value="alltime">All time</option>
    </select>
  </div>
);
