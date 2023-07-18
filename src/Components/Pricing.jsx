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

  const handleAddToCart = (name, price, id) => {
    addItem({ id, name, price, quantity: 1 });
  };

  const toggleDropDown = () => {
        setIsDropDownOPen(!isDropDownOpen)
  };
  

  return (
    <div className='mt-44 items-center text-center'>
            <>
         {/* <h1 className='font-bold md:text-6xl text-4xl text-blue-950 mb-10
        '>Our Pricing</h1> */}

        <img  src={Son} className=" self-center items-center"/>

        {/* <div className='bg-[#f7f3f5] pt-7'> */}
            {/* <h1 className='font-bold text-6xl'>SMO And SEO Package Plans </h1> */}
            {/* <h5 className='font-bold md:mt-6 -mt-6 md:text-4xl'>All plans include</h5> */}
        {/* </div> */}


        <div className='mt-20 mb-10 grid lg:grid-cols-2 xl:grid-cols-3   justify-center gap-16 md:ml-24'>
            {/* <h1 className='font-bold text-5xl'>Pro Services</h1> */}
            {
                Data.map((item, index) => (
            <div className='grid lg:grid-cols-2 xl:grid-cols-3   justify-center gap-16 mt-16'>
            <div key={index} className='w-[400px] cursor-pointer bg-white shadow-2xl p-10 rounded-2xl'>
                <section className='bg-[#28af60] text-white p-5 shadow-2xl rounded-2xl'>
                <h1 className='font-bold text-6xl'>{item.name}</h1>
                <h3 className='font-bold'> {item.price} </h3>
                <FaArrowAltCircleDown size={30} onClick={toggleDropDown} />
                { isDropDownOpen && (
                <div>
                    <ul className="bg-white grid gap-5 p-4 rounded-xl">
                        <li className="font-bold p-2 rounded-lg bg-green-600 text-3xl">{item.app1}.</li>
                        <li className="font-bold p-2 rounded-lg bg-green-600 text-3xl">{item.app2}. </li>
                        <li className="font-bold p-2 rounded-lg bg-green-600 text-3xl">{item.app3}.</li>
                    </ul>
                </div>
            )
            }
                </section>
                <ul className='m-5 text-start p-8'>
                    <li className='flex gap-4'>
                        {item.icon}
                        <a href="/j">  {item.item1} </a>
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

                <section 
               onClick={() => handleAddToCart(item.name, item.price, item.id)}
                className='bg-[#28af60] w-[60%] ml-[60px] shadow-2xl rounded-2xl text-white p-5 cursor-pointer'>
                {/* <h1 className='font-bold text-6xl'>Pixel</h1> */}
                
                <MdOutlineAddShoppingCart
            size={25}
            fontWeight={'bold'}
            className="ml-[40%] font-bold pt-2 text-white"
          />
                <h4 className='font-bold'>Add To Cart</h4>
                </section>
            </div>
        </div>
          ))  }
        </div>
        </>
        <div>
            <button onClick={toggleDropDown} className='bg-[#28af60] w-[60%] ml-[60px] shadow-2xl rounded-2xl text-white p-5 cursor-pointer'>more</button>
            { isDropDownOpen && (
                <div>
                    <ul>
                        <li>$200 </li>
                        <li>$500 </li>
                        <li>$130 </li>
                    </ul>
                </div>
            )
            }
        </div>
    </div>
  )
}
