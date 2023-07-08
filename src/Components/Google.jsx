import React, { useEffect, useState } from "react";
// import Home from "./Home";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaShoppingCart, FaUserCog } from "react-icons/fa";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import firebase from "../firebaseconfig";
import { BiShoppingBag } from "react-icons/bi";
// import Auth from "./Auth";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import firebase from "firebase/compat/app";
import "firebase/compat/firestore";



// const firebaseConfig = {
//   // Your Firebase config
//   apiKey: "AIzaSyCRSVN6rIpkPQKLz77NFcES36Fpe665T9k",
//   authDomain: "nextberries-cb5b9.firebaseapp.com",
//   projectId: "nextberries-cb5b9",
//   storageBucket: "nextberries-cb5b9.appspot.com",
//   messagingSenderId: "44749615279",
//   appId: "1:44749615279:web:0b3e110f248c8e8b3ae45a",
//   measurementId: "G-9QZ27VRVHL",
// };

// firebase.initializeApp(firebaseConfig);

// const firestore = firebase.firestore();


function Google() {
    const { isEmpty, totalItems } = useCart();

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const [user, setUser] = useState(null);

  const [CSuser, setCSUser] = useState();
  //fetch the user data from firebase
  // useEffect(() => {
  //   const subscriber = firebase.firestore()
  //       .collection('Users')
  //       .doc(firebase.auth().currentUser.uid)
  //       .onSnapshot(documentSnapshot => {
  //           setCSUser(documentSnapshot.data());
  //       });
    
  //   // Stop listening for updates when no longer required
  //   return () => subscriber();
  //   }, []);

  //   console.log(CSuser)

  useEffect(() => {
    // Check if user data exists in local storage
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

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

  const handleLogout = () => {
    firebase.auth().signOut();
  };


  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, photoURL } = result.user;
        const userData = { displayName, photoURL };

        // Store user data in local storage
        localStorage.setItem("userData", JSON.stringify(userData));

        setUser(userData);

        firebase.firestore()
        .collection('Users')
        .doc(result.user.uid)
        .set({
            uid: result.user.uid, displayName: result.user.displayName, 
            phoneNumber: result.user.phoneNumber, photoURL: result.user.photoURL, fullname: '', email: result.user.email,
           badge: false,
        createdAt: new Date(),
      })
        
      })
      .catch((error) => {
        console.error(error);
      });

  };

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Remove user data from local storage
        localStorage.removeItem("userData");

        setUser(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div 
    // className="fixed z-50 md:top-20 top-10 left-[5%] md:left-[95%]"
    >

{ user ?
    <div className="cursor-pointer">

    {/* <FaUserCog color="white" size={25} onClick={handleNav} /> */}
    <p onClick={handleNav} >

    <img
            src={user.photoURL}
            alt={user.displayName}
            className="rounded-full h-8 w-8"
            />
            </p>
    {/* <i className="hidden md:flex w-2 h-2 top-5 right-8 bg-red-600 rounded-full absolute"></i> */}
    </div>

    :
    <div className="font-bold text-lg cursor-pointer border-white z-50 border-2 " onClick={handleNav} >
    <p className=" px-6 py-1 ">

    Connect
    </p>
  </div >
}

    {
         !nav ?
    <div
      className={
        !nav
          ? "hidden md:flex w-[27%] fixed items-center right-10 text-black bg-white rounded-md md:mt-5 mt-10 shadow-2xl drop-shadow-2xl p-10"
          : "null"
      }
    >
      {user ? (
        <div className="text-center gap-10 flex-row justify-center">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="rounded-full ml-10 mb-3"
          />
          <p>{user.email}</p>
          <p>Welcome, {user.displayName}!</p>
          <button
            onClick={handleSignOut}
            className=" bg-slate-200 z-50 border-2 p-1 rounded-lg"
          >
                      <p className="px-6 py-1 flex-row flex items-center" >
            Sign Out
            </p>
          </button>
        </div>
      ) : (
        <button onClick={handleSignIn} className="flex-row flex text-center bg-slate-200 z-50 border-2 ">
          <p className="px-6 py-1 flex-row flex items-center" >
          <FcGoogle size={40} />  
            Sign In with Google
            </p>
        </button>
      )}
      {/* <Link
        to={"/shop"}
        className="ml-24 mt-10 rounded-lg border-2 border-green-500 p-1 "
      >
        Visit Shop
      </Link> */}
    </div>
    :
    null

    }



    {/* Mobile Logins */}

    {
         !nav ?
    <div
      className={
        !nav
          ? "md:hidden absolute items-center text-black bg-white rounded-md md:mt-5 mt-10 shadow-2xl drop-shadow-2xl p-10"
          : "null"
      }
    >
      {user ? (
        <div className="text-center gap-10 flex-row justify-center">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="rounded-full ml-10 mb-3"
          />
          <p>{user.email}</p>
          <p>Welcome, {user.displayName}!</p>
          <button
            onClick={handleSignOut}
            className=" bg-slate-200 z-50 border-2 p-1 rounded-lg"
          >
                      <p className="px-6 py-1 flex-row flex items-center" >
            Sign Out
            </p>
          </button>
        </div>
      ) : (
        <button onClick={handleSignIn} className="flex-row flex text-center bg-slate-200 z-50 border-2 ">
          <p className="px-6 py-1 flex-row flex items-center" >
          <FcGoogle size={40} />  
            Sign In with Google
            </p>
        </button>
      )}
      {/* <Link
        to={"/shop"}
        className="ml-24 mt-10 rounded-lg border-2 border-green-500 p-1 "
      >
        Visit Shop
      </Link> */}
    </div>
    :
    null

    }
  </div>
    )
}

export default Google