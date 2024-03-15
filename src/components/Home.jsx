import React from "react";
import { useState, useEffect } from 'react'

import { CarouselCustomNavigation } from "./CarouselCustomNavigation";
import { Button } from 'flowbite-react';
import useSound from "use-sound";
import ranaSound from "../assets/disparo.mp3"
import binancelogo from "../assets/logo.jpg"


const Home = () => {
  

  const [useRanaSound] = useSound(ranaSound)
  return (
    <div>
      
      <div className="items-center flex flex-col h-screen w-screen overflow-hidden ">

      <Button onClick={useRanaSound} color="info" style={{ margin: "20px", width: "200px", height: "100px" ,backgroundImage: `url(${binancelogo})`}}>SHOT</Button>
<CarouselCustomNavigation
></CarouselCustomNavigation>






</div>

    </div>
    
  );
};

export default Home;
