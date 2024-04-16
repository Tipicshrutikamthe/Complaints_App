

// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import MainContent from './MainContent';

// const Dashboard = () => {
//   const [selectedContent, setSelectedContent] = useState('');

//   const handleItemClick = (item) => {
//     setSelectedContent(item);
//   };

//   return (
//     <div className="flex h-screen">
     
//       <Sidebar onItemClick={handleItemClick} />
//       <MainContent content={selectedContent} />
//     </div>
//   );
// };

//  export default Dashboard;

import React, { useState } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Dashboard = () => {
  const [selectedContent, setSelectedContent] = useState('');

  const handleItemClick = (item) => {
    setSelectedContent(item);
  };

  return (
    <div className="flex h-screen">
      <Sidebar onItemClick={handleItemClick} /> {/* Pass onItemClick function */}

      <MainContent content={selectedContent} />
    </div>
  );
};

export default Dashboard;

