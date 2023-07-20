import React, { useState, useEffect } from "react";
import Explore from "./Explore";
import ShopNow from "./Shopnow";
import Welcome from "./Welcome";
import Nav from "./nav";
import MobileNav from "../Components/MobileNav";


const Home = () => {
  const slides = [<Welcome />, <Explore />, <ShopNow />];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpin, setIsOpin] = useState(false);
  const [isNestedOpen, setIsNestedOpen] = useState(false);
  const [isIconClosed, setIsIconClosed] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsIconClosed(!isIconClosed);
  };

  const toggleNestedDropdown = () => {
    setIsNestedOpen(!isNestedOpen);
  };

  const toggleNestedDropdown2 = () => {
    setIsOpin(!isOpin);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 5 seconds

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <>
      <div className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide}
          </div>
        ))}
      </div>

      <MobileNav />
      <Nav isOpen={isOpen} toggleDropdown={toggleDropdown} />
    </>
  );
};

export default Home;
