import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBarTherapist from '../../components/SideBarTherapist';
import TopBar from '../../components/TopBar';
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { CgLock } from "react-icons/cg";
import { AiOutlineAppstore } from "react-icons/ai";


const Password = () => {
  // State to track the active button
  const [activeButton, setActiveButton] = useState(null);

  

  return (
    <div className='grid grid-cols-[20%_80%] h-screen overflow-hidden'>
      <SideBarTherapist currentPage='settings' />
      <div className='flex flex-col h-screen'>
        <TopBar />
        <div className='grid grid-cols-[25%_70%] text-urbanist h-full pt-4 pb-10 mr-10'>
          {/*Settings section */}
          <div className='w-[100%] h-[100%] left-0 bg-primback rounded-xl  p-4'>
              <h3 className="text-xl ">Settings</h3>
              <div className="flex flex-col justify-center items-center">
                    {/*Notifications*/}
                    <Link to='/therapist/notifications'>
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
                    </Link>
                    

                    {/*Profile*/}
                    <Link to='/therapist/profile'>
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
                    </Link>


                    {/*My blogs*/}
                    <Link to='/therapist/my-blogs'>
                        <button
                          className={`flex items-center w-[90%] border-b border-gray-300 p-4 ${
                            activeButton === "blogs" ? "text-sechover" : ""
                          }`}
                          onClick={() => setActiveButton("blogs")}
                        >
                          <AiOutlineAppstore />
                          <div className="flex flex-col w-[70%] text-start px-6">
                            <p className="text-bold">Blogs</p>
                            <p className="text-xs">
                              Edit blogs and share your thoughts and insights
                            </p>
                          </div>
                          <GrFormNext />
                        </button>
                    </Link>


                    {/*Password*/}
                    <Link to='/therapist/password'>
                        <button
                          className={`flex items-center w-[90%] border-b border-gray-300 p-4 text-sechover ${
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
                    </Link>
              </div>





          </div>    

          {/* Password section */}
          <div className='flex flex-col justify-start p-6'>
            <div>
              <h3 className='text-xl text-primdark'>Password</h3>
              <p className='text-sm text-secdark'>
                Choose a strong password to protect your information from prying
                eyes
              </p>
            </div>

            <Link to="/therapist/password-changing">
                <button
                  className='w-[20%] my-4 py-2 border rounded-md bg-sechover text-secwhite'>
                  Change Password
                </button>
            </Link>

          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Password;
