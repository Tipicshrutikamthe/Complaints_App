

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import setErrorMessage from 'react'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
	
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/customerregistor/login', { username, password });
     
      if (response.data === 'Login successful') {
        console.log('Login successful');
        alert("Login successfull..");
        navigate('/dashboard');
    }  
   
    else{
      alert("invalid data")
    console.log("I")
    }
   }
  catch (error) {
      setError('An error occurred during login');
    }
  };
  const [showLoginModal, setShowLoginModal] = useState(false);
  	const handleCancelLogin = () => {
  		setShowLoginModal(false);
      setUsername("");
      setPassword("")
   	  };
  return (
    <section className="h-screen">
       <div className="h-full">
       <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-evenly">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-5/12 xl:w-6/12 ">
             <img  src="https://www.jing.fm/clipimg/full/171-1718546_employee-professional-computer-work-clipart.png"
className="w-full"
              alt="Sample image"
            />
          </div>

            <div className="mb-12 md:mb-0 lg:w-4/12">
	  <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="flex justify-evenly">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleLogin}
            >
              Login
            </button>
        	<button type="button" onClick={handleCancelLogin} className="bg-red-500 text-white px-4 py-2 rounded-md ml-2">Cancel</button>

          </div>
        </form>
        </div>
        </div></div>
    </section>
  );
}

export default Login;


