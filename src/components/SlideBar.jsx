import React from "react";
import { AiFillInstagram, AiOutlineFilePdf, AiFillTwitterSquare} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import Telegram from "../assets/telegram.png"


const SlideBar = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Telegram <img src={Telegram} style={{width:"30px",height:"30px",margin:"5px"}}></img>
        </>
      ),
      href: "https://t.me/Futureswap_BASE",
    },
    {
      id: 2,
      child: (
        <>
          X <AiFillTwitterSquare size={30} style={{margin:"5px"}} />
        </>
      ),
      href: "https://twitter.com/futureswap2712",
    },
    
  ];

  return (
    <div className="flex right-0 items-center bg-slate-400 bg-opacity-50  justify-evenly fixed top-30 p-4 flex-col xsm:right-[40%]">
      {links.map(({ id, child, href, style, download }) => (
        <div key={id} className={"right-0 mt-4 flex duration-300 hover:mr-4"}>
          <a
            href={href}
            className="flex justify-between items-center w-full
         text-white"
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SlideBar;
