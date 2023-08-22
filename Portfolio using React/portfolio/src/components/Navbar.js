import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  const [nav, setnav] = useState(false);
  return (
    <div className="bg-black p-4 flex justify-between items-center w-full h-20 text-white">
      <div className="z-10">
        <h1 className="font-signature text-4xl px-3 py-2">Suman</h1>
      </div>

      <ul className="hidden md:flex gap-4 mr-4">
        {links.map(({ id, link }) => (
          <li
            onClick={() => setnav(!nav)}
            key={id}
            className="text-gray-400 capitalize hover:scale-105 duration-300 hover:text-gray-300 cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setnav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col gap-4 h-screen w-full absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800 
        justify-center items-center md:hidden"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="text-gray-400 capitalize hover:scale-105 duration-300 hover:text-gray-300 cursor-pointer
              text-3xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
