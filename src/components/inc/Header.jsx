import React from "react";
import "./Header.css";

function Header({ onLogoClick }) {
  return (
    <div id="header">
      <button type="button" className="back">
        &lt; Back
      </button>
      <h1 onClick={onLogoClick}>Mytube</h1>
      <div className="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Header;
