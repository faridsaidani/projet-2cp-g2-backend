import React from "react";
import Header from "../../components/Header";
import AboutUsBody from "../../components/ABOUTUS/AboutUsBody";
import Footer from "../../components/Footer";

const AboutUs = () => {
  return (
    <>
      <Header currentPage="about" />
      <body>
        <AboutUsBody />
      </body>
      <Footer />
    </>
  );
};

export default AboutUs;
