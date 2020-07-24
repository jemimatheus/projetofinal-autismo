import React from 'react'
import SecImage from '../../components/SecImage/SecImage'
import Navbar from '../../components/Navbar/Navbar'
import Autismo from '../../components/Autismo/Autismo'
import Familia from '../../components/Familia/Familia'
import Sociedade from '../../components/Sociedade/Sociedade'
import Depoimentos from   '../../components/Depoimentos/Depoimentos'
import Footer from '../../components/Footer/Footer'
import '../../components/Autismo/autismo.css'
import {BrowserRouter}from  "react-router-dom";



const Home = () => {
    
	return (
     
    <BrowserRouter>
      <Navbar />
      <SecImage />
      <Autismo />
      <Familia />
      <Sociedade/>
      <Depoimentos />
      <Footer />
    </BrowserRouter>
  );
    }

export default Home;


