import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type Props = {}

interface User {
  _id: string;
  name: string;
  email: string;
  serviceNo: number;
  reviewNo: number;
  location: string;
  isBlocked: boolean;
}

const UserProfile = (props: Props) => {
  const [user,setUser] = useState<User>();
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    axios.post("http://localhost:4000/profile", { userId }).then((response) => {
      const userData = response.data;
      setUser(userData);
    });
  }, []);



  return (
    
    <>
    {user && 
      <div >
        <div className="md:flex w-full justify-center border-2 py-6 text-white bg-gradient-to-r from-blue-100 to-slate-900 shadow-xl">
        <div className="flex flex-col items-center border-b md:p-4">
          <img
            className="h-40 w-40  object-cover"
            src="./assets/john.webp"
            alt={`Profile picture of John Wick`} />
          <a
            href="#"
            className="flex items-center py-2 md:px-4  hover:bg-green-200 hover:text-blue-100"
          >
            Change Picture
          </a>
          <h2 className="mt-2 mb-1 font-medium text-white">{user.name}</h2>
        </div>
        <div className="flex justify-center ">

          <div className="md:mx-8">
            <h4 className="md:my-6">Name</h4>
            <h4 className="md:my-6">Email</h4>
            <h4 className="md:my-6">Location</h4>
            <h4 className="md:my-6">No of Services</h4>
            <h4 className="md:my-6">No of Reviews</h4>
          </div>

          <div className="">
            <h4 className="md:my-6">{user.name}</h4>
            <h4 className="md:my-6">{user.email}</h4>
            <h4 className="md:my-6">{user.location}</h4>
            <h4 className="md:my-6">{user.serviceNo}</h4>
            <h4 className="md:my-6">{user.reviewNo}</h4>
          </div>

        </div>
      </div><div className="w-full flex justify-center">
          <div className=" mt-6">
            <Link              
              className="flex items-center text-xl py-2 px-4  text-white bg-gradient-to-r from-blue-100 to-slate-900 hover:rounded-2xl "
              to={(`/consultantRegister/${user.name}`)}              
            >
              Register as a Consultant
            </Link>
          </div>

        </div></div>
}
    </>
  );
};

export default UserProfile;
