import {IMG_CDN_URL} from "../contants";
import { useContext  } from "react";
import UserContext from "../utils/UserContext";
import star from "../images/star.png";


const RestaurantCard = (props) => {
      const {user} = useContext(UserContext);
      return (
          <div className="resto-card">
              <img src={IMG_CDN_URL + props.resData.cloudinaryImageId}></img>
              <div className="rest-name">{props.resData.name}</div>
              <div className="card-bottom">
              <span className="green">{props.resData.avgRating} <img src={star}/></span>
            {/* <span>{costForTwo}</span> */}
            <span className="orange">{props.resData.sla.lastMileTravelString}</span>
              {/* <h5>{user.name}- {user.email}</h5> */}
              </div>
              <div className="rest-cusines">{props.resData.cuisines.join(",")}</div>
              {/* <h4>{lastMileTravel}</h4> */}
             
            
          </div>
      )
  }

  export default RestaurantCard;