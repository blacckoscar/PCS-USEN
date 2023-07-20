import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import Homes from "./Homes";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import Nav from "../component/Nav";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import MobileNav from "./MobileNav";

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyCRSVN6rIpkPQKLz77NFcES36Fpe665T9k",
  authDomain: "nextberries-cb5b9.firebaseapp.com",
  projectId: "nextberries-cb5b9",
  storageBucket: "nextberries-cb5b9.appspot.com",
  messagingSenderId: "44749615279",
  appId: "1:44749615279:web:0b3e110f248c8e8b3ae45a",
  measurementId: "G-9QZ27VRVHL",
  // ...
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Shop = () => {
  const trandingSliderRef = useRef(null);
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    const fetchSliderData = async () => {
      const db = firebase.firestore();
      const collection = db.collection("Products");

      try {
        const snapshot = await collection.get();
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setSliderData(data);

        const trandingSlider = new Swiper(trandingSliderRef.current, {
          // Initialize Swiper instance
        //   direction: "horizontal",
        // effect: "contain",
        // grabCursor: true,
        // centeredSlides: true,
        // loop: true,
        // slidesPerView: "auto",
        // coverflowEffect: {
        //   rotate: 0,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 2.5,
        // },
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
        // autoplay: {
        //   delay: 500,
        //   disableOnInteraction: false,
        // },
          // ...
        });

        const timer = setInterval(() => {
          if (trandingSlider && trandingSliderRef.current) {
            trandingSlider.slideNext();
          }
        }, 2000); // Adjust the interval value (in milliseconds) for auto sliding

        return () => {
          clearInterval(timer);
          if (trandingSlider) {
            trandingSlider.destroy();
          }
        };
      } catch (error) {
        console.log("Error fetching slider data:", error);
      }
    };

    fetchSliderData();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsIconClosed(!isIconClosed);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isIconClosed, setIsIconClosed] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  return (
    <div className="">
      <div className=" bg-no-repeat bg-cover ">
        {/* <img src={bg} alt="" className="w-[100%]" /> */}
        <div className="swiper md:h-[1000px] h-screen tranding-slider g-gradient-to-r from-slate-00 via-slate-300 to-slate-50 bg-[url('https://firebasestorage.googleapis.com/v0/b/nextberries-9957f.appspot.com/o/special%2FWEBSITE%20PROTOTYPE.png?alt=media&token=045aa610-8b03-468d-9166-5054bbb018f9')] bg-no-repeat md:bg-cover bg-center bg-cover">
          <div
            ref={trandingSliderRef}
            className=" md:ml-[47%] ml-[0%] text-center md:w-[17.9%]"
          >
            <div
              className="swiper-wrapper  md:mt-36 z-20"
              ref={trandingSliderRef}
            >
              {sliderData.map((slide, index) => (
                <div
                  className="swiper-slide tranding-slide border- md:w-[40%] border-red-50"
                  key={index}
                >
                  <Link to={`/product-details/${slide.id}`}>
                    <div className="tranding-slide-img md:-mt-[20%] relative text-center md:w-[40%]">
                      <p className="text-white font-bankGothic md:-top-10 md:-left-6 left-28  -top-5 absolute">
                        {slide.name}
                      </p>
                      <img
                        src={slide.product_image}
                        alt={`Slide ${index + 1}`}
                        className=" md:ml-0 ml-[32%] mt-8 h-80 md:mt-20"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-900">
          <Homes />
        </div>
      </div>

      <Nav />
      <MobileNav />
    </div>
  );
};

export default Shop;
