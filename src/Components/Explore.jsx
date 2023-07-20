import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import legs from "../Assets/g168.png";

const Explore = () => {
  const trandingSliderRef = useRef(null);

  useEffect(() => {
    const trandingSlider = new Swiper(trandingSliderRef.current, {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 500,
        disableOnInteraction: false,
      },
    });

    return () => {
      trandingSlider.destroy();
    };
  }, []);

  // Slider data array
  const sliderData = [
    {
      price: "$20",
      name: "Special Pizza",
      rating: "4.5",
      image: legs,
    },
    {
      price: "$20",
      name: "Meat Ball",
      rating: "4.5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxsRsAEpt-5wwEItyVY_CdBAgoxBjqvSE8Q&usqp=CAU",
    },
    {
      price: "$20",
      name: "Asuquo Ball",
      rating: "4.5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFN6mNoryy6ynJnbVJx-eoniEJlapSTvC6ag&usqp=CAU",
    },
    {
      price: "$20",
      name: "sea ouy Ball",
      rating: "4.5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCxsRsAEpt-5wwEItyVY_CdBAgoxBjqvSE8Q&usqp=CAU",
    },
    {
      price: "$20",
      name: "motacata Pizza",
      rating: "4.5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVv_NLgONGe_Cpht4K14DOwxLEI7Yb-Qf6bw&usqp=CAU",
    },
    {
      price: "$20",
      name: "we are Ball",
      rating: "4.5",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFN6mNoryy6ynJnbVJx-eoniEJlapSTvC6ag&usqp=CAU",
    },
    // Add more slider data objects as needed
  ];

  return (
    <div className="container  pt-96">
      <div className="swiper tranding-slider" ref={trandingSliderRef}>
        <div className="swiper-wrapper">
          {sliderData.map((slide, index) => (
            <div className="swiper-slide tranding-slide" key={index}>
              <div className="tranding-slide-img">
                <img src={slide.image} alt="Tranding" />
              </div>
              <div className="tranding-slide-content">
                <h1 className="food-price">{slide.price}</h1>
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">{slide.name}</h2>
                  <h3 className="food-rating">
                    <span>{slide.rating}</span>
                    <div className="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="tranding-slider-control">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
