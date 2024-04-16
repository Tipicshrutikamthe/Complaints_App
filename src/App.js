// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registor from './components/Registor';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Viewauthority from './components/Viewauthority'
 import Sidebar from './components/Sidebar';
 import Status from './components/Status';
 import Addcomplaint from './components/Addcomplaint';
 import Viewcomplaint from './components/Viewcomplaint';
import ViewUser from './components/ViewUser';
import Dashboard1 from './components/Dashboard1';
import Addauthority from './components/Addauthority';
import Authority from './components/Authority'
import Viewmycomplaint from './components/Viewmycomplaint';
import Footer from './components/Footer';
import Help from './components/Help';
import AdminSidebar from './components/AdminSidebar';
import Logout from './components/Logout';
import Adminlogin from './components/Adminlogin'
 const App = () => {
  return (
    <Router>
      <div>
       
        <Navbar />
        <Routes>

            <Route path='/' element={<Home />}></Route>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/clogin" element={<Login/>} />
          <Route path="/adminlogin"  element={<Adminlogin />} />
          <Route peth="/logout" element={<Logout />}/>
          <Route path="/cregister" element={<Registor/>} />
           <Route path="/dashboard" element={<Dashboard />} /> 
           <Route path="/viewuser/:id" element={<ViewUser />}></Route>
           <Route path='addauthority' element={<Addauthority />}></Route>
           <Route path='/viewauthority/:id' element={<Viewauthority/>}></Route>
           <Route path='/viewmycomplaint/:id' element={<Viewmycomplaint/>}></Route>
           {/* <Route path='/help' element={<Help/>}></Route> */}
           <Route path='/adminsidebar' element={<AdminSidebar/>}></Route>
          <Route path='/viewcomplaint' element={<Viewcomplaint/>}></Route>
          <Route path='/authority' element={<Authority />}></Route>
          {/* <Route path='/sidebar' element={<Sidebar />}></Route> */}
          {/* <Route path='/addcomplaint' element={<Addcomplaint />}></Route>
          <Route path='/status' element={<Status/>}></Route> */}
        </Routes>
       <Footer />
      </div>
    </Router>
  )};
export default App;


