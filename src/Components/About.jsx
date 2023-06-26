import React from 'react'
import svg from "../Assets/who-we-are-img.gif"
import {FaPlusCircle} from "react-icons/fa"

const About = () => {
  return (
    <div className='md:mt-20 -mt-20 text-center  section hero" id="home" aria-label="hero'>
        <div className='mt-10'>
            <h1 className='font-bold text-7xl text-blue-950 mt-0'>About PCS USEN</h1>
        </div>
        <div className='lg:flex justify-evenly p-2 mt-36 md:mt-64'>
            <div>
            <img src={svg} alt="" className='w-[700px]'/>
            </div>
            <div className='md:w-[600px] w-[370px] text-start mt-20 md:mt-8 p-1'>
                <h3 className='font-bold md:text-5xl text-4xl mt-3 text-blue-900'>WHO WE ARE</h3>
                <p className='md:text-7xl text-5xl font-bold mt-10 text-gray-900'>Intelligent & Creative</p>
                <p className='text-start mt-14'>
            We, Digital Webber are a new generation, innovative, dynamic and result oriented Web Development Company based in Kolkata and Sydney. Since our inception in 2016 we have been providing top notch and world class service specializing in web design and development, graphic design and SEO services.
                </p>
                <p className='text-start mt-9'>Equipped with in depth knowledge of the latest and evolving technologies in design and development and combined with innovative, out of the box and unorthodox thinking, which brings out the optimal solution for the hardest of complexities.</p>
                <div className='mt-16'>
                <ul className='flex'>
                    <FaPlusCircle  size={20}/>
                    <li className='font-bold ml-6'>Analytics Tracking Code Installation & Dealing with Duplicate Issues</li>
                </ul>
                <ul className='flex mt-5'>
                <FaPlusCircle  size={20}/>
                    <li className='font-bold ml-6'>Website Modification Consulting & Structure Data Implementation</li>
                </ul>
                <ul className='flex mt-5'>
                <FaPlusCircle  size={20}/>
                    <li className='font-bold ml-6'>Structure Data Implementation & Monthly SEO Reports</li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About