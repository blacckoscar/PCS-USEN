import React from 'react'
import Son from "../Assets/sabe.jpg";
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <div className='text-center mt-40 p-10 pb-20 '
    style={{backgroundImage: `url(${Son})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
        <div className=' mt-20'>
            <h1 className='font-bold text-blue-900 text-7xl'>Contact us</h1>
        </div>
        <div className='mt-20'>
          <div>
              <h1 className='text-3xl font-bold m-10'>Have a question, need more information about our services, or want to discuss a potential project, <br /> feel free to reach out to Our team at Maker's Digital Pro</h1>
              {/* <p className=''>Monday to Friday: 9:00 AM to 6:00 PM (Local Time)
We value your time, and we strive to respond to all inquiries promptly. Our dedicated team is ready to provide you with the assistance and guidance you need to achieve your digital marketing goals. <b className='text-green-600'>Always Available</b> </p> */}
          
          </div>
                    {/* bg-[url("https://firebasestorage.googleapis.com/v0/b/jobs-hunt-5c088.appspot.com/o/careerform1.jpg?alt=media&token=10b9459d-0992-433f-afdf-32cfc219349f")] */}
            {/* <img src={bg} alt="" className='lg:w-[400px] hidden lg:inline lg:h-[300px] xl:mb-0 mb-24 -mt-28 shadow-2xl drop-shadow-xl ml-32'/> */}
            <div className='border-[1px] h-auto ml-0 border-blue-900 my-20 grid lg:flex items-center justify-center'>
                <Link target='_blank' to="https://wa.me/+2348141225457" className='bg-green-600 p-8 text-3xl rounded-md ml-10 text-white m-20 h-24'> Whatsapp</Link>
                <Link target='_blank' to="https://instagram.com" className='bg-blue-950 p-8 text-3xl rounded-md ml-10 text-white m-20 h-24'>Instagram</Link>
                <Link to="mailto:mozzentagroup@gmail.com" className='bg-blue-950 p-8 text-3xl rounded-md ml-10 text-white m-20 h-24'>Email</Link>
                <Link target='_blank' to="https://linkedin.com" className='bg-blue-500 p-8 text-3xl rounded-md ml-10 text-white m-20 h-24'>LinkedIn</Link>
                <Link target='_blank' to="https://twitter.com" className='bg-blue-500 p-8 text-3xl rounded-md ml-10 text-white m-20 h-24'>Twitter</Link>
                <Link target='_blank' to="https://snapchat.com" className='bg-yellow-500 p-8 text-3xl rounded-md ml-10 text-white m-20 h-24'>Snapchat</Link>
                <Link target='_blank' to="https://facebook.com" className='bg-blue-500 p-8 text-3xl rounded-md ml-10 text-white m-20 h-24'>Facebook</Link>
            </div>
        </div>
    </ div>
  )
}

export default Contact