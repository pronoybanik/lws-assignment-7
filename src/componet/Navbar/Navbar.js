import React from "react";
import image from "../../html/images/logo.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="max-w-[90rem] mx-auto py-4 fixed top-0 w-full left-1/2 -translate-x-1/2 px-4 md:px-0">
        <img src={image} alt="" />
      </nav>
    </div>
  );
};

export default Navbar;
