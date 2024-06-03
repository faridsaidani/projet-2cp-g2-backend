import React, { useState } from 'react';
import SideBarAdmin from '../../components/SideBarAdmin';
import TopBar from '../../components/TopBar';

const PasswordRefused = () => {

    // State to track the active button
    const [activeButton, setActiveButton] = useState(null);

    // State to manage the confirmation message visibility
    const [showConfirmation, setShowConfirmation] = useState(false);

    // Function to handle the Change Password button click
    const handleChangePassword = () => {
        setShowConfirmation(true);
        setTimeout(() => {
            setShowConfirmation(false);
        }, 3000); // Hide the confirmation message after 3 seconds
    };

    return (
        <div className='grid grid-cols-[20%_80%] h-screen overflow-hidden'>
            <SideBarAdmin />
            <div className='flex flex-col h-screen'>
                <TopBar />
                <div className='grid grid-cols-[25%_70%] text-urbanist h-full pt-4 pb-10 mr-10'>

                    {/*Settings section */}
                    <div className='left-0 bg-primback rounded-xl p-4'>

                        {/*Notifications*/}
                        <h3 className='text-xl '>Settings</h3>
                        <div className='flex flex-col justify-center items-center'>
                            <button className={`flex items-center w-[90%] border-b border-gray-300 p-4 ${activeButton === 'notifications' ? 'text-sechover' : ''}`} onClick={() => setActiveButton('notifications')}>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 8.5C6 6.9087 6.63214 5.38258 7.75736 4.25736C8.88258 3.13214 10.4087 2.5 12 2.5C13.5913 2.5 15.1174 3.13214 16.2426 4.25736C17.3679 5.38258 18 6.9087 18 8.5C18 15.5 21 17.5 21 17.5H3C3 17.5 6 15.5 6 8.5Z" stroke="#063248" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.2969 21.5C10.4643 21.8044 10.7103 22.0583 11.0094 22.2352C11.3084 22.412 11.6495 22.5053 11.9969 22.5053C12.3443 22.5053 12.6853 22.412 12.9844 22.2352C13.2834 22.0583 13.5295 21.8044 13.6969 21.5" stroke="#063248" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='flex flex-col w-[80%] text-start px-2'>
                                    <p className='text-bold'>Notifications</p>
                                    <p className='text-xs'>Select notifications you want to receive</p>
                                </div>
                                <svg className='right-0' width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 13.5L7 7.5L1 1.5" stroke="#063248" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {/*Profile*/}
                            <button className={`flex items-center w-[90%] border-b border-gray-300 p-4 ${activeButton === 'profile' ? 'text-sechover' : ''}`} onClick={() => setActiveButton('profile')}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <div className='flex flex-col w-[80%] text-start px-2'>
                                    <p className='text-bold'>Profile</p>
                                    <p className='text-xs'>Update your personal information to get more information about you</p>
                                </div>

                                <svg className='right-0' width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 13.5L7 7.5L1 1.5" stroke="#063248" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>


                            {/*Password*/}
                            <button className={`flex items-center w-[90%] border-b border-gray-300 p-4 ${activeButton === 'password' ? 'text-sechover' : ''}`} onClick={() => setActiveButton('password')}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>

                                <div className='flex flex-col w-[80%] text-start px-2'>
                                    <p className='text-bold'>Password</p>
                                    <p className='text-xs'>Choose a strong password to protect your information</p>
                                </div>

                                <svg className='right-0' width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 13.5L7 7.5L1 1.5" stroke="#063248" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                        </div>
                    </div>



                    {/*Password section */}
                    <div className='flex flex-col justify-start p-6'>
                        <div>
                            <h3 className='text-xl text-primdark'>Password</h3>
                            <p className='text-sm text-secdark'>Choose a strong password to protect your information from prying eyes</p>
                        </div>
                        <button className='w-[20%] my-4 py-2 border rounded-md bg-sechover text-secwhite' onClick={handleChangePassword}>
                            Change Password
                        </button>
                        {showConfirmation && ( // Render confirmation message if showConfirmation is true
                            <div className="flex justify-center items-center w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50 z-50">
                                <div className='flex flex-col justify-center items-center border rounded-xl w-[30%] h-[30%] p-4 bg-secwhite font-urbanist text-primdark'>
                                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width="40" height="40" rx="20" fill="#298EA6" fillOpacity="0.2" />
                                        <path d="M20.4974 28.3332C25.0999 28.3332 28.8307 24.6023 28.8307 19.9998C28.8307 15.3973 25.0999 11.6665 20.4974 11.6665C15.8949 11.6665 12.1641 15.3973 12.1641 19.9998C12.1641 24.6023 15.8949 28.3332 20.4974 28.3332Z" stroke="#298EA6" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18 20.0002L19.6667 21.6668L23 18.3335" stroke="#298EA6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                    <h3 className='text-xl font-bold m-4'>Change Password</h3>
                                    <p>Your password has been successfully changed</p>
                                </div>
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
}

export default PasswordRefused;
