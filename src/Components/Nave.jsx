import React, { useEffect, useState } from 'react'
import '../App.css';
import {AiFillCloseCircle, AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import {FaMailBulk, FaPhoneAlt, FaPlus, FaSitemap } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Son from "../Assets/1.png";
import Google from './Google';
import { BiMenu, BiPlus } from 'react-icons/bi';
import { MdMenu } from 'react-icons/md';
import { CgMenuGridR } from "react-icons/cg";



const addEventOnElem = (elem, type, callback) => {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  };

const Nave = () => {

useEffect(() => {
  /**
   * navbar toggle
   */

  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");

  const toggleNavbar = () => {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  navTogglers.forEach((navToggler) => {
    addEventOnElem(navToggler, "click", toggleNavbar);
  });

  /**
   * close navbar when click on any navbar links
   */

  const navLinks = document.querySelectorAll("[data-nav-link]");

  const closeNavbar = () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  };

  navLinks.forEach((navLink) => {
    addEventOnElem(navLink, "click", closeNavbar);
  });

  /**
   * header active when scroll down
   */

  const header = document.querySelector("[data-header]");

  const headerActive = () => {
    window.scrollY > 100 ? header.classList.add("active") : header.classList.remove("active");
  };

  addEventOnElem(window, "scroll", headerActive);

  /**
   * accordion toggle
   */

  const accordionActions = document.querySelectorAll("[data-accordion-action]");

  const toggleAccordion = function () {
    this.classList.toggle("active");
  };

  accordionActions.forEach((accordionAction) => {
    addEventOnElem(accordionAction, "click", toggleAccordion);
  });
}, []);


  const [nav,setNav] = useState(true)

  const handleNav = () => {
      setNav(!nav)
  }   

  const [nav2,setNav2] = useState(true)

  const handleNav2 = () => {
      setNav2(!nav2)
      
  } 

  return (
    <header className="header" data-header>
    <div className="container z-50" style={{
// backgroundColor: navbarColor,
// boxShadow: navbarShadow ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
}}>
      {/* <a href="/" className="logo">PCS USEN</a> */}
      <Link to="/" className="logo">
            <img src={Son} alt='pcs' className='h-36 w-60' />
            {/* PCS USEN */}
          </Link>

      <nav className={!nav2 ? 'md:navbar lg:hidden fixed left-0 top-0 h-screen w-[60%] p-10 items-center  border-[1px] bg-[#f5fffc] ease-in-out duration-1000 drop-shadow-2xl':'fixed left-[-100%] navbar'} >
        {/* <div className="md:hidden">
          <a href="/" className="">PCS USEN</a>
          <button className="" >
            <AiOutlineClose onClick={handleNav2} size={30} color='black' className='ml-72 z-50'/>
          </button>
        </div> */}
        <div className='mb-10 justify-between items-center flex lg:hidden'>

        <Link to="/" className="logo">
            <img src={Son} alt='pcs' className='h-36 w-60' />
            {/* PCS USEN */}
          </Link>
          <AiFillCloseCircle size={27} color='#28af60'  onClick={handleNav2} className="lg:hidden"/>
        </div>

        <ul
         className="navbar-list z-50 font-semibold "
         >
          <li >
            <Link to={"/"} onClick={() => setNav2(true)} className="navbar-link flex items-center  " style={{fontWeight: "bolder", fontSize: 20, }}> 
            <BiPlus  size={20} />
            Home</Link>
          </li>
          <li>
            <Link to={"/about"}  onClick={() => setNav2(true)}  className="navbar-link flex items-center  " style={{fontWeight: "bolder", fontSize: 20, }}>
            <BiPlus  size={20} />
              About</Link>
          </li>
          <li>
            <Link to={"/services"} onClick={() => setNav2(true)}  className="navbar-link flex items-center  "  style={{fontWeight: "bolder", fontSize: 20,}}>
            <BiPlus  size={20} />
              Services
            </Link>
          </li>
          <li>
            <Link to={"/pricing"}  onClick={() => setNav2(true)} className="navbar-link flex items-center  "  style={{fontWeight: "bolder", fontSize: 20,}}>
            <BiPlus  size={20} />
              Pricing</Link>
          </li>
          <li>
            <Link to={"/clients"} onClick={() => setNav2(true)} className="navbar-link flex items-center  "  style={{fontWeight: "bolder", fontSize: 20,}}>
            <BiPlus  size={20} />
              Clients</Link>
          </li>
          {/* <li>
            <Link to={"/team"}className="navbar-link"  style={{fontWeight: "bolder", fontSize: 20,}}>Team</Link>
          </li> */}
          <li>
            <Link to={"/contact"}  onClick={() => setNav2(true)} className="navbar-link flex items-center  "  style={{fontWeight: "bolder", fontSize: 20,}}>
            <BiPlus  size={20} />

              Contact Us</Link> 
          </li>
        </ul>
      </nav>

      <div  className="ml-0 flex justify-center items-center ">
      <div  className="mr-3 lg:ml-0 drop-shadow-2xl shadow-2xl cursor-pointer">
      <CgMenuGridR onClick={handleNav2} size={35} color='#28af60' className='lg:hidden'/>
      </div>
    <Google title={'Sign In'}/> 
      </div>
      {/* <button className="btn-outline" style={{zIndex: 100}} onClick={handleNav}>Sign In</button> */}
      {/* <div className="overlay" data-nav-toggler data-overlay /> */}
    </div>
    {/* <div className={!nav ? 'fixed right-0 top-0 w-[40%] h-[100%] p-5 border-green-500 border-[1px] bg-white ease-in-out duration-1000 drop-shadow-2xl':'hidden md:flex fixed right-[-1000%]'}> */}
    
    {/* </div> */}
  </header>
  )
}

export default Nave