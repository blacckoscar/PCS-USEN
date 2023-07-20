import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Google from "./Google";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import firebase from "../firebaseconfig";

const MobileNav = ({ }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isIconClosed, setIsIconClosed] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isShopAllOpen, setIsShopAllOpen] = useState(false);
  const [isUnisexOpen, setIsUnisexOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    // setIsIconClosed(!isIconClosed);
  };

  const handleShopAllDropdownClick = (e) => {
    e.preventDefault();
    setIsShopAllOpen(!isShopAllOpen);
    setIsUnisexOpen(false);
  };

  const handleUnisexDropdownClick = (e) => {
    e.preventDefault();
    setIsUnisexOpen(!isUnisexOpen);
    setIsShopAllOpen(false);
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup the event listener on unmount
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY >= window.innerHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const style = {
    background: isScrolled ? "#000" : "#fff",
  };

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
    <div
    className={`md:hidden fixed top-0 right-0 left-0 z-50 flex justify-between items-center ${
      color ? "bg-[#000000d9]" : "bg-transparent"
    } text-white h-16`}
    >
      <div className="md:hidden absolute top-5 left-3 z-50">
        <button className=" hover:text-gray-400 focus:outline-none ">
          <h1 className="text-white text-2xl font-bold">
            <Link to="/">NEXTBERRIES™</Link>
          </h1>
        </button>
      </div>
        <div className="md:hidden absolute top-6 right-5 z-50">
          <button
            className="text-white z-50 hover:text-gray-400 focus:outline-none"
            onClick={toggleDropdown}
          >
            {isOpen ? (
              <AiOutlineClose className="h-6 w-6 z-50" />
            ) : (
              <AiOutlineMenu className="h-7 w-7 z-50" />
            )}
          </button>
        </div>
        {isOpen ? (
          <nav
            className={`fixed h-screen top-0 right-0 left-0 bg-[#000000d9]  text-white p-4 px-6`}
          >
          <div 
          className=" md:left-5 mt-20"
          // className=" flex-col flex"
          >
                <ul className="text-lg">
            <li className="font-bold ">
              <Link to="/">Home</Link>
            </li>
            <li className="font-bold mt-2">
              <Link to="/collaborations">Collaborations</Link>
            </li>
            <li className="font-bold mt-2">
              <Link to="/">Community</Link>
            </li>
            <li className="font-bold mt-2">
              <Link to="/about">About</Link>
            </li>
            { user ? 
            <li className="font-bold mt-2 mb-2">
              <Link to="/order">Order</Link>
            </li>

            : null

            }
            {/* <li className="font-bold text-lg">
              <a href="/shop">Connect</a>
            </li> */}
            <li className="font-bold text-lg">
              <Google />
            </li>
          </ul>
            {/* <ul className="space-y-2"> */}
              <li className="mb-2 mt-2 text-lg">
                <a href="/" onClick={handleShopAllDropdownClick}>
                  Shop All
                </a>
                {isShopAllOpen && (
                  <div className=" md:left-0 md:top-[10%] mt-0">
               <FaArrowDown size={12} />
                    <ul className="">
                      <li>
                        <a href="/shop"> New </a>
                      </li>
                      <li>
                        <a href="/shop">Eco </a>
                      </li>
                      <li>
                        <a href="/shop">Tops </a>
                      </li>
                      <li>
                        <a href="/shop">Dresses </a>
                      </li>
                      <li>
                        <a href="/shop">Corsets </a>
                      </li>
                      <li>
                        <a href="/shop">Pants </a>
                      </li>
                      <li>
                        <a href="/shop">Skirts </a>
                      </li>
                      <li>
                        <a href="/shop">Outerwear</a>
                      </li>
                      <li>
                        <a href="/shop">Accessories </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="text-lg">
                <a href="/" onClick={handleUnisexDropdownClick}>
                  Unisex
                </a>
                {isUnisexOpen && (
                  <div className=" md:left-0 md:top-[90%] mt-0">
                    <FaArrowDown size={12} />
                    <ul className="">
                      <li>
                        <a href="/shop"> New </a>
                      </li>
                      <li>
                        <a href="/shop">All </a>
                      </li>
                      <li>
                        <a href="/shop">Pants </a>
                      </li>
                      <li>
                        <a href="/shop">Outerwear </a>
                      </li>
                      <li>
                        <a href="/shop">Accessories </a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
          
          </div>
              </nav>
        ): null}
    </div>
  );
};

export default MobileNav;
