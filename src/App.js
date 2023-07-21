import React, { useEffect, useState } from "react";
import Home from "./Home";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaShoppingCart, FaUserCog } from "react-icons/fa";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import firebase from "./firebaseconfig";
import { BiShoppingBag } from "react-icons/bi";
import Google from "./Components/Google";
import Nave from "./Components/Nave";
import Footer from "./Components/Footer";
import SocialLinks from "./Components/SocialLinks";
// import Auth from "./Auth";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";

function App() {
  const { isEmpty, totalItems } = useCart();

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const [user, setUser] = useState(null);

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
    <div className="App">
      <header className="App-header">
        <Nave />
        <div>
          <Home />
        </div>
        <Footer />
        {/* <div className="fixed z-50 md:top-20 top-10 left-[5%] md:left-[95%]">
          <FaUserCog color="white" size={30} onClick={handleNav} />
          <i className="w-2 h-2 top-0 left-3 bg-red-600 rounded-full absolute"></i>
          <div
            className={
              !nav
                ? "absolute w-[1220%] h-[1000%] md:-left-80 -left-2 bg-white rounded-md md:mt-5 mt-10 shadow-2xl drop-shadow-2xl p-10"
                : "fixed left-[-110%]"
            }
          >
            {user ? (
              <div className="text-center gap-10 flex-row justify-center">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="rounded-full ml-10 mb-3"
                />
                <p>{user.email}!</p>
                <p>Welcome, {user.displayName}!</p>
                <button
                  onClick={handleSignOut}
                  className="border-2 border-red-400 p-1 rounded-lg"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button onClick={handleSignIn} className="flex-col text-center">
                <i>Sign In with Google</i> <FcGoogle size={40} />
              </button>
            )}
            <Link
              to={"/shop"}
              className="ml-24 rounded-lg border-2 border-green-500 p-1 absolute top-20 left-32"
            >
              Visit Shop
            </Link>
          </div>
        </div> */}

        {/* <Google /> */}

        <h1 className="font-bold fixed right-[10%] z-50 md:right-[5%] bottom-[5%]">
          <Link to="/cart" className="">
            <BiShoppingBag
              size="55"
              color="black"
              className="bg-white rounded-full shadow-2xl drop-shadow-2xl shadow-gray-700 p-5"
            />
            {!isEmpty && (
              <span className="ml-1 absolute top-0 font-bold text-x text-white rounded-full w-11 h-11 text-center bg-orange-600">
                {totalItems}
              </span>
            )}
            <span style={{ marginLeft: !isEmpty ? "-13px" : 0 }}>&nbsp;</span>
          </Link>
        </h1>
        <SocialLinks />
      </header>
    </div>
  );
}

export default App;
