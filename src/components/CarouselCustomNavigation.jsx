
'use client';

import { Carousel } from 'flowbite-react';

import pepe1 from "../assets/pepe1.png";
import pepe2 from "../assets/pepe2.png";
import pepe3 from "../assets/pepe3.png";

export  function CarouselCustomNavigation() {
  return (
    <div className="h-200 w-[70%] sm:h-64 xl:h-[70%] 2xl:h-[80%] " >
      <Carousel>
        <img className='h-150 w-150' src={pepe1} alt="..." />
        <img className='h-150 w-150' src={pepe2} alt="..." />
        <img  className='h-150 w-150'src={pepe3} alt="..." />
        
      </Carousel>
    </div>
  );
}
