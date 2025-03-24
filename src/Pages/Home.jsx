import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner';
import Laxurious from '../Components/Laxurious';
import Facilities from '../Components/Facilities';
import Testimonies from '../Components/Testimonies';
import Footer from '../Components/Footer';

export const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Facilities/>
    <Laxurious/>
    <Testimonies/>
    <Footer/>
    </>
  )
}

export default Home;
