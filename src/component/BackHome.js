import React from "react";
import { FaHome } from "react-icons/fa";

const HomeButton = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full"
      onClick={handleClick}
    >
      <FaHome size={40} />
    </button>
  );
};

export default HomeButton
