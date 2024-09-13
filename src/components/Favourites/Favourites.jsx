import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavourites } from "./FavouritesContext";
import "./Favourites.css";

function Favourites() {
  const { favourites } = useFavourites();

  return (
    <div className="favourites-container">
      <h1>Favourites</h1>
      {favourites.length === 0 ? (
        <p>No Favourites Added Yet!</p>
      ) : (
        favourites.map((item, index) => {
          return (
            <div key={index}>
              <Link to={`/item/${item.item_id}`}>
                <img src={item.img_url} />
                <p>{item.item_name}</p>
                <p>{item.price}</p>
              </Link>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Favourites;
