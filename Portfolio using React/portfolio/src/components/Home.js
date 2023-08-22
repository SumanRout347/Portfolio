import React from "react";
import { FiChevronRight } from "react-icons/fi";
import profile from "../assets/profile.jpeg";
const Home = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-7xl font-bold text-white py-1">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have over 1 year of experience of building applications. I love to
            work on technologies like React, Tailwind, Next JS and Node JS.
          </p>
          <div className="mx-auto md:mx-0">
            <button
              className="group text-white my-2 bg-gradient-to-r from-cyan-500 to-blue-500  px-6 py-3 flex items-center ml-1
          rounded-md"
            >
              Portfolio<span></span>
              <FiChevronRight
                size={25}
                className="ml-1 group-hover:rotate-90 duration-500"
              />
            </button>
          </div>
        </div>
        <div>
          <img
            src={profile}
            alt="profile"
            className="w-[88%] md:w-[400px] h-[70%] mx-auto rounded-2xl px-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
