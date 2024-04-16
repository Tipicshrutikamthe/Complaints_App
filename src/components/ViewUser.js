import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
function ViewUser() {
    const [complaints, setComplaints] = useState({
        name: '',
        contact: '',
        complaint: '',
        description: ''
    });
 const {id}=useParams();
 useEffect(()=>{
   loadusers()
 },[])
 
 let navigate=useNavigate();
 
   const loadusers=async()=>{
    const result=await axios.get(`http://localhost:8080/api/complaints/${id}`)
    setComplaints(result.data)
   }
   function handleButtonClick(){
    var selectedOption = document.getElementById("components");
    var selectedText = selectedOption.options[selectedOption.selectedIndex].text;
    alert("Complaint assigned to: " + selectedText);
   }
  return (
     <> 
     <h1 className='text-center text-2xl font-bold my-4'>User Details</h1>
    
   
    <div className='flex justify-center mb-2'>
        <table className="table-auto  border-2 border-black" >
          <tr>
            <th className="px-4 py-2 border-2 border-black">ID</th>
            <td className="border-2 border-black px-4 py-2">{complaints.id}</td>
            </tr>
            <tr>
             <th className="px-4 py-2 border-2 border-black">Name</th>
             <td className="border-2 border-black px-4 py-2">{complaints.name}</td>
            </tr>
            <tr>
            <th className="px-4 py-2 border-2 border-black">Contact</th>
            <td className="border-2 border-black px-4 py-2">{complaints.contact}</td>
            </tr>
            <tr>
            <th className="px-4 py-2 border-2 border-black">Complaint</th>
            <td className="border-2 border-black px-4 py-2">{complaints.complaint}</td>
            </tr>
            <tr>
            <th className="px-4 py-2 border-2 border-black">Description</th>
            <td className="border-2 border-black px-4 py-2">{complaints.description}</td>
            </tr>
          <tr>
            <th className="  px-4 py-2 border-2 border-black "><button className='bg-red-600 hover:bg-red-600 text-white font-bold py-1 px-2 rounded' >STATUS

</button></th>
        <td  className="px-4 py-2 border-2 border-black "> <label className="inline-flex items-center mt-3">
        <input
          type="checkbox"
          className="form-checkbox h-3 w-3 text-blue-500"
        />
        <span className="ml-2">Pending  </span>
        <input
          type="checkbox"
          className="form-checkbox h-3 w-3 text-blue-500"
        />
        <span className="ml-2">In progress </span>
        <input
          type="checkbox"
          className="form-checkbox h-3 w-3 text-blue-500"
        />
        <span className="ml-2">Resolved</span>

      </label></td>
    
          </tr>
          <tr >
      <th className="px-4 py-2 border-2 border-black ">Priority</th>
      <td className="px-4 py-2 border-2 border-black ">
        <input type="radio" class="form-radio" name="priority" value="low"/>
        <span>Low</span>
        <input type="radio" class="form-radio" name="priority" value="Medium"/>
        <span>Mediun</span>
        <input type="radio" class="form-radio" name="priority" value="high"/>
        <span>High</span>
        </td>
    </tr>
          <tr className='row-span-2'>
            <th className="border-2 border-black px-4 py-2">Assign to authority</th>
            <td className=''>
              {/* <button className='bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded' onClick={handleButtonClick}>Assign to Authority
</button> */}
<select className='text-center w-full bg-blue-200'id="components" onChange={handleButtonClick}>
<option name="" value="authority" >select Authority</option>
<option name="peeter" value="authority1" >peeter</option>
<option name="rohit" value="authority2" >Rohit</option></select>
</td>
           
          </tr>
          
      </table> 

    </div>

    </>
  )
}

export default ViewUser