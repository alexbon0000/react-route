import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav">
      <span className="navLink">
        <Link to="/">Home</Link>
      </span>
      <span className="navLink">
        <Link to="/login">Login</Link>
      </span>
    </div>
  );
};

export default NavBar;
