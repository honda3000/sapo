import React, { useState } from "react";
import Menu from "./Menu";
import { Link } from "react-scroll";
import logo from "../assets/logo.png"
const NavBar = () => {
  const [isMenuopen, setIsMenuOpen] = useState(false);

  const links = [
    {
      link: "About",
      id: 1,
    },
    
    
  ];

  return (
    <div
      className={[
        "absolute",
        !isMenuopen
          ? " z-[200] absolute w-[69px]  left-4 h-[47px]"
          : " items-center justify-around flex flex-col z-[300] fixed w-[25%] h-screen bg-[#2B2B29]",
      ]}
      
    >
      <Menu
        isMenuOpen={isMenuopen}
        handleMenu={() => setIsMenuOpen(!isMenuopen)}
      />
      <img src={logo}></img>

      {isMenuopen &&
        links.map((l) => (
          <Link
            className="text-[30px] text-white cursor-pointer "
            onClick={() => setIsMenuOpen(false)}
            to={l.link}
            key={l.id}
            smooth={500}
          >
            {l.link}
          </Link>
        ))}
    </div>
  );
};

export default NavBar;
