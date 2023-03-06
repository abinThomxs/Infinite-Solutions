import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "@/scenes/Navbar";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import { objectType } from "@material-tailwind/react/types/components/checkbox";
import { login, logout } from "./redux/loginSlice";
import { useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import AdminHome from "./pages/admin/adminHome/AdminHome";
import path from "path";
import Profile from "./pages/user/Profile";


function App() {
  const userToken = localStorage.getItem('userToken');
  const adminToken = localStorage.getItem('adminToken')
  const [ selectedPage, setSelectedPage ] = useState("home");
  const [ isTopOfPage, setIsTopOfPage ] = useState<boolean>(true);
  const Login = useSelector((state:objectType) => state.login)
  const dispatch = useDispatch();
  
  

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
  userToken ? (dispatch(login)) :(dispatch(logout));
  
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
          
        </Routes>
      </Router>
    </div>
  )
}

export default App
