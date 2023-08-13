import React from "react";
import bgvideo from "../assets/bgvideo.mp4";
import logo from "../assets/logo.png";

const Background = () => {
  return (
    <div className="w-full relative h-screen overflow-hidden flex items-center">
      <video src={bgvideo} autoPlay loop muted className="min-w-full overflow-auto object-cover min-h-full z-0"></video>
      <div className="absolute sm:hidden bottom-96 z-10 ">
        <img src={logo} alt="logo" className="w-40 h-44" />
      </div>
      <div className="absolute max-sm:left-32 top-0 max-sm:top-[-10] left-0 z-10 p-0 ml-0 text-white max-lg:w-72">
        <img src={logo} alt="logo" className="w-full h-80  max-sm:h-40 max-sm:w-44  max-sm:hidden" />
      </div>
      <div className="absolute max-sm:hidden w-1/4 top-[10] left-11">
        <h1 className="">Join events and share gifts virtually: Marriages, Concerts, Birthdays Church Services...</h1>
      </div>
    </div>
  );
};

export default Background;
