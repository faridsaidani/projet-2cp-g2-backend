// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from 'react-router-dom';
import "./index.css";
import { useState } from "react";
import Modal from "./Modal";


const TherProfile = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-[98%] flex justify-between mt-6">
      <div className="w-[27%]  border-[black] border-solid  ">
        <Link to="/patient/therapists-list">
        <button className="flex justify-between w-[35%] items-center">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="21.6"
              y="21.2078"
              width="21.45"
              height="21.0578"
              rx="2.85"
              transform="rotate(-180 21.6 21.2078)"
              stroke="#298EA6"
              strokeWidth="0.3"
            />
            <path
              d="M12.75 6.99997L9 10.6789L12.75 14.3578"
              stroke="#298EA6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-complimetary1"> Back to List</p>
        </button>
        </Link>

        <div className=" shadow-custom mt-[12%] flex flex-col justify-start items-center gap-8 w-[100%] h-[453px] px-[25px] py-5 rounded-xl box-border  bg-[rgba(255,255,255,1)] shadow-multiple">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/x2og7113ea-64%3A26549?alt=media&token=31c37af4-6e70-4aa9-8498-d50123112f97"
            alt="Not Found"
            className=" w-[130px] h-[130px]"
          />
          <div className=" flex flex-col justify-center items-center gap-6 w-[100%] box-border">
            <div className=" flex flex-col justify-start items-center gap-3 w-[100%] box-border">
              <p className="  border-[#063248ff] text-xl leading-5 text-[#063248] font-urbanist  font-[600]">
                Dr. Bellatreche Hibatallah
              </p>
              <p className="  text-base leading-4  text-complimetary1 font-urbanist  font-[600]">
                8 years of experience
              </p>
              <div className=" text-[#4C606E] flex flex-col justify-center items-center gap-1.5 w-[undefinedundefined] box-border">
                <p className="  text-complimetary1 text-xs leading-3  font-urbanist  font-[500]">
                  Narrative psychoTherapist
                </p>
                <p className="  text-complimetary1 text-xs leading-3  font-urbanist  font-[500]">
                  Familly psychologist
                </p>
                <p className=" text-complimetary1 text-xs leading-3  font-urbanist  font-[500]">
                  (+1500 Patients )
                </p>
              </div>
            </div>
            <div className=" flex flex-col justify-start items-start gap-3 w-[undefinedundefined] box-border">
          


              <button
                onClick={() => setOpenModal(true)}
                className=" border-[#ffffffff] text-[#fff] text-base leading-4  font-urbanist  font-[600]
      flex flex-row justify-center items-center gap-2.5 w-[100%] px-[39px] py-3.5 rounded-lg box-border  bg-[#298EA6]"
              >
                Make Appointement
              </button>
              
              <Modal open={openModal} onClose={() => setOpenModal(false)} />
              
              <button
                className=" border-[#298ea6ff] text-[#298EA6] text-base leading-4  font-urbanist  font-[600]
                 flex flex-row justify-center items-center gap-2.5 w-[100%] px-[39px] py-3.5 rounded-lg box-border  bg-[#E3F1F4]"
              >
                Chat with Therapist
              </button>
            </div>
          </div>
        </div>
      </div>

       <div className="w-[72%] shadow-custom h-[83vh] rounded-[12px]  px-[13px] py-[19px] gap-[30px] flex justify-between">
        <div className=" flex flex-col justify-start items-start   w-[403px] h-[100%]  box-border">
          <div className=" flex flex-col justify-start items-start gap-3 w-[100%] box-border">
            <div className=" flex flex-col justify-start items-start gap-3 w-[100%] box-border">
              <p className="  text-[#063248] border-[#063248ff] text-xl leading-5  font-urbanist  font-[600]">
                Specialities and Expertise
              </p>
              <div className=" text-complimetary1 flex flex-col justify-start items-start gap-3 w-[100%] box-border">
                <div className=" text-complimetary1 flex flex-row justify-start items-start gap-3 w-[55%] box-border">
                  <button
                    className="text-sm  leading-[14px]  font-urbanist  font-[500]
             flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  text-complimetary1 border-solid rounded-lg   bg-[rgba(227,241,244,1)]
            
            w-[undefinedundefined] box-border
            "
                  >
                    {" "}
                    Anxiety
                  </button>

                  <button
                    className="text-sm  leading-[14px]  font-urbanist  font-[500]
             flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg   bg-[rgba(227,241,244,1)]
            
            w-[undefinedundefined] box-border
            "
                  >
                    {" "}
                    Emigration
                  </button>

                  <button
                    className="text-sm  leading-[14px]  font-urbanist  font-[500]
             flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg   bg-[rgba(227,241,244,1)]
            
            w-[undefinedundefined] box-border
            "
                  >
                    {" "}
                    Panic attacks
                  </button>
                </div>
                <div className=" text-complimetary1 flex flex-row justify-start items-start gap-3 w-[100%] box-border">
                  <button
                    className="text-sm  leading-[14px]  font-urbanist  font-[500]
             flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg   bg-[rgba(227,241,244,1)]
            
            w-[undefinedundefined] box-border
            "
                  >
                    Depressive states
                  </button>

                  <button
                    className="text-sm  leading-[14px]  font-urbanist  font-[500]
             flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg   bg-[rgba(227,241,244,1)]
            
            w-[undefinedundefined] box-border
            "
                  >
                    Solitude
                  </button>

                  <button
                    className="text-sm  leading-[14px]  font-urbanist  font-[500]
             flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg   bg-[rgba(227,241,244,1)]
            
            w-[undefinedundefined] box-border
            "
                  >
                    Familly Problems
                  </button>
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-start items-start gap-3 w-[undefinedundefined] box-border">
              <p className=" text-[#063248] border-[#063248ff] text-xl leading-5  font-urbanist  font-[600]">
                Additional
              </p>
              <div className=" flex flex-col justify-start items-start gap-3 w-[100%] box-border">
                <div className="text-complimetary1 flex flex-row justify-start items-start gap-3 w-[60%] box-border">
                  <button
                    className="text-sm  leading-[14px]  font-urbanist  font-[500]
                    flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg   bg-[rgba(227,241,244,1)]
                   
                   w-[undefinedundefined] box-border
                   "
                  >
                    {" "}
                    Fear
                  </button>

                  <button
                    className="text-sm  leading-[14px]  font-urbanist  font-[500]
             flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg   bg-[rgba(227,241,244,1)]
            
            w-[undefinedundefined] box-border
            "
                  >
                    {" "}
                    Trauma
                  </button>

                  <button
                    className="text-sm  leading-[14px]  font-urbanist  font-[500]
             flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg   bg-[rgba(227,241,244,1)]
            
            w-[undefinedundefined] box-border
            "
                  >
                    {" "}
                    Addictions
                  </button>

                  <button
                    className="text-sm  leading-[14px]  font-urbanist  font-[500]
             flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg   bg-[rgba(227,241,244,1)]
            
            w-[undefinedundefined] box-border
            "
                  >
                    {" "}
                    Anxiety
                  </button>
                </div>
                <div className="text-complimetary1 flex flex-row justify-start items-start gap-3 w-[47%] box-border">
                  <button
                    className="text-sm  leading-[14px]  font-urbanist  font-[500]
             flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg   bg-[rgba(227,241,244,1)]
            
            w-[undefinedundefined] box-border
            "
                  >
                   
                    Relationshipd
                  </button>

                  <button
                    className="text-sm  leading-[14px]  font-urbanist  font-[500]
             flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg   bg-[rgba(227,241,244,1)]
            
            w-[undefinedundefined] box-border
            "
                  >
                    Burnout
                  </button>

                  <button
                    className="text-sm  leading-[14px]  font-urbanist  font-[500]
             flex flex-row justify-center items-center gap-2.5  h-[100%] px-[15px] py-[7px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg   bg-[rgba(227,241,244,1)]
            
            w-[undefinedundefined] box-border
            "
                  >
                    Stress
                  </button>
                </div>

                <button
                  className="text-sm  text-complimetary1 leading-[14px]  font-urbanist  font-[500]
             flex flex-row justify-center items-center gap-2.5  h-[100%]  py-[7px] border-[0.5px]  border-[#4c606e7f] border-solid rounded-lg   bg-[rgba(227,241,244,1)]
            
            w-[undefinedundefined] box-border
            "
                >
                  Procrastination
                </button>
              </div>
            </div>
            <div className=" flex flex-col justify-start items-start  gap-3 w-[undefinedundefined] box-border">
              <div className=" flex flex-col justify-start items-start  gap-[23px] w-[undefinedundefined] box-border">
                <p className=" text-[#063248] border-[#063248ff] text-xl leading-5  font-urbanist  font-[600]">
                  About
                </p>
              </div>
              <p className=" text-[#063248] border-[#4c606eff] text-sm  leading-[129%]  font-urbanist  font-[500]  tracking-[0.7px]">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                condimentum lobortis. Ut commodo efficitur neque.Sorem ipsum
                dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                libero et velit interdum, ac aliquet odio mattis. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Curabitur tempus urna at turpis condimentum
                lobortis. Ut commodo efficitur neque.Sorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nunc vulputate libero et velit
                interdum, ac aliquet odio mattis. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Curabitur tempus urna at turpis condimentum lobortis.{" "}
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-start items-start gap-5 w-[undefinedundefined] box-border">
            <div className=" flex flex-row justify-start items-start gap-1 w-[undefinedundefined] box-border">
              <p className=" text-[#063248] border-[#063248ff] text-sm  leading-[129%]  font-urbanist  font-[600]  tracking-[0.7px]">
                Age:{" "}
              </p>
              <p className=" text-[#063248] border-[#4c606eff] text-sm  leading-[129%]  font-urbanist  font-[500]  tracking-[0.7px]">
                38 Years
              </p>
            </div>
            <div className=" flex flex-row justify-start items-start gap-1 w-[100%] box-border">
              <p className=" text-[#063248] border-[#063248ff] text-sm  leading-[129%]  font-urbanist  font-[600]  tracking-[0.7px]">
                Language:{" "}
              </p>
              <p className=" text-[#063248] border-[#4c606eff] text-sm  leading-[129%]  font-urbanist  font-[500]  tracking-[0.7px]">
                English, French
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col justify-start items-start gap-8 w-[396px] h-[623px] px-6 py-8 rounded-xl box-border  bg-[rgba(227,241,244,1)]">
          <div className=" flex flex-col justify-start items-start gap-6 w-[undefinedundefined] box-border">
            <p className=" text-[#063248] border-[#063248ff] text-xl leading-5  font-urbanist  font-[600]">
              Qualifications
            </p>
            <div className=" flex flex-col justify-start items-start   w-[100%] box-border">
              
                <button className=" w-[80%] px-4 py-2 rounded-lg box-border mb-[22px] bg-[rgba(67,205,185,1)]  border-[#ffffffff] text-sm  text-[white] flex gap-[8px] justify-center items-center leading-[14px]  font-urbanist  font-[600]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99984 18.3333C14.6023 18.3333 18.3332 14.6025 18.3332 9.99996C18.3332 5.39746 14.6023 1.66663 9.99984 1.66663C5.39734 1.66663 1.6665 5.39746 1.6665 9.99996C1.6665 14.6025 5.39734 18.3333 9.99984 18.3333Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 10L9.16667 11.6667L12.5 8.33337"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Verified therapecual training
                </button>
            

              <div className=" text-[#4C606E] flex flex-col justify-start items-start  gap-[9px] w-[100%] box-border">
                <p className="  text-[#4C606E]  text-sm  leading-[14px]  font-urbanist  font-[500]">
                  Attended McDaniel College, M.S. in Clinical mental Health
                  Coundeling, Graduated 2015
                </p>
                <p className="  text-[#4C606E] text-sm  leading-[14px]  font-urbanist  font-[500]">
                  Licensed Marriage and Family Therapist Board of Behaviour
                  Sciences, 2024-Present
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col justify-start items-start gap-6 w-[100%] box-border">
            <p className=" text-[#063248] border-[#063248ff] text-xl leading-5  font-urbanist  font-[600]">
              Certificates and diplomas
            </p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/3cjxmttbrva-127%3A3197?alt=media&token=916a6ccf-5487-419c-a67f-8324fb220621"
              alt="Not Found"
              className=" gap-3 w-[100%] h-[232px]"
            />
          </div>
          <div className=" flex flex-row justify-start items-center  gap-[5px] w-[undefinedundefined] box-border">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.8332 17.6667C23.0748 16.45 24.3332 14.9917 24.3332 13.0833C24.3332 11.8678 23.8503 10.702 22.9907 9.84243C22.1312 8.98289 20.9654 8.5 19.7498 8.5C18.2832 8.5 17.2498 8.91667 15.9998 10.1667C14.7498 8.91667 13.7165 8.5 12.2498 8.5C11.0343 8.5 9.86847 8.98289 9.00893 9.84243C8.14939 10.702 7.6665 11.8678 7.6665 13.0833C7.6665 15 8.9165 16.4583 10.1665 17.6667L15.9998 23.5L21.8332 17.6667Z"
                stroke="#4C606E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="  text-[#4C606E] border-[#4c606eff] text-base leading-4  font-urbanist  font-[500]">
              426 People recommend
            </p>
          </div>
        </div>
      </div>

 








    </div>




  );
};

export default TherProfile;
