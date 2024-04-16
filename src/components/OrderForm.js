import React, { useState } from 'react';
import axios from 'axios';

function OrderForm () {
  const data={
    name: '',
    email: '',
    contactNumber: '',
    installationType: 'select', // Set a default value for the dropdown
  };
  const[inputdata,setInputdata]=useState(data)

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3001/1',inputdata)
    .then((response)=>{
        console.log(response)
        alert("order placed")
        setInputdata({
            name: '',
            email: '',
            contactNumber: '',
            installationType:'',
          });
        {
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md mb-4">
              Order placed successfully!
              <button
                onClick
                className="ml-4 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600"
              >
                View Order
              </button>
            </div>
          }
    })
  }
  const handleChange = (e) => {
    // Update form data as the user types
    setInputdata({
      ...inputdata,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={inputdata.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={inputdata.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={inputdata.contactNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Installation Type</label>
          <select
            name="installationType"
            value={inputdata.installationType}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
          >
             <option value="select">select</option>

            <option value="commercial">Commercial</option>
            <option value="residential">Residential</option>
          </select>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
