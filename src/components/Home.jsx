import React from "react";
import { useState, useEffect } from 'react'

import { CarouselCustomNavigation } from "./CarouselCustomNavigation";

import { Button, Modal } from "flowbite-react";

import useSound from "use-sound";
import ranaSound from "../assets/disparo.mp3"
import binancelogo from "../assets/logo.jpg"


const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  

  const [useRanaSound] = useSound(ranaSound)
  return (
    <div>
      
      <div className="items-center flex flex-col h-screen w-screen overflow-hidden ">

      <Button onClick={() => setOpenModal(true)} color="info" style={{ margin: "20px", width: "200px", height: "100px" ,backgroundImage: `url(${binancelogo})`}}>CONNECT</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
              companies around the world are updating their terms of service agreements to comply.
            </p>
            
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>






</div>

    </div>
    
  );
};

export default Home;
