import {IMG_CDN_URL} from "../contants";


const RestaurantCard = (props) => {
      return (
          <div className="resto-card">
              <img src={IMG_CDN_URL + props.card.info.imageId}></img>
              <span className="rest-name">{props.card.info.name}</span>
              <div className="cart-description">{props.card.info.description}</div>
              <span>Rupees: {props.card.info.price / 100}</span>
          </div>
      )
  }

  export default RestaurantCard;
//   {
//     name,
//     description,
//     cloudinaryImageId,
//      price,
  
  
//   }  