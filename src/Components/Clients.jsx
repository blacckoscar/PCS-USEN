import React from 'react'
import ck from "../Assets/client-brand.png"
import ck1 from "../Assets/client-brand-02.png"
import ck2 from "../Assets/client-brand-03.png"
import ck3 from "../Assets/client-brand-04.png"
import ck4 from "../Assets/client-brand-05.png"
import ck5 from "../Assets/client-brand-06.png"
import ck6 from "../Assets/client-brand-07.png"
import ck7 from "../Assets/client-brand-08.png"

export default function Clients() {
  return (
    <div className='mb-20'>
              <div className='text-center mt-24 md:mt-72'>
            <div>
                <h1 className='font-bold text-6xl text-blue-950'>We Work With</h1>
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
    </div>
  )
}
