import React from 'react'
import {useState} from 'react';
import ItemList from './ItemList';
import downarrow from '../images/down-arrow-svgrepo-com.svg';


const RestaurantCategory = ({data, showItems, setShowIndex}) => {
  const handleClick = () => {
    setShowIndex();
  }

  
  return (
    <div>
      <div className="mx-auto my-4 bg-gray-50 shadow-lg p-4 width">
         <div className="accordion-head" onClick={handleClick} >
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
           <img src={downarrow} className="svg-icon" />
          
        </div>
   {showItems &&  <ItemList items={data.itemCards} /> }
    </div>
    </div>
  )
}

export default RestaurantCategory