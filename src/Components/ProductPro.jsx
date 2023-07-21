import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import Homes from "./Homes";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
import Nav from "../component/Nav";
import "./pro.css"
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import MobileNav from "./MobileNav";
import S1 from "../Assets/next.mp4";
import S2 from "../Assets/reside.mp4";
import S3 from "../Assets/slide_0-pc.mp4";
import S4 from "../Assets/slide_1-pc.mp4";
import S5 from "../Assets/slide_2-pc.mp4";
import S6 from "../Assets/slide_4-pc.mp4";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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




  
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
export default function ProductPro() {
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
        loop: true,
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
        }, 5000); // Adjust the interval value (in milliseconds) for auto sliding

        return () => {
          clearInterval(timer);
          if (trandingSlider) {
            trandingSlider.loopDestroy();
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

  const Vid = [
    {
        vid: S1
    },
    {
        vid: S2
    },
    {
        vid: S3
    },
    {
        vid: S4
    },
    {
        vid: S5
    },
    {
        vid: S6
    }
  ]

  const [isOpen, setIsOpen] = useState(false);
  const [isIconClosed, setIsIconClosed] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  return (
    <div className="">
    <div className=" bg-no-repeat bg-cover ">
      {/* <img src={bg} alt="" className="w-[100%]" /> */}
      <div className="swiper md:h-[1000px] h-screen tranding-slider g-gradient-to-r from-slate-00 via-slate-300 to-slate-50 
      bg-black 
      bg-no-repeat md:bg-cover bg-center bg-cover">
        <div
          ref={trandingSliderRef}
          className=" md:ml-[47%] ml-[0%] text-center md:w-[17.9%]"
        >
          <div
            className="swiper-wrapper  md:mt-20 z-20"
            ref={trandingSliderRef}
          >
            {Vid.map((slide, index) => (
              <div
                className="swiper-slide tranding-slide border- md:w-[40%] border-red-50"
                key={index}
              >
                <Link to={`/product-details/${slide.id}`}>
                  <div
                  // className="asuman"
                  style={{borderTopRightColor: "red", border: "solid"}}
                   className="tranding-slide-img md:-mt-[20%] relative border-red-500 text-center "
                  >
                    {/* <p className="text-white font-bankGothic md:-top-10 md:-left-6 left-28  -top-5 absolute">
                      {slide.name}
                    </p> */}
                    <video
                      src={slide.vid}
                      alt={`Slide ${index + 1}`}
                      loop
                      autoPlay
                      className=" md:ml-0 md:p-1 p-0 w-[100%] h-[100%] mt-0 object-cover md:mt-20"
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

    )
}
