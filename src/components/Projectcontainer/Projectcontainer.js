import React, { useState } from 'react';
import Project from "../Project/Project";
import {Element} from "react-scroll";
import img1 from "../../assets/project1.png";
import img2 from "../../assets/image1.png";
import img5 from "../../assets/project2.png";
import "./Projectcontainer.css";
 
const Projectcontainer = () => {
   const[choosen] = useState(true);

   const Clint_Projects = [
      {
         img : img1,
         title:'Restaurant',
         desc:'Hello all this is new cafe in hometown come and enjoy.',

         link: "https://drive.google.com/file/d/1CZl2QaDIOQeTsYwplPkupl-KMiLQeyZ0/view?usp=sharing",
      },
      {
         img : img2,
         title:'COVID-19 Tracker',
         desc:'This website shows overview of the COVID-19 situation and also provide details country wise.',

         link: "https://covid19updatetrackernew.netlify.app/",
      },
      {
         img : img1,
         title:'Restaurant',
         desc:'Hello all this is new cafe in hometown come and enjoy.',

         link: "https://drive.google.com/file/d/1CZl2QaDIOQeTsYwplPkupl-KMiLQeyZ0/view?usp=sharing",
      },
      {
         img : img1,
         title:'Restaurant',
         desc:'Hello all this is new cafe in hometown come and enjoy.',

         link: "https://drive.google.com/file/d/1CZl2QaDIOQeTsYwplPkupl-KMiLQeyZ0/view?usp=sharing",
      },
   ];

   const Clone_works = [
      {
         img : img5,
         title:'Airbnb Clone',
         desc:"Clone of Airbnb with some functionalities like search rooms based on dates, etc.",
         link: "https://airbnb-clone-70095.web.app/",
      }
   ]
   
   return (
      <Element className="ProjectContainer" id="projects">
        <h1>Projects</h1>
        <p>
          Here are some projects which are changing many people lives and some
          clone works of large tech tack companies.
        </p>
        <div className="Projectcontainer__projects">
          
        </div>
  
        {choosen ? (
          <div className="Projectcontainer__projects">
            {Clint_Projects.map((project, index) => (
              <Project
                key={index}
                img={project.img}
                desc={project.desc}
                title={project.title}
                link={project.link}
              />
            ))}
          </div>
        ) : (
          <div className="Projectcontainer__projects">
            {Clone_works.map((project, index) => (
              <Project
                key={index}
                img={project.img}
                desc={project.desc}
                title={project.title}
                link={project.link}
              />
            ))}
          </div>
        )}
      </Element>
    );
  };
  
  export default Projectcontainer;