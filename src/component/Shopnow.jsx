import React from "react";
import next from "../Assets/next.mp4";
import reside from "../Assets/reside.mp4";
import { Link } from "react-router-dom";

const ShopNow = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="w-full md:w-1/2">
          <video src={reside} autoPlay loop muted className="w-full" />
        </div>
        <div className="w-full md:w-1/2">
          <video src={next} autoPlay loop muted className="w-full" />
        </div>
      </div>

      <div className="flex flex-col items-center md:mt-[-15rem] mt-[-20rem]">
        <div className="text-white text-center z-50">
          <h1 className="text-2xl">Discover </h1>
          <h1 className="text-2xl">The Genesis Collection</h1>
          {/* <h1 className="text-2xl">fw23/24 collection</h1> */}
        </div>

        {/* <div className="border-white z-50 border-2 mt-4">
          <Link
            to={'/shop'}
            className="block  px-8 py-4 text-2xl text-center text-white"
          >
            Shop Now
          </Link>
        </div> */}
        <div className="border-white z-50 border-2 mt-4">
          <Link
            to={'/shop'}
            className="block  px-8 py-4 text-2xl text-center text-white"
          >
            Select Your Fit
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShopNow;
