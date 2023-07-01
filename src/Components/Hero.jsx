import React, { useEffect } from 'react'
import '../App.css';
import {AiFillPlayCircle} from "react-icons/ai"
import { motion } from "framer-motion";
import card from "../Assets/srvc-icon1.png"
import card1 from "../Assets/srvc-icon2.png"
import card2 from "../Assets/srvc-icon3.png"
import card3 from "../Assets/srvc-icon4.png"
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

const Hero = () => {
  const transition = {
    duration: 0.8,
    type: "spring",
  };

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

  return (
    <header>
    <div>
          <div>
            <section>
              {/* 
          - *HERO
        */}
              <div className="section hero" id="home" aria-label="hero">
                <div className="container">
                  <div className="hero-content">
                    <p className="hero-subtitle has-before">Wellcome to Our Agency</p>
                    <h1 className="h1 hero-title">Your Brand Is Our Priority</h1>
                    <p className="hero-text">
                    We are a full-service digital marketing firm that provides you with the ability to customize PPC, Social Media Marketing, lead generation, inbound marketing, email campaigns, SEO-based responsive websites, marketing automation solutions, and more.
</p>
                    <div className="btn-group">
                      <a href="/services" className="btn btn-primary">Get Started</a>
                      <Link to={'/services'} className="flex-btn">
                        <div className="btn-icon">
                          {/* <ion-icon name="play" aria-hidden="true" /> */}
                          <AiFillPlayCircle  />
                        </div>
                        <span className="span">How it works</span>
                      </Link>
                    </div>
                  </div>
                  <section className="hero-banner has-before img-holder" style={{width: -650, height: -650}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/jobs-hunt-5c088.appspot.com/o/hero-banner.png?alt=media&token=7df79bd6-4afd-4794-9821-a44c888cf2b9" width={650} height={650} alt="hero banner" className="img-cover" />
                  </section>
                </div>
              </div>

              {/* Services */}
                 {/* my part */}
                 <div className='xl:flex grid lg:grid-cols-2 justify-center relative gap-10 pt-20 pb-20 bg-[#f5fffc] p-10'>
                <h1 className='w-[80%] absolute hidden xl:inline bg-[#28af60] h-3 top-[45%]'> </h1>
                <Link to={'/services'} className='bg-white text-center relative shadow-2xl rounded-lg grid justify-center w-[380px] h-96'>
                  <div>
                    <img src={card} alt="" className='mt-5'/>
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold text-center mt-7 text-white text-3xl'>Website Design</h2>
                  </div>
                </Link>
                <Link to={'/services'} className='bg-white md:mt-72 text-center relative shadow-2xl rounded-lg h-96 grid justify-center w-[380px]'>
                  <div>
                    <img src={card1} alt="" className='mt-12'/>
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>Mobile App</h2>
                  </div>
                </Link>
                <Link to={'/services'} className='bg-white text-center relative shadow-2xl lg:mt-0 mt-20 rounded-lg h-96 grid justify-center  w-[380px] '>
                  <div>
                    <img src={card2} alt="" className='mt-12' />
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>Digital Marketing</h2>
                  </div>
                </Link>
                <Link to={'/services'} className='bg-white md:mt-72 h-96 text-center relative shadow-2xl rounded-lg grid justify-center w-[380px] '>
                  <div>
                    <img src={card3} alt="" className='mt-12'/>
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>SEO and SMO</h2>
                  </div>
                </Link>
              </div>


              {/* my part */}
              {/* 
          - *ABOUT
        */}
              <section className="section about" id="about" aria-label="about">
                <div className="container">
                  <figure className="about-banner">
                    <img src="https://firebasestorage.googleapis.com/v0/b/jobs-hunt-5c088.appspot.com/o/about-banner.png?alt=media&token=70743d0b-fe52-4e0c-b758-c38df6613294" width={802} height={654} loading="lazy" alt="about banner" className="w-100" />
                  </figure>
                  <div className="about-content">
                    <h2 className="h2-sm section-title">Experience smart digital marketing</h2>
                    <p className="section-text">
                    Makers Digital Pro is a leading company that specializes in experience smart digital marketing. By harnessing data-driven insights, advanced automation, and personalized strategies, they empower businesses to create engaging, tailored experiences that drive customer satisfaction, brand loyalty, and significant business growth. 
                    </p>
                    <ul className="about-list">
                      <li className="has-before">
                      Data-driven Insights: Makers Digital Pro provides comprehensive data analysis and insights
                      </li>
                      <li className="has-before">
                      Automation Solutions: The company offers advanced automation tools and strategies to streamline marketing processes
                      </li>
                      <li className="has-before">
                      Personalized Marketing Strategies
                      </li>
                    </ul>
                    <div className="btn-group">
                      <a href="*" className="btn btn-primary">Know More</a>
                      <button className="flex-btn">
                        <div className="btn-icon">
                          <ion-icon name="medal-outline" aria-hidden="true" />
                        </div>
                        <span className="span">10+ Years Experience</span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              {/* 
          - *SERVICE
        */}
              <section className="section service" id="services" aria-label="service">
                <div className="container">
                  <p className="section-subtitle text-center">-What We Offer-</p>
                  <h2 className="h2 section-title text-center">Our Creative Services</h2>
                  <p className="section-text text-center">
                  Makers Digital Pro's creative services enchant with imaginative visuals, captivating storytelling, and immersive experiences, crafting unforgettable brand moments that leave a sweet lasting impression.
                  </p>
                  <ul className="grid-list">
                    <li>
                      <div className="service-card has-after">
                        <figure className="card-icon">
                          <img src="https://firebasestorage.googleapis.com/v0/b/jobs-hunt-5c088.appspot.com/o/service-1.png?alt=media&token=b46231a9-b622-4c7a-9654-97cb434b962d" width={140} height={140} loading="lazy" alt="UI/UX Creative Design" className="img" />
                        </figure>
                        <div className="card-content">
                          <h3 className="h3 card-title">UI/UX Creative Design</h3>
                          <p className="card-text">
                          Makers Digital Pro's UI/UX unit weaves intuitive interfaces, stunning visuals, and seamless interactions into a delightful digital tapestry, elevating user experiences to new heights of satisfaction and delight.
                          </p>
                          <a href="*" className="btn-link">
                            <span className="span">Read More</span>
                            <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="service-card has-after">
                        <figure className="card-icon">
                          <img src="https://firebasestorage.googleapis.com/v0/b/jobs-hunt-5c088.appspot.com/o/service-2.png?alt=media&token=7a0f4806-8d15-4a10-9cf0-d3b753cb0d27" width={140} height={140} loading="lazy" alt="App Development" className="img" />
                        </figure>
                        <div className="card-content">
                          <h3 className="h3 card-title">App Development</h3>
                          <p className="card-text">
                          Makers Digital Pro's app development unit creates enchanting mobile experiences, blending flawless functionality, stunning design, and intuitive interfaces that bring ideas to life, captivating users with every tap.
                          </p>
                          <a href="*" className="btn-link">
                            <span className="span">Read More</span>
                            <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="service-card has-after">
                        <figure className="card-icon">
                          <img src="https://firebasestorage.googleapis.com/v0/b/jobs-hunt-5c088.appspot.com/o/service-3.png?alt=media&token=667ace73-b609-4a42-bd6a-68ad5b023c2c" width={140} height={140} loading="lazy" alt="Professional Content Writer" className="img" />
                        </figure>
                        <div className="card-content">
                          <h3 className="h3 card-title">Professional Content Writer</h3>
                          <p className="card-text">
                          Makers Digital Pro's Professional Content Writer unit weaves words into captivating narratives, crafting compelling stories that engage, inform, and inspire, leaving a lasting impression on readers with every written masterpiece.
                          </p>
                          <a href="*" className="btn-link">
                            <span className="span">Read More</span>
                            <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="service-card has-after">
                        <figure className="card-icon">
                          <img src="https://firebasestorage.googleapis.com/v0/b/jobs-hunt-5c088.appspot.com/o/service-4.png?alt=media&token=b9f12282-7423-4a76-96a3-0e51c302fd36" width={140} height={140} loading="lazy" alt="Graphic Design" className="img" />
                        </figure>
                        <div className="card-content">
                          <h3 className="h3 card-title">Graphic Design</h3>
                          <p className="card-text">
                          Makers Digital Pro's Graphics Design unit crafts visual wonders, blending creativity and precision to produce stunning artwork that elevates brands and leaves a lasting visual impact on audiences.
                          </p>
                          <a href="*" className="btn-link">
                            <span className="span">Read More</span>
                            <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <a href="*" className="btn btn-primary">Get Started</a>
                </div>
              </section>
              {/* 
          - *FEATURES
        */}
              <section className="section features" id="features" aria-label="features">
                <div className="container">
                  <p className="section-subtitle text-center">-Why Choose Us-</p>
                  <h2 className="h2 section-title text-center">Reasons to Choose Us</h2>
                  <p className="section-text text-center">
                    Get the most of reduction in your team’s operating costs for the whole product which creates amazing UI/UX
                    experiences.
                  </p>
                  <ul className="grid-list">
                    <li>
                      <div className="features-card">
                        <data className="card-number" value={1}>01</data>
                        <h3 className="h3 card-title">Free Icon Plugin</h3>
                        <p className="card-text">
                        Versatile, customizable, high-quality icons. Empowering users.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="features-card">
                        <data className="card-number" value={2}>02</data>
                        <h3 className="h3 card-title">Free 6 Month Support</h3>
                        <p className="card-text">Valuable 6-month support for client success.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="features-card">
                        <data className="card-number" value={3}>03</data>
                        <h3 className="h3 card-title">Customer Strategy</h3>
                        <p className="card-text">
                        Tailored customer strategies for exceptional results.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="features-card">
                        <data className="card-number" value={4}>04</data>
                        <h3 className="h3 card-title">Best Premimum Image</h3>
                        <p className="card-text">
                          Best premium images for captivating visuals.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="features-card">
                        <data className="card-number" value={5}>05</data>
                        <h3 className="h3 card-title">Most Advanced Features</h3>
                        <p className="card-text">
                          Nullam ullamcorper condimentum urna eu accumsan.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="features-card">
                        <data className="card-number" value={6}>06</data>
                        <h3 className="h3 card-title">Very Reasonable Price</h3>
                        <p className="card-text">
                        Cutting-edge features for unrivaled performance..
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
              {/* 
          - *FAQ
        */}
              <section className="section faq" aria-label="frequently asked questions">
                <div className="container">
                  <div className="title-wrapper">
                    <h2 className="h2 section-title">Discover Frequently Asked Questions?</h2>
                    <a href="" className="btn btn-primary">Work Together</a>
                  </div>
                  <ul className="grid-list">
                    <li>
                      <div className="faq-card">
                        <button className="card-action" data-accordion-action>
                          <h3 className="h3 card-title">
                            01. Curious about how to build your own UX strategy? Here are five simple steps.
                          </h3>
                          <div className="action-icon">
                            <ion-icon name="add-outline" aria-hidden="true" className="open" />
                            <ion-icon name="remove-outline" aria-hidden="true" className="close" />
                          </div>
                        </button>
                        <div className="card-content">
                          <p>
                          Makers Digital Pro's creative services enchant with imaginative visuals, captivating storytelling, and immersive experiences, crafting unforgettable brand moments that leave a sweet lasting impression.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="faq-card">
                        <button className="card-action" data-accordion-action>
                          <h3 className="h3 card-title">
                            02. Where Could a Career in UX Take You? Agency vs. In-House vs. Freelance?
                          </h3>
                          <div className="action-icon">
                            <ion-icon name="add-outline" aria-hidden="true" className="open" />
                            <ion-icon name="remove-outline" aria-hidden="true" className="close" />
                          </div>
                        </button>
                        <div className="card-content">
                          <p>
                          Makers Digital Pro's creative services enchant with imaginative visuals, captivating storytelling, and immersive experiences, crafting unforgettable brand moments that leave a sweet lasting impression.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="faq-card">
                        <button className="card-action" data-accordion-action>
                          <h3 className="h3 card-title">
                            03. What Is a Problem Statement in UX? (And How To Write One?
                          </h3>
                          <div className="action-icon">
                            <ion-icon name="add-outline" aria-hidden="true" className="open" />
                            <ion-icon name="remove-outline" aria-hidden="true" className="close" />
                          </div>
                        </button>
                        <div className="card-content">
                          <p>
                          Makers Digital Pro's creative services enchant with imaginative visuals, captivating storytelling, and immersive experiences, crafting unforgettable brand moments that leave a sweet lasting impression.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="faq-card">
                        <button className="card-action" data-accordion-action>
                          <h3 className="h3 card-title">
                            04. There are several techniques UX designers employ to arrive at a succinct?
                          </h3>
                          <div className="action-icon">
                            <ion-icon name="add-outline" aria-hidden="true" className="open" />
                            <ion-icon name="remove-outline" aria-hidden="true" className="close" />
                          </div>
                        </button>
                        <div className="card-content">
                          <p>
                          Makers Digital Pro's creative services enchant with imaginative visuals, captivating storytelling, and immersive experiences, crafting unforgettable brand moments that leave a sweet lasting impression.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="faq-card">
                        <button className="card-action" data-accordion-action>
                          <h3 className="h3 card-title">
                            05. What are the obstacles users are facing? What are they trying to do?
                          </h3>
                          <div className="action-icon">
                            <ion-icon name="add-outline" aria-hidden="true" className="open" />
                            <ion-icon name="remove-outline" aria-hidden="true" className="close" />
                          </div>
                        </button>
                        <div className="card-content">
                          <p>
                          Makers Digital Pro's creative services enchant with imaginative visuals, captivating storytelling, and immersive experiences, crafting unforgettable brand moments that leave a sweet lasting impression.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </section>
          </div>
          {/* 
      - *FOOTER
    */}
         
      </div>
    
      </header>
  )
}

export default Hero