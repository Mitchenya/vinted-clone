import { useEffect, useState } from "react";
import { getItems } from "../../utils/api";
import "./ItemContainer.css";
import ItemCard from "../ItemCards/ItemCards";

function ItemContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((data) => {
      const seen = new Set();
      const uniqueItems = data
        .filter((item) => {
          const hasUrl=!!item.img_url
          const isDuplicate = seen.has(item.item_name);
          if (hasUrl && !isDuplicate){
            seen.add(item.item_name);
            return true;
          }
          return false;
        })
        .slice(0, 10);

      setItems(uniqueItems);
    });
  }, []);

  return (
    <div className="item-container">
      {items.map((item, index) => {
        return <ItemCard key={index} item={item} index={index} />;
      })}
    </div>
  );
}

export default ItemContainer;
