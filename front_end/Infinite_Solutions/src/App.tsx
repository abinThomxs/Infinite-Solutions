import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";


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
      <Navbar
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
