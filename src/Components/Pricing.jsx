import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import React, { useState } from 'react'
import {FaArrowAltCircleDown, FaPlus} from "react-icons/fa"
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useCart } from "react-use-cart";
import Son from "../Assets/p.png"
import { Data } from "./Data";


export default function Pricing() {
    // const [cart, setCart] = useState([]);
    const [isDropDownOpen, setIsDropDownOPen] = useState(false);
    
//   const { addItem } = useCart();
  const { addItem, items, updateItemQuantity, removeItem } = useCart();

  const handleAddToCart = (name, price, id, Image ) => {
    addItem({ id, name, price, Image });
  };

  const toggleDropDown = () => {
        setIsDropDownOPen(!isDropDownOpen)
  };
  

  return (
    <div className='mt-44 text-center'>
            <>
         {/* <h1 className='font-bold md:text-6xl text-4xl text-blue-950 mb-10
        '>Our Pricing</h1> */}

        <img  src={Son} className=" w-screen self-center items-center"/>

        {/* <div className='bg-[#f7f3f5] pt-7'> */}
            {/* <h1 className='font-bold text-6xl'>SMO And SEO Package Plans </h1> */}
            <h5 className='font-bold md:mt-6 -mt-6 md:text-4xl'>All plans include</h5>
        {/* </div> */}


        <div className='mt-0 mb-10 grid lg:grid-cols-2 2xl:grid-cols-3 items-center self-center justify-center gap-5 '>
            {/* <h1 className='font-bold text-5xl'>Pro Services</h1> */}
            {
                Data.map((item, index) => (
            <div key={index} className='w-[500px] ml-10 cursor-pointer bg-white text-center shadow-2xl grid grid-cols-2 p-10 rounded-2xl'>
                <img src={item.Image} alt="" className="w-[350px] h-[250px]" />
                <div>
                <h1 className='font-bold text-4xl'>{item.name}</h1>
                <h3 className='font-bold'> {item.price} </h3>
                <ul className='m-5 text-start p-2'>
                    <li className='flex gap-4'>
                        {item.icon}
                        <a href="#j" className="">  {item.item1} </a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                    {item.icon}
                        <a href="/j">{item.item2}</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        {item.icon}
                        <a href="/j"> {item.item3}</a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        {item.icon}
                        <a href="/j"> {item.item4} </a>
                    </li>
                    <li className='flex gap-4 mt-6'>
                        {item.icon}
                        <a href="/j"> {item.item5}</a>
                        {/* {item.id} */}
                    </li>
                </ul>
                </div>

                <section 
               onClick={() => handleAddToCart(item.name, item.price, item.id)}
                className='bg-[#28af60] w-[60%] h-[130%] ml-[150px] shadow-2xl justify-center flex rounded-2xl pt-4 text-white  cursor-pointer'>
                {/* <h1 className='font-bold text-6xl'>Pixel</h1> */}
                
                <MdOutlineAddShoppingCart
            size={25}
            fontWeight={'bold'}
            className=" font-bold t-2 text-white"
          />
                <h4 className='font-bold'>Add To Cart</h4>
                </section>
            </div>
          ))  }
        </div>
        </>
        
    </div>
  )
}
