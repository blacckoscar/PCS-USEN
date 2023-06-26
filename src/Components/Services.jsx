import React from 'react'
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
                <Link to={'/pricing'} className='bg-white text-center relative shadow-2xl rounded-lg grid justify-center w-[380px] h-96'>
                  <div>
                    <img src={card} alt="" className='mt-5'/>
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold text-center mt-7 text-white text-3xl'>Website Design</h2>
                  </div>
                </Link>
                <Link to={'/pricing'} className='bg-white mt-0 text-center relative shadow-2xl rounded-lg h-96 grid justify-center w-[380px]'>
                  <div>
                    <img src={card1} alt="" className='mt-12'/>
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>Mobile App</h2>
                  </div>
                </Link>
                <Link to={'/pricing'} className='bg-white text-center relative shadow-2xl lg:mt-0 mt-20 rounded-lg h-96 grid justify-center  w-[380px] '>
                  <div>
                    <img src={card2} alt="" className='mt-12' />
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>Digital Marketing</h2>
                  </div>
                </Link>
                <Link to={'/pricing'} className='bg-white mt-0 h-96 text-center relative shadow-2xl rounded-lg grid justify-center w-[380px] '>
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
                <Link to={'/pricing'} className='bg-white text-center relative shadow-2xl rounded-lg grid justify-center w-[380px] h-96'>
                  <div>
                    <img src={card} alt="" className='mt-5'/>
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold text-center mt-7 text-white text-3xl'>Graphic Design</h2>
                  </div>
                </Link>
                <Link to={'/pricing'} className='bg-white mt-0 text-center relative shadow-2xl rounded-lg h-96 grid justify-center w-[380px]'>
                  <div>
                    <img src={card1} alt="" className='mt-12'/>
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>Video Editing</h2>
                  </div>
                </Link>
                <Link to={'/pricing'} className='bg-white text-center relative shadow-2xl lg:mt-0 mt-20 rounded-lg h-96 grid justify-center  w-[380px] '>
                  <div>
                    <img src={card2} alt="" className='mt-12' />
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>Lead Generation</h2>
                  </div>
                </Link>
                <Link to={'/pricing'} className='bg-white mt-0 h-96 text-center relative shadow-2xl rounded-lg grid justify-center w-[380px] '>
                  <div>
                    <img src={card3} alt="" className='mt-12'/>
                  </div>
                  <div className='bg-[#28af60] absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>Logo Design</h2>
                  </div>
                </Link>
              </div>

      
    </div>
  )
}

export default Services