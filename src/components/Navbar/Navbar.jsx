import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/"><button className="btn" to="/"><i className="fa fa-home"></i></button></Link>
      <Link to="/favourites"><button className="btn"><i className="fa fa-heart"></i></button></Link>
      <Link to="/basket"><button className="btn"><i className="fa fa-shopping-basket"></i></button></Link>
      <Link to="/profile"><button className="btn"><i className="fa fa-user"></i></button></Link>
    </div>
  );
}

export default Navbar;
