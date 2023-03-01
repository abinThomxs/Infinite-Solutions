import Footer from "@/scenes/footer/Footer";
import Banner from "@/scenes/Home/banner/Banner";
import Frequent from "@/scenes/Home/frequent/Frequent";
import Info from "@/scenes/Home/info/Info";
import Landing from "@/scenes/Home/landing";
import Reviews from "@/scenes/Home/reviews/Reviews";
import ServicesBox from "@/scenes/Home/services";
import Navbar from "@/scenes/navbar";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom"; 

type Props = {};

const Home = (props: Props) => {
  type Cookies = string;
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies<Cookies>([]);
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post('http://localhost:4000/home',{},{ withCredentials: true });
        if (!data.status) {
          removeCookie('jwt');
          navigate('/login');
        } else toast(`Hi ${data.user}`, { theme: 'dark' })
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);
  const logout = () => {
    removeCookie('jwt');
    navigate('/login');
  };

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setIsTopOfPage(true);
      }
      if (window.pageYOffset !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={""}
        setSelectedPage={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <ToastContainer />
      <Landing />
      <div className="flex w-full justify-center">
        <ServicesBox />
      </div>
      <div className="flex  w-full justify-center">
        <Banner />
      </div>
      <div className="flex  w-full justify-center">
        <Info />
      </div>
      <div className="flex  w-full justify-center">
        <Frequent />
      </div>
      <div className="flex  w-full justify-center">
        <Reviews />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
