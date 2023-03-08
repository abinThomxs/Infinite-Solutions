import Navbar from "@/scenes/Navbar";
import UserSidebar from "@/scenes/User/UserSidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {};

interface User {
  _id: string;
  name: string;
  email: string;
  serviceNo: number;
  reviewNo: number;
  location: string;
  isBlocked: boolean;
}


const Profile = (props: Props) => {
  const [user, setuser] = useState<User>();

  useEffect(()=>{
    const userId = localStorage.getItem('userId');
    axios.post('http://localhost:4000/profile', {userId}).then((response)=>{
      const userData = response.data;
      setuser(userData)
    })
  },[]);
  return (
    <>
    {user &&
      <><Navbar isTopOfPage={false} /><div className="mt-32 flex">
          <UserSidebar
            username={user.name}
            imageUrl="./assets/john.webp"
             />
        </div></>
      }
    </>
  );
};

export default Profile;
