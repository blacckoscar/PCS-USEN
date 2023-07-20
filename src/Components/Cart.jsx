import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { MdOutlineShoppingCart } from "react-icons/md";
import PaystackForm from "./PaystackForm";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Nav from "../component/Nav";
import Homes from "./Homes";
import MobileNav from "./MobileNav";
import { Link, useNavigate } from "react-router-dom";

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

const Cart = () => {
  const {
    isEmpty,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const [productQuantities, setProductQuantities] = useState({});

  const handlePaymentSuccess = (response, userData) => {
    console.log("Payment successful:", response);

    const payeeName = userData.name;
    const payeeLocation = userData.location;
    const payeeEmail = userData.email;
    const payeePostalCode = userData.postalCode;
    const payeePhoneNumber = userData.phoneNumber;

    const productsInCart = items.map((item) => ({
      id: item.id,
      name: item.title,
      quantity: productQuantities[item.id] || item.quantity,
    }));

    const data = {
      amount: cartTotal,
      createdAt: new Date(),
      productPaidFor: items.map((item) => item.title).join(", "),
      product_image: items.map((item) => item.product_image).join(", "),
      quantity: items.reduce((total, item) => total + item.quantity, 0),
      payeeName,
      payeeLocation,
      payeeEmail,
      payeePostalCode,
      payeePhoneNumber,
      productsInCart,
      status: 'Successful'

    };

    firestore
      .collection("Users")
      .doc(firebase.auth().currentUser.uid)
      .collection("Payments")
      .add(data)
      .then((docRef) => {
        console.log("Payment data saved with ID:", docRef.id);
      })
      .catch((error) => {
        console.error("Error saving payment data:", error);
      });

      // navigate()

      
    };
    
    // const navigate = <Link to={'/order'} />

  const handlePaymentClose = () => {
    console.log("Payment cancelled");
  };


  const handleOrderAttempts = (response, userData) => {
    const payeeName = userData.name;
    const payeeLocation = userData.location;
    const payeeEmail = userData.email;
    const payeePostalCode = userData.postalCode;
    const payeePhoneNumber = userData.phoneNumber;

    const productsInCart = items.map((item) => ({
      id: item.id,
      name: item.title,
      quantity: productQuantities[item.id] || item.quantity,
    }));

    const data = {
      amount: cartTotal,
      createdAt: new Date(),
      productPaidFor: items.map((item) => item.title).join(", "),
      product_image: items.map((item) => item.product_image).join(", "),
      quantity: items.reduce((total, item) => total + item.quantity, 0),
      payeeName,
      payeeLocation,
      payeeEmail,
      payeePostalCode,
      payeePhoneNumber,
      productsInCart,
      status: 'Attempt'
    };
    firestore
    .collection("Users")
    .doc(firebase.auth().currentUser.uid)
    .collection("OrderAttempt")
    .add(data)
    .then((docRef) => {
      console.log("Payment data saved with ID:", docRef.id);
    })
    .catch((error) => {
      console.error("Error saving payment data:", error);
    }); 
   };


  return (
    <div className=" p-10 pt-20 bg-gray-500">
      <h1 className="text-white text-6xl text-center m-5">
        Cart
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
            {items.map((item, index) => {
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
                          src={item.Image}
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
                  <td className="text-green-500 pr-10">$ {item.price}</td>

                  <td className="text-gray-300">Quantity ({item.quantity})</td>
                  <td>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                      className="text-4xl m-4 bg-white rounded-full duration-500 drop-shadow-2xl shadow-2xl hover:bg-red-600 hover:text-white w-10 text-red-600"
                    >
                      -
                    </button>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      className="text-4xl m-4 w-10 bg-white rounded-full drop-shadow-2xl shadow-2xl hover:bg-green-600 hover:text-white duration-500  text-green-600"
                    >
                      +
                    </button>{" "}
                    <br className="md:hidden" />
                    <button
                      variant="danger"
                      onClick={() => removeItem(item.id)}
                      className="ms-2 text-red-600 font-bold bg-white rounded-lg hover:text-white hover:bg-red-600 duration-500 p-1"
                    >
                      Remove Item
                    </button>
                  </td>
                  <td className="text-yellow-500 font-extralight md:ml-5 mt-5 pl-5">
                    shipping fee: Free Shipping
                    {/* {item.shipping_fee} */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </div>
        {!isEmpty && (
          <div
            // style={{ }}
            className="bg-light-black text-light"
          >
            <h1 className="py-2 text-green-600 ml-8 font-bold">
              <h4>Total Price: $. {cartTotal}</h4>
            </h1>
            <div className="p-2" md={4}>
              <button
                variant="danger"
                className="m-2 text-red-600 font-bold text-center border-2 border-red-500 p-1 hover:bg-red-500 hover:text-white duration-500 rounded-lg"
                onClick={() => emptyCart()}
              >
                <MdOutlineShoppingCart size="1.7rem" className="ml-8" />
                Clear Cart
              </button>

              <button
                variant="success"
              >
                <PaystackForm

                  amount={cartTotal} // Use the cart total as the payment amount
                  email={firebase?.auth()?.currentUser?.email} // Replace with the customer's email
                  onSuccess={handlePaymentSuccess}
                  onClose={handlePaymentClose}
                  handleOrderAttempts={handleOrderAttempts}
                />
              </button>
            </div>
          </div>
        )}
      </div>
         {/* <div className="bg-gray-900">
          <Homes />
        </div> */}
    </div>
  );
};

export default Cart;
