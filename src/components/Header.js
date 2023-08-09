import { useState , useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const loggedInUser = () => {
   return true;
}

export const Title =  () => (
    <a href="/">
    <img className="logo"
    alt="logo"
     src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...OAqhdPnBzFwXs1M3EMoAJtlikthvps...fk+ "></img>
     </a>
  );
  
  const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const isOnline = useOnline();


    const {user} = useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items);
    return(
        <>
        <div className="header sticky">
          <Title />
            <div className="nav-items">
                <ul>
                
                  <li><Link to="/">Home</Link></li>
                
               
                    <li> <Link to="/about">About</Link></li>
                 
                    <li><Link to="/contact">Contact</Link></li>
                
                    <li><Link to="/instamart">InstaMart</Link></li>
                    <li className="cart"><Link to="/cart" data-testid="cart">Cart - {cartItems.length}</Link></li>
                </ul>
            </div>
            {/* <h1 data-testid="online-status">{isOnline ? "🟢 Online" : "🔴"}</h1> */}
           {/* <h1> {user.name}</h1>
            {
              isLoggedIn ?  (
              <button onClick={() => setIsLoggedIn(false)}>Logout</button> 
             ) : (
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
             )}
            */}
        </div>
        </>
    );
  };

  export default Header;