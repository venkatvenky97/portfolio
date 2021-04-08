import React, { useState } from "react";
import "./Project.css";

const Project  =({ img, title, desc, link }) => {
   const [show, setshow] = useState(false);
   return (
      <a href={link}>
         <div className="Project" 
         onMouseEnter={() => setshow(true)} 
         onMouseLeave={() => setshow (false)} >
       
         {show ? (
          <img src={img} alt="" />
        ) : (
          <div className="Project__content">
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        )}
      </div>
    </a>
  );
};

export default Project;