import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { MdOutlineShoppingCart } from "react-icons/md";
import PaystackForm from "./PaystackForm";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Nav from "../component/Nav";
import Homes from "./Homes";
import MobileNav from "./MobileNav";
import { Link, useNavigate } from "react-router-dom";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { FaArrowCircleDown } from "react-icons/fa";
import Google from "./Google";
import Son from "../Assets/sabe.jpg";



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

   const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe(); // Cleanup the event listener on unmount
  }, []);


  const sm1 = require("../Assets/00.jpg")

  return (
    <div className=" p-10 pt-20 bg-[#f5fffc]"
    style={{backgroundImage: `url(${Son})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}

    >
      <h1 className="text-blue-950 font-extrabold text-6xl text-center m-20">
        
        Cart
      </h1>
      <h1 className="text-light">{isEmpty ? "Your Cart is Empty" : ""}</h1>
      <div className="justify-content-center">
        <div
          responsive="sm"
          striped
          bordered
          hover
          className="mb-5 border-2 border-gray-600 flex rounded-md p-2 items-center justify-center text-center"
        >
          <tbody>
            {items.map((item, index) => {
              return (
                <tr
                  key={index}
                  className='w-auto m-20 cursor-pointer bg-white text-center shadow-2xl self-center lg:flex grid grid-cols p-10 rounded-2xl'
                  // className="md:inline justify-center text-center w-[100%]"
                >
                  <td>
                    <div
                      className="rounded-lg ml-6  md:flex flex-col text-center justify-center mb-0 drop-shadow-2xl shadow-2xl"
                      style={{
                        background: "white",
                        height: "8rem",
                        overflow: "hidden",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div className="p-0 text-center rounded-md">
                        <img
                          // src={'../Assets/21.jpg'}
                          src={sm1}
                          // src={item.image}
                          className="w-48  p-3  text-center shadow-2xl drop-shadow-2xl hover:scale-110 duration-500"
                          alt={item.title}
                        />
                      </div>
                    </div>
                  </td>
                    <div className="p-10 items-center justify-center flex-col flex font-extrabold text-gray-800">
                      <p>
                        {item.name}
                        </p>
                  <td className="text-green-500 p-0">${item.price} USD Each</td>
                    </div>

                  <div className="flex items-center justify-center">
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                      className="text-4xl p-5 m-4 bg-white rounded-full duration-500 drop-shadow-2xl shadow-2xl hover:bg-red-600 hover:text-white w-20 text-red-600"
                    >
                      -
                    </button>
                    <p className="w-20 bg-white shadow-2xl drop-shadow-2xl rounded-full p-5">
                      {item.quantity}
                      </p>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      className="text-4xl m-4 p-5 w-20 bg-white rounded-full drop-shadow-2xl shadow-2xl hover:bg-green-600 hover:text-white duration-500  text-green-600"
                    >
                      +
                    </button>
                  </div>
                    <button
                      variant="danger"
                      onClick={() => removeItem(item.id)}
                      className=" text-red-600 font-bold bg-white rounded-lg hover:text-white hover:bg-red-600 duration-500 w-80 h-20 m-5 self-center"
                    >
                      Remove Item
                    </button>
                </tr>
              );
            })}
          </tbody>
        </div>



        {!isEmpty && (
          <div
            // style={{ }}
            className="bg-light-black text-light p-10 md:flex grid items-center justify-center"
          >
            <div className="p-2 md:flex" md={4}>
              <div
                variant="danger"
                className="m-2 flex font-bold  text-center justify-center items-center hover:text-red-500 hover:bg-white drop-shadow-2xl shadow-2xl border-2 border-red-500 p-10 bg-red-500 text-white duration-500 rounded-lg"
                onClick={() => emptyCart()}
              >
                <MdOutlineShoppingCart size="1.7rem" className="mr-2" />  Clear Cart
              </div>

              {/* <button
                variant="success"
              >
                <PaystackForm

                  amount={cartTotal} // Use the cart total as the payment amount
                  email={firebase?.auth()?.currentUser?.email} // Replace with the customer's email
                  onSuccess={handlePaymentSuccess}
                  onClose={handlePaymentClose}
                  handleOrderAttempts={handleOrderAttempts}
                />
              </button> */}
            </div>
            <h1 className=" bg-white p-10 rounded-lg  drop-shadow-2xl shadow-2xl m-2 text-green-600 lg:ml-8 font-bold">
              <h4>Total Price: ${cartTotal} USD</h4>
            </h1>
          </div>
        )}
        {
  user ? 
<div
            // style={{ }}
            className=" w-[100%] grid items-center justify-center"
          >
<p 
      className=" text-center items-center flex font-bold pb-10 self-center justify-center text-gray-600 "
      // onClick={handleNav} 
      >
       Pay With <FaArrowCircleDown size="1.7rem" className="ml-2" />
      </p>

            <PayPalScriptProvider
        // options={{ "client-id": import.meta.env.VITE_CLIENT_ID }}
      >
        <PayPalButtons
        //   createOrder={(data, actions) => {
        //     return actions.order.create({
        //       purchase_units: [
        //         {
        //           amount: {
        //             value: "13.99",
        //           },
        //         },
        //       ],
        //     });
        //   }}
        //   onApprove={async (data, actions) => {
        //     const details = await actions.order.capture();
        //     const name = details.payer.name.given_name;
        //     alert("Transaction completed by " + name);
        //   }}
        />
      </PayPalScriptProvider>
      </div>
      :
      <div
            // style={{ }}
            className=" w-[100%] grid items-center justify-center"
          >
      {/* <div
      className="m-2 border-2 border-green-500 hover:text-green-500 hover:bg-white text-center items-center flex font-bold p-10 drop-shadow-2xl shadow-2xl text-white rounded-lg"
      // onClick={handleNav} 
      > */}
                        {/* <MdOutlineShoppingCart size="1.7rem" className="mr-2" /> */}
       
       <Google title={'Pay Now'}/>
      {/* </div> */}
      </div>
}



      </div>
         {/* <div className="bg-gray-900">
          <Homes />
        </div> */}
    </div>
  );
};

export default Cart;
