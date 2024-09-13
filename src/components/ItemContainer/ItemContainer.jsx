import { useEffect, useState } from "react";
import { getItems } from "../../utils/api";
import "./ItemContainer.css";
import ItemCard from "../ItemCards/ItemCards";
import { useFavourites } from "../Favourites/FavouritesContext";

function ItemContainer() {
  const [items, setItems] = useState([]);
  const { favourites, setFavourites } = useFavourites();

  useEffect(() => {
    getItems().then((data) => {
      const seen = new Set();
      const uniqueItems = data
        .filter((item) => {
          const hasUrl = !!item.img_url;
          const isValidImageUrl =
            item.img_url && /^https?:\/\//i.test(item.img_url);
          const isDuplicate = seen.has(item.item_name);
          if (hasUrl && !isDuplicate && isValidImageUrl) {
            seen.add(item.item_name);
            return true;
          }
          return false;
        })
        .slice(0, 10);

      setItems(uniqueItems);
    });
  }, []);

  function addFavourites(item) {
    setFavourites((currFavourites) => {
      const updatedFavourites = currFavourites.find(
        (favourite) => favourite.item_id === item.item_id
      )
        ? currFavourites.filter(
            (favourite) => favourite.item_id !== item.item_id
          )
        : [...currFavourites, item];

      return updatedFavourites;
    });
  }

  return (
    <div className="item-container">
      {items.map((item) => {
        return (
          <ItemCard
            key={item.item_id}
            item={item}
            addFavourites={addFavourites}
            isFavourite={favourites.some(
              (favourite) => favourite.item_id === item.item_id
            )}
          />
        );
      })}
    </div>
  );
}

export default ItemContainer;
