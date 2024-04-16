import React from 'react';
import Profilepage from './Profilepage';
import Status from './Status';
import Addcomplaint from './Addcomplaint';
import Home from './Home';
import { useState } from 'react';
import Viewmycomplaint from './Viewmycomplaint';
import Logout from './Logout';
import Help from './Help';
import RateUs from './RateUs';
import AboutUs from './AboutUs';

const MainContent = ({ content }) => {
  // const [selectedPage, setSelectedPage] = useState('profilepage');

  return (
    <div className="flex-1 p-4 bg-gray-300 justify-center items-center h-auto">
      <h2 className="text-lg font-semibold">Welcome Back</h2>

      {content === 'Addcomplaint' && <Addcomplaint />}
      {content==='Viewmycomplaint'&& <Viewmycomplaint />}
      
      {content === 'Status' && <Status />}
      {content==='Logout' &&<Logout />}
      {content==='Help' && <Help/>}
      {content==='AboutUs' && <AboutUs/>}
      {content==="RateUs" &&<RateUs />}
    </div>
  );
};

export default MainContent;
