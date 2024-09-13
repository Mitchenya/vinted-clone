import "./ItemCards.css";
import { Link } from "react-router-dom";

function ItemCard({ item, index }) {
  return (
    <div className="item-div" key={index}>
      <Link to={`/item/${item.item_id}`} />
      <img className="item-photos" src={item.img_url} alt={item.item_name} />
      <p>{item.item_name}</p>
      <p>£{item.price}</p>
    </div>
  );
}

export default ItemCard;
