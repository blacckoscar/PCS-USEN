import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Hero from './Components/Hero';
import Nave from './Components/Nave';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Services from './Components/Services';
import SocialLinks from './Components/SocialLinks';
import Clients from './Components/Clients';
import Team from './Components/Team';
import Pricing from './Components/Pricing';
import Cart from './Components/Cart';
import { BiShoppingBag } from 'react-icons/bi';
import { useCart } from 'react-use-cart';

function App() {
  const { isEmpty, totalItems } = useCart();

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="font-bold fixed left-[80%] z-50 md:left-[92%] top-[90%]">
          <Link to="/cart" className="">
            <BiShoppingBag
              size="55"
              color="black"
              className="bg-white rounded-full shadow-2xl drop-shadow-2xl shadow-gray-700 p-5"
            />
            {!isEmpty && (
              <span className="ml-5 absolute top-0 font-bold text-x text-white rounded-full w-6 text-center bg-orange-600">
                {totalItems}
              </span>
            )}
            <span style={{ marginLeft: !isEmpty ? "-13px" : 0 }}>&nbsp;</span>
          </Link>
        </h1>
        <>
        <Nave  />
        <Routes>
          <Route path='/' element={<Hero  />} />
          <Route path='/about' element={<About  />} />
          <Route path='/contact' element={<Contact  />} />
          <Route path='/services' element={<Services  />} />
          <Route path='/clients' element={<Clients  />} />
          <Route path='/cart' element={<Cart  />} />
          <Route path='/team' element={<Team  />} />
          <Route path='/pricing' element={<Pricing  />} />
        </Routes>
        <Footer  />
        </>
        <SocialLinks />
        
      </header>
    </div>
  );
}

export default App;
