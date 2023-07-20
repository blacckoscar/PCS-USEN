import React from 'react'
import svg from "../Assets/who-we-are-img.gif"
import {FaPlusCircle} from "react-icons/fa"

const About = () => {
  return (
    <div className='md:mt-20 -mt-20 text-center  section hero" id="home" aria-label="hero'>
        <div className='mt-10'>
            <h1 className='font-bold text-7xl text-blue-950 mt-0'>About Makers Digital Pro</h1>
        </div>
        <div className='lg:flex justify-evenly p-2 mt-36 md:mt-64'>
            <div>
            <img src={svg} alt="" className='w-[700px]'/>
            </div>
            <div className='md:w-[600px] w-[370px] text-start mt-20 md:mt-8 p-1'>
                <h3 className='font-bold md:text-5xl text-4xl mt-3 text-blue-900'>WHO WE ARE</h3>
                <p className='md:text-7xl text-5xl font-bold mt-10 text-gray-900'>Intelligent & Creative</p>
                <p className='text-start mt-14'>
                We Maker's Digital Pro, an innovative and dynamic Web Development Company in the US. With our in-depth knowledge of cutting-edge technologies and out-of-the-box thinking, we provide optimal solutions for even the most complex challenges. With over 10 years of experience, we have become a trusted name, collaborating with renowned brands like Drupal, Magento, WordPress, and more. Partner with us for exceptional marketing services that guarantee your success in the digital world.
                </p>
                <p className='text-start mt-9'> <h2 className='text-6xl'>Our Vision</h2> To lead the digital marketing industry. We strive to stay ahead by continuously adapting to the ever-evolving landscape, embracing the latest trends, strategies, and technologies. By doing so, we empower our clients with cutting-edge solutions that fuel their growth and deliver exceptional results. Join us on this transformative journey and experience the power of staying ahead in the digital realm.</p>
                <p className='text-start mt-9'> <h2 className='text-6xl'>Our Mission</h2> To offer our clients the best possible marketing services. We believe in going beyond expectations, striving for excellence in everything we do. We understand that each client is unique, and we tailor our strategies and campaigns to their specific goals and requirements. By leveraging our extensive knowledge and experience, we help our clients achieve their business objectives and unlock their true potential.</p>
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