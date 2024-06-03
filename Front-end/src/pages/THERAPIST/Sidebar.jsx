import React, { useState } from 'react';
import { GrHomeRounded } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('home');

    const handleClick = (itemId) => {
        setActiveItem(itemId);
    };



    const [logoutHovered, setLogoutHovered] = useState(false);
    const [helpHovered, setHelpHovered] = useState(false);
  
    const handleLogoutHover = () => {
      setLogoutHovered(!logoutHovered);
    };
  
    const handleHelpHover = () => {
      setHelpHovered(!helpHovered);
    };



    return (
        <div className='flex flex-col justify-between items-center fixed h-[90%] w-[18%] rounded-3xl bg-primary1 m-10'>
            <div>
                    <div className=' flex justify-center items-center mt-4 '>
                        <svg width="148" height="34" viewBox="0 0 148 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7655 10.3888C8.87269 6.60116 11.5542 0 16.9855 0C22.4169 0 25.0984 6.60116 21.2056 10.3888L16.9855 14.4947L12.7655 10.3888Z" fill="#C3E7FA"/>
                        <path d="M12.7889 23.6112C8.89613 27.3988 11.5776 34 17.009 34C22.4403 34 25.1218 27.3988 21.229 23.6112L17.009 19.5053L12.7889 23.6112Z" fill="#C3E7FA"/>
                        <path d="M10.3888 21.2316C6.60116 25.1244 0 22.4429 0 17.0115C0 11.5802 6.60116 8.8987 10.3888 12.7915L14.4947 17.0115L10.3888 21.2316Z" fill="#C3E7FA"/>
                        <path d="M23.6112 21.2072C27.3988 25.1 34 22.4185 34 16.9871C34 11.5558 27.3988 8.87428 23.6112 12.7671L19.5053 16.9871L23.6112 21.2072Z" fill="#C3E7FA"/>
                        <path d="M51.24 24.312C50.104 24.312 49.036 24.088 48.036 23.64C47.036 23.184 46.156 22.556 45.396 21.756C44.636 20.956 44.04 20.032 43.608 18.984C43.176 17.928 42.96 16.8 42.96 15.6C42.96 14.4 43.176 13.276 43.608 12.228C44.04 11.172 44.636 10.244 45.396 9.444C46.156 8.644 47.036 8.02 48.036 7.572C49.036 7.116 50.104 6.888 51.24 6.888C52.384 6.888 53.456 7.116 54.456 7.572C55.456 8.02 56.336 8.644 57.096 9.444C57.856 10.244 58.448 11.172 58.872 12.228C59.304 13.276 59.52 14.4 59.52 15.6C59.52 16.8 59.304 17.928 58.872 18.984C58.448 20.032 57.856 20.956 57.096 21.756C56.336 22.556 55.456 23.184 54.456 23.64C53.456 24.088 52.384 24.312 51.24 24.312ZM51.24 22.296C52.112 22.296 52.924 22.12 53.676 21.768C54.436 21.416 55.1 20.932 55.668 20.316C56.244 19.692 56.692 18.98 57.012 18.18C57.34 17.372 57.504 16.512 57.504 15.6C57.504 14.688 57.34 13.828 57.012 13.02C56.684 12.204 56.232 11.492 55.656 10.884C55.088 10.268 54.424 9.784 53.664 9.432C52.912 9.08 52.104 8.904 51.24 8.904C50.368 8.904 49.552 9.08 48.792 9.432C48.04 9.784 47.376 10.272 46.8 10.896C46.232 11.512 45.784 12.224 45.456 13.032C45.136 13.832 44.976 14.688 44.976 15.6C44.976 16.52 45.14 17.384 45.468 18.192C45.796 19 46.244 19.712 46.812 20.328C47.388 20.944 48.052 21.428 48.804 21.78C49.564 22.124 50.376 22.296 51.24 22.296ZM61.4288 24L65.8208 17.976L61.4528 11.976H63.9368L67.0688 16.248L70.1888 11.976H72.6728L68.3048 17.976L72.6968 24H70.2128L67.0688 19.68L63.9128 24H61.4288ZM82.7616 12H84.8976L78.3336 30H76.1976L78.3696 24L74.0616 12H76.2696L79.3776 21.228L82.7616 12ZM86.7759 24V7.2H92.3199C93.2239 7.2 94.0359 7.42 94.7559 7.86C95.4839 8.3 96.0599 8.896 96.4839 9.648C96.9159 10.392 97.1319 11.224 97.1319 12.144C97.1319 13.08 96.9119 13.924 96.4719 14.676C96.0399 15.42 95.4559 16.012 94.7199 16.452C93.9919 16.884 93.1919 17.1 92.3199 17.1H88.7919V24H86.7759ZM88.7919 15.084H92.1399C92.6839 15.084 93.1799 14.952 93.6279 14.688C94.0839 14.416 94.4439 14.052 94.7079 13.596C94.9799 13.132 95.1159 12.612 95.1159 12.036C95.1159 11.452 94.9799 10.932 94.7079 10.476C94.4439 10.012 94.0839 9.648 93.6279 9.384C93.1799 9.112 92.6839 8.976 92.1399 8.976H88.7919V15.084ZM103.186 24.228C102.538 24.204 101.906 24.084 101.29 23.868C100.682 23.644 100.146 23.344 99.6819 22.968C99.2259 22.584 98.8939 22.144 98.6859 21.648L100.414 20.904C100.534 21.176 100.75 21.432 101.062 21.672C101.374 21.912 101.734 22.104 102.142 22.248C102.55 22.392 102.962 22.464 103.378 22.464C103.818 22.464 104.23 22.396 104.614 22.26C104.998 22.124 105.31 21.924 105.55 21.66C105.798 21.388 105.922 21.064 105.922 20.688C105.922 20.288 105.786 19.976 105.514 19.752C105.25 19.52 104.914 19.34 104.506 19.212C104.106 19.076 103.698 18.948 103.282 18.828C102.458 18.62 101.722 18.372 101.074 18.084C100.426 17.788 99.9139 17.416 99.5379 16.968C99.1699 16.512 98.9859 15.932 98.9859 15.228C98.9859 14.484 99.1899 13.84 99.5979 13.296C100.014 12.752 100.558 12.332 101.23 12.036C101.902 11.74 102.622 11.592 103.39 11.592C104.358 11.592 105.242 11.8 106.042 12.216C106.842 12.632 107.438 13.196 107.83 13.908L106.21 14.856C106.074 14.568 105.866 14.316 105.586 14.1C105.306 13.876 104.986 13.7 104.626 13.572C104.266 13.444 103.898 13.376 103.522 13.368C103.058 13.352 102.622 13.412 102.214 13.548C101.814 13.684 101.49 13.892 101.242 14.172C101.002 14.444 100.882 14.784 100.882 15.192C100.882 15.592 101.01 15.896 101.266 16.104C101.53 16.312 101.87 16.48 102.286 16.608C102.71 16.728 103.17 16.868 103.666 17.028C104.394 17.26 105.074 17.528 105.706 17.832C106.338 18.136 106.846 18.516 107.23 18.972C107.622 19.428 107.814 19.992 107.806 20.664C107.806 21.4 107.586 22.044 107.146 22.596C106.706 23.14 106.134 23.556 105.43 23.844C104.734 24.132 103.986 24.26 103.186 24.228ZM117.637 12H119.773L113.209 30H111.073L113.245 24L108.937 12H111.145L114.253 21.228L117.637 12Z" fill="white"/>
                        </svg>
                    </div>

                    <div className='flex flex-col w-[70%] text-secwhite m-10'>

                        <div className={`p-4 flex justify-start text-primary1   items-center cursor-pointer ${activeItem === 'home' && 'rounded-md bg-[#C3E7FA] text-primary1'}`} onClick={() => handleClick('home')}>
                            <GrHomeRounded className='mr-2 ' />Overview
                        </div>
                        <div className={`p-4 flex justify-start items-center cursor-pointer ${activeItem === 'patient' && ' rounded-md bg-[#C3E7FA] text-primary1'}`} onClick={() => handleClick('patient')}>
                            <FiUsers className='mr-2' /> Patient List
                        </div>
                        <div className={`p-4 flex justify-start items-center cursor-pointer ${activeItem === 'Appoitment' && ' rounded-md bg-[#C3E7FA]  text-primary1'}`} onClick={() => handleClick('Appointment')}>
                            <LuMessagesSquare className='mr-2' />Appontments
                        </div>
                        
                        <div className={`p-4 flex justify-start items-center cursor-pointer ${activeItem === 'messages' && ' rounded-md bg-[#C3E7FA]  text-primary1'}`} onClick={() => handleClick('messages')}>
                            <LuMessagesSquare className='mr-2' />Messages
                        </div>

                        <div className={`p-4 flex justify-start items-center cursor-pointer ${activeItem === 'settings' && ' rounded-md bg-[#C3E7FA] text-primary1'}`} onClick={() => handleClick('settings')}>
                            <IoSettingsOutline className='mr-2'/>Settings
                        </div>

                    </div>
            </div> 


            <div className="flex flex-col text-secwhite mb-4">
                <button
                  className={`p-2 flex justify-start items-center cursor-pointer ${logoutHovered && 'text-sechover'}`}
                  onMouseEnter={handleLogoutHover}
                  onMouseLeave={handleLogoutHover}
                  onClick={() => console.log('Logout button clicked')}
                >
                  <IoIosLogOut className='mr-2' />Logout
                </button>

                <button
                  className={`p-2 flex cursor-pointer ${helpHovered && 'text-sechover'}`}
                  onMouseEnter={handleHelpHover}
                  onMouseLeave={handleHelpHover}
                  onClick={() => console.log('Help button clicked')}
                >
                  <BiHelpCircle className='mr-2' />Help Center
                </button>
            </div>



        </div>
    );
};

export default Sidebar;
