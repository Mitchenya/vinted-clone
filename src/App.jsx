// import { useState } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Profile from "./components/Profile/Profile";
import Favourites from "./pages/Favourites";
import Basket from "./pages/Basket";
import Header from "./components/Header/Header";
import "./App.css";
import ItemPage from "./components/ItemPage/ItemPage";
import ShrekCity from "./components/ErrorPage/ErrorPage";
// import SignUpMenu from "./components/SignUpMenu";
// import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/404" element={<ShrekCity />} />
        </Routes>
      </main>
      <Navbar />
    </div>
  );
}

export default App;
