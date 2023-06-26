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
import Clients from './Components/Clients';
import Team from './Components/Team';
import Pricing from './Components/Pricing';

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
          <Route path='/clients' element={<Clients  />} />
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
