import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = ({ currentPage }) => {
  return (
    <div className='bg-primdark flex justify-center items-center space-x-6'>
      <nav className="bg-primdark text-white p-4">
        <ul className="flex space-x-6 ">
          <li className={` cursor-pointer ${currentPage === 'home' ? 'underline text-sechover' : ''}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={` cursor-pointer ${currentPage === 'about' ? 'underline  text-sechover'  : ''}`}>
            <Link to="/about-us">About Us</Link>
          </li>
          <li className={` cursor-pointer ${currentPage === 'blog' ? 'underline  text-sechover' : ''}`}>
            <Link to="/blog">Blog</Link>
          </li>
          <li className={` cursor-pointer ${currentPage === 'contact' ? 'underline  text-sechover' : ''}`}>
            <Link to="/contact-us">Contact</Link>
          </li>
          <li className={` cursor-pointer ${currentPage === 'login' ? 'underline  text-sechover' : ''}`}>
            <Link to="/log-in">Login</Link>
          </li>
        </ul>
      </nav>

      <div >
        <Link to="/sign-up">
          <button className="bg-seclight text-primdark font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </Link>
      </div>
    
    </div>
  );
};

export default Navbar;
