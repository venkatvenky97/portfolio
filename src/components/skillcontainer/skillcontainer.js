import React from "react";
import { Element } from "react-scroll";
import skillImg from "../../assets/lauren-mancke-aOC7TSLb1o8-unsplash.jpg";
import LinearProgress from "@material-ui/core/LinearProgress";
import "./skillcontainer.css";

const skillcontainer = () => {
   return (
      <Element className="skillcontainer" id="skills">
          <div className="skillcontainer__image">
            <img src={ skillImg } alt="" />
         </div>
         <div className="skillcontainer__text">
            <h2>SKILLLSET</h2>
            <div className="Skillcontainer__skillset"> 
            <h5>Html</h5>
            <div className="Skillcontainer__slider Skillcontainer__slider1"> 
            <LinearProgress variant="determinate" value={90}/>
            </div>
            </div>
            <div className="Skillcontainer__skillset"> 
            <h5>Css</h5>
            <div className="Skillcontainer__slider Skillcontainer__slider2"> 
            <LinearProgress variant="determinate" value={75}/>
            </div>
            </div>
            <div className="Skillcontainer__skillset"> 
            <h5>Javascript</h5>
            <div className="Skillcontainer__slider Skillcontainer__slider3"> 
            <LinearProgress variant="determinate" value={80}/>
            </div>
            </div>
            <div className="Skillcontainer__skillset"> 
            <h5>React js</h5>
            <div className="Skillcontainer__slider Skillcontainer__slider4"> 
            <LinearProgress variant="determinate" value={70}/>
            </div>
            </div>
            <div className="Skillcontainer__skillset"> 
            <h5>Node js</h5>
            <div className="Skillcontainer__slider Skillcontainer__slider5"> 
            <LinearProgress variant="determinate" value={60}/>
            </div>
            </div>
            <div className="Skillcontainer__skillset"> 
            <h5>UX/UI</h5>
            <div className="Skillcontainer__slider Skillcontainer__slider6"> 
            <LinearProgress variant="determinate" value={50}/>
            </div>
            </div>
         </div>
      </Element>  
   );
};

export default skillcontainer;
