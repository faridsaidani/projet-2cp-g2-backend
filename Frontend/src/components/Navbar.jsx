import React from 'react';




const Navbar = ({ currentPage }) => {
  return (
    <div className='bg-primdark flex justify-center items-center space-x-6'>
      <nav className="bg-primdark text-white p-4">
        <ul className="flex space-x-6 ">
          <li className={` cursor-pointer ${currentPage === 'home' ? 'underline text-sechover' : ''}`}>
            Home
          </li>
          <li className={` cursor-pointer ${currentPage === 'about' ? 'underline  text-sechover'  : ''}`}>
            About Us
          </li>
          <li className={` cursor-pointer ${currentPage === 'blog' ? 'underline  text-sechover' : ''}`}>
            Blog
          </li>
          <li className={` cursor-pointer ${currentPage === 'contact' ? 'underline  text-sechover' : ''}`}>
            Contact
          </li>
          <li className={` cursor-pointer ${currentPage === 'login' ? 'underline  text-sechover' : ''}`}>
            Login
          </li>
        </ul>
      </nav>

      <div >
        <button className="bg-seclight text-primdark font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    
    </div>
  );
};

export default Navbar;
