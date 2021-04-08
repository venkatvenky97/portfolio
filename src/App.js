import React from "react";
import Header from "./components/Header/Header";
import Projectcontainer from "./components/Projectcontainer/Projectcontainer.js";
import Skillcontainer from "./components/skillcontainer/skillcontainer.js";
import TopContainer from "./components/Topcontainer/Topcontainer";
import Contact from "./components/Contact/Contact";
import "./App.css";

const App = () => {
  return (
    <div>
    <Header />
    <TopContainer />
    <Skillcontainer />
    <Projectcontainer />
    <Contact />
    
    </div>
  );
};

export default App;

