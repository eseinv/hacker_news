import React from "react";

export const Search = props => {
  return (
    <div className="search-container">
      <input
        onChange={e => props.handleInputChange(e.target.value)}
        className="search"
        placeholder="Search stories by title, url or author"
      />
    </div>
  );
};
