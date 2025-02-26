import ContentCard from "@/components/ContentCard/ContentCard";
import Ticket from "@/components/Ticket/Ticket";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className=" flex flex-col items-center  gap-24   my-28   bg-cover bg-center">
      <div>
        {/* showing diffrent text based on screen size */}
        <h1 className="text-white uppercase text-9xl select-none text-nowrap hidden md:flex">
          ایرناگ 2025
        </h1>
        <h1 className="text-white uppercase text-9xl select-none text-nowrap md:hidden sm:flex">
          ایرناگ 7
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-24 justify-center align-baseline items-baseline gap-8 lg:mb-48">
        <button className="shinyButton w-96 h-20 text-white  text-2xl py-2 px-4 rounded-4xl hover:cursor-pointer items-center justify-center">
          تهیه بلیط
        </button>

        <button className=" w-96 h-20 bg-transparent backdrop-blur-lg border border-gray-300 text-white py-2 px-4 rounded-4xl uppercase  hover:shadow-[0_4px_6px_rgba(255,255,255,0.5)] hover:cursor-pointer">
          buy ticket
        </button>
      </div>
    </div>
  );
};

export default HomePage;
