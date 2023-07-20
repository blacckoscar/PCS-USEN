import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { MdOutlineShoppingCart } from "react-icons/md";
import PaystackForm from "./PaystackForm";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Nav from "../component/Nav";
import Homes from "./Homes";
import MobileNav from "./MobileNav";
import { BiCheck } from "react-icons/bi";


const firebaseConfig = {
    // Your Firebase config
    apiKey: "AIzaSyCRSVN6rIpkPQKLz77NFcES36Fpe665T9k",
    authDomain: "nextberries-cb5b9.firebaseapp.com",
    projectId: "nextberries-cb5b9",
    storageBucket: "nextberries-cb5b9.appspot.com",
    messagingSenderId: "44749615279",
    appId: "1:44749615279:web:0b3e110f248c8e8b3ae45a",
    measurementId: "G-9QZ27VRVHL",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const firestore = firebase.firestore();

export default function Order() {

    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
      } = useCart();

      const [productData, setProductData] = useState([]);


      useEffect(() => {
        async function getResponse() {
    
          const db = firebase.firestore();
          const collection = db
          .collection("Users")
          .doc(firebase.auth().currentUser.uid)
          .collection("Payments")
          .orderBy("createdAt", "desc")
          const snapshot = await collection.get();
          const Products = [];
    
          snapshot.forEach((doc) => {
            Products.push({
              id: doc.id,
              ...doc.data(),
            });
          });
    
          setProductData(Products);
        }
    
        getResponse();
      }, []);


  return (
    <div className=" p-10 pt-20 bg-gray-900">
      <h1 className="text-white text-6xl text-center m-5">
        Order
      </h1>
      <h1 className="text-light">{isEmpty ? "Your Cart is Empty" : ""}</h1>
      <div className="justify-content-center">
        <div
          responsive="sm"
          striped
          bordered
          hover
          className="mb-5 border-2 border-white rounded-md p-2"
        >
          <tbody>
            {productData?.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="md:inline justify-center text-center grid grid-rows-1"
                >
                  <td>
                    <div
                      className="rounded-lg ml-6  md:flex flex-col text-center justify-center mb-10 drop-shadow-2xl shadow-2xl"
                      style={{
                        background: "white",
                        height: "8rem",
                        overflow: "hidden",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="p-2 text-center rounded-md">
                        <img
                          src={item.product_image}
                          className="w-32 p-10 ml-3 md:ml-0 text-center shadow-2xl drop-shadow-2xl hover:scale-110 duration-500"
                          alt={item.title}
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6 className="md:pl-10 pr-10 text-gray-300">
                      {item.title}
                    </h6>
                  </td>
                  <td className="text-green-500 pr-10">$ {item.amount}</td>

                  <td className="text-gray-300">Quantity ({item.quantity})</td>
                  <td>
                    <i
                    //   onClick={() =>
                    //     updateItemQuantity(item.id, item.quantity - 1)
                    //   }
                      className="text-4xl m-4 bg-white rounded-full duration-500 drop-shadow-2xl shadow-2xl hover:bg-red-600 hover:text-white w-10 text-red-600"
                    >
                      {/* {item.createdAt} */}
                      
                    </i>
                    <button
                  
                      className="text-4xl m-4 w-10 h-10  rounded-full drop-shadow-2xl shadow-2xl bg-green-600 text-white duration-500"
                    >
                      <BiCheck />
                    </button>{" "}
                    <br className="md:hidden" />
                    <button
                      variant="danger"
                      className="ms-5 text-green-600 font-bold bg-white rounded-lg duration-500 p-3"
                    >
                     Order Successful
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </div>
      </div>
         <div className="bg-gray-900">
          <Homes />
        </div>
      <Nav />
      <MobileNav />
    </div>
  )
}
