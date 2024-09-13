import "./ItemCards.css";

function ItemCard({ item, index }) {
  return (
    <div className="item-div" key={index}>
      <img className="item-photos" src={item.img_url} alt={item.item_name} />
      <p>{item.item_name}</p>
      <p>£{item.price}</p>
    </div>
  );
}

export default ItemCard;
