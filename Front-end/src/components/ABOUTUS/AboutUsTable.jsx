import React from 'react';

const AboutUsTable = () => {
  return (
    <div className='flex justify-center bg-secwhite h-[100%] mt-10'>
      <div className='grid grid-cols-3 gap-2 bg-primback w-[60%] h-[90%] border rounded-xl pt-4 px-4'>
        {/* Header */}
        <div className='bg-primdark rounded-md text-secwhite h-[60px] m-4 p-4 flex items-center justify-center'>Features</div>
        <div className='bg-primdark rounded-md text-secwhite h-[60px] m-4 p-4 flex items-center justify-center'>OxyPsy</div>
        <div className='bg-primdark rounded-md text-secwhite h-[60px] m-4 p-4 flex items-center justify-center'>In-Office</div>

        {/* Data Rows */}
        {/* First column */}
        <div className="grid grid-rows-9 justify-items-start">
          <div className='m-4 text-left row-span-1'>Personalized nutrition plan</div>
          <div className='m-4 text-left row-span-1'>Daily mental support</div>
          <div className='m-4 text-left row-span-1'>Flexible scheduling</div>
          <div className='m-4 text-left row-span-1'>Client-counselor matching</div>
          <div className='m-4 text-left row-span-1'>Low-cost therapy</div>
          <div className='m-4 text-left row-span-1'>Video sessions</div>
          <div className='m-4 text-left row-span-1'>Digital worksheets</div>
          <div className='m-4 text-left row-span-1'>No commute time</div>
        </div>

        {/* Second column */}
        <div className="grid grid-rows-9 justify-items-center">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="my-4 text-center">
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="32" height="32" rx="6" fill="#C3E7FA"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M23.2045 10.1535C23.534 10.4045 23.5976 10.8751 23.3466 11.2046L15.3466 21.7046C15.2154 21.8767 15.0163 21.9838 14.8003 21.9984C14.5844 22.0129 14.3727 21.9334 14.2197 21.7804L9.71967 17.2804C9.42678 16.9875 9.42678 16.5126 9.71967 16.2197C10.0126 15.9268 10.4874 15.9268 10.7803 16.2197L14.6735 20.1129L22.1534 10.2955C22.4045 9.96603 22.8751 9.90243 23.2045 10.1535Z" fill="#063248"/>
              </svg>
            </div>
          ))}
        </div>

        {/* Third column */}
        <div className="grid grid-rows-9 justify-items-center">
          <div className="my-4 text-center">
            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" width="32" height="32" rx="6" fill="#C3E7FA"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M23.2045 10.1535C23.534 10.4045 23.5976 10.8751 23.3466 11.2046L15.3466 21.7046C15.2154 21.8767 15.0163 21.9838 14.8003 21.9984C14.5844 22.0129 14.3727 21.9334 14.2197 21.7804L9.71967 17.2804C9.42678 16.9875 9.42678 16.5126 9.71967 16.2197C10.0126 15.9268 10.4874 15.9268 10.7803 16.2197L14.6735 20.1129L22.1534 10.2955C22.4045 9.96603 22.8751 9.90243 23.2045 10.1535Z" fill="#063248"/>
            </svg>
          </div>
          {[...Array(7)].map((_, index) => (
            <div key={index} className="my-4 text-center">
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width="32" height="32" rx="6" fill="#F8F8F7"/>
                <path d="M12.7803 11.2197C12.4874 10.9268 12.0126 10.9268 11.7197 11.2197C11.4268 11.5126 11.4268 11.9874 11.7197 12.2803L15.4393 16L11.7197 19.7197C11.4268 20.0126 11.4268 20.4874 11.7197 20.7803C12.0126 21.0732 12.4874 21.0732 12.7803 20.7803L16.5 17.0607L20.2197 20.7803C20.5126 21.0732 20.9874 21.0732 21.2803 20.7803C21.5732 20.4874 21.5732 20.0126 21.2803 19.7197L17.5607 16L21.2803 12.2803C21.5732 11.9874 21.5732 11.5126 21.2803 11.2197C20.9874 10.9268 20.5126 10.9268 20.2197 11.2197L16.5 14.9393L12.7803 11.2197Z" fill="#063248"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsTable;
