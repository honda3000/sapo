import React from "react";
import img1 from "../assets/tirador1cortada.jpg"
import img2 from "../assets/binance-gorra.jpg"
import img3 from "../assets/tirador3.jpg"
import img4 from "../assets/aulatiroteoRecorte.jpg"

const About = () => {




  return (
    <div
      name="About"
      className=" flex flex-col items-center  h-screen w-screen "
      style={{ paddingTop: "40px", zIndex: "150", cursor: "url(../assets/pepe1png.png)" }}
      
    >
      <h2 className="font-semibold text-[40px] " style={{color:"white"}}>ABOUT</h2>
      <div className="page-content">
        <div className="card" style={{ backgroundImage: `url(${img1})` }}><div className="content">
          <h2 className="title">hola</h2>
          <p className="copy">Lorem ipsum </p>
          </div></div>
        <div className="card" style={{ backgroundImage: `url(${img2})` }}><div className="content">
        <h2 className="title">hola</h2>
        <p className="copy">Lorem ipsum </p>
          </div></div>
        <div className="card" style={{ backgroundImage: `url(${img3})` }}><div className="content">
        <h2 className="title">hola</h2>
        <p className="copy">Lorem ipsum </p>
          </div></div>
          <div className="card" style={{ backgroundImage: `url(${img4})` }}><div className="content">
        <h2 className="title">hola</h2>
        <p className="copy">Lorem ipsum </p>
          </div></div>

      </div>
    </div>
  );
};

export default About;
