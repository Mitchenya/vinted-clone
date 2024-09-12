import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h2>
        {" "}
        <Link to="/">Home</Link>
      </h2>
      <h2>
        {" "}
        <Link to="/favourites">Favourites</Link>
      </h2>

      <h2>
        {" "}
        <Link to="/basket">Basket</Link>
      </h2>
      <h2>
        {" "}
        <Link to="/profile">Profile</Link>
      </h2>
    </div>
  );
}

export default Navbar;
