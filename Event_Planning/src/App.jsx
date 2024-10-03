import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Contact from './components/Contact/Contact.jsx';
import Villas from './components/Villa/Villas';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';

import SingleVilla from './components/Villa/SingleVilla';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/termsandconditions' element={<TermsAndConditions />} />
          <Route path='/villas' element={<Villas />} />
          <Route path='/villa/:id' element={<SingleVilla />} />
        </Routes>
        <Footer />
      </Router>




    </>
  )
}

export default App;