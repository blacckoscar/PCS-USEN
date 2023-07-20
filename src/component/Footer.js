import React from "react";
import Image1 from '../others/download (2).jpg';
import Image2 from '../others/download (3).jpg';
import Image3 from '../others/gaming-mousepad-1656302558323.jpg';
import Image4 from '../others/images.jpg';
import Nav2 from "./Nav2";
import Clicked from "./ClickedColabo";

const Footer = () => {
  return (
    <footer className=" text-white py-4 text-center absolute mt-[113%] w-full h-screen">
        <Nav2 />
      <div className="flex justify-center mt-10">
      <div className="flex flex-col items-center mx-2">
          <img
            className="w-28 h-28 rounded-full"
            src={Image1}
            alt="Image 1"
          />
          <p>MOJIRADE</p>
        </div>
        <div className="flex flex-col items-center mx-2">
          <img
            className="w-28 h-28  rounded-full"
            src={Image2}
            alt="Image 2"
          />
          <p>Coco & Breezy</p>
        </div>
        <div className="flex flex-col items-center mx-2">
          <img
            className="w-28 h-28  rounded-full"
            src={Image3}
            alt="Image 3"
          />
          <h1 className="text-black">Astra Starr</h1>
        </div>
        <div className="flex flex-col items-center mx-2">
          <img
            className="w-28 h-28 rounded-full"
            src={Image4}
            alt="Image 4"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
