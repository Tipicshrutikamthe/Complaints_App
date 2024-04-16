import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPopup = ({ isOpens, onClose, onLogout }) => {
  if (!isOpens) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <p className="mb-4">Do you really want to logout?</p>
        <div className="flex justify-between">
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded" onClick={onLogout}>Yes</button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded" onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
};

const Logout = () => {
  const [isOpens, setIsOpens] = useState(false);
const navigate=useNavigate();
  const handleLogout = () => {
   navigate("/home");
    console.log("Logged out");
    setIsOpens(false); // Close the popup after logout
  };

  return (
    <div className="flex-1 p-4 bg-gray-300 justify-center items-center sm:h-auto">
      {/* Your existing code */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={() => setIsOpens(true)}>Logout</button>
      {/* Render Logout Popup */}
      <LogoutPopup
        isOpens={isOpens}
        onClose={() => setIsOpens(false)}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default Logout;
