import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "@/scenes/navbar";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import { objectType } from "@material-tailwind/react/types/components/checkbox";
import { login, logout } from "./redux/LoginShowSlice";
import { useDispatch } from "react-redux";


function App() {
  const [ selectedPage, setSelectedPage ] = useState("home");
  const [ isTopOfPage, setIsTopOfPage ] = useState<boolean>(true);
  const showLogin = useSelector((state:objectType) => state.login.showLogin)
  const dispatch = useDispatch()
  

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
          
        </Routes>
      </Router>
    </div>
  )
}

export default App
