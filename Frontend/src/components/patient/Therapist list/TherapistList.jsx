// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { TherapistsList } from "../../../pages";
const TherapistList = () => {
  // therpist-list
  useEffect(() => {
    getTherapist();
  }, []);
  const [therapists, setTherapists] = useState([]);

  const getTherapist = () =>
    axios
      .get("http://localhost:5000/therapist/get_all")
      .then((response) => {
        console.log(response.data);
        setTherapists(response.data.therapists);
      })
      .catch((error) => {
        console.log(error);
      });

  const therpistlist = [
    {
      id: 1,
      name: "Dr. Bellatreche Hibataalah",
      experience: "12 years of experience",
      specialite: "Psychologist, Family Psychologist",
      src: "https://s3-alpha-sig.figma.com/img/a20c/d770/fcc05d21c7ec6ff7470bd1214a804cc1?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jqnqByFPNqxaNzCIBP8cI2ZtXeU~WLhGrMhWQgVMtEUf-q-JuybaTxJ7TolI08hQDLqnqug3JjgBc~wiVikHfLpjKYHcJbk~BwfvVHdEwUs4mJDYJimPogIpit7-ZNWZPVQn4dFZrrY8-WMd5I~lNYleifyjhcGehERgoPhkd9TkUpuNSyYiRMolf-mNSr0vC6xQDxipbFflyV4zMDQriOvnoRN5ddIovlcAPY9355GexfXzlltcVCgVYQmDOtjGUmv7ZMQMEcrWEyVl5P2m6S7PAYUYr6NELlXMDaHW-zQgN3c0FnCeUV7DnipvoQGwNxI1iRL4lRqfxu0T2w3veQ__",
    },
    {
      id: 2,
      name: "Dr. Bellatreche Hibataalah",
      experience: "12 years of experience",
      specialite: "Psychologist, Family Psychologist",
      src: "https://s3-alpha-sig.figma.com/img/a20c/d770/fcc05d21c7ec6ff7470bd1214a804cc1?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jqnqByFPNqxaNzCIBP8cI2ZtXeU~WLhGrMhWQgVMtEUf-q-JuybaTxJ7TolI08hQDLqnqug3JjgBc~wiVikHfLpjKYHcJbk~BwfvVHdEwUs4mJDYJimPogIpit7-ZNWZPVQn4dFZrrY8-WMd5I~lNYleifyjhcGehERgoPhkd9TkUpuNSyYiRMolf-mNSr0vC6xQDxipbFflyV4zMDQriOvnoRN5ddIovlcAPY9355GexfXzlltcVCgVYQmDOtjGUmv7ZMQMEcrWEyVl5P2m6S7PAYUYr6NELlXMDaHW-zQgN3c0FnCeUV7DnipvoQGwNxI1iRL4lRqfxu0T2w3veQ__",
    },
    {
      id: 3,
      name: "Dr. Bellatreche Hibataalah",
      experience: "12 years of experience",
      specialite: "Psychologist, Family Psychologist",
      src: "https://s3-alpha-sig.figma.com/img/a20c/d770/fcc05d21c7ec6ff7470bd1214a804cc1?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jqnqByFPNqxaNzCIBP8cI2ZtXeU~WLhGrMhWQgVMtEUf-q-JuybaTxJ7TolI08hQDLqnqug3JjgBc~wiVikHfLpjKYHcJbk~BwfvVHdEwUs4mJDYJimPogIpit7-ZNWZPVQn4dFZrrY8-WMd5I~lNYleifyjhcGehERgoPhkd9TkUpuNSyYiRMolf-mNSr0vC6xQDxipbFflyV4zMDQriOvnoRN5ddIovlcAPY9355GexfXzlltcVCgVYQmDOtjGUmv7ZMQMEcrWEyVl5P2m6S7PAYUYr6NELlXMDaHW-zQgN3c0FnCeUV7DnipvoQGwNxI1iRL4lRqfxu0T2w3veQ__",
    },
  ];

  const Mytherpistlist = therapists.map((therapist) => {
    let img = document.createElement("img");
    img.src = "data:image/jpeg;base64," + therapist.image_file;
    let rating = Math.floor(Math.random() * 375) + 25;
    let specialite = [
      "Clinical Psychology",
      "Cognitive Psychology",
      "Developmental Psychology",
      "Social Psychology",
      "Occupational and Organizational Psychology",
      "Health Psychology",
      "Neuropsychology",
      "School Psychology",
      "Legal and Criminal Psychology",
      "Sports Psychology",
    ][Math.floor(Math.random() * 10)];
    let experience = [
      "1 year of experience",
      "2 years of experience",
      "3 years of experience",
      "4 years of experience",
      "5 years of experience",
      "6 years of experience",
      "7 years of experience",
      "8 years of experience",
      "9 years of experience",
      "10 years of experience",
      "11 years of experience",
      "12 years of experience",
      "13 years of experience",
      "14 years of experience",
      "15 years of experience",
      "16 years of experience",
      "17 years of experience",
    ][Math.floor(Math.random() * 16)];

    return (
      <li key={therapist.id}>
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 p-5 mt-4 bg-white rounded-xl  bg-[rgba(255,255,255,1)] shadow-multiple   ">
          <img
            loading="lazy"
            src={img.src}
            className="shrink-0 max-w-full rounded-[12px] aspect-square w-[137px] max-md:mt-10"
          />
          <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full ">
            <div className="flex gap-5 justify-between  w-full max-md:flex-wrap max-md:max-w-full">
              <p className="my-auto text-xl font-semibold text-primary1">
                {therapist.name} {therapist.familly_name}
              </p>
              <div className="flex items-center ">
                <div className="flex items-start  gap-2.5 p-1.5  rounded-full">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8334 11.6667C17.0751 10.45 18.3334 8.99167 18.3334 7.08333C18.3334 5.86776 17.8505 4.70197 16.991 3.84243C16.1314 2.98289 14.9657 2.5 13.7501 2.5C12.2834 2.5 11.2501 2.91667 10.0001 4.16667C8.75008 2.91667 7.71675 2.5 6.25008 2.5C5.03451 2.5 3.86872 2.98289 3.00918 3.84243C2.14963 4.70197 1.66675 5.86776 1.66675 7.08333C1.66675 9 2.91675 10.4583 4.16675 11.6667L10.0001 17.5L15.8334 11.6667Z"
                      stroke="#4C606E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-[#4c606e] font-['Urbanist'] font-medium leading-[normal]">
                  {
                    // random number between 25 and 400
                    Math.floor(Math.random() * 375) + 25
                  }
                </div>
              </div>
            </div>
            <div className=" text-base font-semibold text-complimetary1 max-md:max-w-full">
              {
                // select a random element from the array
                experience
              }
            </div>
            <div className=" text-base font-medium text-[#4C606ECC] text-opacity-80 max-md:max-w-full">
              {specialite}
            </div>

            <div className=" flex flex-row  mt-4 justify-end items-end gap-3 w-[undefinedundefined] box-border">
              <Link to="/patient/therapist">
                <button
                  className="    text-complimetary3 text-sm  leading-[14px]  font-urbanist  font-[600] text-center flex flex-row justify-center items-center gap-2.5 w-[170px] h-[100%] p-3 rounded-lg box-border  bg-primary2"
                  // read the therapist id from therapist.id and pass it to the next page
                  onClick={() => {
                    localStorage.setItem("therapist_id", therapist.id);
                    localStorage.setItem("experience", experience);
                    localStorage.setItem("specialite", specialite);
                    localStorage.setItem("rating", rating);
                    localStorage.setItem("name", therapist.name);
                    localStorage.setItem(
                      "familly_name",
                      therapist.familly_name
                    );
                    localStorage.setItem("image_file", img.src);
                  }}
                >
                  View Profile
                </button>
              </Link>

              <Link to="/patient/make-appointment">
                <button className=" text-sm   text-[#fff] leading-[14px]  font-urbanist  font-[600] r gap-2.5 h-[100%] w-[170px] p-3 rounded-lg box-border  bg-complimetary3">
                  Make Appointement
                </button>
              </Link>
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* </div> */}
      </li>
    );
  });

  // therpist-list--

  return (
    <div className="w-[67%] ml-[20px] mt-[20px]  ">
      {/* heading */}
      <div className="flex flex-col font-urbanist gap-2 ">
        <div className="text-[#063248]  text-[36px] leading-[43.2px] font-urbanist font-semibold ">
          Therapists List
        </div>
        <div className="text-[#4c606e] font-urbanist font-semibold text-[16px] leading-[19.2px]">
          Browse our extensive directory of the best Therpists, Psychologists
          and counselors near you
        </div>
      </div>
      {/* heading */}

      <div className=" w-[44%] flex  justify-between self-start mt-6 text-[16px] leading-[19.2px] font-urbanist font-semibold ">
        <div className="flex justify-center items-center gap-2">
          <div className="flex justify-center items-center gap-2.5 p-1.5 ">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 5H17.5"
                stroke="#4C606E"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 10H17.5"
                stroke="#4C606E"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 15H17.5"
                stroke="#4C606E"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-[#063248] font-urbanist font-semibold leading-[normal]">
            All Therapists
          </div>
        </div>

        <div className="flex text-complimetary3 flex-col justify-center  border-b  border-b-complimetary3">
          <div className="flex gap-1 font-urbanist justify-between px-2 py-1.5">
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8334 11.6667C17.0751 10.45 18.3334 8.99167 18.3334 7.08333C18.3334 5.86776 17.8505 4.70197 16.991 3.84243C16.1314 2.98289 14.9657 2.5 13.7501 2.5C12.2834 2.5 11.2501 2.91667 10.0001 4.16667C8.75008 2.91667 7.71675 2.5 6.25008 2.5C5.03451 2.5 3.86872 2.98289 3.00918 3.84243C2.14963 4.70197 1.66675 5.86776 1.66675 7.08333C1.66675 9 2.91675 10.4583 4.16675 11.6667L10.0001 17.5L15.8334 11.6667Z"
                stroke="#298EA6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="text-complimetary3">Selected Therapists</div>
          </div>
        </div>
      </div>
      {/* therpist-list-card */}
      <ul>{Mytherpistlist}</ul>
      {/* therpist-list-card-- */}
    </div>
  );
};

export default TherapistList;
