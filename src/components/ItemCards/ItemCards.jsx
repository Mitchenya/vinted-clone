import "./ItemCards.css";
import { Link } from "react-router-dom";

function ItemCard({ item, index }) {
  return (
    <div className="item-div" key={index}>
      <Link to={`/item/${item.item_id}`} >
      <Link to='/profile'><i className="fa fa-heart"></i></Link>
      <img className="item-photos" src={item.img_url} alt={item.item_name} />
      </Link>
      <p>{item.item_name}</p>
      <p>£{item.price}</p>
    </div>
  );
}

export default ItemCard;
