import React, { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import { BsCartPlus } from "react-icons/bs";
import firebase from "firebase/compat/app";
import firebaseConfig from "../firebaseconfig";
import "firebase/compat/firestore";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Nav from "../component/Nav";
import Homes from "./Homes";
import MobileNav from "./MobileNav";

const ProductDetails = () => {
  const { productId } = useParams();
  const [productData, setProductData] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    async function getProductData() {
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
      const docRef = db.collection("Products").doc(productId);
      const doc = await docRef.get();

      if (doc.exists) {
        const data = doc.data();
        const colors =
          typeof data.color === "string" ? data.color.split(",") : [];
        setProductData({ id: doc.id, ...data, colors });
      } else {
        console.log("No such document!");
        setProductData(null);
      }
    }

    getProductData();
  }, [productId]);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-5 bg-gray-900 text-white pt-20">
      <div className="justify-content-center mt-5">
        <div xs={10} md={7} lg={5} className="p-0">
          {productData.product_image && productData.product_image.length > 0 ? (
            <Carousel showArrows={true} showThumbs={true}>
              {productData.product_image.map((Cloth, index) => (
                <div
                  key={index}
                  className="md:w-[25%] w-[80%] ml-[10%] md:ml-[40%] border-2 border-white p-2 rounded-lg text-center"
                >
                  <img src={Cloth} alt={`Cloth ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          ) : (
            <div>No images available</div>
          )}
        </div>
        <div xs={10} md={7} lg={7} className="product-details p-5 md:ml-[40%]">
          <h1 className="text-2xl">{productData.title}</h1>
          <button
            onClick={() => addItem(productData)}
            className="bg-dark-primary mt-10 mb-10 p-1 rounded-2xl bg-white  hover:bg-green-600 hover:text-white duration-500  text-green-600"
            style={{ borderRadius: "0", border: 0 }}
          >
            <BsCartPlus size="1.8rem" className="ml-10" />
            Add to cart
          </button>
          <br />
          <b className="text-dark-primary h4 mt-3 d-block">
            $. {productData.price}
          </b>
          <br />
          <strike className="text-red-300 font-extralight mt-3">
            $. {productData.old_price}
          </strike>
          <br />
          <b className="h5">4.1 ⭐ Rated</b>
          <p
            className="mt-3 text-xl"
            style={{ opacity: "0.8", fontWeight: "400" }}
          >
            {productData.descriprion}
          </p>
          <p className="mt-3 h5" style={{ opacity: "0.8", fontWeight: "400" }}>
            Colors:
            {/* {productData.color.map((color, index) => (
              <span key={index}>
                {color.trim()}
                {index !== productData.product_color.length - 1 ? ", " : ""}
              </span>
            ))} */}{productData.product_color}
          </p>
          <p className="mt-3 h5" style={{ opacity: "0.8", fontWeight: "400" }}>
            ${productData.shipping_fee}
          </p>
        </div>
      </div>
      <Nav />
      <MobileNav />
      <Homes />
    </div>
  );
};

export default ProductDetails;
