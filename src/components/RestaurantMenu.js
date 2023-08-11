import { useParams } from "react-router-dom";
import { useEffect,useState} from "react";
import {IMG_CDN_URL} from "../contants";
import Shimmer from "./Shimmer";
import { FETCH_MENU_URL } from "../contants";
// import useRestaurant from "../utils/useRestaurant";
import {addItem} from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  
  // const [restaurant, setRestaurant] = useState(null);
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]);
  const [showIndex, setShowIndex] = useState();
    const {resId} = useParams();

    // const  restaurant = useRestaurant(resId);

    useEffect(() => {
        getRestaurantInfo();
      },[]);

  
      async function getRestaurantInfo(){
        const data = await fetch(FETCH_MENU_URL + resId);
        const json = await data.json();
        setRestaurant(json.data);
      }
    

   

    // const categories = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter
    // (
    //   (c) => c.card?.card?.["@type"] ===
    //   "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    //   );
      const categories =  restaurant?.cards.find(x=> x.groupedCard)?.
                                  groupedCard?.cardGroupMap?.REGULAR?.
                                  cards?.map(x => x.card?.card)?.
                                  filter(x=> x['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
                                  console.log(categories);
    

    return !restaurant ?  (
      <Shimmer />
    )  : (
      <div>
        <div className="rest-page">
          <div className="restaurant-details">
          {/* <h1>Restaurant id: {resId}</h1> */}
          <div className="rest-info">
          <div className="rest-menu-page-name">{restaurant?.cards[0].card.card.info.name}</div>
          <span className="rest-otherdetails">{ restaurant?.cards[0].card.card.info.lastMileTravelString}</span>
          <span className="rest-otherdetails">{ restaurant?.cards[0].card.card.info.areaName}</span>
          <span className="rest-otherdetails">{restaurant?.cards[0].card.card.info.city}</span>
         
          <span className="rest-otherdetails">{restaurant?.cards[0].card.card.info.costForTwoMsg}</span>
          <span className="rest-otherdetails">{restaurant?.cards[0].card.card.info.costForTwoMessage}</span>
          </div>
         
          <div className="green">{restaurant?.cards[0].card.card.info.avgRating}</div>
          </div>
          </div>
          
     
<div className="dishes-list">
        {
          categories.map((category,index ) => 
          <RestaurantCategory data ={category} showItems={index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)}/>
          )
        }
        </div>
        </div>
         
    )
}

export default RestaurantMenu;