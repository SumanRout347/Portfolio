import React from "react";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import css from "../assets/css.png";

const Skills = () => {
  const links = [
    {
      id: 1,
      image: html,
      name:"Html",
      style: "shadow-md shadow-orange-500",
    },
    {
      id: 2,
      image: css,
      name:"Css",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      image: javascript,
      name:"Javascript",
      style: "shadow-yellow-300",
    },
    {
      id: 4,
      image: react,
      name:"React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      image: nextjs,
      name:"Next Js",
      style: "shadow-white",
    },
    {
      id: 6,
      image: node,
      name:"Node",
      style: "shadow-green-300",
    },
    {
      id: 7,
      image: github,
      name:"GitHub",
      style: "shadow-white",
    },
    {
      id: 8,
      image: tailwind,
      name:"Tailwind Css",
      style: "shadow-sky-400",
    },
  ];
  return (
    <div name="skills" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-screen-lg h-full w-full flex flex-col justify-center text-white mx-auto p-4">
        <p className="text-4xl inline border-b-4 border-gray-500 font-bold w-fit">
          Skills
        </p>
        <p className="mt-2">These are the technologies, I have worked with</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 justify-center gap-8 px-12 py-6 sm:px-0">
          {links.map(({ id, image, style,name }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 text-center rounded-lg p-2 cursor-pointer ${style}`}>
              <img src={image} alt="react" className="w-20 mx-auto" />
              <p className="mt-4">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
