// import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Profile from "./components/Profile/Profile";
import Favourites from "./pages/Favourites";
import Basket from "./pages/Basket";
// import SignUpMenu from "./components/SignUpMenu";
// import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
