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
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvfSZiORsVohwIB696oyJYwxBcuh-jRRY",
  authDomain: "markers-digital-pro.firebaseapp.com",
  projectId: "markers-digital-pro",
  storageBucket: "markers-digital-pro.appspot.com",
  messagingSenderId: "99311584893",
  appId: "1:99311584893:web:63167d001bb5c569f31314",
  measurementId: "G-H43QCYF1XV"
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
