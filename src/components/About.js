import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";
import UserContext from "../utils/UserContext";
import prashant from "../images/prashant.jpg";
import react from "../images/react.png";
import javascript from "../images/javascript.png";
import html from "../images/html5.png";
import css from "../images/css3.png";
import tailwind from "../images/tailwind-css.png";
import bootstrap from "../images/bootstrap.png";


// const About2 = () => {
//    return(
//        <div>
//        <h1>About Us</h1>
//        <Profile name={"Prashant"} />
//        <ProfileClass name={"PrashantClass"} />
//        </div>
//    )
// }

class About extends React.Component{
    constructor(props){
      super(props);
      console.log("Parent - Constructor");

    }

    componentDidMount(){
        console.log("Parent - CompoonentDidMount");
    }


    render(){
        // console.log("Parent - render");
        return(
            <div className="about">
                {/* <UserContext.Consumer>
                    {
                    ({user}) => 
                    <h4>
                        {user.name}-{user.email}
                        </h4> 
                        }
                </UserContext.Consumer>
            <h1>About Us</h1>
            <ProfileClass name={"First Child"} />
            <ProfileClass name={"Second Child "} /> */}
            <img />
            
            <span className="developer">Frontend React Js Developer</span>
            <img src={prashant} className="myimage"></img>
            <span>Hi... I am Prashant Shinde loves React  </span>
            <span>Works @AppBell Technologies Pvt Ltd Baner, Pune</span>
            <span>1 year experience as a React Developer</span> 
            <p>Developed 2 company projects from scratch ,Highly Responsive Website </p>
            <p>Tech Stack used  React Js <img src={react}/> , Javascript & Advance Javascript  <img src={javascript}/> ,  HTML5 <img src={html}/> ,  CSS3 <img src={css}/> ,Tailwind <img src={tailwind}/> ,  Bootstrap 5   <img src={bootstrap}/>
               </p>
            </div>
        )
    }

}

export default About;