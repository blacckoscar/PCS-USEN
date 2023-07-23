import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Service, save } from './Data'
import Son from "../Assets/sabe.jpg";


const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isActiveIndex, setIsActiveIndex] = useState(null);

  const handleIsShow = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleIsShows = (index) => {
    setIsActiveIndex(index === isActiveIndex ? null : index);
  };


  return (

<div>
    <div className='mt-56 text-center bg-[#f5fffc] w-screen'
        style={{backgroundImage: `url(${Son})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}

    >
        <h1 className='font-bold text-6xl text-blue-950 pt-20
        '>Our Services</h1>
            <h5 className='font-bold mt-6 text-4xl'>All plans include</h5>
        <div className='xl:flex grid lg:grid-cols-2 w-screen justify-center relative  pt-20 md:pb-0 p-20 md:p-10'>
                <h1 className='w-[80%] absolute hidden xl:inline bg-[#28af60] h-3 top-[45%]'> </h1>
        { save.map((asu, index) => (
                <div onClick={() => handleIsShow(index)} className='xl:flex grid w-[350px] lg:grid-cols-2 justify-center relative gap-10 pt-20 pb-20 p-10' key={index} >
                <Link to={''} className='bg-white text-center relative shadow-2xl rounded-xl justify-center w-[380px] h-96'>
                  <Link className='grid justify-center' onClick={() => handleIsShow(index)}>
                    <img src={asu.Image} alt="" className='mt-0 rounded-xl'/>
                  </Link>
                  <div onClick={() => handleIsShow(index)}  className='bg-[#28af60] absolute flex -bottom-20 lg:-bottom-0 justify-center rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold text-center mt-7 text-white text-3xl'>{asu.title}</h2> 
                  </div>
                  {activeIndex === index && (
                  <div onClick={() => handleIsShow(index)} className='absolute bg-white z-50 rounded-lg text-start p-5 mt-10 text-lg font-bold'>
        
                    {asu.content}
                  </div>
                  )}
                </Link>
                </div>
                 ) )}
              </div>
             
              {/*  */}

              <div className='xl:flex grid lg:grid-cols-2 w-auto justify-center relative  md:pt-0 pb-20 p-10'>
                <h1 className='w-[80%] absolute hidden xl:inline bg-[#28af60] h-3 top-[45%]'> </h1>
        { Service.map((asu, index) => (
                <div onClick={() => handleIsShow(index)} className='xl:flex grid w-[350px] lg:grid-cols-2 justify-center relative gap-10 pt-20 pb-20 p-10' key={index} >
                <Link to={''} className='bg-white text-center relative shadow-2xl rounded-xl justify-center w-[380px] h-96'>
                  <Link className='grid justify-center' onClick={() => handleIsShows(index)} >
                    <img src={asu.Image} alt="" className='mt-0 rounded-xl'/>
                  </Link>
                  <div onClick={() => handleIsShows(index)}  className='bg-[#28af60] absolute flex -bottom-20 lg:-bottom-0 justify-center rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold text-center mt-7 text-white text-3xl'>{asu.title}</h2> 
                  </div>
                  {isActiveIndex === index && (
                  <div onClick={() => handleIsShows(index)} className='absolute z-50 bg-white rounded-lg text-start p-5 mt-10 text-lg font-bold'>
                    {asu.content}
                  </div>
                  )}
                </Link>
                </div>
                 ) )}
              </div>
    </div>
   
</div>
  )
}

export default Services