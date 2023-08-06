import { useDispatch, useSelector } from "react-redux";
import FoodItem from "../components/FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
          dispatch(clearCart());
    }
    return(
        <>
        <div>
           <h1>Cart Items - {cartItems.length}</h1>
           <button className="red" onClick={() => {handleClearCart()}}>Clear Cart</button>
           <div className="flex">
           {
               cartItems.map((item) =>   <FoodItem key={item.id} {...item} /> )
           }
           </div>
        
        </div>
        </>
    )

}

export default Cart;