import React, { useState } from "react";
import Image1 from "../Assets/cola1.jpeg";
import Image2 from "../Assets/cola2.jpeg";
import Image3 from "../Assets/cola3.jpeg";
import Image4 from "../Assets/cola1.jpeg";
import Nav2 from "./Nav2";
import HomeButton from "./BackHome";
import Clicked from "./ClickedColabo";
import MobileNav from "../Components/MobileNav";
import { Link } from "react-router-dom";

const collaborationsData = [
  {
    id: 1,
    image: Image2,
    name: "MOJIRADE",
    content:
      "A collaboration with virtual influencer,  Mojirade, bridging the gap between reality and virtuality. sporting the Lder design from our FW23/24 collection.",
  },
  {
    id: 2,
    image: Image3,
    name: "Coco & Breezy",
    content:
      "A collaboration with virtual influencer,  Mojirade, bridging the gap between reality and virtuality. sporting the Lder design from our FW23/24 collection.",
  },
  {
    id: 3,
    image: Image4,
    name: "Astra Starr",
    content:
      "A collaboration with virtual influencer,  Mojirade, bridging the gap between reality and virtuality. sporting the Lder design from our FW23/24 collection.",
  },
  {
    id: 4,
    image: Image4,
    name: "Astra Starr",
    content:
      "A collaboration with virtual influencer,  Mojirade, bridging the gap between reality and virtuality. sporting the Lder design from our FW23/24 collection.",
  },
];

const Collaborations = () => {
  const [selectedCollaboration, setSelectedCollaboration] = useState(null);

  const handleClick = (collaboration) => {
    setSelectedCollaboration(collaboration);
  };

  const renderCollaborations = collaborationsData.map((collaboration) => (
    <div
      key={collaboration.id}
      className="flex flex-col items-center mx-2 cursor-pointer"
      onClick={() => handleClick(collaboration)}
    >
      <img
        className="w-28 h-28 rounded-full"
        src={collaboration.image}
        alt={collaboration.name}
      />
      <p className="text-black font-bold">{collaboration.name}</p>
    </div>
  ));

  return (
    <div className="text-white md:bg-white bg-[#000000d9] " >

      <Nav2 />
      <MobileNav />
    <footer className="text-white bg-white py-4 mt-20 md:mt-0 md:pt-20 text-center absolute w-full h-max">
      <div className="flex flex-wrap overflow-x-auto justify-center mt-10">
        <div className="flex flex-col items-center mx-2 cursor-pointer">
          <img className="w-28 h-28 rounded-full" src={Image1} alt="View All" />
          <p className="text-black font-bold">View All</p>
        </div>
        {renderCollaborations}
        {/* <HomeButton /> */}
      </div>

      {selectedCollaboration && (
        <Clicked
          collaboration={selectedCollaboration}
          onClose={() => setSelectedCollaboration(null)}
        />
      )}
        <div className=" mt-[30%]  w-full justify-center items-center">
          <h1 className=" text-center text-xl md:font-bold font-bold mb-6 mt-2 text-black">
            &copy; Nextberries 2023. All rights reserved <Link className='hover:text-blue-500' to={'/policy'}>Privacy Policy</Link>.
          </h1>
        </div>
    </footer>
    </div>
  );
};

export default Collaborations;
