import React, { useState } from 'react';
import axios from 'axios';

function Addauthority() {
    const handleauthority=()=>{
        alert("Authority added successfully...")
    }

        const [formData, setFormData] = useState({
            name: '',
            password: '',
           contact: '',
            email: ''
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
                await axios.post('http://localhost:8080/api/authority', formData);
                alert('Customer registered successfully!');
                // Reset form fields
                setFormData({
                    name: '',
                    password: '',
                    contact: '',
                    email: ''
                });
            } catch (error) {
                console.error('Error registering customer:', error);
                // Handle error (show error message, etc.)
            }
        };
           
        return (
            <div className="max-w-md mx-auto">
                <h2 className="text-2xl font-bold mb-4">Authority Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">Contact</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" name="email" value={formData.email} onChange={handleChange} required/>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Register</button>
                    </div>
                </form>
            </div>
        );
    }
    
   

export default Addauthority;