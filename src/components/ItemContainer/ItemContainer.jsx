import { useEffect, useState } from "react";
import { getItems } from "../../utils/api";
import "./ItemContainer.css"

function ItemContainer(){
const [ItemContainer, setItemContainer] = useState([])
useEffect(() => {
    getItems().then((data)=> {
        
        return setItemContainer(data)
    })
    },[])

    return (

        <div className="item-container">
            {ItemContainer.slice(0,6).map((item, index)=>{
             return (
                <div className="item-div"  key={index}>
                    <img className="item-photos" src={item.img_url}/>
                    <p>{item.item_name}</p>
                    <p>£{item.price}</p>
                </div> )
            })}
            
        </div>
    )
}

export default ItemContainer