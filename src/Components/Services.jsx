import React, { useState } from 'react'
import card from "../Assets/srvc-icon1.png"
import card1 from "../Assets/srvc-icon2.png"
import card2 from "../Assets/srvc-icon3.png"
import card3 from "../Assets/srvc-icon4.png"
import { Link } from 'react-router-dom'
import { FaPlus, FaSortDown } from 'react-icons/fa'

const Services = () => {
  const [isShow, setIsShow] = useState(false)
  const [isShow2, setIsShow2] = useState(false)
  const [isShow3, setIsShow3] = useState(false)
  const [isShow4, setIsShow4] = useState(false)
  const [isShow5, setIsShow5] = useState(false)
  const [isShow6, setIsShow6] = useState(false)
  const [isShow7, setIsShow7] = useState(false)
  const [isShow8, setIsShow8] = useState(false)
  const handleIsShow = () => {
    setIsShow(!isShow)
  }
  const handleIsShow2 = () => {
    setIsShow2(!isShow2)
  }
  const handleIsShow3 = () => {
    setIsShow3(!isShow3)
  }
  const handleIsShow4 = () => {
    setIsShow4(!isShow4)
  }
  const handleIsShow5 = () => {
    setIsShow5(!isShow5)
  }
  const handleIsShow8 = () => {
    setIsShow8(!isShow8)
  }
  const handleIsShow6 = () => {
    setIsShow6(!isShow6)
  }
  const handleIsShow7 = () => {
    setIsShow7(!isShow7)
  }
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
                <Link to={''} className='bg-white text-center relative shadow-2xl rounded-lg grid justify-center w-[380px] h-96'>
                  <Link to={"/pricing"}>
                    <img src={card} alt="" className='mt-5'/>
                  </Link>
                  <div onClick={handleIsShow}  className='bg-[#28af60] absolute flex top-[75%] justify-center rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold text-center mt-7 text-white text-3xl'>Website Design </h2> <FaSortDown color='white' size={20} className='mt-9 hover:scale-105 ml-2
                  ' />
                  </div>
                  {isShow && (
                  <div onClick={handleIsShow} className='absolute bg-white rounded-lg text-start p-2'>
                    Web Design & Development: A visually appealing and user-friendly website is crucial for capturing and retaining online visitors. Our web design and development services encompass creating aesthetically pleasing designs, intuitive navigation, and mobile responsiveness. We focus on optimizing user experiences, improving page load speeds, and implementing effective call-to-action elements to drive conversions.
                  </div>
                  )}
                </Link>
                <Link to={''} className='bg-white mt-0 text-center relative shadow-2xl rounded-lg h-96 grid justify-center w-[380px]'>
                  <Link to={"/pricing"}>
                    <img src={card1} alt="" className='mt-12'/>
                  </Link>
                  <div onClick={handleIsShow2} className='bg-[#28af60] absolute flex top-[75%] justify-center rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>Mobile App</h2><FaSortDown color='white' size={20} className='mt-9 hover:scale-105 ml-2
                  ' />
                  </div>
                  {isShow2 && (
                  <div onClick={handleIsShow2} className='absolute bg-white rounded-lg text-start p-2'>
                  App Development: In the mobile-driven world, having a well-designed and functional mobile app can enhance your business's reach and customer experience. Our app development team specializes in creating intuitive and feature-rich mobile applications for both iOS and Android platforms. We ensure seamless user experiences, intuitive interfaces, and robust functionality, tailored to meet your specific business needs.
                  </div>
                  )}
                </Link>
                <Link to={''} className='bg-white text-center relative shadow-2xl lg:mt-0 mt-20 rounded-lg h-96 grid justify-center  w-[380px] '>
                  <Link to={"/pricing"}>
                    <img src={card2} alt="" className='mt-12' />
                  </Link>
                  <div onClick={handleIsShow3} className='bg-[#28af60] flex justify-center absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>Digital Marketing</h2> <FaSortDown color='white' size={20} className='mt-9 hover:scale-105 ml-2
                  ' />
                  </div>
                  {isShow3 && (
                  <div onClick={handleIsShow3} className='absolute bg-white rounded-lg text-start p-2'>
                  Digital Marketing: Our digital marketing services encompass a comprehensive range of strategies and techniques to promote your business online. We utilize various channels, including search engines, social media, email marketing, content marketing, and more, to reach and engage your target audience. Our goal is to drive website traffic, generate leads, and increase conversions for your business.
                  </div>
                  )}
                </Link>
                <Link to={''} className='bg-white mt-0 h-96 text-center relative shadow-2xl rounded-lg grid justify-center w-[380px] '>
                  <Link to={"/pricing"}>
                    <img src={card3} alt="" className='mt-12'/>
                  </Link>
                  <div onClick={handleIsShow4} className='bg-[#28af60] absolute flex justify-center top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>SEO and SMO</h2> <FaSortDown color='white' size={20} className='mt-9 hover:scale-105 ml-2
                  ' />
                  </div>
                  {isShow4 && (
                <div onClick={handleIsShow4} className='absolute bg-white rounded-lg text-start overflow-scroll p-2'>
                SEO & SMO (Search Engine Optimization & Social Media Optimization): SEO (Search Engine Optimization) focuses on improving your website's visibility and organic search rankings on search engines. We employ strategies such as keyword research, on-page optimization, link building, and technical enhancements to boost your website's visibility and attract more targeted organic traffic. SMO (Social Media Optimization) involves optimizing your social media profiles and content to increase brand awareness, engagement, and visibility on social platforms.
                </div>
                  )}
                </Link>
              </div>
        <div className='xl:flex grid lg:grid-cols-2 justify-center relative mb-20 gap-10 pt-20 pb-20 bg-[#f5fffc] p-10'>
                <h1 className='w-[80%] absolute hidden xl:inline bg-[#28af60] h-3 top-[45%]'> </h1>
                <Link to={''} className='bg-white text-center relative shadow-2xl rounded-lg grid justify-center w-[380px] h-96'>
                  <Link to={"/pricing"}>
                    <img src={card} alt="" className='mt-5'/>
                  </Link>
                  <div onClick={handleIsShow5} className='bg-[#28af60] flex justify-center absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold text-center mt-7 text-white text-3xl'>Graphic Design</h2>  <FaSortDown color='white' size={20} className='mt-9 hover:scale-105 ml-2'/>
                  </div>
                  {isShow5 && (
                  <div onClick={handleIsShow5} className='absolute bg-white rounded-lg text-start overflow-scroll p-2'>
                  Graphic Design: Good design plays a vital role in brand identity and recognition. Our graphic design services cover logo design, branding elements, marketing collateral, social media graphics, and more. We create visually stunning and cohesive designs that reflect your brand's personality, values, and goals, helping you stand out in a crowded digital landscape.
                  </div>
                  )}
                </Link>
                <Link to={''} className='bg-white mt-0 text-center relative shadow-2xl rounded-lg h-96 grid justify-center w-[380px]'>
                  <Link to={"/pricing"}>
                    <img src={card1} alt="" className='mt-12'/>
                  </Link>
                  <div onClick={handleIsShow6} className='bg-[#28af60] absolute flex justify-center top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>Video Editing</h2> <FaSortDown color='white' size={20} className='mt-9 hover:scale-105 ml-2'/>
                  </div>
                  {isShow6 && (
                  <div onClick={handleIsShow6} className='absolute bg-white rounded-lg text-start overflow-scroll p-2'>
                  Content Creation & Marketing: Compelling content is essential for attracting and engaging your audience. Our content creation and marketing services involve creating high-quality, relevant, and valuable content in various formats, such as blog posts, articles, videos, infographics, and more. We develop a content strategy tailored to your audience and business objectives, aiming to establish thought leadership, increase brand visibility, and drive user engagement.
                  </div>
                  )}
                </Link>
                <Link to={''} className='bg-white text-center relative shadow-2xl lg:mt-0 mt-20 rounded-lg h-96 grid justify-center  w-[380px] '>
                  <Link to={"/pricing"}>
                    <img src={card2} alt="" className='mt-12' />
                  </Link>
                  <div onClick={handleIsShow7} className='bg-[#28af60]  flex justify-center absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>Lead Generation</h2> <FaSortDown color='white' size={20} className='mt-9 hover:scale-105 ml-2'/>
                  </div>
                  {isShow7 && (
                  <div onClick={handleIsShow7} className='absolute bg-white rounded-lg text-start overflow-scroll p-2'>
                  Pay-Per-Click Ads (PPC): Pay-Per-Click advertising is an effective way to drive targeted traffic to your website. We create and manage PPC campaigns on platforms like Google Ads and social media advertising networks. By carefully selecting keywords, creating compelling ad copy, and optimizing landing pages, we help you maximize your return on investment and achieve your advertising goals.
                  </div>
                  )}
                </Link>
                <Link to={''} className='bg-white mt-0 h-96 text-center relative shadow-2xl rounded-lg grid justify-center w-[380px] '>
                  <Link to={"/pricing"}>
                    <img src={card3} alt="" className='mt-12'/>
                  </Link>
                  <div onClick={handleIsShow8}  className='bg-[#28af60] -bottom-[100%] flex justify-center absolute top-[75%] rounded-b-xl h-24 w-[100%]'>
                  <h2 className='font-bold  text-center mt-7 text-white text-3xl'>Logo Design</h2>  <FaSortDown color='white' size={20} className='mt-9 hover:scale-105 ml-2'/>
                  </div>
                  {isShow8 && (
                  <div onClick={handleIsShow8}  className='absolute ease-in-out duration-500 border-[1px] border-green-600 bg-white rounded-lg text-start overflow-scroll p-2'>
                  Email Campaigns & Marketing: Email marketing remains a powerful tool for nurturing customer relationships and driving conversions. We design and execute effective email marketing campaigns, including targeted email newsletters, promotional offers, drip campaigns, and customer retention strategies. We focus on crafting personalized, engaging content and optimizing email deliverability to ensure your messages reach the right audience at the right time.
                  </div>
                  )}
                </Link>
              </div>

      
    </div>
  )
}

export default Services