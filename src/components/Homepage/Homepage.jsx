import React from "react";
import "./Homepage.css";
import Greeting from "../Homepage/Greeting";
import ItemContainer from "../ItemContainer/ItemContainer";
// import Logo from "../Logo/Logo";
// import AllCategories from "../AllCategories/AllCategories";
// import SearchBar from "../SearchBar/SearchBar";

function Homepage() {
  return (
    <div className="homepage">
      <p></p>
      {/* <Logo />
      <Profile />
      <AllCategories />
      <SearchBar />
       */}
      <h1>Home</h1>
      <Greeting />
      <ItemContainer />
    </div>
  );
}

export default Homepage;
