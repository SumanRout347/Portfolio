import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

import { Box } from "@mui/material";

const Body = () => {
  const [data, setData] = useState([]);
  const [newData,setNewData]=useState([])
  const options = [
    "All",
    "Men's Clothing",
    "Jewelery",
    "Electronics",
    "Women's Clothing",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    let box = document.getElementById("slider");
    box.scrollLeft = box.scrollLeft - 500;
  };

  const next = () => {
    let box = document.getElementById("slider");
    box.scrollLeft = box.scrollLeft + 500;
  };

  const changeClick = (option,index) => {
    setActiveIndex(index);
    if(option==="All"){
      setNewData(data)
      return
    }
    let filteredData=data.filter((product)=>product.category.toLowerCase()===option.toLowerCase())
    setNewData(filteredData)
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const output = await res.json();
        console.log(output);
        setData(output);
        setNewData(output)
        if (data) {
          console.log(data);
        }
      } catch (error) {}
    };
    fetchData();
    // eslint-disable-next-line
  }, []);
  return (
    <Box sx={{ height: "100vh" }}>
      <div className="max-w-screen-lg mx-auto flex flex-col gap-5 w-full">
        <div className="flex justify-between items-center relative">
          <div className="w-fit">
            <h2 className="md:text-[60px] font-semibold text-[40px] md:p-0 p-6">
              New Products
            </h2>
          </div>
          <div className="md:flex items-center gap-3 justify-center absolute right-0 bottom-2 hidden">
            <button onClick={prev}>
              <HiOutlineArrowNarrowLeft size={30} />
            </button>
            <button onClick={next}>
              <HiOutlineArrowNarrowRight size={30} />
            </button>
          </div>
        </div>
        <div className="flex gap-10 md:flex-row flex-col">
          <ul className="ml-[2px] flex md:flex-col md:p-0 pl-8 gap-3 w-fit">
            {options.map((option, index) => (
              <li
                key={index}
                className={
                  activeIndex === index
                    ? "md:text-[20px] text-[13px] font-semibold duration-300 cursor-pointer w-fit font-work"
                    : "md:text-[16px] text-[12px] cursor-pointer w-fit font-work"
                }
                onClick={() => changeClick(option,index)}
              >
                {option}
              </li>
            ))}
          </ul>
          <div
            id="slider"
            className="h-[490px] md:flex flex-row lg mx-auto gap-4 md:p-0 p-6 overflow-x-scroll scroll whitespace-nowrap scroll-smooth overflow-y-hidden hidden"
          >
            {newData?.map((product) => (
              <div
                key={product.id}
                className="h-full w-[310px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-300"
              >
                <img
                  src={product?.image}
                  alt="product"
                  className="h-[322px] w-full p-2"
                />
                <p className="text-[26px] font-semibold p-2 font-sy">{`${product.title.slice(
                  0,
                  15
                )}...`}</p>
                <p className="text-[14px] p-1 font-work opacity-[50%]">{`${product.description.slice(
                  0,
                  40
                )}...`}</p>
                <p className="flex p-1 font-sy font-semibold">${`${product.price}`}</p>
              </div>
            ))}
          </div>
          <div id="container" className="flex gap-3 flex-row md:hidden">
            {newData?.map((product) => (
              <div
                key={product.id}
                className="h-full w-[310px] inline-block cursor-pointer hover:scale-105 ease-in-out duration-300"
              >
                <img
                  src={product?.image}
                  alt="product"
                  className="h-[322px] w-full p-2"
                />
                <p className="text-[26px] font-semibold p-2">{`${product.title.slice(
                  0,
                  15
                )}...`}</p>
                <p className="text-[14px] p-1">{`${product.description.slice(
                  0,
                  40
                )}...`}</p>
                <p className="flex p-1">${`${product.price}`}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 justify-center md:hidden mx-auto">
            <button onClick={prev}>
              <HiOutlineArrowNarrowLeft size={30} />
            </button>
            <button onClick={next}>
              <HiOutlineArrowNarrowRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Body;
