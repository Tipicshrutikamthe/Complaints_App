import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Login from "./Login";
export default function Register() {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/clogin');
  };
  

  const [formData, setFormData] = useState({
    username: '',
    contact: '',
    emailid: '',
    password: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:8080/api/customerregistor', formData);
        alert('Customer registered successfully!');
        
        // Reset form fields
        setFormData({
          username: '',
          contact: '',
          emailid: '',
          password: ''
        });
    } catch (error) {
        console.error('Error registering customer:', error);
        // Handle error (show error message, etc.)
    }
};
  return (
    <section className="h-auto">
      <div className="">
        <div className="g-6 flex h-auto flex-wrap items-center justify-center lg:justify-evenly my-10">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-4/12 xl:w-6/12 sm:w-3/12">
            <img
              // src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
             src="https://www.ccccorp.com/wp-content/uploads/2021/10/Person-Computer-1.png" 
              className="w-full"
              alt="Sample image"
            />
          </div>

          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-4/12 xl:w-5/12 ">
            
            <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">Contact</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="complaint">EmailId</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="emailid" name="emailid" value={formData.emailid} onChange={handleChange} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Password</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" id="complaint" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    
                    <div className="flex  justify-evenly">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Register</button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  onClick={handleClick}>Sign in</button>
                    </div>
                </form>
          </div>
        </div>
      </div>
    </section>
  );
}

