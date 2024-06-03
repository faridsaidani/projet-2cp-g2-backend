import React,{useState} from 'react'
import SideBarAdmin from '../../components/SideBarAdmin'
import TopBar from '../../components/TopBar'



const PasswordChanging = () => {
  // State to track the active button
  const [activeButton, setActiveButton] = useState(null);
  // State to track the visibility of password fields
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className='grid grid-cols-[20%_80%] h-screen overflow-hidden'>
        <SideBarAdmin/>
        <div className='flex flex-col h-screen'>
            <TopBar/>
            <div className='grid grid-cols-[25%_70%] text-urbanist h-full pt-4 pb-10 mr-10'>
                {/*Settings section */}
                <div className='left-0 bg-primback rounded-xl p-4'>

                    {/*Notifications*/}
                    <h3 className='text-xl '>Settings</h3>
                    <div className='flex flex-col justify-center items-center'>
                        <button  className={`flex items-center w-[90%] border-b border-gray-300 p-4 ${activeButton === 'notifications' ? 'text-sechover' : ''}`} onClick={() => setActiveButton('notifications')}>
                            <svg  width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 8.5C6 6.9087 6.63214 5.38258 7.75736 4.25736C8.88258 3.13214 10.4087 2.5 12 2.5C13.5913 2.5 15.1174 3.13214 16.2426 4.25736C17.3679 5.38258 18 6.9087 18 8.5C18 15.5 21 17.5 21 17.5H3C3 17.5 6 15.5 6 8.5Z" stroke="#063248" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.2969 21.5C10.4643 21.8044 10.7103 22.0583 11.0094 22.2352C11.3084 22.412 11.6495 22.5053 11.9969 22.5053C12.3443 22.5053 12.6853 22.412 12.9844 22.2352C13.2834 22.0583 13.5295 21.8044 13.6969 21.5" stroke="#063248" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div className='flex flex-col w-[80%] text-start px-2'>
                                <p className='text-bold'>Notifications</p>
                                <p className='text-xs'>Select notifications you want to receive</p>
                            </div>
                            <svg className='right-0' width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13.5L7 7.5L1 1.5" stroke="#063248" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>

                        {/*Profile*/}
                        <button className={`flex items-center w-[90%] border-b border-gray-300 p-4 ${activeButton === 'profile' ? 'text-sechover' : ''}`} onClick={() => setActiveButton('profile')}>
                            <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <div className='flex flex-col w-[80%] text-start px-2'>
                                <p className='text-bold'>Profile</p>
                                <p className='text-xs'>Update your personal information to get more information about you</p>
                            </div>

                            <svg className='right-0' width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13.5L7 7.5L1 1.5" stroke="#063248" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>


                        {/*Password*/}
                        <button  className={`flex items-center w-[90%] border-b border-gray-300 p-4 ${activeButton === 'password' ? 'text-sechover' : ''}`} onClick={() => setActiveButton('password')}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            <div className='flex flex-col w-[80%] text-start px-2'>
                                <p className='text-bold'>Password</p>
                                <p className='text-xs'>Choose a strong password to protect your information</p>
                            </div>

                            <svg className='right-0' width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 13.5L7 7.5L1 1.5" stroke="#063248" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
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