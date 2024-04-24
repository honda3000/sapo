import React from "react";
import { useState, useEffect } from 'react'

import { CarouselCustomNavigation } from "./CarouselCustomNavigation";

import { Button, Modal } from "flowbite-react";

import useSound from "use-sound";
import ranaSound from "../assets/disparo.mp3"
import binancelogo from "../assets/logo.jpg"
import metamask from "../assets/MetaMask-Logo.jpg"
import {  Card } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import { FloatingLabel } from "flowbite-react";


const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  

  const [useRanaSound] = useSound(ranaSound)
  return (
    <div>
      
      <div className="items-center flex flex-col h-screen w-screen overflow-hidden ">

      <Button onClick={() => setOpenModal(true)}  style={{ margin: "20px", width: "200px", height: "100px",backgroundColor:"white" }}><img src={metamask}></img></Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Comming soon</Modal.Header>
        <Modal.Body>
          <div className="space-y-6" style={{width:"120px"}}>
            
            
          </div>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>


      <Card className="max-w-sm bg-black" style={{width:"300px"}}>
      <Dropdown style={{backgroundColor:"#034001"}} label="YOU PAY" >
      <Dropdown.Item>ETH</Dropdown.Item>
      <Dropdown.Item>USDT</Dropdown.Item>
      <Dropdown.Item>USDC</Dropdown.Item>
      </Dropdown>

      <Dropdown label="SELECT TOKEN" style={{backgroundColor:"#034001"}}>
      <FloatingLabel variant="outlined" label="Search Token" />
      <Dropdown.Item>ETH</Dropdown.Item>
      <Dropdown.Item>USDC</Dropdown.Item>
      </Dropdown>
      
      <Button style={{backgroundColor:"#034001"}}>
        SWAP
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
    <div className="ca">
    <h3 className="notititle">CA:XXXXXXXXXXXXXXXXXXXX</h3>

    </div>
    






</div>

    </div>
    
  );
};

export default Home;
