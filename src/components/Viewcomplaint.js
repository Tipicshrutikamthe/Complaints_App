import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Viewcomplaint = () => {
  const [complaints, setComplaints] = useState([]);
  const {id}=useParams()
 useEffect(()=>{
  loadusers();
 },[])

  
  const loadusers=async ()=>{
    const result=await axios.get("http://localhost:8080/api/complaints");
    setComplaints(result.data)
  }

  const deleteuser=async (id)=>{
    await axios.delete(`http://localhost:8080/api/complaints/${id}`)
    loadusers()
  }
  

  return (
    <div className='lg:mb-10 lg:mt-5 lg:mx-32 '>
      {/* <h2 className="text-xl font-bold mb-4">Complaints</h2> */}
      <table className="table-auto w-full  border-2 border-black" >
        <thead>
          <tr>
            <th className="px-4 py-2 border-2 border-black">ID</th>
            <th className="px-4 py-2 border-2 border-black">Name</th>
            <th className="px-4 py-2 border-2 border-black">Contact</th>
            <th className="px-4 py-2 border-2 border-black">Complaint</th>
            <th className="px-4 py-2 border-2 border-black">Description</th>
            <th className="border-2 border-black col-span-2">Action</th>
            <th className="border-2 border-black col-span-2">Remove</th>

            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {complaints.map(complaint => (
            <tr key={complaint.id}>
              <td className="border-2 border-black px-4 py-2">{complaint.id}</td>
              <td className="border-2 border-black px-4 py-2">{complaint.name}</td>
              <td className="border-2 border-black px-4 py-2">{complaint.contact}</td>
              <td className="border-2 border-black px-4 py-2">{complaint.complaint}</td>
              <td className="border-2 border-black px-4 py-2">{complaint.description}</td>
               <td className="border-2 border-black px-4 py-2"><Link className= 'btn bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded' to={`/viewuser/${complaint.id}`}>View</Link>
              </td>
              {/* <td className="border-2 border-black px-4 py-2"><Link className= 'btn bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded' to={`edit/${complaint.id}`}>Edit</Link>
              </td> */}
               <td className="border-2 border-black px-4 py-2">
                <button className='bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded' onClick={()=>deleteuser(complaint.id)}>Delete

                </button>
                </td>

              {/* Add more table cells for additional details */}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='mt-5'>
      <Link className= 'btn bg-blue-800 hover:bg-blue-600 text-white font-bold py-1 px-2   rounded' to={`/adminsidebar`}>Back</Link>
      </div>
    </div>
  );
};

export default Viewcomplaint;
 
