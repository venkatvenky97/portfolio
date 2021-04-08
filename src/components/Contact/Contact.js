import React from 'react';
import { Element } from "react-scroll";
import { IconButton } from "@material-ui/core";
import {Facebook, Instagram, LinkedIn } from "@material-ui/icons";
import "./Contact.css";

const Contact = () => {
   return (
      <Element className="Contact" id="Contact">
         <h1>contact</h1>
         <div className="Contact__container">
            <p>
               Email : <span>virathvenkatesh@gmail.com</span>
            </p>
            <p>
               Github Username : <span>Venkatvenky97</span>
            </p>
            <div className="Contact__icons">
               <a href="https://www.facebook.com/venkat.venky.77920526">
                  <IconButton>
                     <Facebook/>
                  </IconButton>
               </a>
               <a href="https://www.instagram.com/venkat_ganapathy/">
                  <IconButton>
                     <Instagram/>
                  </IconButton>
               </a>
               <a href="https://www.linkedin.com/in/venkatesh-g-1598aa142/">
                  <IconButton>
                     <LinkedIn/>
                  </IconButton>
               </a>
            </div>
         </div>
      </Element>

   );
};

export default Contact