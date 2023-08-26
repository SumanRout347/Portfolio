import React from "react";
import { BsTruck } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";


const Navbar = () => {
  return (
    <div className="bg-[#1A1A1A] w-full">
      <div className="flex items-cente justify-between text-[#626262] font-pop max-w-screen-lg mx-auto md:text-base text-xs w-full">
        <div className=" flex sm:gap-3 gap-2">
          <div className="flex sm:gap-2 gap-1 items-center">
            <BsTruck className="sm:ml-0 ml-1" />
            <p>Free Delivery</p>
          </div>
          <div className="flex items-center gap-3">
            <div>|</div>
            <p>Return Policy</p>
          </div>
        </div>
        <div>
          <div className="flex items-center p-2 sm:gap-5 gap-2">
            <p>Login</p>
            <div className="flex items-center sm:gap-2 gap-1">
              <p>Follow Us</p>
              <BiLogoFacebook />
              <BiLogoLinkedin />
              <AiOutlineTwitter />
              <AiOutlineInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
