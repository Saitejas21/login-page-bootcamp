import React from "react";
import logo from "./logo.svg";
import "./styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
    </nav>
  );
}

export default Navbar;
