import React, { useState } from 'react';
import SideBarTherapist from '../../components/SideBarTherapist';
import TopBar from '../../components/TopBar';
import { MdOutlineFileUpload } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { CgLock } from "react-icons/cg";
import { LiaEdit } from "react-icons/lia";

const PasswordRefused = () => {
    // State to track the active button
    const [activeButton, setActiveButton] = useState(null);
    // State to control the visibility of the notification div
    const [showNotification, setShowNotification] = useState(false);

    const handleChangePassword = () => {
        // Show the notification div
        setShowNotification(true);
        // Hide the notification div after 3 seconds
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (
        <div className='grid grid-cols-[20%_80%] h-screen overflow-hidden'>
            <SideBarTherapist />
            <div className='flex flex-col h-screen'>
                <TopBar />
                <div className='grid grid-cols-[25%_70%] text-urbanist h-full pt-4 pb-10 mr-10'>
                    {/* Settings section */}
                    <div className="left-0 bg-primback rounded-xl p-4">
                        {/* Notifications */}
                        <h3 className="text-xl">Settings</h3>
                        <div className="flex flex-col justify-center items-center">
                            <button
                                className={`flex items-center w-[90%] border-b border-gray-300 p-4 ${activeButton === "notifications" ? "text-sechover" : ""}`}
                                onClick={() => setActiveButton("notifications")}
                            >
                                <IoMdNotificationsOutline />
                                <div className="flex flex-col w-[70%] text-start px-6">
                                    <p className="text-bold">Notifications</p>
                                    <p className="text-xs">Select notifications you want to receive</p>
                                </div>
                                <GrFormNext />
                            </button>

                            {/* Profile */}
                            <button
                                className={`flex items-center w-[90%] border-b border-gray-300 p-4 ${activeButton === "profile" ? "text-sechover" : ""}`}
                                onClick={() => setActiveButton("profile")}
                            >
                                <FiUser />
                                <div className="flex flex-col w-[70%] text-start px-6">
                                    <p className="text-bold">Profile</p>
                                    <p className="text-xs">Update your personal information to get more information about you</p>
                                </div>
                                <GrFormNext />
                            </button>

                            {/* My blogs */}
                            <button
                                className={`flex items-center w-[90%] border-b border-gray-300 p-4 ${activeButton === "blog" ? "text-sechover" : ""}`}
                                onClick={() => setActiveButton("blog")}
                            >
                                <AiOutlineAppstore />
                                <div className="flex flex-col w-[70%] text-start px-6">
                                    <p className="text-bold">My blogs</p>
                                    <p className="text-xs">Manage your blog posts and settings</p>
                                </div>
                                <GrFormNext />
                            </button>

                            {/* Password */}
                            <button
                                className={`flex items-center w-[90%] border-b border-gray-300 p-4 text-sechover ${activeButton === "password" ? "text-sechover" : ""}`}
                                onClick={() => setActiveButton("password")}
                            >
                                <CgLock />
                                <div className="flex flex-col w-[70%] text-start px-6">
                                    <p className="text-bold">Password</p>
                                    <p className="text-xs">Choose a strong password to protect your information</p>
                                </div>
                                <GrFormNext />
                            </button>
                        </div>
                    </div>

                    {/* Password section */}
                    <div className='flex flex-col justify-start p-6'>
                        <div>
                            <h3 className='text-xl text-primdark'>Password</h3>
                            <p className='text-sm text-secdark'>Choose a strong password to protect your information from prying eyes</p>
                        </div>
                        <button
                            className='w-[20%] my-4 py-2 border rounded-md bg-sechover text-secwhite'
                            onClick={handleChangePassword}
                        >
                            Change Password
                        </button>
                    </div>
                </div>
            </div>

            {/* Notification div */}
            {showNotification && (
                <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
                    <div className='flex flex-col justify-center items-center border rounded-xl w-[30%] h-[30%] p-4 bg-secwhite font-urbanist text-primdark'>
                        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" width="40" height="40" rx="20" fill="#298EA6" fill-opacity="0.2"/>
                            <path d="M20.4974 28.3332C25.0999 28.3332 28.8307 24.6023 28.8307 19.9998C28.8307 15.3973 25.0999 11.6665 20.4974 11.6665C15.8949 11.6665 12.1641 15.3973 12.1641 19.9998C12.1641 24.6023 15.8949 28.3332 20.4974 28.3332Z" stroke="#298EA6" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18 20.0002L19.6667 21.6668L23 18.3335" stroke="#298EA6" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <h3 className='text-xl font-bold m-4'>Change Password</h3>
                        <p>Your password has been successfully changed</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PasswordRefused;
