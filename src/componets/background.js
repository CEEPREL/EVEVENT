import React from "react";
import bgvideo from "../assets/bgvideo.mp4";

const Background = () => {
  return (
    <div className="w-full h-screen">
      <video className="w-full h-screen object-cover" src={bgvideo} autoPlay loop muted />
    </div>
  );
};

export default Background;
