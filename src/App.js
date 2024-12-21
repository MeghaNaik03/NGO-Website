import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header';
import Home from './Components/Home';
import OurHistory from './Components/OurHistory';
import Footer from './Components/Footer';
import Whatsapp from './Components/Whatsapp';
import ScrollButton from './Components/ScrollButton';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Home />
            <Whatsapp />
            <ScrollButton />
            <Footer />
          </>
        } />

  <Route path="/ourhistory" element={
          <>
            <Header />
            <OurHistory/>
            <Whatsapp />
            <ScrollButton />
            <Footer />
          </>
        } />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
