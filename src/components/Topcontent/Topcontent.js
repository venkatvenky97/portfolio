import React from 'react'
import { Link } from 'react-scroll'
import "./Topcontent.css";

function Topcontent() {
   return (
      <div className="topcontent">
         <div className="topcontent__container">
            <h1>Mr.Venkatesh</h1>
            <p>Quite good in web Developer</p>
            <a href="www.google.com">
               <button className="topcontent__downloadButton">Download CV </button>
            </a>
            <Link to="project" smooth={true} duration={500}>
               <button className="topcontent__workButton">My work </button>
            </Link>
            </div> 
         
      </div>
   )
}

export default Topcontent
