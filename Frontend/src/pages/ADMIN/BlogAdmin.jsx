import React from 'react'
import SideBarAdmin from "../../components/SideBarAdmin";
import TopBar from "../../components/TopBar"
import AdminCard from '../../components/AdminCard';
import ColumnChartComponent from '../../components/ColumnChartComponent';


const BlogAdmin = () => {
    const svgIcon1 = (

        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z" fill="#E3F1F4"/>
        <path opacity="0.587821" fill-rule="evenodd" clip-rule="evenodd" d="M20.6641 23.3333C20.6641 26.2789 23.0519 28.6667 25.9974 28.6667C28.9429 28.6667 31.3307 26.2789 31.3307 23.3333C31.3307 20.3878 28.9429 18 25.9974 18C23.0519 18 20.6641 20.3878 20.6641 23.3333ZM33.9974 28.6667C33.9974 30.8758 35.7883 32.6667 37.9974 32.6667C40.2065 32.6667 41.9974 30.8758 41.9974 28.6667C41.9974 26.4575 40.2065 24.6667 37.9974 24.6667C35.7883 24.6667 33.9974 26.4575 33.9974 28.6667Z" fill="#298EA6"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9778 31.333C19.6826 31.333 14.5177 34.5684 14.0009 40.9319C13.9727 41.2786 14.6356 41.9997 14.97 41.9997H36.9956C37.9972 41.9997 38.0128 41.1936 37.9972 40.933C37.6065 34.3906 32.3616 31.333 25.9778 31.333ZM45.2746 41.9997L40.1333 41.9997C40.1333 38.9984 39.1417 36.2288 37.4683 34.0005C42.0103 34.0501 45.7189 36.3465 45.998 41.1997C46.0092 41.3951 45.998 41.9997 45.2746 41.9997Z" fill="#298EA6"/>
        </svg>

    );

    const svgIcon3 = ( 

        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z" fill="#E3F1F4"/>
        <path d="M19.1111 40.8889H42.4444C43.3036 40.8889 44 41.5853 44 42.4444C44 43.3036 43.3036 44 42.4444 44H17.5556C16.6964 44 16 43.3036 16 42.4444V17.5556C16 16.6964 16.6964 16 17.5556 16C18.4147 16 19.1111 16.6964 19.1111 17.5556V40.8889Z" fill="#298EA6"/>
        <path opacity="0.5" d="M24.9091 34.175C24.3216 34.8017 23.3372 34.8335 22.7104 34.2459C22.0836 33.6583 22.0519 32.6739 22.6395 32.0472L28.4728 25.8249C29.0411 25.2188 29.9854 25.1662 30.6174 25.7056L35.2214 29.6343L41.22 22.0361C41.7524 21.3618 42.7306 21.2467 43.4049 21.779C44.0792 22.3114 44.1942 23.2895 43.6619 23.9638L36.6619 32.8305C36.1152 33.5231 35.1024 33.6227 34.4312 33.0499L29.7272 29.0358L24.9091 34.175Z" fill="#298EA6"/>
        </svg>
  
    );
  
    const svgIcon4 = (
  
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z" fill="#E3F1F4"/>
      <path opacity="0.78" fill-rule="evenodd" clip-rule="evenodd" d="M28.6299 23.8093C28.65 23.5488 28.8672 23.3477 29.1285 23.3477H29.5463C29.8032 23.3477 30.0183 23.5423 30.0438 23.7979L30.6655 30.0143L35.0802 32.537C35.236 32.626 35.3321 32.7917 35.3321 32.9712V33.3597C35.3321 33.6894 35.0186 33.9288 34.7006 33.8421L28.3974 32.123C28.1661 32.0599 28.0121 31.8414 28.0305 31.6023L28.6299 23.8093Z" fill="#298EA6"/>
      <path opacity="0.901274" fill-rule="evenodd" clip-rule="evenodd" d="M22.7204 14.9844C22.4563 14.6697 21.9464 14.7902 21.851 15.1898L20.2176 22.038C20.1399 22.3636 20.398 22.6721 20.7322 22.6532L27.777 22.254C28.1879 22.2307 28.3963 21.7486 28.1317 21.4334L26.3304 19.2867C27.4956 18.8884 28.7312 18.6803 30 18.6803C36.2592 18.6803 41.3333 23.7544 41.3333 30.0137C41.3333 36.2729 36.2592 41.347 30 41.347C23.7408 41.347 18.6667 36.2729 18.6667 30.0137C18.6667 28.9629 18.809 27.9338 19.0864 26.9446L16.5188 26.2244C16.1808 27.4296 16 28.7005 16 30.0137C16 37.7457 22.268 44.0137 30 44.0137C37.732 44.0137 44 37.7457 44 30.0137C44 22.2817 37.732 16.0137 30 16.0137C28.0547 16.0137 26.2021 16.4104 24.5186 17.1274L22.7204 14.9844Z" fill="#298EA6"/>
      </svg>
      

   
    ); 
    const data = [40, 160 , 40 , 20 , 80 , 120 , 80 ];
    const labels = ["S","M", "T","W","T","F","S"]

  return (
  <div className="grid grid-cols-[20%_80%] h-screen overflow-hidden">
        <SideBarAdmin currentPage='blog'/>
        <div className='flex flex-col h-screen'>
            <TopBar/>
            <div className="flex flex-col items-center text-urbanist my-10 mr-10 border">
            <div className='flex justify-between w-[100%] mb-6'>
                <span className="text-2xl text-primdark font-semibold leading-38.4 tracking-tighter text-left w-83 h-38 gap-0">Blog</span>
            </div>
            <div className='grid grid-cols-4 gap-2 w-[100%] h-[28%] mb-6'>

                <AdminCard
                name='Total Posts'
                value='40.689'
                svgIcon={svgIcon1}
                trendPercentage='8.5%'
                trend='up'>
                </AdminCard>


                <AdminCard
                name='Total Readers'
                value='40.689'
                svgIcon={svgIcon3}
                trendPercentage='8.5%'
                trend='down'>
                </AdminCard>


                <AdminCard
                name='Total Viewers'
                value='40.689'
                svgIcon={svgIcon4}
                trendPercentage='13%'
                trend='up'>
                </AdminCard>

            </div>
            <div className='flex justify-start items-center space-x-6 w-[100%] h-[50%] border'>
                {/*Radial Bar chart component*/}
                <div className='w-[40%] h-full border rounded-xl shadow-xl'>
                    
                </div>
                {/*Column chart component */}
                <div className='flex justify-center items-center w-[40%] h-full border rounded-xl shadow-xl'>
                    <ColumnChartComponent
                    labels={labels}
                    data={data}
                    >
                    </ColumnChartComponent>
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default BlogAdmin