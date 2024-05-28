import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/home';
import Men from './pages/men';
import Navbar from './pages/navbar';
import Women from './pages/women';
import Footer from './pages/Footer';
import Contact from './pages/contact';
import Rabat from './pages/Rabat';
import Marseille from './pages/MARSEILLE';
import Services from './pages/Services';
import Nosmannequins from './pages/Nosmannequins';
import ModelForm from './pages/postuler';
import LoadingSpinner from './pages/LoadingSpinner';





function App() {
  return (
    <Router> 
      <div>
      <Navbar/>
        <Routes> 
             <Route path="/" element={<Home/>} /> 
             <Route path="/men" element={<Men/>} /> 
             <Route path="/women" element={<Women/>} /> 
             <Route path="/contact" element={<Contact />} /> 
             <Route path="/rabat" element={<Rabat />} /> 
             <Route path="/Marseille" element={<Marseille />} /> 
             <Route path="/services" element={<Services />} /> 
             <Route path="/Nosmannequins" element={<Nosmannequins />} /> 
             <Route path="/model" element={<ModelForm />} /> 
             <Route path="/tt" element={<LoadingSpinner />} /> 
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
