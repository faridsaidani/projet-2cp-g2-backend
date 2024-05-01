import React from "react";
import Header from "../../components/Header";
import ContactUsBody from "../../components/CONTACTUS/ContactUsBody";
import Footer from "../../components/Footer";

const ContactUs = () => {
  return (
    <div>
      <Header currentPage="contact" />
      <ContactUsBody />
      <Footer />
    </div>
  );
};

export default ContactUs;
