import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import SideBarTherapist from '../../components/SideBarTherapist'
import TopBar from '../../components/TopBar'
import { MdOutlineFileUpload } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GrFormNext } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { CgLock } from "react-icons/cg";
import { LiaEdit } from "react-icons/lia";
import BlogCardMyBlogs from '../../components/BlogCardMyBlogs';

const MyBlogs = () => {

    // State to track the active button
    const [activeButton, setActiveButton] = useState(null); 

  return (
    <div className='grid grid-cols-[20%_80%] h-screen overflow-hidden'>
        <SideBarTherapist currentPage='settings'/>
        <div className='flex flex-col h-screen'>
            <TopBar/>   
            <div className='grid grid-cols-[25%_75%] text-urbanist h-full pt-4 pb-10 mr-10'>
              
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
                              className={`flex items-center w-[90%] border-b border-gray-300 p-4 text-sechover ${
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
                        </Link>
                  </div>
                            
                            
                            
                            
                            
              </div> 




              {/*My blogs section*/}
              <div className='overflow-y-auto justify-start p-6'>
                    <div className="flex justify-between mx-4 mt-2 w-[95%] h-[10%]">
                        <div>
                          <h3 className="text-xl font-urbanist font-semibold text-left text-primdark">
                            My Blogs
                          </h3>
                          <p className=" font-urbanist text-base font-medium leading-5 text-left text-secdark">
                            Share your thoughts and experiences
                          </p>
                        </div>
                        <Link to='/therapist/add-blog' className="flex justify-center items-center space-x-2  py-2 px-4 bg-sechover rounded-lg text-secwhite">
                          <p className="font-urbanist text-sm font-semibold leading-5 text-center">
                            Add New Blog
                          </p>
                          <LiaEdit />
                        </Link>
                    </div>
                    
                    
                    <div className='grid grid-cols-2 gap-4 m-4 '>
                        <BlogCardMyBlogs></BlogCardMyBlogs>
                        <BlogCardMyBlogs></BlogCardMyBlogs>
                        <BlogCardMyBlogs></BlogCardMyBlogs>
                    </div>
              </div>
            
            </div>

        </div>




    </div>
  )
}

export default MyBlogs