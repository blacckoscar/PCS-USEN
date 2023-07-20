import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Google from "../Components/Google";
import { Link } from "react-router-dom";
import firebase from "../firebaseconfig";

const Nav = ({ }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isIconClosed, setIsIconClosed] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isShopAllOpen, setIsShopAllOpen] = useState(false);
  const [isUnisexOpen, setIsUnisexOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsIconClosed(!isIconClosed);
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

  const [color, setColor] = useState(false)
  const changeColor =() => {
      if(window.scrollY >= 100) {
          setColor(true)
      } else {
          setColor(false)
      }
  }

  window.addEventListener('scroll', changeColor)

  const style = {
    background: isScrolled ? "#000" : "#fff",
  };

  return (
    <div
      className={
        color
          ? "hidden md:flex fixed z-50 bg-[rgba(0,0,0, .85)] opacity-90 w-[100%] p-10 "
          : "hidden md:flex fixed z-50 p-10 w-[99%]"
      }
    >
      <div className="md:hidden absolute left-3">
        <button className=" hover:text-gray-400 focus:outline-none ">
          <h1 className="text-white text-2xl font-bold">
            <Link to="/">NEXTBERRIES™</Link>
          </h1>
        </button>
      </div>
      <nav
        className={`fixed top-5 md:top-0 md:left-0 md:right-0 left-72 z-50 flex justify-between items-center ${
          color ? "md:bg-[#000000d9]" : "bg-transparent"
        } text-white py-4 px-6`}
      >
        <div className="flex items-center"></div>
        <div className="absolute">
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
        {isOpen && (
          <div 
          className="absolute md:left-5 md:top-[110%] mt-3"
          // className=" flex-col flex"
          >
            {/* <ul className="space-y-2"> */}
              <li className="mb-5">
                <a onClick={handleShopAllDropdownClick}>
                  Shop All
                </a>
                {isShopAllOpen && (
                  <div className="absolute md:left-0 md:top-[10%] mt-4">
                    <ul className="flex  space-x-4">
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
              <li>
                <a href="/" onClick={handleUnisexDropdownClick}>
                  Unisex
                </a>
                {isUnisexOpen && (
                  <div className="absolute md:left-0 md:top-[90%] mt-3">
                    <ul className="flex space-x-4">
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
              {/* <li className="font-bold ">
                <a href="/">Home</a>
              </li>
              <li className="font-bold ">
                <a href="/collaborations">Collaborations</a>
              </li>
              <li className="font-bold ">
                <a href="/">Community</a>
              </li>
              <li className="font-bold ">
                <a href="/about">About</a>
              </li>
              <li className="font-bold ">
                <a href="/shop">Connect</a>
              </li> */}
            {/* </ul> */}
          </div>
        )}
        <div className="md:flex hidden  items-center">
          <ul className="flex space-x-20">
            <li className="font-bold text-1xl">
              <Link to="/">Home</Link>
            </li>
            <li className="font-bold text-lg">
              <Link to="/collaborations">Collaborations</Link>
            </li>
            <li className="font-bold text-lg">
              <Link to="/">Community</Link>
            </li>
            <li className="font-bold text-lg">
              <Link to="/about">About</Link>
            </li>
            {

              user ?

            <li className="font-bold text-lg">
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
        </div>
      </nav>
    </div>
  );
};

export default Nav;
