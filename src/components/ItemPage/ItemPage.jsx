import { getItemById } from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemPage() {
  const { id } = useParams();
  const [itemById, setItemById] = useState([]);
  console.log(id);

  useEffect(() => {
    getItemById(id).then((data) => {
      console.log(data);
      return setItemById(data);
    });
  }, []);

  return (
    <div className="item-div">
      <img
        className="item-photos"
        src={itemById.img_url}
        alt={itemById.item_name}
      />
      <p>{itemById.item_name}</p>
      <p>£{itemById.price}</p>
      <p>{itemById.description}</p>
      <p>{itemById.category_name}</p>
      <p>{itemById.listed_by}</p>
    </div>
  );
}

export default ItemPage;
