import React from "react";
import AboutUsFAQ from "./AboutUsFAQ";
import AboutUsTable from "./AboutUsTable";
import { Link } from 'react-router-dom';

const AboutUsBody = () => {
  return (
    <div>
      {/*what is OxyPsy + OxyPsy vs In-Office therapy (because of the image widht) */}
      <div className="flex flex-col justify-center items-center bg-home bg-center bg-cover h-[39%] ">
        {/*Background problem */} <br />
        <br />
        <br /> <br />
        <br />
        {/*what is OxyPsy*/}
        <div className="flex flex-col justify-center items-center w-[40%] h-[28%] mt-10 mb-4">
          <div className="">
            <h2 className="text-6xl text-center font-urbanist font-bold text-primdark">
              What is{" "}
            </h2>
            <div className="bg-seclight w-[250px] h-auto flex justify-center rounded-l-lg border-sechover border-r-4">
              <h2 className="text-6xl font-bold font-urbanist text-primdark ">
                OxyPsy
              </h2>
            </div>
          </div>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
            quas perspiciatis assumenda ducimus deleniti? Magnam sequi dolorem
            voluptatem amet pariatur esse, itaque quo suscipit ipsa nisi dicta
            incidunt exercitationem consequuntur.
          </p>{" "}
          <br /> <br /> <br />
        </div>
        {/* OxyPsy vs In-Office therapy*/}
        <div className=" flex flex-col  w-[32%] h-[11%] ">
          <div className="">
            <h2 className="text-3xl font-bold font-urbanist text-primdark text-center">
              OxyPsy vs. traditional in-office
            </h2>
            <h2 className="text-3xl font-bold font-urbanist text-primdark text-center">
              therapy
            </h2>
          </div>
          <p className="text-center">Why you should choose us</p>
        </div>
      </div>

      {/*The table of comparison */}

      <AboutUsTable></AboutUsTable>




      {/*Get started button zone */}
      <div className=" flex justify-center items-center w-screen h-[40vh] bg-secwhite">
        <Link to="/sign-up">
          <button className="bg-sechover border rounded-md font-bold text-secwhite px-6 py-2 flex items-center justify-center">
              <span className="mr-1">Get started</span>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 5L19.5 12L12.5 19"
                  stroke="#F8F8F7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.5 12L19.5 12"
                  stroke="#F8F8F7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
          </button>
        </Link>
      </div>




      {/*Common questions section */}
      <div>
        <div className=" flex justify-center flex-col">
          <h3 className="ml-10 text-2xl font-urbanist font-bold text-primdark ">
            Common Questions
          </h3>
          <p className=" ml-10 font-urbanist text-secdark">
            Find answers to frequently asked questions
          </p>
          <br /> <br />
          <div className="flex justify-center items-center w-screen bg-secwhite ">
            <div className=" w-[40%] mr-10">
              <AboutUsFAQ />
            </div>

            {/*Ask your question section*/}
            <div className=" bg-primback rounded-md w-[20%] ">
              <div className="flex flex-col justify-center items-center  py-8 px-8">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37.5513 30.5551C26.1019 19.4152 33.9886 0 49.9632 0C65.9378 0 73.8245 19.4152 62.3751 30.5552L49.9632 42.6316L37.5513 30.5551Z"
                    fill="#298EA6"
                  />
                  <path
                    d="M37.6216 69.4449C26.1722 80.5848 34.0589 100 50.0335 100C66.0081 100 73.8948 80.5848 62.4454 69.4448L50.0335 57.3684L37.6216 69.4449Z"
                    fill="#298EA6"
                  />
                  <path
                    d="M30.5551 62.4472C19.4152 73.8966 0 66.0099 0 50.0353C0 34.0607 19.4152 26.174 30.5552 37.6235L42.6316 50.0353L30.5551 62.4472Z"
                    fill="#298EA6"
                  />
                  <path
                    d="M69.4449 62.3755C80.5848 73.8249 100 65.9382 100 49.9636C100 33.989 80.5848 26.1023 69.4448 37.5517L57.3684 49.9636L69.4449 62.3755Z"
                    fill="#298EA6"
                  />
                </svg>
                <br />
                <div>
                  <h3 className="text-1xl text-center font-bold font-urbanist text-primdark">
                    Ask your question
                  </h3>
                  <p className="text-center">
                    Feel free to ask questions on anytime
                  </p>
                </div>
                <br />




                <Link to="/contact-us">
                  <button className="bg-sechover border rounded-md font-bold text-secwhite h-[35px] w-[140px] flex items-center justify-center">
                    Ask A question
                  </button>
                </Link>


              </div>
            </div>
          </div>
        </div>
        <br /> <br /> <br />
      </div>
    </div>
  );
};

export default AboutUsBody;
