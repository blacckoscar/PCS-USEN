import React, { useEffect, useState } from 'react'
import '../App.css';
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { FaMailBulk, FaPhoneAlt, FaPlus, FaSitemap } from 'react-icons/fa';
import { Link } from 'react-router-dom';




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
    <div className="container" style={{
// backgroundColor: navbarColor,
// boxShadow: navbarShadow ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
}}>
      <a href="/" className="logo">PCS USEN</a>
      <nav className={!nav2 ? 'md:navbar lg:hidden fixed left-0 top-0 h-screen w-[60%] p-5 items-center  border-[1px] bg-[#f5fffc] ease-in-out duration-1000 drop-shadow-2xl':'fixed left-[-100%] navbar'} >
        <div className="md:hidden">
          <a href="/" className="logo">PCS USEN</a>
          <button className="" >
            <AiOutlineClose onClick={handleNav2} size={30} color='black' className='ml-96 lg:hidden z-50'/>
          </button>
        </div>
        <ul
         className="navbar-list z-50 "
         >
          <li >
            <Link to={"/"} className="navbar-link" style={{fontWeight: "bolder", fontSize: 20, }}>Home</Link>
          </li>
          <li>
            <Link to={"/about"} className="navbar-link" style={{fontWeight: "bolder", fontSize: 20, }}>About</Link>
          </li>
          <li>
            <Link to={"/services"} className="navbar-link"  style={{fontWeight: "bolder", fontSize: 20,}}>Services</Link>
          </li>
          <li>
            <Link to={"/"} className="navbar-link"  style={{fontWeight: "bolder", fontSize: 20,}}>Features</Link>
          </li>
          <li>
            <Link to={"/"}className="navbar-link"  style={{fontWeight: "bolder", fontSize: 20,}}>Blog</Link>
          </li>
          <li>
            <Link to={"/"}className="navbar-link"  style={{fontWeight: "bolder", fontSize: 20,}}>Career</Link>
          </li>
          <li>
            <Link to={"/contact"} className="navbar-link"  style={{fontWeight: "bolder", fontSize: 20,}}>Contact Us</Link>
          </li>
        </ul>
      </nav>
      <button className="">
      <AiOutlineMenu onClick={handleNav2} size={35} color='black' className='lg:hidden'/>
      </button>
      <button className="btn-outline" style={{zIndex: 100}} onClick={handleNav}>Lets talk</button>
      <div className="overlay" data-nav-toggler data-overlay />
    </div>
    <div className={!nav ? 'fixed right-0 top-0 w-[40%] p-5 border-green-500 border-[1px] bg-white ease-in-out duration-1000 drop-shadow-2xl':'hidden md:flex fixed ease-in-out duration-1000 right-[-100%]'}>
    <div>
    <form action="" className='ml-4'>
                    <div htmlFor="" className='border-[1px] p-1 border-green-500 mt-5'>
                    <input type="text" placeholder='Enter your full name' className='md:w-[600px] ml-2  h-20 outline-none' />
                    </div>
                    <div className='border-[1px] p-1 border-green-500 mt-5'>
                    <input type="text" placeholder='Email' className='md:w-[600px] h-20 border-[2px] outline-none '/>
                    </div>
                    <div className='border-[1px] p-1 border-green-500 mt-5'>
                    <input type="number" placeholder='Phone Number' className='md:w-[600px] h-20 outline-none'/>
                    </div>
                    <div className='border-[1px] p-1 border-green-500 mt-5'>
                    <input type="text" placeholder='Country' className='md:w-[600px] h-20 outline-none'/>
                    </div>
                    <div>
                    <select name="" id="" className='md:w-[620px]  bg-transparent w-[275px] border-green-500 border-[1px] h-24 mt-5 outline-none p-2'>
                        <option value="" className=''>--Looking for--</option>
                        <option value="">Web Design</option>
                        <option value="">Mobile app Design</option>
                        <option value="">SEO SMO and other</option>
                        <option value="">Web Hoisting</option>
                        <option value="">Other query</option>
                    </select>
                    </div>
                    {/*  */}
                    <div>
                    <select name="" id="" className='md:w-[620px] bg-transparent border-green-500 w-[275px] border-[1px] h-24 mt-5 outline-none p-2'>
                        <option value="">--From Where you Know about us--</option>
                        <option value="">Through Google or other search engine</option>
                        <option value="">Through Social Media</option>
                        <option value="">From a friend</option>
                        <option value="">Other</option>
                    </select>
                    </div>
                    <div className='border-[1px] p-1 border-green-500 mt-5'>
                    <input type="text" placeholder='Leave a comment here' className='md:w-[600px] h-20 outline-none'/>
                    </div>
                </form>
                <button className='bg-green-500 w-96 lg:w-[620px] text-3xl rounded-md text-white mt-20 h-24'>Submit</button>
          </div>
          <div className='text-start mt-5'>
                    <ul>
                        <li className='font-bold text-4xl text-green-500'>Get in Touch  to Europe</li>
                        <li className='font-bold mt-5 flex gap-8 mr-10'><FaSitemap  size={20}/> <a href='/about'>GP Block, Sector V, Bidhannagar, Kolkata, West <br /> Bengal 700091</a></li>
                        <li className='font-bold mt-2 flex gap-8 mr-10'><FaPhoneAlt size={20}  /> <a href='/about'>Phone : + 234 9018659144</a></li>
                        <li className='font-bold mt-2 flex gap-8 mr-10'><FaMailBulk size={20}  /> <a href='/about'>Email : asuquoekpenyon@gmail.Com</a></li>
                    </ul>
                    <ul className='mt-12'>
                        <li className='font-bold text-4xl text-green-500'>Get In Touch to Australia</li>
                        <li className='font-bold mt-5 flex gap-8 mr-10'><FaSitemap  size={20}/> <a href='/about'>GP Block, Sector V, Bidhannagar, Kolkata, West <br /> Bengal 700091</a></li>
                        <li className='font-bold mt-2 flex gap-8 mr-10'><FaPhoneAlt size={20}  /> <a href='/about'>Phone : + 234 9018659144</a></li>
                        <li className='font-bold mt-2 flex gap-8 mr-10'><FaMailBulk size={20}  /> <a href='/about'>Email : asuquoekpenyon@gmail.Com</a></li>
                    </ul>

                    <ul className='mt-12'>
                        <li className='font-bold text-4xl text-green-500'>Contact Number</li>
                        <li className='font-bold mt-5 flex gap-8 mr-10'><FaPhoneAlt size={20}  /> <a href='/about'>Legal Affairs : +91 9748677059</a></li>
                        <li className='font-bold mt-2 flex gap-8 mr-10'><FaPlus size={20}  /><a href='/about'>PHuman Resource : +91 9051955309</a></li>
                        <li className='font-bold mt-2 flex gap-8 mr-10'><FaPlus size={20}  /> <a href='/about'>USA Support : +1 415 800 3074</a></li>
                    </ul>
                </div>
    </div>
  </header>
  )
}

export default Nave