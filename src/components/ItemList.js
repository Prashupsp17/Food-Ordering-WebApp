import React from 'react'
import {IMG_CDN_URL} from "../contants";
import {addItem} from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({items}) => {
    
  const dispatch = useDispatch();

  const AddFoodItem = (items) => {
    dispatch(addItem(items));
  }
  return (
    <div>
        {
        items.map((item) => (
        <div key={item.card.info.id} className="border-gray-400 border-b-8 menu-wrapper">
<div className="item-wrapper">
    
    <span className='menu-name'>{item.card.info.name}</span>
    <span>₹ {item.card.info.price/100}</span>
    
<div className="menu-description">{item.card.info.description}</div>
</div>
<div className="image-addbutton">
{
  item.card.info.imageId ? <img src={IMG_CDN_URL + item.card.info.imageId} className="menu-images"/> : ""
}
<button onClick={()=> AddFoodItem(item)} className="menu-green">Add</button>
</div>

        </div>
            ))}
    </div>
  )
}

export default ItemList