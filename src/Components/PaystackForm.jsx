import React, { useEffect, useState } from "react";
import { usePaystackPayment } from "react-paystack";
import firebase from "../firebaseconfig";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const PaystackForm = ({ amount, email, onSuccess, onClose, handleOrderAttempts }) => {
  const [userData, setUserData] = useState({
    name: "",
    email,
    phoneNumber: "",
    postalCode: "",
    location: "",
  });

  const config = {
    reference: new Date().getTime().toString(),
    email: userData.email,
    amount: amount * 100, // Paystack accepts amount in kobo, so multiply by 100
    publicKey: "pk_test_0508eb7e5681134df68972a96713ebbc520fb7db", // Replace with your Paystack public key
    // publicKey: "pk_test_a6299b3c7d13aff9b8fe0ffa7a5dc16a6442d86f", // Replace with your Paystack public key
  };

  const onSuccessCallback = (response) => {
    // Handle successful payment
    onSuccess(response, userData);
  };

  const onCloseCallback = (response) => {
    // Handle payment cancellation
    onClose();
    handleOrderAttempts(response, userData);
  };

  const onOrderAttempt = (response) => {
    // Handle payment cancellation
    handleOrderAttempts(response, userData);
  };

  const initializePayment = usePaystackPayment(config);

  useEffect(() => {
    // Check if user is already signed in
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { displayName, photoURL } = user;
        const updatedUserData = { ...userData, name: displayName };
        setUserData(updatedUserData);
      }
    });

    return () => unsubscribe(); // Cleanup the event listener on unmount
  }, []);

  const handlePayment = () => {
    const user = firebase.auth().currentUser;

    if (user) {
      initializePayment(onSuccessCallback, onCloseCallback);
    } else {
      // User is not signed in, show Firebase Google popup auth window
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          const { displayName, photoURL } = result.user;
          const updatedUserData = { ...userData, name: displayName };
          setUserData(updatedUserData);
          initializePayment(onSuccessCallback, onCloseCallback);
        })
        .catch((error) => {
          console.error(error);
        });
        
    }
  };

  const navigate = useNavigate()


  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const [nav1, setNav1] = useState(true);

  const handleNav1 = () => {
    setNav1(!nav1);
  };

  return (
    <div className="">
      { !nav ?
      <div
        className={
          !nav
            ? "bg-black h-screen z-50 p-0 md:p-10 fixed top-0 right-0 left-0 text-white"
            : "md:hidden "
        }
      >
      <div
        className=" md:flex gap-5 justify-center items-center p-0"
      >
        <div className="mt-20 md:flex gap-5">
        <div>
          <label>Full Name</label>
          <br/>
          <input
          className="bg-[#333] p-2"
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email Address</label>
          <br/>
          <input
                    className="bg-[#333] p-2"
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <br/>
          <input
                    className="bg-[#333] p-2"
                    type="text"
                    name="phoneNumber"
                    value={userData.phoneNumber}
                    onChange={handleChange}
                    />
        </div>
        <div>
          <label>Delivery Address</label>
          <br/>
          <input
                    className="bg-[#333] p-2"
                    type="text"
                    name="location"
                    value={userData.location}
                    onChange={handleChange}
                    />
                    <br/>
                    <Link to={'/delivery'} className="hover:text-green-500" >Delivery Policy</Link>
        </div>
        <div>
          <label> Delivery Note </label>
                    <br/>
          <input
                              className="bg-[#333] p-2"
            type="text"
            name="postalCode"
            value={userData.postalCode}
            onChange={handleChange}
          />
        </div>
      
      </div> 
      </div> 
        <br />
        {/* <button
          onClick={handlePayment}
          className="border-2 border-green-600 rounded-lg w-40 h-16 bg-green-600"
        >
          Make Payment
        </button> */}

        <div className="">
{/*     
        <button
          onClick={handlePayment}
          className="rounded-lg md:w-[53%] w-[80%] m-5 h-14 bg-white"
        >
          <div className="flex items-center justify-center " >

                            <img
                                // resizeMode='contain'
                                style={{ width: 30, height: 30, }}
                                src='https://static-00.iconduck.com/assets.00/paystack-icon-512x504-w7v8l6as.png'/> 
                                <p className="text-black ml-2 text-lg">Pay With PayStack </p>
                                </div>
                   </button> */}
        <br />
        <button
          onClick={handleNav}
          className=" mt-5 w-[53%]  md:mt-0 rounded-lg"
        >
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
      </button>
        <br />
        <button
          onClick={handleNav}
          className="border-2 mt-5 w-[53%]  md:mt-0 border-white rounded-lg h-14 bg-gray-700"
        >
          cancel
        </button>
      </div> 
      </div> 
      :
      <button 
      className="m-2 border-2 border-green-500 hover:text-green-500 hover:bg-white text-center items-center flex font-bold p-10 drop-shadow-2xl shadow-2xl bg-green-500 text-white rounded-lg"
      onClick={handleNav} >
                        <MdOutlineShoppingCart size="1.7rem" className="mr-2" />
       Pay Now
      </button>
      }
    </div>
  );
};

export default PaystackForm;
