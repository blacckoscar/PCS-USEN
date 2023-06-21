import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Hero from './Components/Hero';
import Nave from './Components/Nave';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Services from './Components/Services';
import SocialLinks from './Components/SocialLinks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
        <Nave  />
        <Routes>
          <Route path='/' element={<Hero  />} />
          <Route path='/about' element={<About  />} />
          <Route path='/contact' element={<Contact  />} />
          <Route path='/services' element={<Services  />} />
        </Routes>
        <Footer  />
        </>
        <SocialLinks />
        
      </header>
    </div>
  );
}

export default App;
