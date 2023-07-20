import React from "react";
import Hero from "./Components/Hero";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
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
