import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import Home from "./pages/Home";


function App() {
  const [ selectedPage, setSelectedPage ] = useState("home");
  const [ isTopOfPage, setIsTopOfPage ] = useState<boolean>(true);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY === 0){
      setIsTopOfPage(true);
      setSelectedPage('home');
    }
    if (window.scrollY !== 0){
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
