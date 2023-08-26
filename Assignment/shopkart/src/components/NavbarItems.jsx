import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import star from "../assets/Star 3.png";
import main from "../assets/main.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const NavbarItems = () => {
  const [nav, setnav] = useState(false);
  const [drop, setDrop] = useState(false);
  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",

      style: "flex items-center gap-1",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];
  const mydrop = links[2].child;
  return (
    <div className="relative bg-black text-white w-full overscroll-y-hidden">
      <div className="max-w-screen-lg mx-auto w-full">
        <div className="flex justify-between relative">
          <h1 className="text-[30px] sm:text-[40px] p-4 sm:p-0 z-[60] font-pop">
            ShopKart
          </h1>
          <div className="sm:flex gap-3 items-center absolute left-auto right-0 bottom-2 hidden font-work">
            <p>WISHLIST(0)</p>
            <p>BAG(0)</p>
          </div>
          <div
            onClick={() => setnav(!nav)}
            className="cursor-pointer pr-4 z-[60] text-white md:hidden flex items-center"
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
        <hr />
        <ul className="gap-[120px] mt-3 ml-10 capitalize w-full hidden sm:flex">
          {links.map((link) => (
            <li
              key={link.id}
              className="text-lg font-normal cursor-pointer font-work"
              onClick={() => setDrop(!drop)}
            >
              {link.name}
            </li>
          ))}
        </ul>
        {drop && (
          <ul className="flex flex-col absolute left-[496px] border-2 border-white h-[100px] w-[110px] duration-200">
            {mydrop.map((ele) => (
              <li className="cursor-pointer hover:bg-gray-600" key={ele.id}>
                {ele.name}
              </li>
            ))}
          </ul>
        )}
        {nav && (
          <ul
            className="flex flex-col gap-6 h-screen w-full absolute top-0 left-0 bg-black 
            justify-center items-center md:hidden z-50"
          >
            {links.map((link) => (
              <li key={link.id} className="text-[18px] font-normal">
                {link.name}
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-evenly">
          <div className="flex flex-col gap-0 sm:text-[120px] text-[40px] relative sm:mt-[10%] mt-[60%] z-[45]">
            <p className="ml-4 w-fit font-extrabold">Fresh</p>
            <p className="left-[36%] w-fit absolute sm:top-[20%] top-[15%] font-extrabold">
              2022
            </p>
            <p className="ml-[13%] sm:mt-8 mt-4 font-extrabold">Look</p>
            <hr className="mt-4" />
            <p className="ml-[5%] text-xl sm:mt-5 mt-16 border border-t-white w-fit flex gap-2 items-center">
              See more
              <span>
                <BsArrowUpRight className="font-bold" size={15} />
              </span>
            </p>
          </div>
          <div>
            <div
              className="sm:w-[900px] sm:h-[340px] w-[737px] h-[280px] mx-auto absolute right-0 sm:bottom-[100px] bottom-[50px] 
              z-[42] opacity-70 bg-[#F07E15]"
            ></div>
            <img
              src={main}
              alt=""
              className="sm:w-[432px] sm:h-[654px] w-[400px] h-[494px] opacity-96 relative z-30 object-cover"
            />
            <img
              src={star}
              alt=""
              className="absolute lg:right-[5%] lg:bottom-[130px] z-20 sm:w-[400px] top-[14%] right-[-50px] w-[200px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarItems;
