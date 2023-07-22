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
import Son from "../Assets/sabe.jpg";



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


function Google({title}) {
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
    <div className="cursor-pointer z-50">

    {/* <FaUserCog color="white" size={25} onClick={handleNav} /> */}
    <p onClick={handleNav} >

    <img
            src={user.photoURL}
            alt={user.displayName}
            className="rounded-full h-20 w-20  drop-shadow-2xl shadow-2xl"
            />
            </p>
    {/* <i className="hidden md:flex w-2 h-2 top-5 right-8 bg-red-600 rounded-full absolute"></i> */}
    </div>

    :
          <div className=" text-[#28af60] drop-shadow-2xl shadow-2xl bg-slate-200 font-bold p-3 rounded-lg w-40 text-center cursor-pointer" style={{zIndex: 100}} onClick={handleNav}>{title}</div>

  //   <div className="font-bold text-lg cursor-pointer border-white z-50 border-2 " onClick={handleNav} >
  //   <p className=" px-6 py-1 ">

  //   Sign In
  //   </p>
  // </div >
}

    {
         !nav ?
    <div

    style={{backgroundImage: `url(${Son})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      className={
        !nav ? 'fixed right-0 top-0 md:w-[40%] w-[100%] h-[100%] p-5 overflow-hidden border-green-500 border-[1px] ease-in-out duration-1000 drop-shadow-2xl':'hidden md:flex'
        // !nav
        //   ? "hidden md:flex w-[27%] fixed items-center right-10 text-black bg-white rounded-md md:mt-5 mt-10 shadow-2xl drop-shadow-2xl p-10"
        //   : "null"
      }
    >
          <div className="bg-slate-200 text-[#28af60] drop-shadow-2xl shadow-2xl font-bold p-3 z-50 rounded-lg w-40 text-center cursor-pointer" style={{zIndex: 100}} onClick={handleNav}>{'Back'}</div>

      {user ? (
        <div className="text-center flex items-center gap-2 m-20 flex-col justify-center">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="rounded-full border-green-600 border-2 ml-10 mb-3"
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
        <>
          <div className="p-5 items-center justify-center flex-col mt-48  flex font-extrabold text-gray-800">
        
                  <td className="text-green-50 p-0">To Help You Proceed In Getting Our Services Please</td>
                    </div>
        <div onClick={handleSignIn} className="flex-row flex cursor-pointer rounded-lg text-center mx-20 items-center drop-shadow-2xl shadow-2xl justify-center bg-slate-200 z-50 border-2 ">
          <p className="px-6 py-1 flex-row flex items-center" >
          <FcGoogle size={40} />  
            Sign In with Google
            </p>
        </div>
        </>
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

  </div>
    )
}

export default Google