import React from 'react'
import Son from "../Assets/12.jpg";
import { Link } from 'react-router-dom';
import { FaInstagram, FaSnapchat, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';


const Contact = () => {
  return (
    <div className='text-center mt-56 p-10 pb-20 '
    style={{backgroundImage: `url(${Son})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
        <div className=' mt-20'>
            <h1 className='font-bold text-blue-50 text-7xl'>Contact us</h1>
        </div>
        <div className='mt-20'>
          <div>
              <h1 className='text-3xl font-bold m-10 text-gray-400'>Have a question, need more information about our services, or want to discuss a potential project, <br /> feel free to reach out to Our team at Maker's Digital Pro</h1>
              {/* <p className=''>Monday to Friday: 9:00 AM to 6:00 PM (Local Time)
We value your time, and we strive to respond to all inquiries promptly. Our dedicated team is ready to provide you with the assistance and guidance you need to achieve your digital marketing goals. <b className='text-green-600'>Always Available</b> </p> */}
          
          </div>
                    {/* bg-[url("https://firebasestorage.googleapis.com/v0/b/jobs-hunt-5c088.appspot.com/o/careerform1.jpg?alt=media&token=10b9459d-0992-433f-afdf-32cfc219349f")] */}
            {/* <img src={bg} alt="" className='lg:w-[400px] hidden lg:inline lg:h-[300px] xl:mb-0 mb-24 -mt-28 shadow-2xl drop-shadow-xl ml-32'/> */}
            <div className='border-[1px] rounded-2xl h-auto ml-0 border-blue-50 my-20 grid lg:flex items-center justify-center'>
                <Link target='_blank' to="https://wa.me/+2348141225457" className='bg-green-600 justify-center items-center flex p-8 text-3xl rounded-md text-white lg:m-10 m-5 mt-20 h-24'> <FaWhatsapp className='mr-2' />  Whatsapp</Link>
                <Link target='_blank' to="https://instagram.com" className='bg-blue-950 justify-center items-center flex p-8 text-3xl rounded-md text-white lg:m-10 m-5 h-24'><AiFillInstagram className='mr-2' /> Instagram</Link>
                <Link to="mailto:mozzentagroup@gmail.com" className='bg-blue-950 justify-center items-center flex p-8 text-3xl rounded-md text-white lg:m-10 m-5 h-24'> <MdEmail className='mr-2' /> Email</Link>
                <Link target='_blank' to="https://linkedin.com" className='bg-blue-500 justify-center items-center flex p-8 text-3xl rounded-md text-white lg:m-10 m-5 h-24'> <AiFillLinkedin className='mr-2' /> LinkedIn</Link>
                <Link target='_blank' to="https://twitter.com" className='bg-blue-500 justify-center items-center flex p-8 text-3xl rounded-md text-white lg:m-10 m-5 h-24'> <AiFillTwitterSquare className='mr-2' /> Twitter</Link>
                <Link target='_blank' to="https://snapchat.com" className='bg-yellow-500 justify-center items-center flex p-8 text-3xl rounded-md text-white lg:m-10 m-5 h-24'> <FaSnapchat className='mr-2' /> Snapchat</Link>
                <Link target='_blank' to="https://facebook.com" className='bg-blue-500 justify-center items-center flex p-8 text-3xl rounded-md text-white lg:m-10 m-5 mb-20 h-24'> <AiFillFacebook className='mr-2' /> Facebook</Link>
            </div>
        </div>
    </ div>
  )
}

export default Contact