import React from 'react'
import svg from "../Assets/who-we-are-img.gif"
import ck from "../Assets/client-brand.png"
import ck1 from "../Assets/client-brand-02.png"
import ck2 from "../Assets/client-brand-03.png"
import ck3 from "../Assets/client-brand-04.png"
import ck4 from "../Assets/client-brand-05.png"
import ck5 from "../Assets/client-brand-06.png"
import ck6 from "../Assets/client-brand-07.png"
import ck7 from "../Assets/client-brand-08.png"
import md from "../Assets/Moishe-Final.jpg"
import comd from "../Assets/JayPic2.jpg"
import {FaPlusCircle} from "react-icons/fa"

const About = () => {
  return (
    <div className='md:mt-20 -mt-20 text-center  section hero" id="home" aria-label="hero'>
        <div className='mt-10'>
            <h1 className='font-bold text-7xl text-blue-900 mt-36'>About PCS USEN</h1>
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
        <div className='text-center mt-24 md:mt-72'>
            <div>
                <h1 className='font-bold text-6xl text-gray-900'>We Work With</h1>
                <p className='font-bold'>It was a long journey to come where we are now. Here is how we started.</p>
            </div>
            <div className='justify-center grid'>
           <div className='p-2 mt-20 xl:flex grid grid-cols-2  text-center gap-5 md:gap-16 ]'>
            <div className='border-[1px] border-b-0 border-gray-300 md:w-[300px] h-32 p-2 shadow-2xl'>
                <img src={ck} alt="" className='mt-[5%] md:ml-[15%] hover:filter-none ' 
                // style={{"filter": "saturate(0)","--hover-filter":"saturate(100)"}}
                 />
            </div>

            <div className='border-[1px] border-b-0 border-gray-300 md:w-[300px] h-32 p-2 shadow-2xl'>
                <img src={ck1} alt="" className='mt-[5%]  md:ml-[15%]'/>
            </div>

            <div className='border-[1px] border-b-0 border-gray-300 md:w-[300px] h-32 p-2 shadow-2xl'>
                <img src={ck2} alt="" className='mt-[5%] md:ml-[15%]'/>
            </div>

            <div className='border-[1px] border-b-0 border-gray-300 md:w-[300px] h-32 p-2 shadow-2xl'>
                <img src={ck3} alt="" className='mt-[5%] md:ml-[15%]'/>
            </div>
            </div>

            <div className='xl:flex grid grid-cols-2 gap-5 md:gap-16 mt-20'>
            <div className='border-[1px] border-b-0 border-gray-300 md:w-[300px] h-32 p-2 shadow-2xl'>
                <img src={ck4} alt="" className='mt-[5%] md:ml-[15%]'/>
            </div>

            <div className='border-[1px] border-b-0 border-gray-300 md:w-[300px] h-32 p-2 shadow-2xl'>
                <img src={ck5} alt="" className='mt-[5%] md:ml-[15%]'/>
            </div>

            <div className='border-[1px] border-b-0 border-gray-300 md:w-[300px] h-32 p-2 shadow-2xl'>
                <img src={ck6} alt="" className='mt-[5%] md:ml-[15%]'/>
            </div>

            <div className='border-[1px] border-b-0 border-gray-300 md:w-[300px] h-32 p-2 shadow-2xl'>
                <img src={ck7} alt="" className='mt-[5%] md:ml-[15%]'/>
            </div>
           </div>
           </div>
        </div>
        <div className='bg-[#f7f3f5] p-5 mt-36'>
            <p className='font-bold m-10 text-6xl'>Meet our Leadership</p>
            <div>
                <p>Our exceptional team of thought driven talent, thrive on communication,  & transparency <br className='md:inline hidden'/> you trust, to embody the principles that guide us:</p>
            </div>
            <div className='md:flex justify-center gap-20 mt-20'>
                <div className='md:w-[500px] mt-7 text-center shadow-2xl  border-[0.5px] p-2'>
                    <img src={md} alt="" className='mb-10 ml-6 md:ml-28'/>
                    <b className='text-4xl text-gray-900'>Jason Lipstein</b>
                    <p className='mt-10'>Since 2013, Jason Lipstein has provided consulting on advertising via social media, animated/non animated Explainer Videos, Lead Gen for LinkedIn, Sales Funnels & Web Design for various companies in Canada and the U.S. His coaching and consulting methods are skills most admired by his clientele.</p>
                </div>
                <div className='md:w-[500px] mt-20 text-center shadow-2xl p-2 '>
                    <img src={comd} alt="" className='mb-10 ml-6 md:ml-28'/>
                    <b className='text-4xl text-gray-900'>Maurice Cohen</b>
                    <p className='mt-10'>Head of Sales
For the last thirty five years, Maurice Cohen has worked extensively in numerous sales positions both in the B2B and B2C sectors.  As a career sales professional, he has developed a true expertise in the art of sales and all the applicable skills needed to succeed. A proven track record of servicing clients, negotiating contracts, and building solid business relationships</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About