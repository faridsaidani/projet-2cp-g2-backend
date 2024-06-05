import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import SideBarTherapist from "../../components/SideBarTherapist"
import TopBar from "../../components/TopBar"
import { AiFillCamera } from "react-icons/ai"
import { AiOutlineAppstore } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { CgLock } from "react-icons/cg";


const AddBlog = () => {
     // State to track the active button
    const [activeButton, setActiveButton] = useState(null);

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleAddBlog = () => {
        // Show the success message
        setShowSuccessMessage(true);

        // Hide the success message after 3 seconds
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);
    };




  return (
    <div className="grid grid-cols-[20%_80%] h-screen overflow-hidden">
        <SideBarTherapist currentPage='settings'/>
        <div className='flex flex-col h-screen'>
            <TopBar/>
            <div className='grid grid-cols-[25%_70%] text-urbanist h-full gap-10 pt-4 pb-10 mr-10'>
                    {/*Settings section */}
                    <div className="left-0 bg-primback rounded-xl p-4">

                    {/*Notifications*/}
                    <h3 className="text-xl ">Settings</h3>
                    <div className="flex flex-col justify-center items-center">

                      <Link to='/therapist/notifications'
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
                      </Link>
                    
                      {/*Profile*/}
                      <Link to='/therapist/profile'
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
                      </Link>
                    
                      {/*My blogs*/}
                      <Link to='/therapist/my-blogs'
                        className={`flex items-center w-[90%] border-b border-gray-300 p-4 text-sechover ${
                          activeButton === "blog" ? "text-sechover" : ""
                        }`}
                        onClick={() => setActiveButton("blog")}
                      >
                        <AiOutlineAppstore />
                        <div className="flex flex-col w-[70%] text-start px-6">
                          <p className="text-bold">My blogs</p>
                          <p className="text-xs">
                          Manage your blog posts and settings
                    
                          </p>
                        </div>
                        <GrFormNext />
                      </Link>
                    
                      {/*Password*/}
                      <Link to='/therapist/password'
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
                      </Link>
                    
                    </div>
                </div>







                    {/*Blog additon section */}
                    <div className='flex flex-col text-urbanist  mb-2 sm:mb-4 lg:mb-6 xl:mb-10 mr-2 sm:mr-4 lg:mr-6 xl:mr-10 right-0 bottom-0'>
                        <div className='flex flex-col justify-between w-[100%] mb-4 '>
                            <span className="text-2xl font-semibold leading-38.4 font-urbanist tracking-tighter text-left w-83 h-38 gap-0">My Blogs</span>
                            <span>Here you can add new article</span>
                        </div>
                        <div className='flex flex-col justify-between items-center h-[85%] rounded-3xl py-4 px-6 bg-primback'>
                            
                        <div>
                            {/* Upload photo button */}
                            <input
                                type="file"
                                accept=".pdf"
                                className="absolute w-0 h-0 overflow-hidden"
                                id="fileInput"
                                onChange={(e) => handleFileUpload(e.target.files)}
                            />

                            <label htmlFor="fileInput" className='flex flex-col justify-center items-center cursor-pointer'>
                                <div className='flex justify-center items-center w-20 h-20 rounded-full bg-sechoverbg'>
                                    <AiFillCamera className='w-[50%] h-[50%]' />
                                </div>
                                <p className='font-urbanist font-semibold leading-4 tracking-wider text-left text-xs text-blue-500 mt-4'>Upload Photo</p>
                            </label>
                        </div>



                            <div className='flex flex-col justify-between w-full h-[60%] my-2'>
                                <div className='flex justify-between w-full h-1/4'>
                                      <div className='flex flex-col w-[45%] h-[100%] '>
                                          <label className='font-urbanist font-semibold text-primdark text-sm leading-5 text-left' htmlFor="">Add Title</label>
                                          <input  
                                          className='w-[100%] h-[55%] p-2 border border-gray-300  rounded-lg bg-secwhite    
                                          font-urbanist text-xs font-light leading-5 text-left text-gray-400 placeholder-urbanist'
                                          placeholder='Depression insights'
                                          type="text" />
                                      </div >
                                      <div className='flex flex-col w-[45%] h-[100%] '>
                                          <label className='font-urbanist font-semibold text-primdark text-sm leading-5 text-left' htmlFor="">The Topic</label>
                                          <input  
                                          className='w-[100%] h-[55%] p-2 border border-gray-300  rounded-lg bg-secwhite    
                                          font-urbanist text-xs font-light leading-5 text-left text-gray-400 placeholder-urbanist'
                                          placeholder='Depression insights'
                                          type="text" />
                                      </div >
                                      
                                </div>
                                <div className=' w-full h-1/4'>
                                <div className='flex flex-col w-[45%] h-[100%]'>
                                          <label className='font-urbanist font-semibold text-primdark text-sm leading-5 text-left' htmlFor="">Subtitle</label>
                                          <input  
                                          className='w-[100%] h-[65%] p-2 border border-gray-300  rounded-lg bg-secwhite    
                                          font-urbanist text-xs font-light leading-5 text-left text-gray-400 placeholder-urbanist'
                                          placeholder='Depression insights'
                                          type="text" />
                                      </div >
                                </div>
                                <div className='w-[100%] h-1/2'>
                                      <div className='w-full h-full '>
                                          <label className='font-urbanist font-semibold text-primdark text-sm leading-5 text-left' htmlFor="">Article</label>
                                          <textarea name="" className='w-full h-[80%] p-2 border-gray-300  rounded-lg bg-secwhite    
                                          font-urbanist text-xs font-light leading-5 text-left text-gray-400 placeholder-urbanist' placeholder='Add you article test here' id=""></textarea>

                                      </div>
                                </div>
                            </div>

                            
                            

                            <button className='px-8 py-2 bg-sechover text-secwhite border rounded-lg font-urbanist text-sm font-normal leading-5 text-center'
                            onClick={handleAddBlog}
                            >
                                Add Now
                            </button>

                        </div>
                    </div>
            </div>
            



            {/* Success message */}
            {showSuccessMessage && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="flex flex-col justify-center items-center border rounded-xl w-[30%] h-[30%] p-4 bg-secwhite font-urbanist text-primdark">
                        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Add your SVG code here */}
                        </svg>
                        <h3 className="text-xl font-bold m-4">Blog added successfully</h3>
                        <p className="font-urbanist text-xs font-medium leading-5 text-center text-secdark">
                            Your article has been successfully added
                        </p>
                    </div>
                </div>
            )}











        </div>

    </div>
  )
}

export default AddBlog