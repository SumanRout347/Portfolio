import React from "react";

const Footer = () => {
  return (
    <div className="relative">
      <div className="bg-pattern h-[543px] flex flex-col sm:gap-6 justify-evenly">
        <div className="flex max-w-screen-lg w-full sm:justify-between mx-auto pt-10 sm:flex-row flex-col gap-8">
          <div className="w-fit text-white opacity-[50%] sm:mx-0 mx-auto flex flex-col sm:gap-1 gap-3">
            <p className="flex justify-center sm:justify-start text-[26px]">Newsletter</p>
            <p className="text-[18px] m:p-0 pl-4">Get news about articles and updates in your inbox</p>
          </div>
          <div className="sm:mx-0 mx-auto sm:w-[500px] w-full sm:p-0 p-4">
            <form
              action=""
              className="flex flex-col md:w-[400px] gap-6 sm:w-fit w-full"
            >
              <input
                type="text"
                placeholder="NAME"
                name=""
                className="outline-none font-work text-white bg-transparent border-b-2 border-white opacity-[50%] placeholder:text-white placeholder:opacity-[50%]"
                id=""

              />
              <input
                type="email"
                name=""
                placeholder="EMAIL"
                className="outline-none font-work text-white bg-transparent border-b-2 border-white opacity-[50%] placeholder:text-white placeholder:opacity-[50%]"
                id=""
              />
              <input
                type="text"
                name=""
                placeholder="MESSAGE"
                className="outline-none font-work bg-transparent border-b-2 border-white opacity-[50%] placeholder:text-white placeholder:opacity-[50%]"
                id=""
              />
               <button type="submit" className="text-[#F07E15] z-20 md:text-[26px] absolute md:bottom-[100px] md:right-[150px] right-4 bottom-[88px] rounded-full border-[#F07E15] border-2 md:h-[181px] md:w-[181px] h-[100px] w-[100px]">SEND</button>
            </form>
          </div>
        </div>
        <div className="flex justify-center flex-col font-extrabold  text-white mx-auto sm:p-4 p-2 w-full relative mb-4">
          <h1 className="md:text-[120px] text-[45px]">GET</h1>
          <h1 className="md:text-[120px] text-[45px] absolute sm:left-[15px] right-0 sm:top-[120px] left-[5px] top-[60px]">
            IN TOUCH
          </h1> 
          
        </div>
       
      </div>
      <p className="text-[12px] p-4 flex justify-center font-pop bg-black text-white h-[25px] items-center">Copyright 2022 All Right Reserved By SG</p>
    </div>
  );
};

export default Footer;
