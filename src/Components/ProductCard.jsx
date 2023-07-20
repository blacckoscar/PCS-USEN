import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import firebaseConfig from "../firebaseconfig";
import "firebase/compat/firestore";

const ProductCard = (props) => {
  let { product_image, price, title, id } = props.data;
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function getResponse() {
      // Initialize Firebase
      const firebaseConfig = {
        // Your Firebase configuration
        apiKey: "AIzaSyCRSVN6rIpkPQKLz77NFcES36Fpe665T9k",
        authDomain: "nextberries-cb5b9.firebaseapp.com",
        projectId: "nextberries-cb5b9",
        storageBucket: "nextberries-cb5b9.appspot.com",
        messagingSenderId: "44749615279",
        appId: "1:44749615279:web:0b3e110f248c8e8b3ae45a",
        measurementId: "G-9QZ27VRVHL",
      };

      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      const db = firebase.firestore();
      const collection = db.collection("Products");
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

  const { addItem } = useCart();

  const addToCart = () => {
    addItem(props.data);
  };

  return (
    <div
      key={id}
      className="text-center border-2 m-5 drop-shadow-2xl shadow-2xl hover:scale-110 duration-500 border-gray-400"
    >
      <Link to={`/product-details/${id}`}>
        <div>
          <div className="w-[60%]">
            <img src={product_image} alt="logo" className="ml-[35%] mt-[20%]" />
          </div>
        </div>
      </Link>
      <div className="text-center text-white">
        <h1>{title}</h1>
        <h1>
          $. <span className="text-white">{price}</span>
        </h1>
        <button onClick={() => addToCart()}>
          <MdOutlineAddShoppingCart
            size="1.8rem"
            className="text-center ml-[30%] text-green-600"
          />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
