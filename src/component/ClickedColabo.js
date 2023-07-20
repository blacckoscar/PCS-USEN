import React from "react";

const Clicked = ({ collaboration, onClose }) => {
  return (
    <div className="flex flex-col md:flex-row p-5 md:p-20">
      <div className="w-full md:w-1/2">
        <img
          src={collaboration.image}
          alt={collaboration.name}
          className="w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 p-5 md:p-10 mt-4 md:mt-0">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-black">
          Nextberries™ x {collaboration.name}
        </h1>
        <p className="text-lg md:text-3xl text-black text-left">
          {collaboration.content}
        </p>
        <button
          className="text-white bg-gray-800 px-4 py-2 mt-4 rounded"
          onClick={onClose}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Clicked;
