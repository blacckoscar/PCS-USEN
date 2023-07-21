import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React, { useState } from 'react'
import {FaArrowAltCircleDown, FaPlus} from "react-icons/fa"
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useCart } from "react-use-cart";
import Son from "../Assets/p.png"
import { Data } from "./Data";
import Son1 from "../Assets/12.jpg";



export default function Pricing() {
    // const [cart, setCart] = useState([]);
    const [isDropDownOpen, setIsDropDownOPen] = useState(false);
    
//   const { addItem } = useCart();
  const { addItem, items, updateItemQuantity, removeItem } = useCart();

  const handleAddToCart = (name, price, amount, id, image ) => {
    addItem({ id, name, price, amount, image });
  };

  const toggleDropDown = () => {
        setIsDropDownOPen(!isDropDownOpen)
  };
  

  return (
    <div 
    style={{backgroundImage: `url(${Son1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}

    className='mt-44 text-center'>
            <>
         {/* <h1 className='font-bold md:text-6xl text-4xl text-blue-950 mb-10
        '>Our Pricing</h1> */}

        <img  src={Son} className=" w-screen self-center items-center"/>

        {/* <div className='bg-[#f7f3f5] pt-7'> */}
            {/* <h1 className='font-bold text-6xl'>SMO And SEO Package Plans </h1> */}
            <h5 className='font-bold md:m-20 m-10 md:text-4xl text-[#eee]'>
                All plans included below: (Add to Cart and proceed to making payment you'll be contacted in less than 30mins)</h5>
        {/* </div> */}


        <div 

        className='mt-0 md:mb-10 grid lg:grid-cols-2 2xl:grid-cols-3 items-center self-center justify-center gap-5 '>
            {/* <h1 className='font-bold text-5xl'>Pro Services</h1> */}
            {
                Data.map((item, index) => (
                    <div key={index} className='w-auto m-10 cursor-pointer bg-white text-center shadow-2xl grid grid-cols-2 p-20 pb-28 rounded-2xl'>
                <div>
                <section  className='bg-[#28af60] text-white p-10 shadow-2xl rounded-2xl'>

                <h1 className='font-bold text-4xl'>{item.name}</h1>
                <h3 className='font-bold'> {item.amount} </h3>
                </section>

                        <a className="p-0 text-lg"> Initial Commitment Amount To Be Paid ${item.price} USD </a>

                <ul className='m-5 text-start p-2'>
                    <li className='flex gap-4'>
                        {item.icon}
                        <a className="">  {item.item1} </a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                    {item.icon}
                        <a>{item.item2}</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        {item.icon}
                        <a> {item.item3}</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        {item.icon}
                        <a> {item.item4} </a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        {item.icon}
                        <a> {item.item5}</a>
                        {/* {item.id} */}
                    </li>
                </ul>
                </div>

                <img src={item.image} alt="" className=" self-center p-20" />

                <section 
               onClick={() => handleAddToCart(item.name, item.price, item.amount, item.image, item.id)}
                className='bg-[#28af60] w-[100%] h-[130%] shadow-2xl justify-center flex drop-shadow-2xl rounded-2xl p-3 pt-6 text-white  cursor-pointer'>
                {/* <h1 className='font-bold text-6xl'>Pixel</h1> */}
                
                <MdOutlineAddShoppingCart
            size={18}
            fontWeight={'bold'}
            className=" font-bold t-2 text-white"
          />
                <h4 className='font-bold text-lg'> Add To Cart</h4>
                </section>
            </div>
          ))  }
        </div>
        </>
        
    </div>
  )
}
