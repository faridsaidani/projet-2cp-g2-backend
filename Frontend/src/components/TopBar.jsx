import React, { useState } from 'react';

const TopBar = () => {
    const [notifications, setNotifications] = useState(0);
    const [messages, setMessages] = useState(0);

    const handleSearch = (query) => {
        // Handle search functionality
    };

    return (
        <div className="flex  fixed top-0 right-0  justify-between items-center bg-primback rounded-3xl py-4 px-8 w-[74%] mt-10 mr-10">
            
            {/* Search Bar */}
            <div className=" flex items-center relative w-[70%] border border-secdark rounded-3xl">

                <svg className="ml-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg ">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#4C606E" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.0031 21.0002L16.7031 16.7002" stroke="#4C606E" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <input
                    type="text"
                    placeholder="Search,Messages,ect..."
                    className="py-1 px-3 rounded-md bg-primback text-secdark placeholder-secdark focus:outline-none"
                    onChange={(e) => handleSearch(e.target.value)}
                />
                
            </div>
            
            {/* Messages and Notifications Icons */}
            <div className="flex w-[20%] space-x-4">

                <button className="relative ml-10 mr-2">
                    
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 19.0003L2.9 13.3003C1.99713 11.495 1.76612 9.42743 2.2483 7.46746C2.73049 5.50749 3.8944 3.78307 5.53176 2.60279C7.16911 1.42251 9.17304 0.8634 11.1849 1.02552C13.1968 1.18765 15.0854 2.06042 16.5126 3.48765C17.9398 4.91488 18.8126 6.80343 18.9747 8.81532C19.1369 10.8272 18.5777 12.8311 17.3975 14.4685C16.2172 16.1058 14.4928 17.2698 12.5328 17.7519C10.5728 18.2341 8.50522 18.0031 6.7 17.1003L1 19.0003Z" stroke="#063248" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    {/* Messages Icon SVG */}
                    </svg>
                    {messages > 0 && (
                        <div className="h-2 w-2 bg-red-500 rounded-full absolute -top-1 -right-1"></div>
                    )}

                </button>

                <button className="relative">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8C6 6.4087 6.63214 4.88258 7.75736 3.75736C8.88258 2.63214 10.4087 2 12 2C13.5913 2 15.1174 2.63214 16.2426 3.75736C17.3679 4.88258 18 6.4087 18 8C18 15 21 17 21 17H3C3 17 6 15 6 8Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.2969 21C10.4643 21.3044 10.7103 21.5583 11.0094 21.7352C11.3084 21.912 11.6495 22.0053 11.9969 22.0053C12.3443 22.0053 12.6853 21.912 12.9844 21.7352C13.2834 21.5583 13.5295 21.3044 13.6969 21" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                    {/* Notifications Icon SVG */}
                    </svg>
                    {notifications > 0 && (
                        <div className="h-2 w-2 bg-red-500 rounded-full absolute -top-1 -right-1"></div>
                    )}
                </button>

            </div>
            
            {/* User Button */}
            <button className="flex items-center space-x-2">
                <div className="h-10 w-10 bg-seclight border text-sechover text-2xl  border-secwhite rounded-full flex items-center justify-center">
                    B{/* Display User's Initial */}
                </div>
                <div className='flex flex-col'>
                    <div className='flex justify-center items-center space-x-2'>
                        <p className="text-primdark font-urbanist  font-bold">Bellatreche Hiba</p>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="#063248" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p className="text-primdark ">User_ma@gmail.com</p>
                </div>
            </button>
        </div>
    );
};

export default TopBar;

