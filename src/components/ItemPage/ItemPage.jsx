import { getItemById } from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

function ItemPage() {
  const { id } = useParams();
  const [itemById, setItemById] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  console.log(id);

  useEffect(() => {
    setLoading(true);
    getItemById(id)
      .then((data) => {
        if (data) {
          setItemById(data);
        } else {
          setIsError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setLoading(false);
      });
  }, [id]);

  if (isError) {
    return <Navigate to="/404" />;
  }

  if (loading) return <div>...Loading</div>;

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
