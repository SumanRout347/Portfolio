import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Social = () => {
  const links = [
    {
      id: 1,
      href: "https://in.linkedin.com/in/suman-r-09a088198",
      name: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      style: "rounded-tr-md",
    },
    {
      id: 2,
      href: "https://github.com/SumanRout347",
      name: (
        <>
          GitHub <FaGithub size={25} />
        </>
      ),
    },
    {
      id: 3,
      href: "mailto:sumanrout239@gmail.com",
      name: (
        <>
          Mail <AiOutlineMail size={25} />
        </>
      ),
    },
    {
      id: 4,
      href: "/Suman_resume.docx",
      name: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="fixed left-0 top-[35%] lg:flex flex-col hidden">
      <ul>
        {links.map(({ id, href, download, name, style }) => (
          <li key={id} className={`w-30 text-white my-1 ml-[-75px] hover:ml-[-6px] bg-gray-400 py-1 px-3 hover:rounded-md duration-300 ${style}`}>
            <a
              href={href}
              className="flex items-center justify-between gap-2"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
