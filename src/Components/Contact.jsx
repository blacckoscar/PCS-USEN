import React from 'react'

const Contact = () => {
  return (
    <div className='text-center mt-20 p-10 mb-20 '>
        <div className=' mt-20'>
            <h1 className='font-bold text-blue-900 text-7xl'>Contact us</h1>
        </div>
        <div className='mt-20'>
          <div>
              <h1 className='text-3xl font-bold m-10'>Have a question, need more information about our services, or want to discuss a potential project, <br /> feel free to reach out to Our team at Maker's Digital Pro</h1>
              <p className='ml-[30%] w-[600px]'>Monday to Friday: 9:00 AM to 6:00 PM (Local Time)
We value your time, and we strive to respond to all inquiries promptly. Our dedicated team is ready to provide you with the assistance and guidance you need to achieve your digital marketing goals. <b className='text-green-600'>Always Available</b> </p>
          </div>
                    {/* bg-[url("https://firebasestorage.googleapis.com/v0/b/jobs-hunt-5c088.appspot.com/o/careerform1.jpg?alt=media&token=10b9459d-0992-433f-afdf-32cfc219349f")] */}
            {/* <img src={bg} alt="" className='lg:w-[400px] hidden lg:inline lg:h-[300px] xl:mb-0 mb-24 -mt-28 shadow-2xl drop-shadow-xl ml-32'/> */}
            <div className='border-[1px] ml-0 border-blue-900 p-0'>
                <button className='bg-green-600 w-[96%] text-3xl rounded-md ml-10 text-white m-20 h-24'>Whatsapp</button>
                <button className='bg-blue-950 w-[96%] text-3xl rounded-md ml-10 text-white m-20 h-24'>Instagram</button>
                <button className='bg-blue-950 w-[96%] text-3xl rounded-md ml-10 text-white m-20 h-24'>Email</button>
                <button className='bg-blue-500 w-[96%] text-3xl rounded-md ml-10 text-white m-20 h-24'>LinkedIn</button>
                <button className='bg-blue-500 w-[96%] text-3xl rounded-md ml-10 text-white m-20 h-24'>Twitter</button>
                <button className='bg-yellow-500 w-[96%] text-3xl rounded-md ml-10 text-white m-20 h-24'>Snapchat</button>
                <button className='bg-blue-500 w-[96%] text-3xl rounded-md ml-10 text-white m-20 h-24'>Facebook</button>
            </div>
        </div>
    </div>
  )
}

export default Contact