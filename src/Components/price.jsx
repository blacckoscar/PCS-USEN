// import React from 'react';
// import { MdOutlineAddShoppingCart } from 'react-icons/md';
// import Son from '../Assets/p.png';
// import { Data } from './Data';
// import { useCartContext } from './CartContext';

// export default function Pricing(props) {
//   const { addItemToCart } = useCartContext();

//   const addToCart = (item) => {
//     addItemToCart(item);
//   };

//   return (
//     <div className="mt-44 items-center text-center">
//       <img src={Son} className="self-center items-center" />

//       <div className="mt-20 mb-10 grid lg:grid-cols-2 xl:grid-cols-3 justify-center gap-16 md:ml-24">
//         {Data.map((item, index) => (
//           <div key={index} className="justify-center gap-16 mt-16">
//             <div className="w-[400px] cursor-pointer bg-white shadow-2xl p-10 rounded-2xl">
//               <section className="bg-[#28af60] text-white p-5 shadow-2xl rounded-2xl">
//                 <h1 className="font-bold text-6xl">{item.name}</h1>
//                 <h3 className="font-bold">{item.prize}</h3>
//               </section>
//               <ul className="m-5 text-start p-8">
//                 <li className="flex gap-4">
//                   {item.icon}
//                   <a href="/j">{item.item1}</a>
//                 </li>
//                 <li className="flex gap-4 mt-6">
//                   {item.icon}
//                   <a href="/j">{item.item2}</a>
//                 </li>
//                 <li className="flex gap-4 mt-6">
//                   {item.icon}
//                   <a href="/j">{item.item3}</a>
//                 </li>
//                 <li className="flex gap-4 mt-6">
//                   {item.icon}
//                   <a href="/j">{item.item4}</a>
//                 </li>
//                 <li className="flex gap-4 mt-6">
//                   {item.icon}
//                   <a href="/j">{item.item5}</a>
//                 </li>
//               </ul>

//               <section
//                 onClick={() => addToCart(item)}
//                 className="bg-[#28af60] w-[60%] ml-[60px] shadow-2xl rounded-2xl text-white p-5 cursor-pointer"
//               >
//                 <MdOutlineAddShoppingCart
//                   size={25}
//                   fontWeight="bold"
//                   className="ml-[40%] font-bold pt-2 text-white"
//                 />
//                 <h4 className="font-bold">Add To Cart</h4>
//               </section>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
