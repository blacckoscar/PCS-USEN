// import React, { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

// const Touched = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isOpin, setIsOpin] = useState(false);
//     const [isNestedOpen, setIsNestedOpen] = useState(false);
//     const [isIconClosed, setIsIconClosed] = useState(false);

//     const toggleDropdown = () => {
//         setIsOpen(!isOpen);

//         setIsIconClosed(!isIconClosed);
//     };


//     const toggleNestedDropdown = () => {
//         setIsNestedOpen(!isNestedOpen);
//     };

//     const toggleNestedDropdown2 = () => {
//         setIsOpin(!isOpin);
//     };

//     return (
//         <div className="relative">
//             {isIconClosed ? (
//                 <AiOutlineClose
//                     size={30}
//                     color="white"
//                     className="hover:cursor-pointer"
//                     onClick={toggleDropdown}
//                 />
//             ) : (
//                 <AiOutlineMenu
//                     size={30}
//                     color="white"
//                     className="hover:cursor-pointer"
//                     onClick={toggleDropdown}
//                 />
//             )}
//             {isOpen && (
//                 <div className="absolute top-10  mt-2 w-48 bg-white rounded-lg shadow-lg ml-0">
//                     <ul className="py-2 px-4">
//                         <li
//                             className="hover:bg-gray-200 cursor-pointer"
//                             onClick={toggleNestedDropdown2}
//                         >
//                             <a href="#">Shop All</a>
//                             {isOpin && (
//                                 <div className="absolute top-0 left-full mt-0 ml-2 w-48 bg-red-300 rounded-lg shadow-lg">
//                                     <ul className="py-2 px-4">
//                                         <li className="hover:bg-gray-200">
//                                             <a href="#">New</a>
//                                         </li>
//                                         <li className="hover:bg-gray-200">
//                                             <a href="#">Eco</a>
//                                         </li>
//                                         <li className="hover:bg-gray-200">
//                                             <a href="#">Tops</a>
//                                         </li>
//                                         <li className="hover:bg-gray-200">
//                                             <a href="#">Dresses</a>
//                                         </li>
//                                         <li className="hover:bg-gray-200">
//                                             <a href="#">Pants</a>
//                                         </li>
//                                         <li className="hover:bg-gray-200">
//                                             <a href="#">Skirts</a>
//                                         </li>
//                                         <li className="hover:bg-gray-200">
//                                             <a href="#">Outerwear</a>
//                                         </li>
//                                         <li className="hover:bg-gray-200">
//                                             <a href="#">Accesories</a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             )}
//                         </li>
//                         <li
//                             className="hover:bg-gray-200 cursor-pointer"
//                             onClick={toggleNestedDropdown}
//                         >
//                             <a href="#">Unisex</a>
//                             {isNestedOpen && (
//                                 <div className="absolute top-0 left-full mt-0 ml-2 w-48 bg-red-300 rounded-lg shadow-lg">
//                                     <ul className="py-2 px-4">
//                                         <li className="hover:bg-gray-200">
//                                             <a href="#">New</a>
//                                         </li>
//                                         <li className="hover:bg-gray-200">
//                                             <a href="#">All</a>
//                                         </li>
//                                         <li className="hover:bg-gray-200">
//                                             <a href="#">Tops</a>
//                                         </li>
//                                         <li className="hover:bg-gray-200">
//                                             <a href="#">Pants</a>
//                                         </li>
//                                         <li className="hover:bg-gray-200">
//                                             <a href="#">Outerwear</a>
//                                         </li>
//                                         <li className="hover:bg-gray-200">
//                                             <a href="#">Accesories</a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             )}
//                         </li>

//                     </ul>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default Touched