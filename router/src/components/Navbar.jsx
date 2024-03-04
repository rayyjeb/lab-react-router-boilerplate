import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        background: "light",
        color: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link to={"/"}>
          <h1>KALVIUM</h1>
        </Link>
        <Link to="/about">
          <h1 style={{ margin: "0 50px" }}>About</h1>
        </Link>
        <Link to="/contact">
          <h1>Contact</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
