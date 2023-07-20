import React from "react";
import video from '../Assets/WEBSITE PROTOTYPE2.mp4';

const Mission = () => {
  return (
    <>
      <div className=" justify-center md:mt-0">
        {/* <div> */}
          <video src={video} loop autoPlay  alt="okon"/>
          {/* <div className=" bg-slate-300 w-100 w-full h-1">
            hello
          </div>
          <div className="-mt-[50%] ml-[40%]">
            <h1 className="text-white md:text-5xl md:mr-44  -mt-1  md:-mt-10 font-bold">
              THE MISSION
            </h1>
            <h1 className="text-white  md:mt-80 md:w-[45%] md:ml-40 md:text-5xl  w-50 mt-10 text-sm">
              Build a new inclusive, diverse and sustainable IRL x URL reality
              and ecosystem that empowers its consumers through personalization
              and adoption of blockchain technology.
            </h1>
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Mission;
