import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="button-cont">
      <Link to="/"><button className="btn" to="/"><i className="fa fa-home"></i></button></Link>
      <br></br>
      <span>Home</span>
      </div>
      <div className="button-cont">
      <Link to="/favourites"><button className="btn"><i className="fa fa-heart"></i></button></Link>
      <br></br>
      <span>Favourites</span>
      </div>
      <div className="button-cont">
      <Link to="/basket"><button className="btn"><i className="fa fa-shopping-basket"></i></button></Link>
      <span>Basket</span>
      </div>
      <div className="button-cont">
      <Link to="/profile"><button className="btn"><i className="fa fa-user"></i></button></Link>
      <span>Profile</span>
      </div>
    </div>
  );
}

export default Navbar;
