import React,{useState} from 'react'
import SideBar from '../../components/SideBar'
import TopBar from '../../components/TopBar'
import IMG from '../assets/Profile.png'




const Profile = () => {
     // State to track the active button
    const [activeButton, setActiveButton] = useState(null);

  return (
    <div className='bg-secwhite'>
        <SideBar></SideBar>
        <TopBar></TopBar>
        <div className='flex fixed w-[74%] h-[75%] text-urbanist mb-10 mr-10 right-0 bottom-0'>
            {/*Settings section */}
            <div className='w-[30%] h-[100%] left-0 bg-primback rounded-xl  p-4'>

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



            <div className='flex flex-col justify-start w-[70%] p-6 '>
                <div className='flex justify-between m-4'>
                    <div>
                        <h3 className='text-xl text-primdark'>Profile</h3>
                        <p className='text-sm text-secdark'>Update your photo and personal information</p>
                    </div>
                    <button className='flex justify-center items-center space-x-2  py-2 px-4 bg-sechover rounded-lg'>
                        <p className='text-secwhite'>Edit profile</p>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 4.5H4C3.46957 4.5 2.96086 4.71071 2.58579 5.08579C2.21071 5.46086 2 5.96957 2 6.5V20.5C2 21.0304 2.21071 21.5391 2.58579 21.9142C2.96086 22.2893 3.46957 22.5 4 22.5H18C18.5304 22.5 19.0391 22.2893 19.4142 21.9142C19.7893 21.5391 20 21.0304 20 20.5V13.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.5 3.00023C18.8978 2.6024 19.4374 2.37891 20 2.37891C20.5626 2.37891 21.1022 2.6024 21.5 3.00023C21.8978 3.39805 22.1213 3.93762 22.1213 4.50023C22.1213 5.06284 21.8978 5.6024 21.5 6.00023L12 15.5002L8 16.5002L9 12.5002L18.5 3.00023Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </button>
                </div>

                {/*Image and name section */}
                <div className='flex bg-primlight border rounded-lg shadow h-[30%] p-2 m-4 '>
                    <img src={IMG} alt="Profile" className='w-[20%]' />
                    <div className='px-4 '>
                        <h3 className='text-primdark font-bold'>Bellatreche Hibatellah</h3>
                        <p className='text-xs'>It will be displayed on your profile</p>
                        <button className='text-sechover text-sm'>Update</button>
                    </div>
                </div>


                <div className='flex space-x-10 mx-4 my-2'>
                    <div className='flex flex-col'>
                        <label htmlFor="">Name</label>
                        <input type="text" className='p-2 border rounded-lg'  placeholder='Hibatallah'/>

                        <label htmlFor="">User Name</label>
                        <input type="text" className='p-2 border rounded-lg' placeholder='Hiba Bella' />

                        <label htmlFor="">Gender</label>
                        <input type="text"className='p-2 border rounded-lg' placeholder='female' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="">Family Name</label>
                        <input type="text" className='p-2 border rounded-lg' placeholder='Bellatreche' />

                        <label htmlFor="">Email</label>
                        <input type="email" className='p-2 border rounded-lg' placeholder='Hibabella@gmail.com' />

                        <label htmlFor="">Date of Birth</label>
                        <input type="text" className='p-2 border rounded-lg' placeholder='27.03.2005' />
                    </div>
                </div>
            </div>

            
        </div>

    </div>
  )
}

export default Profile