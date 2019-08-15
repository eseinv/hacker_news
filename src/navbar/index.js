import React from "react";
import { Logo } from "./logo";
import { Search } from "./search";
import { Creator } from "./creator";
import { Menu } from "./menu";

export const NavBar = ({ handleInputChange }) => {
  return (
    <div className="navbar-container">
      <Logo />
      <Search handleInputChange={handleInputChange} />
      <Creator />
      <Menu />
    </div>
  );
};
