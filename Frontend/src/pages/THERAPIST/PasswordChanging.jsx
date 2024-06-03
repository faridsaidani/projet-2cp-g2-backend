import React,{useState} from 'react'
import SideBarTherapist from '../../components/SideBarTherapist'
import TopBar from '../../components/TopBar'
import { MdOutlineFileUpload } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { CgLock } from "react-icons/cg";
import { LiaEdit } from "react-icons/lia";


const PasswordChanging = () => {
  // State to track the active button
  const [activeButton, setActiveButton] = useState(null);
  // State to track the visibility of password fields
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className='grid grid-cols-[20%_80%] h-screen overflow-hidden'>
        <SideBarTherapist/>
        <div className='flex flex-col h-screen'>
            <TopBar/>
            <div className='grid grid-cols-[25%_70%] text-urbanist h-full pt-4 pb-10 mr-10'>
                {/*Settings section */}
          <div className="left-0 bg-primback rounded-xl p-4">
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

            {/*My blogs*/}
            <button
              className={`flex items-center w-[90%] border-b border-gray-300 p-4 ${
                activeButton === "blog" ? "text-sechover" : ""
              }`}
              onClick={() => setActiveButton("blog")}
            >
              <AiOutlineAppstore />
              <div className="flex flex-col w-[70%] text-start px-6">
                <p className="text-bold">My blogs</p>
                <p className="text-xs">Manage your blog posts and settings</p>
              </div>
              <GrFormNext />
            </button>

            {/*Password*/}
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
          </div>
          </div>










                {/*Password  changing section */}
                <div className='flex flex-col justify-start p-6'>
                    <div>
                        <h3 className='text-xl text-primdark'>Password</h3>
                        <p className='text-sm text-secdark'>Choose a strong password to protect your information from prying eyes</p>
                    </div>
                    <div className='flex space-x-10'>
                        <div className='flex flex-col my-6'>
                            <label className='text-sm'>Current password</label>
                            <div className='relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Must be 8 characters'
                                    className='py-1 px-3 border border-secdark rounded-md text-secdark placeholder-secdark focus:outline-none'
                                />
                                {/* Toggle visibility button */}
                                <button
                                    className='absolute top-2 right-3'
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                {showPassword ? (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                 ) : (
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.87671 9.87988C9.58196 10.1545 9.34555 10.4857 9.18158 10.8537C9.01762 11.2217 8.92945 11.619 8.92234 12.0218C8.91523 12.4246 8.98933 12.8247 9.14022 13.1983C9.2911 13.5718 9.51568 13.9112 9.80055 14.196C10.0854 14.4809 10.4248 14.7055 10.7983 14.8564C11.1719 15.0073 11.572 15.0814 11.9748 15.0742C12.3776 15.0671 12.7749 14.979 13.1429 14.815C13.5109 14.651 13.8421 14.4146 14.1167 14.1199" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M10.7266 5.08C11.1479 5.02751 11.572 5.00079 11.9966 5C18.9966 5 21.9966 12 21.9966 12C21.5495 12.9571 20.9888 13.8569 20.3266 14.68" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6.61 6.61035C4.62125 7.96498 3.02987 9.82561 2 12.0004C2 12.0004 5 19.0004 12 19.0004C13.9159 19.0055 15.7908 18.4455 17.39 17.3904" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M2 2L22 22" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>

                                )}
                                </button>
                            </div>
                        </div>
                    <div className='flex flex-col my-6'>
                        <label className='text-sm'>New password</label>
                        <div className='relative'>
                            <input
                              type={showPassword ? 'text' : 'password'}
                              placeholder='Must be 8 characters'
                              className='py-1 px-3 border border-secdark rounded-md text-secdark placeholder-secdark focus:outline-none'
                            />
                            {/* Toggle visibility button */}
                            <button
                              className='absolute top-2 right-3'
                              onClick={() => setShowPassword(!showPassword)}
                            >
                            {showPassword ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            ) : (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.87671 9.87988C9.58196 10.1545 9.34555 10.4857 9.18158 10.8537C9.01762 11.2217 8.92945 11.619 8.92234 12.0218C8.91523 12.4246 8.98933 12.8247 9.14022 13.1983C9.2911 13.5718 9.51568 13.9112 9.80055 14.196C10.0854 14.4809 10.4248 14.7055 10.7983 14.8564C11.1719 15.0073 11.572 15.0814 11.9748 15.0742C12.3776 15.0671 12.7749 14.979 13.1429 14.815C13.5109 14.651 13.8421 14.4146 14.1167 14.1199" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.7266 5.08C11.1479 5.02751 11.572 5.00079 11.9966 5C18.9966 5 21.9966 12 21.9966 12C21.5495 12.9571 20.9888 13.8569 20.3266 14.68" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.61 6.61035C4.62125 7.96498 3.02987 9.82561 2 12.0004C2 12.0004 5 19.0004 12 19.0004C13.9159 19.0055 15.7908 18.4455 17.39 17.3904" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 2L22 22" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                            )}
                            </button>
                        </div>
                    </div>
                    </div>
                    <p className='text-sm text-secdark'>The password must be a combination of Latin alphabet and numbers. Password must be at least 8 characters.</p>
                        
                    {/*Buttons section */}
                    <div className='flex mt-6'>
                        <button className='w-[20%] m-2 py-2  border rounded-md bg-sechover text-secwhite'>Save changes</button>
                        <button className='w-[20%] m-2 py-2  border rounded-md border-sechover text-sechover'>Cancel</button>
                    </div>

                </div>
            </div>
        </div>


    </div>
  )
}

export default PasswordChanging