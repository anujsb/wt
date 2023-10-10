import React from "react";
import Hero  from "./components/Hero";
import Navbar  from "./components/Navbar";
import {BrowserRouter } from "react-router-dom";



const App=() => {
  return (
    <BrowserRouter>
    
    <div className="relative z-0 bg-primary content-center">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center content-center ">
        <Navbar />
        <Hero /> 
      </div>
      {/* <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div> */}
    </div>
  </BrowserRouter>
);
}
export default App
