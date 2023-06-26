import React from 'react'
import md from "../Assets/yo.jpg"
import comd from "../Assets/yo.jpg"

export default function Team() {
  return (
    <div>
            <div className=' p-5 mt-36 text-center'>
            <p className='font-bold m-10 text-blue-950  text-6xl'>Meet our Leadership</p>
            <div>
                <p>Our exceptional team of thought driven talent, thrive on communication,  & transparency <br className='md:inline hidden'/> you trust, to embody the principles that guide us:</p>
            </div>
            <div className='md:flex justify-center gap-20 mt-20'>
                <div className='md:w-[500px] mt-7 text-center shadow-2xl  border-[0.5px] p-2'>
                    <img src={md} alt="" className='mb-10 '/>
                    <b className='text-4xl text-gray-900'>PCS Usen Etim</b>
                    <p className='mt-10'>Since 2013, PCS Usen Etim has provided consulting on advertising via social media, animated/non animated Explainer Videos, Lead Gen for LinkedIn, Sales Funnels & Web Design for various companies in Canada and the U.S. His coaching and consulting methods are skills most admired by his clientele.</p>
                </div>
                <div className='md:w-[500px] mt-20 text-center shadow-2xl p-2 '>
                    <img src={comd} alt="" className='mb-10 '/>
                    <b className='text-4xl text-gray-900'>PCS Usen Etim</b>
                    <p className='mt-10'>Head of Sales
For the last thirty five years, PCS Usen Etim has worked extensively in numerous sales positions both in the B2B and B2C sectors.  As a career sales professional, he has developed a true expertise in the art of sales and all the applicable skills needed to succeed. A proven track record of servicing clients, negotiating contracts, and building solid business relationships</p>
                </div>
            </div>

        </div>
    </div>
  )
}
