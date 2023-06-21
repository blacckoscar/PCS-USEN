import React from 'react'
import bg from "../Assets/conts.jpg";
import {FaPhoneAlt} from "react-icons/fa"
import {FaMailBulk} from "react-icons/fa"
import {FaSitemap } from "react-icons/fa"
import {FaPlus } from "react-icons/fa"

const Contact = () => {
  return (
    <div className='text-center mt-20  p-10 mb-20 '>
        <div className=' mt-20 xl:mt-44'>
            <h1 className='font-bold text-blue-900 text-7xl'>Contact us</h1>
        </div>
        <div className='mt-32 lg:flex bg-no-repeat bg-cover bg-center md:bg-fixed 
        bg-[url("https://firebasestorage.googleapis.com/v0/b/jobs-hunt-5c088.appspot.com/o/careerform1.jpg?alt=media&token=10b9459d-0992-433f-afdf-32cfc219349f")]
        '>
            <img src={bg} alt="" className='lg:w-[400px] hidden lg:inline lg:h-[300px] xl:mb-0 mb-24 -mt-28 shadow-2xl drop-shadow-xl ml-32'/>
            <div className='border-[1px] ml-10 border-blue-900 p-2'>
            <div className='2xl:flex gap-10 p-2'>
                <form action="" className='ml-4'>
                    <div htmlFor="" className='border-[1px] p-1 border-blue-900 mt-5'>
                    <input type="text" placeholder='Enter your full name' className='md:w-[600px] ml-2  h-20 outline-none' />
                    </div>
                    <div className='border-[1px] p-1 border-blue-900 mt-5'>
                    <input type="text" placeholder='Email' className='md:w-[600px] h-20 border-[2px] outline-none '/>
                    </div>
                    <div className='border-[1px] p-1 border-blue-900 mt-5'>
                    <input type="number" placeholder='Phone Number' className='md:w-[600px] h-20 outline-none'/>
                    </div>
                    <div className='border-[1px] p-1 border-blue-900 mt-5'>
                    <input type="text" placeholder='Country' className='md:w-[600px] h-20 outline-none'/>
                    </div>
                    <div>
                    <select name="" id="" className='md:w-[620px]  bg-transparent w-[275px] border-blue-900 border-[1px] h-24 mt-5 outline-none p-2'>
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
                    <select name="" id="" className='md:w-[620px] bg-transparent border-blue-900 w-[275px] border-[1px] h-24 mt-5 outline-none p-2'>
                        <option value="">--From Where you Know about us--</option>
                        <option value="">Through Google or other search engine</option>
                        <option value="">Through Social Media</option>
                        <option value="">From a friend</option>
                        <option value="">Other</option>
                    </select>
                    </div>
                    <div className='border-[1px] p-1 border-blue-900 mt-5'>
                    <input type="text" placeholder='Leave a comment here' className='md:w-[600px] h-20 outline-none'/>
                    </div>
                </form>
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
                <button className='bg-blue-950 w-96 lg:w-[620px] text-3xl rounded-md ml-10 text-white mt-20 h-24'>Submitted</button>
            </div>
        </div>
    </div>
  )
}

export default Contact