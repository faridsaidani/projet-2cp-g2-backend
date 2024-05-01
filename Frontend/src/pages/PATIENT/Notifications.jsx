import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { CgLock } from "react-icons/cg";
import { MdCheckBox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
const Notifications = () => {
  // State to track the active button
  const [activeButton, setActiveButton] = useState(null);

  const [searchable, setSearchable] = useState(true);
  const [displayProfile, setDisplayProfile] = useState(true);

  const toggleSearchable = () => {
    setSearchable((prevSearchable) => !prevSearchable);
  };

  const toggleDisplayProfile = () => {
    setDisplayProfile((prevDisplayProfile) => !prevDisplayProfile);
  };
  // State to track email and phone notifications for each type
  const [newsAndUpdatesEmail, setNewsAndUpdatesEmail] = useState(true);
  const [newsAndUpdatesPhone, setNewsAndUpdatesPhone] = useState(true);
  const [remindersEmail, setRemindersEmail] = useState(true);
  const [remindersPhone, setRemindersPhone] = useState(true);
  const [requestsEmail, setRequestsEmail] = useState(true);
  const [requestsPhone, setRequestsPhone] = useState(true);

  // Toggle handlers for email and phone notifications
  const toggleNewsAndUpdatesEmail = () => {
    setNewsAndUpdatesEmail((prevState) => !prevState);
  };

  const toggleNewsAndUpdatesPhone = () => {
    setNewsAndUpdatesPhone((prevState) => !prevState);
  };

  const toggleRemindersEmail = () => {
    setRemindersEmail((prevState) => !prevState);
  };

  const toggleRemindersPhone = () => {
    setRemindersPhone((prevState) => !prevState);
  };

  const toggleRequestsEmail = () => {
    setRequestsEmail((prevState) => !prevState);
  };

  const toggleRequestsPhone = () => {
    setRequestsPhone((prevState) => !prevState);
  };

  return (
    <div>
      <SideBar></SideBar>
      <TopBar></TopBar>
      <div className="flex justify-between items-center fixed  w-[74%] h-[75%] text-urbanist mb-10 mr-10 right-0 bottom-0 border">
        {/*Settings section */}
        <div className="w-[30%] h-[100%] left-0 bg-primback rounded-xl  p-4">
          {/*Notifications*/}
          <h3 className="text-xl ">Settings</h3>
          <div className="flex flex-col justify-center items-center">
           
            <button
              className={`flex items-center w-[90%] border-b border-gray-300 p-4 ${
                activeButton === "notifications" ? "text-sechover" : ""
              }`}
              onClick={() => setActiveButton("notifications")}
            >
              <IoMdNotificationsOutline />
              <div className="flex flex-col w-[70%] text-start px-6">
                <p className="text-bold">Notifications</p>
                <p className="text-xs">
                  Select notifications you want to receive
                </p>
              </div>
              <GrFormNext />
            </button>
          
            {/*Profile*/}
            <button
              className={`flex items-center w-[90%] border-b border-gray-300 p-4 ${
                activeButton === "profile" ? "text-sechover" : ""
              }`}
              onClick={() => setActiveButton("profile")}
            >
              <FiUser />
              <div className="flex flex-col w-[70%] text-start px-6">
                <p className="text-bold">Profile</p>
                <p className="text-xs">
                  Update your personal information to get more information about
                  you
                </p>
              </div>
              <GrFormNext />
            </button>

            {/*Password*/}
            <button
              className={`flex items-center w-[90%] border-b border-gray-300 p-4 ${
                activeButton === "password" ? "text-sechover" : ""
              }`}
              onClick={() => setActiveButton("password")}
            >
              <CgLock />
              <div className="flex flex-col w-[70%] text-start px-6">
                <p className="text-bold">Password</p>
                <p className="text-xs">
                  Choose a strong password to protect your information
                </p>
              </div>
              <GrFormNext />
            </button>

          </div>
        </div>






        {/*Notifications section*/}
        <div className="flex flex-col justify-start m-10 w-[70%] border">
          <div >
            <h3 className="text-xl text-primdark">Notifications</h3>
            <p className="text-sm text-secdark">
              Choose the type of notifications you want to receive
            </p>
          </div>

          <div className="flex flex-col p-4 border">
            <h4>Visibility</h4>
            

            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                checked={displayProfile}
                onChange={toggleDisplayProfile}
                className={`h-4 w-4 rounded border-sechover focus:ring-primdark ${
                  displayProfile ? "bg-sechover" : "bg-transparent"
                }`}
              />
              <span className="ml-2">
                Display my profile information to therapists
              </span>
            </div>
          </div>

          <div className="flex items-center p-4 border ">
            <div>
              <h4>News and updates</h4>
              <p className="text-sm my-2 ">
                Get news about new apointments and therapists that may intrest
                you
              </p>
            </div>
            <div className="flex flex-col ml-auto ">
              {/* Email toggle for News and Updates */}
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={newsAndUpdatesEmail}
                  onChange={toggleNewsAndUpdatesEmail}
                  className="sr-only"
                />
                <div
                  className={`relative m-2 w-6 h-3 bg-gray-200 rounded-full transition-colors ${
                    newsAndUpdatesEmail ? "bg-sechover" : ""
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 w-3 h-3 bg-white rounded-full transition-transform transform ${
                      newsAndUpdatesEmail ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
                Email
              </label>
              {/* Phone toggle for News and Updates */}
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={newsAndUpdatesPhone}
                  onChange={toggleNewsAndUpdatesPhone}
                  className="sr-only"
                />
                <div
                  className={`relative m-2 w-6 h-3 bg-gray-200 rounded-full transition-colors ${
                    newsAndUpdatesPhone ? "bg-sechover" : ""
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 w-3 h-3 bg-white rounded-full transition-transform transform ${
                      newsAndUpdatesPhone ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
                Phone
              </label>
            </div>
          </div>

          <div className=" flex p-4 border">
            <div>
              <h4>Remainders</h4>
              <p className="text-sm my-2">
                Get notifications to remaind you about the upcoming appointments
                with therapists
              </p>
            </div>
            <div className="flex flex-col ml-auto">
              {/* Email toggle for Reminders */}
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={remindersEmail}
                  onChange={toggleRemindersEmail}
                  className="sr-only"
                />
                <div
                  className={`relative m-2 w-6 h-3 bg-gray-200 rounded-full transition-colors ${
                    remindersEmail ? "bg-sechover" : ""
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 w-3 h-3 bg-white rounded-full transition-transform transform ${
                      remindersEmail ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
                <p>Email</p>
              </label>
              {/* Phone toggle for Reminders */}
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={remindersPhone}
                  onChange={toggleRemindersPhone}
                  className="sr-only"
                />
                <div
                  className={`relative m-2 w-6 h-3 bg-gray-200 rounded-full transition-colors ${
                    remindersPhone ? "bg-sechover" : ""
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 w-3 h-3 bg-white rounded-full transition-transform transform ${
                      remindersPhone ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
                Phone
              </label>
            </div>
          </div>

          <div className=" flex p-4 border">
            <div>
              <h4>Requests</h4>
              <p className="text-sm my-2">
                Get notifications and apointements agreed with therapists
              </p>
            </div>
            <div className="flex flex-col ml-auto">
              {/* Email toggle for Requests */}
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={requestsEmail}
                  onChange={toggleRequestsEmail}
                  className="sr-only"
                />
                <div
                  className={`relative m-2 w-6 h-3 bg-gray-200 rounded-full transition-colors ${
                    requestsEmail ? "bg-sechover" : ""
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 w-3 h-3 bg-white rounded-full transition-transform transform ${
                      requestsEmail ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
                Email
              </label>
              {/* Phone toggle for Requests */}
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={requestsPhone}
                  onChange={toggleRequestsPhone}
                  className="sr-only"
                />
                <div
                  className={`relative m-2 w-6 h-3 bg-gray-200 rounded-full transition-colors ${
                    requestsPhone ? "bg-sechover" : ""
                  }`}
                >
                  <div
                    className={`absolute left-0 top-0 w-3 h-3 bg-white rounded-full transition-transform transform ${
                      requestsPhone ? "translate-x-full" : ""
                    }`}
                  ></div>
                </div>
                Phone
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
