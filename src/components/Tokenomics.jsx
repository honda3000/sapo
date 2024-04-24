import React, { useEffect, useState } from "react";
import projectImage from "../assets/marca.png";

const Tokenomics = () => {
  const projects = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, autem molestiae. Facilis quidem temporibus fugit aliquid corrupti, vero, debitis laborum minus repellat, est reiciendis soluta laudantium cum! Aut, quaerat dignissimos.",
      projectsImageSrc: projectImage,

    },

  ];

  return (
    <div
      name="Tokenomics"
      className="h-screen w-screen flex items-center flex-col"
      
    >
      <h2 className="font-semibold text-[40px] " style={{color:"white"}}>ABOUT</h2>
      <div className="   gap-4 mt-10 grid grid-cols-1 md:grid-cols-1">
        {projects.map((p) => (
          <div className="relative w-[600px] h-[500px]    ">
            <img className="flex items-center"  src={p.projectsImageSrc} alt="" />
            <span className="flex flex-col  p-4 absolute  backdrop-blur hover:backdrop-blur-[35px]  inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <ul style={{color:"white",fontSize:"30px",padding:"10px",width:"100%"}}>

                <li type="disc">CA:</li>

                <li type="disc">TAX: 0%</li>

                <li type="disc">SUPPLY: 1,000,000,000</li>
                <li type="disc">MINT: REVOKED</li>
                <li type="disc">OWNERSHIP: RENOUNCED</li>

              </ul>
              <div className="flex">

              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tokenomics;
