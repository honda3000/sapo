
'use client';

import { Carousel } from 'flowbite-react';

import pepe1 from "../assets/binancebully.jpg";
import pepe2 from "../assets/tirador1.jpg";
import pepe3 from "../assets/tiradorPNG.png";
import pepe4 from "../assets/aulatiroteo.jpg";

export  function CarouselCustomNavigation() {
  return (
    <div className="h-200 w-[70%] sm:h-64 xl:h-[70%] 2xl:h-[80%] " >
      <Carousel>
        <img className='h-150 w-150' src={pepe1} alt="..." />
        <img className='h-150 w-150' src={pepe2} alt="..." />
        <img  className='h-250 w-250'src={pepe3} alt="..." />
        <img  className='h-150 w-150'src={pepe4} alt="..." />
        
      </Carousel>
    </div>
  );
}
