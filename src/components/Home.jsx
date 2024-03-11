import React from "react";
import developerHeader from "../assets/developer.png";
import header from "../assets/header.png";
import { Link } from "react-scroll";
import { CarouselCustomNavigation } from "./CarouselCustomNavigation";
import { Button } from 'flowbite-react';
import useSound from "use-sound";
import ranaSound from "../assets/rana.mp3"

const Home = () => {

  const [useRanaSound]=useSound(ranaSound)
  return (
    <div className="items-center flex flex-col h-screen w-screen overflow-hidden bg-slate-400" style={{backgroundColor: "#168C16"}}>
      
      
      <CarouselCustomNavigation
></CarouselCustomNavigation>
     <Button onClick={useRanaSound} color="info" style={{margin:"20px",width:"200px",height:"100px"}}>BUY</Button>

      
    </div>
  );
};

export default Home;
