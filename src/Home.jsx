import React from "react";
import Hero from "./Components/Hero";
import Nav from "./component/Nav";
import { Route, Routes } from "react-router-dom";
import Shop from "./Components/Shop";
import Explore from "./Components/Explore";
import Cart from "./Components/Cart";
import ProductDetails from "./Components/ProductDetails";
import Collaborations from "./component/Collaborations";
import AboutUs from "./component/About";
import Order from "./Components/Order";
import DeliveryPolicy from "./Components/DeliveryPolicy";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import ProductPro from "./Components/ProductPro";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Clients from "./Components/Clients";
import Pricing from "./Components/Pricing";
// import Homes from "./components/Homes";

const Home = () => {
  return (
    <div 
    // style={{backgroundColor: '#000'}}
    >
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/pro" element={<ProductPro />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetails />}
        />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/she" element={<Explore />} />
        <Route path="/order" element={<Order />} />
        <Route path="/delivery" element={<DeliveryPolicy />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path='/about' element={<About  />} />
          <Route path='/contact' element={<Contact  />} />
          <Route path='/services' element={<Services  />} />
          <Route path='/clients' element={<Clients  />} />
          <Route path='/pricing' element={<Pricing  />} />
      </Routes>
    </div>
  );
};

export default Home;
