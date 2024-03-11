import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";

import SlideBar from "./components/SlideBar";

import punteroPepe from "./assets/pepe1png.png"
import { useState, useEffect } from 'react'

function App() {
  
  return (
    <div>
       

    
    <div >
      
      <NavBar />
      <SlideBar />
      <Home />
       
      <About />
      <Tokenomics />

    </div>
    </div>
  );
}

export default App;
