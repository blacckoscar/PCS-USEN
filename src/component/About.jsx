import React, { useState, useEffect } from "react";
// import Nav from "./nav";
import Mission from "./Mission";
import HomeButton from "./BackHome";
import Image3 from "../Assets/cola2.jpeg";
import Nav from "./Nav";
import MobileNav from "../Components/MobileNav";
import { Link } from "react-router-dom";

const AboutUs = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [isIconClosed, setIsIconClosed] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  //   setIsIconClosed(!isIconClosed);
  // };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0 && !hasScrolled) {
        setHasScrolled(true);
      } else if (scrollTop === 0 && hasScrolled) {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <>
      {/* <Nav isOpen={isOpen} toggleDropdown={toggleDropdown} hasScrolled={hasScrolled} /> */}
      <div
        className={`bg-gradient-to-r from-gray-800 via-white to-gray-800 justify-center items-center pt-20 md:pt-0`}
        >
        <Mission />
        <div className="">
          <h1 className="md:text-3xl text-lg px-8 md:px-32 mt-[10%]">
            Nextberries™ [NXB]: shaping the future of fashion, consumer
            experience and connectivity for the next generation. Providing
            seamless and immersive digital experience, innovations and
            solutions, NXB is converging visionary designs with cutting-edge
            technology to build a more inclusive, sustainable world. Through
            Personalization and Virtual try-ons NXB is disrupting the status-quo
            to create a more transformed, empowered consumer.
          </h1>
          <h1 className="md:ml-96 md:mt-32 mt-10 text-4xl ml-10 font-bold">
            Founders
          </h1>
          <img
            className="md:w-fit md:h-max mx-auto md:mt-44 mt-20 w-80 h-fit"
            src={Image3}
            alt="View All"
          />
          <div className="flex flex-col items-start max-w-7xl mx-auto px-10 md:mt-40 mt-10">
            <h1 className="md:text-3xl text-lg mb-8">
              Motivated to become a leading force for innovation and
              experimentation, co-founders and creative directors - Adaku
              Emenike and Oluchi Nwachukwu re-envisioned what they believed
              could shape the future of fashion.
            </h1>

            <h1 className="md:text-3xl text-lg mb-8">
            2020  [Year of Rebirth]
            </h1>


            <h1 className="md:text-3xl  text-lg ">
              In 2020, the brand went into temporary hibernation due to the
              pandemic and it was in midst of the chaotic year that its true
              soul and purpose was discovered - reflecting their individual
              style, personality, and character.
            </h1>

            <p className="self-center m-10 text-gray-600">
            O
            <br/>
            O
            <br/>
            O

            </p>


            <h1 className="md:text-3xl  text-lg mb-0">
              Nextberries explores the endless possibilities of fashion by
              challenging its definition and breaking away from the orthodox
              notion fashion presently holds.
            </h1>

            <p className="self-center m-10 text-gray-600">
            O
            <br/>
            O
            <br/>
            O

            </p>


            <h1 className="md:text-3xl text-lg mb-8">
            2022 [Year of Debut] 
            </h1>

            <h1 className="md:text-3xl  text-lg mb-0">
            In February 2022, Nextberries™ showcases its Genesis Collection,
             where its physical designs were displayed at the Lagos International 
              Polo Tournament. 
            </h1>

            <p className="self-center m-10 text-gray-600">
            O
            <br/>
            O
            <br/>
            O

            </p>
            

            <h1 className="md:text-3xl  text-lg mb-8">
            In September 2022, Nextberries™ exhibits at Africa’s Biggest Event for
             the Sourcing & Fashion Industry - ASFW  Addis Ababa, Ethiopia. 
            </h1>
            <h1 className="md:text-3xl  text-lg mb-0">
            Nextberries explores the endless possibilities of fashion by 
            challenging its definition and breaking away from the orthodox 
            notion fashion presently holds.

            </h1>

            <p className="self-center m-10 text-gray-600">
            O
            <br/>
            O
            <br/>
            O

            </p>

            <h1 className="md:text-3xl text-lg mb-8">
            2023 [Year of Phygital Fashion ] 
            </h1>

            <h1 className="md:text-3xl  text-lg mb-0">
            In January 2023, Nextberries™ showcases its Fall Winter 23/24 Collection, 
            where its physical designs were displayed alongside a digital 
            installation which was accessible for virtual experience using Augmented reality. 

            </h1>

            <p className="self-center m-10 text-gray-600">
            O
            <br/>
            O
            <br/>
            O

            </p>

            <h1 className="md:text-3xl  text-lg mb-8">
              The brand made its Paris debut in January 2023, showcasing its
              Fall Winter 23/24 Collection, where its physical designs were
              displayed alongside a digital installation which was accessible
              for virtual experience using Augmented Reality.
            </h1>
          </div>
        </div>
        <div className=" md:mt-[10%]  mt-[10%] bg-gradient-to-r from-gray-800 via-white to-gray-800 w-full justify-center items-center">
          <h1 className=" text-center text-xl md:font-bold pb-6 mt-2">
            &copy; Nextberries 2023. All rights reserved <Link className='hover:text-blue-500' to={'/policy'}>Privacy Policy</Link>.
          </h1>
        </div>
      </div>
      {/* <HomeButton /> */}
      <Nav />
      <MobileNav />
    </>
  );
};

export default AboutUs;
