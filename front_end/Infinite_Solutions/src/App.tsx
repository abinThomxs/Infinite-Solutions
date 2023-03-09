import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "@/scenes/Navbar";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { objectType } from "@material-tailwind/react/types/components/checkbox";
import 'react-toastify/dist/ReactToastify.css';
import AdminHome from "./pages/admin/adminHome/AdminHome";
import path from "path";
import Profile from "./pages/user/Profile";
import ConsultantRegister from './pages/user/ConsultantRegister'


function App() {
  const userToken = localStorage.getItem('userToken');
  const adminToken = localStorage.getItem('adminToken')
  const [ selectedPage, setSelectedPage ] = useState("home");
  const [ isTopOfPage, setIsTopOfPage ] = useState<boolean>(true);

useEffect(() => {
  const handleScroll = () => {
    if (window.pageYOffset === 0){
      setIsTopOfPage(true);
      setSelectedPage('home');
    }
    if (window.pageYOffset !== 0){
      setIsTopOfPage(false);
    }
  }

  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <div className="app">
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={ adminToken ? <AdminHome/> : <Home/>}  />
          <Route path="/profile" element={ userToken ? <Profile/> : <Home />}  />
          <Route path="/consultantRegister/:name" element={ userToken ? <ConsultantRegister/> : <Home />}  />          
        </Routes>
      </Router>
    </div>
  )
}

export default App
