import React from 'react';




const Navbar = ({ currentPage }) => {
  return (
    <div className='bg-primary1 flex justify-center items-center  gap-[40px]'>
      <nav className="bg-primary1 text-white leading-[21.6px] font-[500] text-[18px] font-urbanist p-4">
        <ul className="flex gap-6 ">
          <li className={` cursor-pointer ${currentPage === 'home' ? 'underline text-white' : ''}`}>
            Home
          </li>
          <li className={` cursor-pointer ${currentPage === 'about' ? 'underline  text-white'  : ''}`}>
            About Us
          </li>
          <li className={` cursor-pointer ${currentPage === 'blog' ? 'underline  text-white' : ''}`}>
            Blog
          </li>
          <li className={` cursor-pointer ${currentPage === 'contact' ? 'underline  text-white' : ''}`}>
            Contact
          </li>
          <li className={` cursor-pointer ${currentPage === 'login' ? 'underline  text-white' : ''}`}>
            Login
          </li>
        </ul>
      </nav>

      <div >
        <button className="bg-complimetary2 text-primary1  leading-[21.6px] text-[18px] font-urbanist font-bold py-[14px] px-6 rounded-[8px]">
          Get Started
        </button>
      </div>
    
    </div>
  );
};

export default Navbar;
