import React from "react";
import Video2 from "../Assets/second.MP4";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <video
          src={Video2}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover absolute"
        />

        {/* <div className="relative border-white border-2 w-56 h-16 cursor-pointer mt-[40%]">
          <h1 className="text-white text-3xl text-center mt-3">
            <a href="/shop">EXPLORE</a>
          </h1>
        </div> */}
            <div className="border-white z-50 border-2 absolute mt-4 bottom-16">
          <Link
            to={'/shop'}
            className="block  px-8 py-4 text-2xl text-center text-white"
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </>
  );
};

export default Explore;
