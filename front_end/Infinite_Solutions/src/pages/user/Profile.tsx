import Navbar from "@/scenes/Navbar";
import UserSidebar from "@/scenes/User/UserSidebar";
import React from "react";

type Props = {};

const Profile: React.FC = () => {
  return (
    <>
      <Navbar isTopOfPage={false}/>
      <div className="mt-32 flex">
        <UserSidebar
          username="John wick"
          imageUrl="./assets/john.webp"
        />
      </div>
    </>
  );
};

export default Profile;
