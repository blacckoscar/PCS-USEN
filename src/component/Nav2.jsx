import React, { useState } from "react";
import { Link } from "react-router-dom";


const Nav2 = () => {

    
  const [color, setColor] = useState(false)
  const changeColor =() => {
      if(window.scrollY >= 100) {
          setColor(true)
      } else {
          setColor(false)
      }
  }

  window.addEventListener('scroll', changeColor)

    return (
        <div className="hidden md:flex ">
            <nav 
            // className="  z-50 flex justify-between items-center bg-transparent py-4 px-6"
            className={`fixed top-5 md:top-0 md:left-0 md:right-0 left-72 z-50 flex justify-between items-center ${
                color ? "md:bg-[#ccc]" : "bg-transparent"
              } text-white py-4 px-6`}
            
            >

                <div>
                    <button
                        className=" hover:text-gray-400 focus:outline-none "
                    >
                        <h1 className="text-black text-2xl font-bold">
                            <Link to="/">
                            NEXTBERRIES™
                            </Link>
                                </h1>
                        
                    </button>

                </div>
                <div className="md:flex hidden items-center">
                    <ul className="flex space-x-20">
                        <li className="font-bold text-2xl text-black">
                            <Link to="/">Collaborations</Link>
                        </li>
                        <li className="font-bold text-2xl  text-black">
                            <Link to="/shop">Community</Link>
                        </li>
                        <li className="font-bold text-2xl  text-black">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="font-bold text-2xl  text-black">
                            <Link to="/">Connect</Link>
                        </li>
                    </ul>

                </div>


            </nav>
        </div>
    );
};

export default Nav2;


