import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faUser } from "@fortawesome/free-solid-svg-icons";
import { faTachographDigital } from "@fortawesome/free-solid-svg-icons";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { TbReportAnalytics } from "react-icons/tb";
import UserProfile from "./UserProfile";
import EditProfile from "./EditProfile";
import useMediaQuery from "@/hooks/useMediaQuery";
import axios from "axios";
import Consultants from "../Admin/Consultants";

interface User {
  _id: string;
  name: string;
  email: string;
  serviceNo: number;
  reviewNo: number;
  location: string;
  isBlocked: boolean;
  imageUrl: string;
}

const UserSidebar: React.FC<User> = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    axios.post("http://localhost:4000/profile", { userId }).then((response) => {
      const userData = response.data;
      setUser(userData);
    });
  }, []);
  const [components, setcomponents] = useState("dashboard");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const UserData = user;

  return (
    <>
      {user && (
        <>
          <div className="md: flex flex-col border-r bg-gradient-to-r from-blue-100 to-slate-900 text-white shadow-xl md:w-96">
            <div className="flex flex-col items-center border-b p-4">
              {isAboveMediumScreens ? (
                <>
                  <img
                    className="rounded-full object-cover md:h-20 md:w-20"
                    src="./assets/john.webp"
                    alt={`Profile picture of ${user.name}`}
                  />
                  <h2 className="mt-2 mb-1 font-medium ">{user.name}</h2>
                </>
              ) : null}
            </div>
            <div className="flex flex-col  p-4">
              <a
                href="#"
                className="flex items-center py-2 px-4  hover:bg-gray-100 hover:text-gray-900"
                onClick={() => {
                  setcomponents("dashboard");
                }}
              >
                <FontAwesomeIcon icon={faTachographDigital} className="mr-2" />
                {isAboveMediumScreens ? "Dashboard" : ""}
              </a>
              <a
                href="#"
                className="flex items-center py-2 px-4  hover:bg-gray-100 hover:text-gray-900"
                onClick={() => {
                  setcomponents("editProfile");
                }}
              >
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                {isAboveMediumScreens ? "Edit Profile" : ""}
              </a>
              <a
                href="#"
                className="flex items-center py-2 px-4  hover:bg-gray-100 hover:text-gray-900"
                onClick={() => {
                  setcomponents("service");
                }}
              >
                <FontAwesomeIcon icon={faBowlFood} className="mr-2" />
                {isAboveMediumScreens ? "Service History" : ""}
              </a>
              <a
                href="#"
                className="flex items-center py-2 px-4  hover:bg-gray-100 hover:text-gray-900"
                onClick={() => {
                  setcomponents("reviews");
                }}
              >
                <FontAwesomeIcon icon={faReceipt} className="mr-2" />
                {isAboveMediumScreens ? "Reviews" : ""}
              </a>
              <a
                href="#"
                className="flex items-center py-2 px-4  hover:bg-gray-100 hover:text-gray-900"
                onClick={() => {
                  setcomponents("addAddress");
                }}
              >
                <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
                {isAboveMediumScreens ? "Add Address" : ""}
              </a>
            </div>
          </div>
          <div className="mx-10 w-full">
            {components === "editProfile" && <EditProfile />}
            {components === "dashboard" && <UserProfile />}
          </div>
        </>
      )}
    </>
  );
};

export default UserSidebar;
