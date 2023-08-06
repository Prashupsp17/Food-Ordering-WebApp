import {IMG_CDN_URL} from "../contants";


const RestaurantCard = (props) => {
      return (
          <div className="card">
              <img src={IMG_CDN_URL + props.card.info.imageId}></img>
              <span className="rest-name">{props.card.info.name}</span>
              <span className="cart-description">{props.card.info.description}</span>
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