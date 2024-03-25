import React from 'react'
import AboutUsFAQ from './AboutUsFAQ'
const AboutUsBody = () => {
  return (
    <div>
        {/*what is OxyPsy + OxyPsy vs In-Office therapy (because of the image widht) */}
        <div className='flex flex-col justify-center items-center w-screen  bg-home bg-center object-cover h-[39%] '>{/*Background problem */}
            <br />
            <br />
            <br />
            <br />
            <br />
            {/*what is OxyPsy*/}
            <div className='flex flex-col justify-center items-center w-[40%] h-[28%]  '>
                <div className=''>
                    <h2 className='text-6xl text-center font-urbanist font-bold text-primdark'>What is </h2>
                    <div className='bg-seclight w-[250px] h-auto flex justify-center rounded-l-lg border-sechover border-r-4'>
                        <h2 className='text-6xl font-bold font-urbanist text-primdark '>OxyPsy</h2>
                    </div>
                </div>
                <br />
                
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quas perspiciatis assumenda ducimus deleniti? Magnam sequi dolorem voluptatem amet pariatur esse, itaque quo suscipit ipsa nisi dicta incidunt exercitationem consequuntur.</p>
            </div>

            <br />
            <br />
            <br />

            {/* OxyPsy vs In-Office therapy*/}
            <div className=' flex flex-col  w-[32%] h-[11%] '>
                <div className=''>
                    <h2 className='text-3xl font-bold font-urbanist text-primdark text-center'>OxyPsy vs. traditional in-office</h2>
                    <h2 className='text-3xl font-bold font-urbanist text-primdark text-center'>therapy</h2>
                </div>
                <p className='text-center'>Why you should choose us</p>
                
            </div>

        </div>
            

        

        {/*The table of comparison */}
        
            <br />
            <br />
            
            <div className='flex justify-center bg-secwhite h-[100%]'>
                <div className='flex justify-center bg-primback w-[80%] h-[90%] border rounded-md px-auto '>
                    <div className=' flex w-[90%] h-[80%]' >

                        {/*first column */}

                        <div className='flex flex-col justify-center items-center w-[40%]  border-sechover border-r-2 '>
                            <br />
                            <th className='bg-primdark rounded-md text-secwhite w-[60%] h-[60%] '>Features</th>
                            <br />
                            <div>
                                <td className='text-left' >Personalized nutrition plan</td>
                                <br />

                                <td className='text-left' >Daily mental support</td>
                                <br />

                                <td className='' >Flexible scheduling</td>
                                <br />

                                <td className='' >Client-conselor matching</td>
                                <br />

                                <td className='' >Low-cost therapy</td>
                                <br />

                                <td className='' >Video sessions</td>
                                <br />

                                <td className='' >Degital worksheets</td>
                                <br />

                                <td className='' >No commute time</td>
                                <br />
                            </div>
                        </div>

                        {/*second column */}

                        <div className=' flex flex-col justify-center items-center w-[30%]  border-sechover border-r-2'>
                            <br />
                            <th className='bg-primdark rounded-md text-secwhite w-[60%] h-[60%] '>OxyPsy</th>
                            <br />
                            <div>
                                <td className=''>
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width="32" height="32" rx="6" fill="#C3E7FA"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2045 10.1535C23.534 10.4045 23.5976 10.8751 23.3466 11.2046L15.3466 21.7046C15.2154 21.8767 15.0163 21.9838 14.8003 21.9984C14.5844 22.0129 14.3727 21.9334 14.2197 21.7804L9.71967 17.2804C9.42678 16.9875 9.42678 16.5126 9.71967 16.2197C10.0126 15.9268 10.4874 15.9268 10.7803 16.2197L14.6735 20.1129L22.1534 10.2955C22.4045 9.96603 22.8751 9.90243 23.2045 10.1535Z" fill="#063248"/>
                                        </svg>
                                </td>
                                <br />
                                <td className=''>
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width="32" height="32" rx="6" fill="#C3E7FA"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2045 10.1535C23.534 10.4045 23.5976 10.8751 23.3466 11.2046L15.3466 21.7046C15.2154 21.8767 15.0163 21.9838 14.8003 21.9984C14.5844 22.0129 14.3727 21.9334 14.2197 21.7804L9.71967 17.2804C9.42678 16.9875 9.42678 16.5126 9.71967 16.2197C10.0126 15.9268 10.4874 15.9268 10.7803 16.2197L14.6735 20.1129L22.1534 10.2955C22.4045 9.96603 22.8751 9.90243 23.2045 10.1535Z" fill="#063248"/>
                                        </svg>
                                </td>
                                <br />
                                <td className=''>
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width="32" height="32" rx="6" fill="#C3E7FA"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2045 10.1535C23.534 10.4045 23.5976 10.8751 23.3466 11.2046L15.3466 21.7046C15.2154 21.8767 15.0163 21.9838 14.8003 21.9984C14.5844 22.0129 14.3727 21.9334 14.2197 21.7804L9.71967 17.2804C9.42678 16.9875 9.42678 16.5126 9.71967 16.2197C10.0126 15.9268 10.4874 15.9268 10.7803 16.2197L14.6735 20.1129L22.1534 10.2955C22.4045 9.96603 22.8751 9.90243 23.2045 10.1535Z" fill="#063248"/>
                                        </svg>
                                </td>
                                <br />
                                <td className=''>
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width="32" height="32" rx="6" fill="#C3E7FA"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2045 10.1535C23.534 10.4045 23.5976 10.8751 23.3466 11.2046L15.3466 21.7046C15.2154 21.8767 15.0163 21.9838 14.8003 21.9984C14.5844 22.0129 14.3727 21.9334 14.2197 21.7804L9.71967 17.2804C9.42678 16.9875 9.42678 16.5126 9.71967 16.2197C10.0126 15.9268 10.4874 15.9268 10.7803 16.2197L14.6735 20.1129L22.1534 10.2955C22.4045 9.96603 22.8751 9.90243 23.2045 10.1535Z" fill="#063248"/>
                                        </svg>
                                </td>
                                <br />
                                <td className=''>
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width="32" height="32" rx="6" fill="#C3E7FA"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2045 10.1535C23.534 10.4045 23.5976 10.8751 23.3466 11.2046L15.3466 21.7046C15.2154 21.8767 15.0163 21.9838 14.8003 21.9984C14.5844 22.0129 14.3727 21.9334 14.2197 21.7804L9.71967 17.2804C9.42678 16.9875 9.42678 16.5126 9.71967 16.2197C10.0126 15.9268 10.4874 15.9268 10.7803 16.2197L14.6735 20.1129L22.1534 10.2955C22.4045 9.96603 22.8751 9.90243 23.2045 10.1535Z" fill="#063248"/>
                                        </svg>
                                </td>
                                <br />
                                <td className=''>
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width="32" height="32" rx="6" fill="#C3E7FA"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2045 10.1535C23.534 10.4045 23.5976 10.8751 23.3466 11.2046L15.3466 21.7046C15.2154 21.8767 15.0163 21.9838 14.8003 21.9984C14.5844 22.0129 14.3727 21.9334 14.2197 21.7804L9.71967 17.2804C9.42678 16.9875 9.42678 16.5126 9.71967 16.2197C10.0126 15.9268 10.4874 15.9268 10.7803 16.2197L14.6735 20.1129L22.1534 10.2955C22.4045 9.96603 22.8751 9.90243 23.2045 10.1535Z" fill="#063248"/>
                                        </svg>
                                </td>
                                <br />
                                <td className=''>
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width="32" height="32" rx="6" fill="#C3E7FA"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2045 10.1535C23.534 10.4045 23.5976 10.8751 23.3466 11.2046L15.3466 21.7046C15.2154 21.8767 15.0163 21.9838 14.8003 21.9984C14.5844 22.0129 14.3727 21.9334 14.2197 21.7804L9.71967 17.2804C9.42678 16.9875 9.42678 16.5126 9.71967 16.2197C10.0126 15.9268 10.4874 15.9268 10.7803 16.2197L14.6735 20.1129L22.1534 10.2955C22.4045 9.96603 22.8751 9.90243 23.2045 10.1535Z" fill="#063248"/>
                                        </svg>
                                </td>
                                <br />
                                <td className=''>
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width="32" height="32" rx="6" fill="#C3E7FA"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2045 10.1535C23.534 10.4045 23.5976 10.8751 23.3466 11.2046L15.3466 21.7046C15.2154 21.8767 15.0163 21.9838 14.8003 21.9984C14.5844 22.0129 14.3727 21.9334 14.2197 21.7804L9.71967 17.2804C9.42678 16.9875 9.42678 16.5126 9.71967 16.2197C10.0126 15.9268 10.4874 15.9268 10.7803 16.2197L14.6735 20.1129L22.1534 10.2955C22.4045 9.96603 22.8751 9.90243 23.2045 10.1535Z" fill="#063248"/>
                                        </svg>
                                </td>
                                <br />
                                

                            </div>

                        </div>

                        {/*third column */}

                        <div className='flex flex-col justify-center items-center w-[30%]'>
                            <br />
                            <th className='bg-primdark rounded-md text-secwhite w-[60%] h-[60%] '>In-office</th>
                            <br />
                            <div>
                                <td className=''>
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" width="32" height="32" rx="6" fill="#C3E7FA"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.2045 10.1535C23.534 10.4045 23.5976 10.8751 23.3466 11.2046L15.3466 21.7046C15.2154 21.8767 15.0163 21.9838 14.8003 21.9984C14.5844 22.0129 14.3727 21.9334 14.2197 21.7804L9.71967 17.2804C9.42678 16.9875 9.42678 16.5126 9.71967 16.2197C10.0126 15.9268 10.4874 15.9268 10.7803 16.2197L14.6735 20.1129L22.1534 10.2955C22.4045 9.96603 22.8751 9.90243 23.2045 10.1535Z" fill="#063248"/>
                                    </svg>   
                                </td>
                                <br />
                                <td>
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" width="32" height="32" rx="6" fill="#F8F8F7"/>
                                    <path d="M12.7803 11.2197C12.4874 10.9268 12.0126 10.9268 11.7197 11.2197C11.4268 11.5126 11.4268 11.9874 11.7197 12.2803L15.4393 16L11.7197 19.7197C11.4268 20.0126 11.4268 20.4874 11.7197 20.7803C12.0126 21.0732 12.4874 21.0732 12.7803 20.7803L16.5 17.0607L20.2197 20.7803C20.5126 21.0732 20.9874 21.0732 21.2803 20.7803C21.5732 20.4874 21.5732 20.0126 21.2803 19.7197L17.5607 16L21.2803 12.2803C21.5732 11.9874 21.5732 11.5126 21.2803 11.2197C20.9874 10.9268 20.5126 10.9268 20.2197 11.2197L16.5 14.9393L12.7803 11.2197Z" fill="#063248"/>
                                    </svg>
                                </td>
                                <br />
                                <td>
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" width="32" height="32" rx="6" fill="#F8F8F7"/>
                                    <path d="M12.7803 11.2197C12.4874 10.9268 12.0126 10.9268 11.7197 11.2197C11.4268 11.5126 11.4268 11.9874 11.7197 12.2803L15.4393 16L11.7197 19.7197C11.4268 20.0126 11.4268 20.4874 11.7197 20.7803C12.0126 21.0732 12.4874 21.0732 12.7803 20.7803L16.5 17.0607L20.2197 20.7803C20.5126 21.0732 20.9874 21.0732 21.2803 20.7803C21.5732 20.4874 21.5732 20.0126 21.2803 19.7197L17.5607 16L21.2803 12.2803C21.5732 11.9874 21.5732 11.5126 21.2803 11.2197C20.9874 10.9268 20.5126 10.9268 20.2197 11.2197L16.5 14.9393L12.7803 11.2197Z" fill="#063248"/>
                                    </svg>
                                </td>
                                <br />
                                <td>
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" width="32" height="32" rx="6" fill="#F8F8F7"/>
                                    <path d="M12.7803 11.2197C12.4874 10.9268 12.0126 10.9268 11.7197 11.2197C11.4268 11.5126 11.4268 11.9874 11.7197 12.2803L15.4393 16L11.7197 19.7197C11.4268 20.0126 11.4268 20.4874 11.7197 20.7803C12.0126 21.0732 12.4874 21.0732 12.7803 20.7803L16.5 17.0607L20.2197 20.7803C20.5126 21.0732 20.9874 21.0732 21.2803 20.7803C21.5732 20.4874 21.5732 20.0126 21.2803 19.7197L17.5607 16L21.2803 12.2803C21.5732 11.9874 21.5732 11.5126 21.2803 11.2197C20.9874 10.9268 20.5126 10.9268 20.2197 11.2197L16.5 14.9393L12.7803 11.2197Z" fill="#063248"/>
                                    </svg>
                                </td>
                                <br />
                                <td>
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" width="32" height="32" rx="6" fill="#F8F8F7"/>
                                    <path d="M12.7803 11.2197C12.4874 10.9268 12.0126 10.9268 11.7197 11.2197C11.4268 11.5126 11.4268 11.9874 11.7197 12.2803L15.4393 16L11.7197 19.7197C11.4268 20.0126 11.4268 20.4874 11.7197 20.7803C12.0126 21.0732 12.4874 21.0732 12.7803 20.7803L16.5 17.0607L20.2197 20.7803C20.5126 21.0732 20.9874 21.0732 21.2803 20.7803C21.5732 20.4874 21.5732 20.0126 21.2803 19.7197L17.5607 16L21.2803 12.2803C21.5732 11.9874 21.5732 11.5126 21.2803 11.2197C20.9874 10.9268 20.5126 10.9268 20.2197 11.2197L16.5 14.9393L12.7803 11.2197Z" fill="#063248"/>
                                    </svg>
                                </td>
                                <br />
                                <td>
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" width="32" height="32" rx="6" fill="#F8F8F7"/>
                                    <path d="M12.7803 11.2197C12.4874 10.9268 12.0126 10.9268 11.7197 11.2197C11.4268 11.5126 11.4268 11.9874 11.7197 12.2803L15.4393 16L11.7197 19.7197C11.4268 20.0126 11.4268 20.4874 11.7197 20.7803C12.0126 21.0732 12.4874 21.0732 12.7803 20.7803L16.5 17.0607L20.2197 20.7803C20.5126 21.0732 20.9874 21.0732 21.2803 20.7803C21.5732 20.4874 21.5732 20.0126 21.2803 19.7197L17.5607 16L21.2803 12.2803C21.5732 11.9874 21.5732 11.5126 21.2803 11.2197C20.9874 10.9268 20.5126 10.9268 20.2197 11.2197L16.5 14.9393L12.7803 11.2197Z" fill="#063248"/>
                                    </svg>
                                </td>
                                <br />
                                <td>
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" width="32" height="32" rx="6" fill="#F8F8F7"/>
                                    <path d="M12.7803 11.2197C12.4874 10.9268 12.0126 10.9268 11.7197 11.2197C11.4268 11.5126 11.4268 11.9874 11.7197 12.2803L15.4393 16L11.7197 19.7197C11.4268 20.0126 11.4268 20.4874 11.7197 20.7803C12.0126 21.0732 12.4874 21.0732 12.7803 20.7803L16.5 17.0607L20.2197 20.7803C20.5126 21.0732 20.9874 21.0732 21.2803 20.7803C21.5732 20.4874 21.5732 20.0126 21.2803 19.7197L17.5607 16L21.2803 12.2803C21.5732 11.9874 21.5732 11.5126 21.2803 11.2197C20.9874 10.9268 20.5126 10.9268 20.2197 11.2197L16.5 14.9393L12.7803 11.2197Z" fill="#063248"/>
                                    </svg>
                                </td>
                                <br />
                                <td>
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.5" width="32" height="32" rx="6" fill="#F8F8F7"/>
                                    <path d="M12.7803 11.2197C12.4874 10.9268 12.0126 10.9268 11.7197 11.2197C11.4268 11.5126 11.4268 11.9874 11.7197 12.2803L15.4393 16L11.7197 19.7197C11.4268 20.0126 11.4268 20.4874 11.7197 20.7803C12.0126 21.0732 12.4874 21.0732 12.7803 20.7803L16.5 17.0607L20.2197 20.7803C20.5126 21.0732 20.9874 21.0732 21.2803 20.7803C21.5732 20.4874 21.5732 20.0126 21.2803 19.7197L17.5607 16L21.2803 12.2803C21.5732 11.9874 21.5732 11.5126 21.2803 11.2197C20.9874 10.9268 20.5126 10.9268 20.2197 11.2197L16.5 14.9393L12.7803 11.2197Z" fill="#063248"/>
                                    </svg>
                                </td>
                                <br />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>



        {/*Get started button zone */}
        <div className=' flex justify-center items-center w-screen h-[40vh] bg-secwhite'>
            <button className='bg-sechover border rounded-md font-bold text-secwhite h-[35px] w-[140px] flex items-center justify-center'>
                <span className="mr-1">Get started</span>
                <svg  width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 5L19.5 12L12.5 19" stroke="#F8F8F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.5 12L19.5 12" stroke="#F8F8F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>   


        

        {/*Common questions section */}
        <div>
            <div className='px-10 flex justify-center flex-col'>
                <h3 className='text-2xl font-urbanist font-bold text-primdark '>Common Questions</h3>
                <p className='  font-urbanist text-secdark'>Find answers to frequently asked questions</p>
                <br />
                <br />
                <div className='flex justify-center items-center w-screen bg-secwhite '>
                            <div className=' mr-10'>
                                <AboutUsFAQ/>
                            </div>

                            {/*Ask your question section*/}
                            <div className=' bg-primback rounded-md ml-10 '>
                                <div className='flex flex-col justify-center items-center  py-8 px-8'>
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.5513 30.5551C26.1019 19.4152 33.9886 0 49.9632 0C65.9378 0 73.8245 19.4152 62.3751 30.5552L49.9632 42.6316L37.5513 30.5551Z" fill="#298EA6"/>
                                    <path d="M37.6216 69.4449C26.1722 80.5848 34.0589 100 50.0335 100C66.0081 100 73.8948 80.5848 62.4454 69.4448L50.0335 57.3684L37.6216 69.4449Z" fill="#298EA6"/>
                                    <path d="M30.5551 62.4472C19.4152 73.8966 0 66.0099 0 50.0353C0 34.0607 19.4152 26.174 30.5552 37.6235L42.6316 50.0353L30.5551 62.4472Z" fill="#298EA6"/>
                                    <path d="M69.4449 62.3755C80.5848 73.8249 100 65.9382 100 49.9636C100 33.989 80.5848 26.1023 69.4448 37.5517L57.3684 49.9636L69.4449 62.3755Z" fill="#298EA6"/>
                                    </svg>
                                    <br />
                                    <div>
                                        <h3 className='text-1xl text-center font-bold font-urbanist text-primdark'>Ask your question</h3>
                                        <p className='text-center'>Feel free to ask questions on anytime</p>
                                    </div>
                                    <br />
                                    <button className='bg-sechover border rounded-md font-bold text-secwhite h-[35px] w-[140px] flex items-center justify-center'>Ask A question</button>


                                </div>


                            </div>


                </div>
            </div>
        </div>

        <br />
        <br />
        <br />






    </div>
  )
}

export default AboutUsBody