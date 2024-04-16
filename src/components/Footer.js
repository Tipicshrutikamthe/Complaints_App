import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <Link to="/" className="text-gray-400 hover:text-gray-300 ml-6">
              Home
            </Link>
            <Link to="/about" className="text-gray-400 hover:text-gray-300 ml-6">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-gray-300 ml-6">
              Contact
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
