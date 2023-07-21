import React, { useEffect, useState } from "react";
// import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { BiSearch } from "react-icons/bi";
import SearchFilter from "react-filter-search";
import ProductCard from "./ProductCard";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import firebaseConfig from "../firebaseconfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const Homes = () => {
  // const [theme] = useThemeHook();
  const [searchInput, setSearchInput] = useState("");
  const [productData, setProductData] = useState([]);
  // const [productData, setProductData] = useState([]);

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
  return (
    <div className="t">
      <div className="text-center">
        <h1 className="font-bankGothic pt-10 text-white text-2xl">
          Search products
        </h1>
        <div className="relative">
          <BiSearch
            size="40"
            className="absolute md:left-[41%] left-[23%] z-20 top-10"
            color="gray"
          />
          <input
            placeholder="Search more"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="text-gray-600 h-10 md:w-96 rounded-md m-10 text-center outline-none text-xl"
          />
        </div>
      </div>
      <SearchFilter
        value={searchInput}
        data={productData}
        renderResults={(results) => (
          <h1 className="grid grid-cols-2 md:grid-cols-4">
            {results.map((item, i) => (
              <ProductCard data={item} key={i} />
            ))}
          </h1>
        )}
      />
    </div>
  );
};

export default Homes;
