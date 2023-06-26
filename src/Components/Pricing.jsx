import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import {FaPlus} from "react-icons/fa"

export default function Pricing() {
  return (
    <div className='mt-44 text-center'>
         <h1 className='font-bold text-6xl text-blue-950 mb-10
        '>Our Pricing</h1>
        {/* <div className='bg-[#f7f3f5] pt-7'> */}
            {/* <h1 className='font-bold text-6xl'>SMO And SEO Package Plans </h1> */}
            <h5 className='font-bold mt-6 text-4xl'>All plans include</h5>
        {/* </div> */}


        <div className='mt-20 mb-10'>
            {/* <h1 className='font-bold text-5xl'>Pro Services</h1> */}
            <div className='flex justify-center gap-16 mt-16'>
            <div className='w-[400px] cursor-pointer bg-gray-100'>
                <section className='bg-[#28af60] text-white p-5'>
                <h1 className='font-bold text-6xl'>Marketing</h1>
                <h3 className='font-bold'>$250 USD/Monthly</h3>
                </section>
                <ul className='mt-28 text-start p-8'>
                    <li className='flex gap-4'>
                        <FaPlus  size={20}/>
                        <a href="/j">Facebook</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                    <FaPlus  size={20}/>
                        <a href="/j">Instagram</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus  size={20}/>
                        <a href="/j"> Youtube  (On Request)</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus  size={20}/>
                        <a href="/j"> TikTok  (On Request)</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus  size={20}/>
                        <a href="/j"> Twitter  (On Request)</a>
                    </li>
                </ul>
            </div>
            <div className='w-[400px] cursor-pointer bg-gray-100'>
                <section className='bg-[#28af60] text-white p-5'>
                <h1 className='font-bold text-6xl'>Basic Website</h1>
                <h3 className='font-bold'>$450 USD</h3>
                </section>
                <ul className='p-8 text-start mt-28'>
                    <li className='flex gap-4'>
                        <FaPlus  size={20}/>
                        <a href="/j"> 4 - 5 Pages</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}/>
                        <a href="/j">Standard Design</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}  />
                        <a href="/j">  Professional Content</a>
                    </li>
                </ul>
            </div>
            <div className='w-[400px] cursor-pointer bg-gray-100'>
                <section className='bg-[#28af60] text-white p-5'>
                <h1 className='font-bold text-6xl'>E Commerce (Basic)</h1>
                <h3 className='font-bold'>$700 - 1000 USD</h3>
                </section>
                <ul className='mt-28 p-8 text-start'>
                <li className='flex gap-4'>
                        <FaPlus  size={20}/>
                        <a href="/j"> 4 - 5 Pages</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}/>
                        <a href="/j">Standard Design</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}  />
                        <a href="/j">  Professional Content</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}  />
                        <a href="/j"> Customized E Commerce System</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}  />
                        <a href="/j">Basic Admin Dashboard</a>
                    </li>
                    {/* <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}  />
                        <a href="/j">5 Groups Creation</a>
                    </li> */}
                </ul>
            </div>
        </div>
            <div className='flex justify-center gap-16 mt-16'>
            <div className='w-[400px] cursor-pointer bg-gray-100'>
                <section className='bg-[#28af60] text-white p-5'>
                <h1 className='font-bold text-6xl'>E Commerce (Advance)</h1>
                <h3 className='font-bold'>$1500 - 1800 USD</h3>
                </section>
                <ul className='mt-28 text-start p-8'>
                <li className='flex gap-4'>
                        <FaPlus  size={20}/>
                        <a href="/j"> More Than 4 - 5 Pages</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}/>
                        <a href="/j">Standard Design</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}  />
                        <a href="/j">  Professional Content</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}  />
                        <a href="/j"> Customized E Commerce System</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}  />
                        <a href="/j"> Advanced Admin Dashboard</a>
                    </li>
                </ul>
            </div>
            <div className='w-[400px] cursor-pointer bg-gray-100'>
                <section className='bg-[#28af60] text-white p-5'>
                <h1 className='font-bold text-6xl'>Affiliate Website</h1>
                <h3 className='font-bold'>$600 USD</h3>
                </section>
                <ul className='p-8 text-start mt-28'>
                <li className='flex gap-4'>
                        <FaPlus  size={20}/>
                        <a href="/j"> More Than 4 - 5 Pages</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}/>
                        <a href="/j">Standard Design</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}  />
                        <a href="/j">  Professional Content</a>
                    </li>
                </ul>
            </div>
            <div className='w-[400px] cursor-pointer bg-gray-100'>
                <section className='bg-[#28af60] text-white p-5'>
                <h1 className='font-bold text-6xl'>Graphic Design</h1>
                <h3 className='font-bold'>$100 USD</h3>
                </section>
                <ul className='mt-28 p-8 text-start'>
                    <li className='flex gap-4'>
                        <FaPlus size={20}  />
                        <a href="/j"> 5 Static Banners</a>
                    </li>
                    {/* <li className='flex gap-4 mt-6'>
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
                    </li> */}
                </ul>
            </div>
        </div>
            <div className='flex justify-center gap-16 mt-16'>
            <div className='w-[400px] cursor-pointer bg-gray-100'>
                <section className='bg-[#28af60] text-white p-5'>
                <h1 className='font-bold text-6xl'>Logo Packages/Logo Redo</h1>
                <h3 className='font-bold'>$100 USD</h3>
                </section>
                <ul className='mt-28 text-start p-8'>
                    <li className='flex gap-4'>
                        <FaPlus  size={20}/>
                        <a href="/j">1 Logo</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                    <FaPlus  size={20}/>
                        <a href="/j">3 Revisions</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus  size={20}/>
                        <a href="/j"> 3 Business Cards</a>
                    </li>
                </ul>
            </div>
            <div className='w-[400px] cursor-pointer bg-gray-100'>
                <section className='bg-[#28af60] text-white p-5'>
                <h1 className='font-bold text-6xl'>SEO</h1>
                <h3 className='font-bold'>$200 USD/Monthly</h3>
                </section>
                <ul className='p-8 text-start mt-28'>
                    <li className='flex gap-4'>
                        <FaPlus  size={20}/>
                        <a href="/"> Advanced Targeted SEO</a>
                    </li>
                    {/* <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}/>
                        <a href="/j">30 Fb Timeline Status</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}  />
                        <a href="/j">  3 Groups Creation</a>
                    </li> */}
                </ul>
            </div>
            <div className='w-[400px] cursor-pointer bg-gray-100'>
                <section className='bg-[#28af60] text-white p-5'>
                <h1 className='font-bold text-6xl'>Pixel/Analytic Code Integration</h1>
                <h3 className='font-bold'>$100 USD</h3>
                </section>
                <ul className='mt-28 p-8 text-start'>
                    <li className='flex gap-4'>
                        <FaPlus size={20}  />
                        <a href="/j"> Standard Analytic Dashboard</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        <FaPlus size={20}  />
                        <a href="/j"> Deep Analytic Insight</a>
                    </li>
                    {/* <li className='flex gap-4 mt-6'>
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
                    </li> */}
                </ul>
            </div>
        </div>
        </div>
    </div>
  )
}
