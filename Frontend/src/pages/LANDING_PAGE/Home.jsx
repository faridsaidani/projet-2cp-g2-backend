import React from 'react'
import Header from "../../components/Header";
import GetStarted from "../../components/Home page/GetStarted";
import Blogs from "../../components/Home page/Blogs";
import HowWorks from "../../components/Home page/HowWorks";
import BestTherapist from "../../components/Home page/BestTherapist";
import Clients from "../../components/Home page/Clients";
import Quizees from "../../components/Home page/Quizees";
import FAQ from "../../components/Home page/FAQ";
import Footer from "../../components/Footer";
const Home = () => {
  return (
    <div>
      <Header/>
      <GetStarted/>
      <Blogs/>
      <HowWorks/>
      <BestTherapist/>
      <Clients/>
      <Quizees/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Home