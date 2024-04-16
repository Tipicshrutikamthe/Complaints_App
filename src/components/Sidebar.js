
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEye, faInfoCircle, faQuestionCircle, faUser, faThumbsUp, faThumbsDown, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({onItemClick}) => {
  const menuItems = ['Addcomplaint', 'Viewmycomplaint', 'Status', 'Help', 'AboutUs', 'RateUs', 'Logout'];
  const menuIcons = [faPlus, faEye, faInfoCircle, faQuestionCircle, faUser, faThumbsUp, faSignOutAlt];

  return (
    <div className="bg-gray-800 border text-blue-600 w-1/4 h-screen p-4">
      <div className="flex p-2 space-x-4 justify-items-start flex-row mb-5">
        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-lg dark:bg-black" />
        <div>
          <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
          <span className="flex items-center space-x-1">
            <a rel="noopener noreferrer" href="/Profilepage" className="text-xs hover:underline dark:text-gray-400">View profile</a>
          </span>
        </div>
      </div>
      <ul className='h-[50%] flex justify-between flex-col'>
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => onItemClick(item)} 
           
            className="cursor-pointer hover:text-gray-300"
          >
            <FontAwesomeIcon icon={menuIcons[index]} className='text-white mr-2' />
            {item}
          </li>
        ))}
      </ul>
      <div>
        <h1 className='text-white mt-4'>Finding this app helpful?</h1>
        <label htmlFor="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
          <span>Yes</span>
          <span className="relative">
            <input id="Toggle2" type="checkbox" className="hidden peer" />
            <div className="w-10 h-4 rounded-full shadow bg-gray-600 "></div>
            <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-blue-600"></div>
          </span>
          <span>No</span>
        </label>
      </div>
    </div>
  );
};

export default Sidebar;



// import React from 'react'
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import {faThumbsUp,faThumbsDown} from '@fortawesome/free-solid-svg-icons';
//  import {faPlus, faEye, faInfoCircle, faQuestionCircle, faUser, faThumbsUp, faSignOutAlt ,faBars,faHome,faTimes} from '@fortawesome/free-solid-svg-icons';
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Doughnut } from 'react-chartjs-2';
// import Chat from './Chat';
// // import charts from 'C'
// function Sidebar() {
  
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };
//   const closeSidebar = () => {
//     setIsOpen(false);
//   };
//   const [Open, setOpen] = useState(false);
//   const navigate=useNavigate();
//     const handleLogout = () => {
//      navigate("/home");
//       console.log("Logged out");
//       setIsOpen(false); // Close the popup after logout
//     };
//   return (
//     <div>

// <button
//         onClick={isOpen ? closeSidebar : toggleSidebar}
//         className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none"
//       >
//         <span className="sr-only">{isOpen ? 'Close sidebar' : 'Open sidebar'}</span>
//         {isOpen ? (
//           <>
//             <FontAwesomeIcon icon={faTimes} className="mr-2" />
//             <span>Close</span>
//           </>
//         ) : (
//           <>
//             <FontAwesomeIcon icon={faBars} className="mr-2" />
//             <span>Menu</span>
//           </>
//         )}
//       </button>
      
//        <aside
//         id="default-sidebar"
//         className={`fixed top-0 left-0 z-40 bg-gray-800 border text-blue-600 w-64 h-screen transition-transform ${
//           isOpen ? '' : '-translate-x-full sm:translate-x-0'
//         }`}
//         aria-label="Sidebar"
//       >
//    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-800 text-blue-600 mb-10">
//     <div className="flex p-2  space-x-4 justify-items-start flex-row mb-5">
// 		<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-lg dark:bg-black" />
//  		<div>
//  			<h2 className="text-lg font-semibold">Leroy Jenkins</h2>
//  			<span className="flex items-center space-x-1">
//  				<a rel="noopener noreferrer" href="/Profilepage" className="text-xs hover:underline dark:text-gray-400">View profile</a>
//  			</span>
//  		</div>
//  	</div>
//       <ul class="space-y-2 font-medium">
//       <li>
//             <a href="/" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-white hover:text-black dark:hover:bg-white group">
//             <FontAwesomeIcon icon={faHome} className="mr-2 text-blue" />

//                <span class="flex-1 ms-3 whitespace-nowrap text-blue-600">Home</span>
//                <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
//             </a>
//          </li>
//          <li>
//             <a href="/addcomplaint" class="flex items-center p-2 text-white  rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-black">
             
//                 <FontAwesomeIcon icon={faPlus} className="mr-2 text-blue" />

//                <span class="ms-3 text-blue-600">Add Complaints</span>
//             </a>
//          </li>
        
//          <li>
//             <a href="/" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-black">
//             <FontAwesomeIcon icon={faEye} className="mr-2 text-blue" />

//                <span class="flex-1 ms-3 whitespace-nowrap text-blue-600">View My complaints</span>
//                <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
//             </a>
//          </li>
//          <li>
        

//             <a href="/status" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-black">
//             <FontAwesomeIcon icon={faInfoCircle} className="mr-2 text-blue" />

//                <span class="flex-1 ms-3 whitespace-nowrap text-blue-600">Status</span>
//             </a>
//          </li>
//          <li>
//              <a href="/help" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-black"> 

//             <FontAwesomeIcon icon={faQuestionCircle} className="mr-2 text-blue" />

//                <span class="flex-1 ms-3 whitespace-nowrap text-blue-600">Help</span>
//             </a>
          
//          </li>
//          <li>
//              <a href="/" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-black"> 

//             <FontAwesomeIcon icon={faUser} className="mr-2 text-blue" />

//                <span class="flex-1 ms-3 whitespace-nowrap text-blue-600">About us</span>
//             </a>
          
//          </li>
//          <li>
//              <a href="/logout" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-black"> 

//             <FontAwesomeIcon icon={faThumbsUp} className="mr-2 text-blue" />

//                <span class="flex-1 ms-3 whitespace-nowrap text-blue-600">Rate Us</span>
//             </a>
          
//          </li>
//          <li>
//              <a href="/logout" class="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-black"> 

//             <FontAwesomeIcon icon={faSignOutAlt} className="mr-2 text-blue" />

//                <span class="flex-1 ms-3 whitespace-nowrap text-blue-600">Logout</span>
//             </a>
          
//          </li>
//       </ul>
//       <div className='mt-2'>
//         <h1 className='text-white '>Finding this app helpfull?</h1>
//           <label htmlFor="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
//  	<span>Yes</span>
// 	<span className="relative">
//  		<input id="Toggle2" type="checkbox" className="hidden peer" />
//  		<div className="w-10 h-4 rounded-full shadow bg-gray-600 "></div>
//  		<div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-blue-600"></div>
//  	</span>
//  	<span>No</span>
//  </label>
// </div>
//    </div>
  
// </aside>

// <div class="p-4 sm:ml-64 h-screen"> 
  
//    </div>
//    </div>

    
//   )
// }

// export default Sidebar


