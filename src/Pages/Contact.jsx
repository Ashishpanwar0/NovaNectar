import React from 'react';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import ContactBg from '../Components/ContactBg.jsx';
import ContactForm from '../Components/ContactForm.jsx';
import Map from '../Components/Map.jsx';

function Contact() {
  return (
   <>
    <Navbar/>
    <ContactBg/>
    <ContactForm/>
    <Map/>
    <Footer/>
   </>
  )
}

export default Contact;