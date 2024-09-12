import { useEffect, useState } from "react";
import { getItems } from "../../utils/api";
import "./ItemContainer.css";

function ItemContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((data) => {
      const seen = new Set();
      const uniqueItems = data
        .filter((item) => {
          const isDuplicate = seen.has(item.item_name);
          seen.add(item.item_name);
          return !isDuplicate;
        })
        .slice(0, 10);

      setItems(uniqueItems);
    });
  }, []);

  return (
    <div className="item-container">
      {items.map((item, index) => (
        <div className="item-div" key={index}>
          <img
            className="item-photos"
            src={item.img_url}
            alt={item.item_name}
          />
          <p>{item.item_name}</p>
          <p>£{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemContainer;
