import "./ItemCards.css";
import { Link } from "react-router-dom";

function ItemCard({ item, index, addFavourites, isFavourite }) {
  return (
    <div className="item-div" key={index}>
      <Link to={`/item/${item.item_id}`} >
      <img className="item-photos" src={item.img_url} alt={item.item_name} />
      </Link>
      <button onClick={()=>addFavourites(item)}><i className={`fa ${isFavourite ? 'fa-heart' : 'fa-heart-o'}`}></i></button>
      <p>{item.item_name}</p>
      <p>£{item.price}</p>
    </div>
  );
}

export default ItemCard;
