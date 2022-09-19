import React from "react";

import logo from "./../assets/imgs/memories.png";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[80%] rounded-[8px] flex bg-white justify-center gap-7 py-1.5 my-10 items-center ">
        <h2 className="text-center text-3xl font-bold">Your Memories</h2>
        <img src={logo} alt="Logo" className="h-[60px]" />
      </div>
    </div>
  );
};

export default Navbar;
