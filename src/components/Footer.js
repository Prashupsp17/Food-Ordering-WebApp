import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Footer = () => {
    const {user} = useContext(UserContext);
    return(
        <h4>This Site is Developed By {user.name} - {user.email}</h4>
    )
  }
  
  export default Footer;