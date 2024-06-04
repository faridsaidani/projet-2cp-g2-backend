import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ContactUsForm from "./ContactUsForm";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
{
  /*no problem conserning sizing*/
}
const ContactUsBody = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-8 bg-secwhite">
      {/*ContactUs + contact informaton */}
      <div className="flex flex-col justify-center items-center w-[100%] h-[70%] bg-home bg-center bg-cover">
        {/*Title*/}
        <div className="mt-20 w-[50%] flex flex-col justify-center items-center">
          <div className="bg-seclight pt-1 px-4 flex  justify-center  rounded-l-lg border-sechover border-r-4">
            <h2 className="text-6xl font-bold font-urbanist text-primdark ">
              Contact Us
            </h2>
          </div>
          <p className="text-center mt-2">
              Feel free to reach out to us at any time. Whether you're a therapist interested in joining our platform or a patient seeking support, we are here to assist you. Our team is dedicated to ensuring a seamless experience for all users. For inquiries, partnership opportunities, or technical assistance, please use the contact form below. We look forward to hearing from you and supporting your mental health journey.
          </p>
        </div>
        {/*Contact info*/}
        <div className="bg-primdark rounded-b-xl p-4 h-[20%] flex items-center w-[80%] justify-between space-x-6 px-20 py-10 mt-20 ">
              <div className="flex flex-col justify-between items-center w-[30%] px-4 py-6 bg-sechover rounded-lg text-secwhite">
                <MdEmail /><p>support@nutritionist.com</p>
              </div>
              <div className="flex flex-col justify-between items-center w-[30%] px-4 py-6 bg-sechover rounded-lg text-secwhite">
                <MdLocalPhone /><p>+91 00000 00000</p>
              </div>
              <div className="flex flex-col justify-between items-center w-[30%] px-4 py-6 bg-sechover rounded-lg text-secwhite">
                <FaLocationDot /><p> Bejaia , Algeria</p>
              </div>
        </div>
      </div>

      {/* Contact Form */}
      <ContactUsForm />

      {/* join Us now section  */}

      <div className=" w-[80%] h-auto bg-primback rounded-md pb-16">
        <div className=" mt-0 ml-0 w-[10%] h-[10%] ">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 128 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6766 -37.8761L81.5324 0.304412L11.6513 -21.4737L78.6725 15.1461L-31.9142 -24.4142L127.047 53.7724L-68.806 -18.3649L81.4535 51.5471L-31.9793 17.8491L60.1551 64.5645L-25.3191 35.5789L29.7215 87.8643"
              stroke="#298EA6"
              stroke-width="3"
              stroke-dasharray="1.35 1.35"
            />
          </svg>
        </div>

        <div className="flex justify-between h-auto w-[90%] items-center ml-10 mr-10 ">
          <div>
            <h4 className="text-xl text-primdark font-urbanist font-bold">
              Are you ready to embark on a transformative journey towards better
            </h4>
            <h4 className="text-xl text-primdark font-urbanist font-bold">
              {" "}
              health and wellness?
            </h4>
            <p>
              Join us and let us guide you on the path to a healthier and
              happier you
            </p>
          </div>

          <Link to="/sign-up">
            <button className="p-2 bg-sechover rounded-md">
              Join Us Now
            </button>
          </Link>
          
        </div>

        <div className=" w-[5%] h-[5%]">
          {/*this svg must be at the right + to fix that broblem you have to adjust mb of the parent div as well */}
        </div>
      </div>
    </div>
  );
};

export default ContactUsBody;
