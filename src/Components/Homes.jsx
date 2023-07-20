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
