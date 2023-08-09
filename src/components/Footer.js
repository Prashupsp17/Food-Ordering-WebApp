import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Footer = () => {
    const {user} = useContext(UserContext);
    return(
        <div className="footer">This Site is Developed By {user.name} - {user.email}</div>
    )
  }
  
  export default Footer;