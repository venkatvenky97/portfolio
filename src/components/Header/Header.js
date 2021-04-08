import React from "react";
import {Link} from "react-scroll";
import "./Header.css";
const Header = () => {
   return (
      <div className="header">
         <div className="header__left">
            <h1>
               Developer
            </h1>
         </div>
         <div className="header__right">
            <Link to="About" smooth={true} duration={100}>
               <h4>
                  About me
               </h4>
            </Link>
            <Link to="skills" smooth={true} duration={100}>
               <h4>
                  skills
               </h4>
            </Link>
            <Link Link to="Projects" smooth={true} duration={100}>
               <h4>
                  Projects
               </h4>
               </Link>
            
            <Link to="Contact" smooth={true} duration={100}>
               <h4>
                  Contact
               </h4>
            </Link>
            <h4 className="header__rightButton">Join with me</h4>
            
         </div>
         
      </div>
   )
}

export default Header;
