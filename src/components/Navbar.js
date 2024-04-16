
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Check username and password
    if (username === 'robert' && password === 'pass123') {
      // Navigate to dashboard
      navigate('/adminsidebar');
    } else {
      // Show error or do something else
      alert('Invalid username or password');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-gray-800 ${isMenuOpen ? 'bg-opacity-90' : ''}`}>

      <div className="container mx-auto px-2 relative"> {/* Added relative class */}
        <div className="flex items-center justify-between ">
          {/* Brand logo */}
          {/* <Link to="/" className="text-white text-2xl font-bold">Complaint App</Link> */}
        <img src ={require("./download.png")} className='h-20'></img>
          {/* Hamburger menu for mobile */}
          <div className="md:hidden absolute top-0 right-0"> {/* Added absolute and top-0 classes */}
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>

          {/* Navbar links */}
          <div className={`md:flex md:items-center md:justify-end ${isMenuOpen ? 'block' : 'hidden'}`}>
            <Link to="/" className="text-white hover:text-gray-300 px-4 py-2 block md:inline">Home</Link>
            <Link to="/clogin" className="text-white hover:text-gray-300 px-4 py-2 block md:inline">Login</Link>
            <Link to="/cregister" className="text-white hover:text-gray-300 px-4 py-2 block md:inline">Register</Link>
            <select className="text-center bg-gray-800 text-white border border-gray-300 rounded-md px-4 py-2 focus:outline-none" onChange={(e) => setShowLoginModal(e.target.value === 'login')} >
              <option value="admin" selected>Admin</option>
              <option value="login">Login</option>
              <option value="register">Register</option>  
            </select>
          </div>
        </div>

        {/* Login Modal */}
        {showLoginModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                  <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} name="username" className="border border-gray-300 rounded-md px-3 py-2 w-full" placeholder="Enter username" />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" className="border border-gray-300 rounded-md px-3 py-2 w-full" placeholder="Enter password" />
                </div>
                <div className="flex justify-between">
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
                  <button type="button" onClick={() => setShowLoginModal(false)} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md ml-2">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

