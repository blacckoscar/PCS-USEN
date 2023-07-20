import React from "react";
import video from "../Assets/WEBSITE PROTOTYPE.mp4";

const Welcome = () => {
  return (
    <div className="h-screen">
      <video
        src={video}
        autoPlay
        loop
        muted
        className="w-full h-full md:object-cover object-cover "
      />
      <div class="flex justify-center items-center ">
        <div class="absolute md:mt-[-55%] -mt-[160%]">
          <h1 class="md:text-7xl text-white text-center text-2xl">
            WELCOME TO NEXTBERRIES
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
