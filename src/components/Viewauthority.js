// import React, { useEffect } from 'react'
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';
// import { Navigate } from 'react-router-dom';
// function Viewauthority() {
//     const [complaints, setComplaints] = useState({
//         name: '',
//         password: '',
//         contact: '',
//         email: ''
//     });
//  const {id}=useParams();
//  useEffect(()=>{
//    loadusers()
//  },[])
 
//  let navigate=useNavigate();
 
//    const loadusers=async()=>{
//     const result=await axios.get(`http://localhost:8080/api/authority/${id}`)
//     setComplaints(result.data)
//    }
//    const handleButtonClick=()=>{
//     alert(" Complaint Successfully Assigned to Authority.....");
//    }
//   return (
//      <> 
//      <h1 className='text-center text-2xl font-bold my-4'>Authority Details</h1>
    
   
//     <div className='flex justify-center mb-4'>
//         <table className="table-auto  border-2 border-black" >
//           <tr>
//             <th className="px-4 py-2 border-2 border-black">ID</th>
//             <td className="border-2 border-black px-4 py-2">{complaints.id}</td>
//             </tr>
//             <tr>
//              <th className="px-4 py-2 border-2 border-black">Name</th>
//              <td className="border-2 border-black px-4 py-2">{complaints.name}</td>
//             </tr>
//             {/* <tr>
//             <th className="px-4 py-2 border-2 border-black">Password</th>
//             <td className="border-2 border-black px-4 py-2">{complaints.password}</td>
//             </tr> */}
//             <tr>
//             <th className="px-4 py-2 border-2 border-black">Contact</th>
//             <td className="border-2 border-black px-4 py-2">{complaints.contact}</td>
//             </tr>
//             <tr>
//             <th className="px-4 py-2 border-2 border-black">Email</th>
//             <td className="border-2 border-black px-4 py-2">{complaints.email}</td>
//             </tr>
//             <tr>
//             <th className="px-4 py-2 border-2 border-black">Assigned  Compalints</th>
//             <td className="border-2 border-black px-4 py-2">2</td>
//             </tr>
//             <tr>
//             <th className="px-4 py-2 border-2 border-black">Solved Compalints</th>
//             <td className="border-2 border-black px-4 py-2">1</td>
//             </tr>
//             <tr>
//             <th className="px-4 py-2 border-2 border-black">Pending Compalints</th>
//             <td className="border-2 border-black px-4 py-2">1</td>
//             </tr>
          
//       </table> 
//       {/* <a href='/admindashboard' className='text-blue-600 text-center  underline font-serif'>go back</a> */}

//     </div>

//     </>
//   )
// }

// export default Viewauthority

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Viewauthority() {
  const { id } = useParams();
  const [authority, setAuthority] = useState(null);
  const [assignedComplaints, setAssignedComplaints] = useState([]);

  useEffect(() => {
    fetchAuthorityDetails();
    fetchAssignedComplaints();
  }, []);

  const fetchAuthorityDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/authority/${id}`);
      setAuthority(response.data);
    } catch (error) {
      console.error('Error fetching authority details:', error);
    }
  };

  const fetchAssignedComplaints = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/authority/${id}/complaints`);
      setAssignedComplaints(response.data);
    } catch (error) {
      console.error('Error fetching assigned complaints:', error);
    }
  };

  const handleComplaintStatusChange = async (complaintId, newStatus) => {
    try {
      await axios.put(`http://localhost:8080/api/complaints/${complaintId}/status`, {
        status: newStatus
      });
      // Update the status of the complaint in the UI
      setAssignedComplaints(prevComplaints => {
        return prevComplaints.map(complaint => {
          if (complaint.id === complaintId) {
            return { ...complaint, status: newStatus };
          }
          return complaint;
        });
      });
    } catch (error) {
      console.error('Error updating complaint status:', error);
    }
  };

  if (!authority) {
    return <p>Loading authority details...</p>;
  }

  return (
    <>
      <h1 className="text-center text-2xl font-bold my-4">Authority Details</h1>
      <div className="flex justify-center mb-4">
        <table className="table-auto border-2 border-black">
          <tbody>
            <tr>
              <th className="px-4 py-2 border-2 border-black">ID</th>
              <td className="border-2 border-black px-4 py-2">{authority.id}</td>
            </tr>
            <tr>
              <th className="px-4 py-2 border-2 border-black">Name</th>
              <td className="border-2 border-black px-4 py-2">{authority.name}</td>
            </tr>
            <tr>
              <th className="px-4 py-2 border-2 border-black">Contact</th>
              <td className="border-2 border-black px-4 py-2">{authority.contact}</td>
            </tr>
            <tr>
              <th className="px-4 py-2 border-2 border-black">Email</th>
              <td className="border-2 border-black px-4 py-2">{authority.email}</td>
            </tr>
            {/* Add more authority details as needed */}
          </tbody>
        </table>
      </div>
      
      <h2 className="text-center text-xl font-bold mb-4">Assigned Complaints</h2>
      <div className="flex justify-center mb-4">
        <table className="table-auto border-2 border-black">
          <thead>
            <tr>
              <th className="px-4 py-2 border-2 border-black">ID</th>
              <th className="px-4 py-2 border-2 border-black">Name</th>
              <th className="px-4 py-2 border-2 border-black">Status</th>
              <th className="px-4 py-2 border-2 border-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {assignedComplaints.map(complaint => (
              <tr key={complaint.id}>
                <td className="border-2 border-black px-4 py-2">{complaint.id}</td>
                <td className="border-2 border-black px-4 py-2">{complaint.name}</td>
                <td className="border-2 border-black px-4 py-2">{complaint.status}</td>
                <td className="border-2 border-black px-4 py-2">
                  <button onClick={() => handleComplaintStatusChange(complaint.id, 'resolved')} className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded">
                    Mark Resolved
                  </button>
                  {/* Add more action buttons as needed */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Viewauthority;
