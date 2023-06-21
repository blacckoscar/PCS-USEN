import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import {FaPlus} from "react-icons/fa"
import card from "../Assets/srvc-icon1.png"
import card1 from "../Assets/srvc-icon2.png"
import card2 from "../Assets/srvc-icon3.png"
import card3 from "../Assets/srvc-icon4.png"
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='mt-64 text-center bg-[#f5fffc]'>
        <h1 className='font-bold text-6xl text-blue-950 mb-10
        '>Our Services</h1>
        {/* <div className='bg-[#f7f3f5] pt-7'> */}
            {/* <h1 className='font-bold text-6xl'>SMO And SEO Package Plans </h1> */}
            <h5 className='font-bold mt-6 text-4xl'>All plans include</h5>
        {/* </div> */}

        {/* Part */}
        <div className='xl:flex grid lg:grid-cols-2 justify-center relative gap-10 pt-20 pb-20 bg-[#f5fffc] p-10'>
                <h1 className='w-[80%] absolute hidden xl:inline bg-[#28af60] h-3 top-[45%]'> </h1>
                <Link to={'/'} className='bg-white text-center relative shadow-2xl rounded-lg grid justify-center w-[380px] h-96'>
                  <div>
                    <img src={card} alt="" className='mt-5'/>
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold text-center mt-7 text-white text-3xl'>Website Design</h2>
                  </div>
                </Link>
                <Link to={'/'} className='bg-white mt-0 text-center relative shadow-2xl rounded-lg h-96 grid justify-center w-[380px]'>
                  <div>
                    <img src={card1} alt="" className='mt-12'/>
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>Mobile App</h2>
                  </div>
                </Link>
                <Link to={'/'} className='bg-white text-center relative shadow-2xl lg:mt-0 mt-20 rounded-lg h-96 grid justify-center  w-[380px] '>
                  <div>
                    <img src={card2} alt="" className='mt-12' />
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>Digital Marketing</h2>
                  </div>
                </Link>
                <Link to={'/'} className='bg-white mt-0 h-96 text-center relative shadow-2xl rounded-lg grid justify-center w-[380px] '>
                  <div>
                    <img src={card3} alt="" className='mt-12'/>
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>SEO and SMO</h2>
                  </div>
                </Link>
              </div>
        <div className='xl:flex grid lg:grid-cols-2 justify-center relative gap-10 pt-20 pb-20 bg-[#f5fffc] p-10'>
                <h1 className='w-[80%] absolute hidden xl:inline bg-[#28af60] h-3 top-[45%]'> </h1>
                <Link to={'/'} className='bg-white text-center relative shadow-2xl rounded-lg grid justify-center w-[380px] h-96'>
                  <div>
                    <img src={card} alt="" className='mt-5'/>
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold text-center mt-7 text-white text-3xl'>Graphic Design</h2>
                  </div>
                </Link>
                <Link to={'/'} className='bg-white mt-0 text-center relative shadow-2xl rounded-lg h-96 grid justify-center w-[380px]'>
                  <div>
                    <img src={card1} alt="" className='mt-12'/>
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>Video Editing</h2>
                  </div>
                </Link>
                <Link to={'/'} className='bg-white text-center relative shadow-2xl lg:mt-0 mt-20 rounded-lg h-96 grid justify-center  w-[380px] '>
                  <div>
                    <img src={card2} alt="" className='mt-12' />
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>Lead Generation</h2>
                  </div>
                </Link>
                <Link to={'/'} className='bg-white mt-0 h-96 text-center relative shadow-2xl rounded-lg grid justify-center w-[380px] '>
                  <div>
                    <img src={card3} alt="" className='mt-12'/>
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>Logo Design</h2>
                  </div>
                </Link>
              </div>

        <div className='flex bg-[#f5fffc] pb-20 pt-28 justify-center gap-64'>
            <ul>
                <li className='flex mt-5'>
                    <FaArrowRight color='#00bb45' size={18}/>
                    <a href="/h" className='ml-7 text-[17px] '> Profile Optimization</a>
                </li>
                <li className='flex mt-5'>
                    <FaArrowRight color='#00bb45' size={18}/>
                    <a href="/h" className='ml-7 text-[17px] '> FB Timeline Status Posting</a>
                </li>
                <li className='flex mt-5'>
                    <FaArrowRight color='#00bb45' size={18}/>
                    <a href="/h" className='ml-7 text-[17px] '> Targeted Page Links</a>
                </li>
                <li className='flex mt-5'>
                    <FaArrowRight color='#00bb45' size={18}/>
                    <a href="/h" className='ml-7 text-[17px] '> Sponsored Ads</a>
                </li>
                <li className='flex mt-5'>
                    <FaArrowRight color='#00bb45' size={18}/>
                    <a href="/h" className='ml-7 text-[17px] '>Twitter Promotion</a>
                </li>
                <li className='flex mt-5'>
                    <FaArrowRight color='#00bb45' size={18}/>
                    <a href="/h" className='ml-7 text-[17px] '> Linkedin Promotion</a>
                </li>
                <li className='flex mt-5'>
                    <FaArrowRight color='#00bb45' size={18}/>
                    <a href="/h" className='ml-7 text-[17px] '>Linkedin Post Sharing</a>
                </li>
                <li className='flex mt-5'>
                    <FaArrowRight color='#00bb45' size={18}/>
                    <a href="/h" className='ml-7 text-[17px] '> Youtube Promotion</a>
                </li>
                <li className='flex mt-5'>
                    <FaArrowRight color='#00bb45' size={18}/>
                    <a href="/h" className='ml-7 text-[17px] '> Youtube Channel Promotion </a>
                </li>
            </ul>
            <ul>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '> Post Sharing in Group</a>
                </li>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '>Creative Cover Image and Upload</a>
                </li>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '>Facebook Insight Monitoring</a>
                </li>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '> Tweets Posting</a>
                </li>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '>Retweets</a>
                </li>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '>Instagram Promotion</a>
                </li>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '>Instagram Image Sharing</a>
                </li>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '>Image Tagging to Friends/Followers</a>
                </li>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '> Instagram Analytics Monitoring</a>
                </li>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '>Google Insight Monitoring</a>
                </li>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '>Traffic Monitoring Through Analytics</a>
                </li>
            </ul>
            <ul>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '> Call To Action Button </a>
                </li>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '> Insight Monitoring In all Social  Media</a>
                </li>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '>  Traffic Monitoring through Analytics </a>
                </li>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '> Background Image & Upload </a>
                </li>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '> #hashtag Trend Research </a>
                </li>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '> Company Page Creation </a>
                </li>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '> Company Page Creative Banner </a>
                </li>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '> Broad Creation </a>
                </li>
                <li className='flex mt-5'>
                <FaArrowRight color='#00bb45' size={18}/>
                <a href="/h"  className='ml-7 text-[17px] '> Customer Support </a>
                </li>
            </ul>
        </div>
        <div className='mt-20 mb-10'>
            <h1 className='font-bold text-5xl'>Pro Services</h1>
            <div className='flex justify-center gap-16 mt-16'>
            <div className='w-[400px] bg-gray-200'>
                <section className='bg-[#555555] text-white p-5'>
                <h1 className='font-bold text-6xl'>StartUp</h1>
                <h3 className='font-bold'>Our Best Solution</h3>
                </section>
                <ul className='mt-28 text-start p-8'>
                    <li className='flex gap-4'>
                        <FaPlus  size={20}/>
                        <a href="/j">20 Creative Images</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                    <FaPlus  size={20}/>
                        <a href="/j">20 Fb Timeline Status</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus  size={20}/>
                        <a href="/j"> 20 Targeted Twitter Followers Increase</a>
                    </li>
                </ul>
            </div>
            <div className='w-[400px] bg-gray-300'>
                <section className='bg-[#555555] text-white p-5'>
                <h1 className='font-bold text-6xl'>MEDIUM</h1>
                <h3 className='font-bold'>Our Best Solution</h3>
                </section>
                <ul className='p-8 text-start mt-28'>
                    <li className='flex gap-4'>
                        <FaPlus  size={20}/>
                        <a href="/j"> 30 Creative Images</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}/>
                        <a href="/j">30 Fb Timeline Status</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}  />
                        <a href="/j">  3 Groups Creation</a>
                    </li>
                </ul>
            </div>
            <div className='w-[400px] bg-gray-300'>
                <section className='bg-[#555555] text-white p-5'>
                <h1 className='font-bold text-6xl'>GROWTH</h1>
                <h3 className='font-bold'>Our Best Solution</h3>
                </section>
                <ul className='mt-28 p-8 text-start'>
                    <li className='flex gap-4'>
                        <FaPlus size={20}  />
                        <a href="/j"> 45 Creative Images</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}  />
                        <a href="/j">45 Fb Timeline Status</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}  />
                        <a href="/j">5 Groups Creation</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}  />
                        <a href="/j">5 Groups Creation</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}  />
                        <a href="/j">5 Groups Creation</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}  />
                        <a href="/j">5 Groups Creation</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Services