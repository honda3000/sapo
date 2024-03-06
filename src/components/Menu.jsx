import React from "react";

const Menu = ({ isMenuOpen, handleMenu }) => {
  return (
    <div
      onClick={handleMenu}
      className="w-[80px] left-[20px] h-[80px] cursor-pointer"
    >
      <div
        className={`w-[69px] h-[9px]  top-[19px] absolute bg-neutral-500
          ${isMenuOpen && "transition-transform rotate-45 top-[80px]  items-center"}`}
      />

      {!isMenuOpen && (
        <div className="w-[69px] h-[9px] left-0 top-[38px] absolute bg-zinc-300" />
      )}

      <div
        className={`
          w-[69px] h-[9px]  top-[60px] absolute bg-zinc-300 ${
            isMenuOpen && "transition-transform rotate-[-45deg] top-[80px]   "
          }
       `}
      />
    </div>
  );
};

export default Menu;
