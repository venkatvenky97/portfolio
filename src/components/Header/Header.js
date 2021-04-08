import React from "react";
import {Link} from "react-scroll";
import "./Header.css";
const Header = ({ selected, setSelected, setOpen }) => {
   return (
      <div className="header">
         <div className="header__left">
            <h1>
               Developer
            </h1>
         </div>
         <div className="header__right">
            <Link to="About" smooth={true} duration={500}>
               <h4
                  className={
                     selected ==="About" ? "header__right--active" : undefined
                  }
                  onclick={() => setSelected("About")}
                  >
                  About me
               </h4>
            </Link>
            <Link to="skills" smooth={true} duration={500}>
               <h4
               className={
                  selected === "skills" ? "header__right--active" : undefined
               }
               onclick={() => setSelected("skills")}
               >
                  skills
               </h4>
            </Link>
            <Link Link to="Projects" smooth={true} duration={100}>
               <h4
               className={
                  selected === "Projects" ? "header__right--active" : undefined
               }
               onclick={() => setSelected("Projects")}
               >
                  Projects
               </h4>
               </Link>
            
            <Link to="Contact" smooth={true} duration={500}>
               <h4
               className={
                  selected === "Contact" ? "header__right--active" : undefined
               }
               onclick={() => setSelected("Contact")}
               >
                  Contact
               </h4>
            </Link>
            <h4 className="header__right--semiactive" onclick={() => setOpen(true)}>
               Join with me
               </h4>
         </div>
         
      </div>
   );
};

export default Header;
