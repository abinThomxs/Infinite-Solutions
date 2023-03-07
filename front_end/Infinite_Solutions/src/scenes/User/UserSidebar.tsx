import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faUser } from '@fortawesome/free-solid-svg-icons';
import { faTachographDigital } from '@fortawesome/free-solid-svg-icons';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { FiMessageSquare } from 'react-icons/fi';
import { TbReportAnalytics } from 'react-icons/tb';
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';
import useMediaQuery from '@/hooks/useMediaQuery';

interface sideBarProps {
    username: string;
    imageUrl: string;
  }

 
  
  const UserSidebar: React.FC<sideBarProps> = ({
    username,
    imageUrl,
  }) => {

    const [components, setcomponents] = useState('dashboard')
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    
    return (
      <>
      <div className="flex flex-col md:w-96 md: bg-gradient-to-r from-blue-100 to-slate-900 text-white border-r shadow-xl">
        <div className="flex flex-col items-center p-4 border-b">
          {isAboveMediumScreens ? (<><img
              className="rounded-full md:h-20 md:w-20 object-cover"
              src={imageUrl}
              alt={`Profile picture of ${username}`} /><h2 className="mt-2 mb-1 font-medium ">{username}</h2></> ) : null}
           
          </div>
        <div className="flex flex-col  p-4">
        <a
            href="#"
            className="flex items-center py-2 px-4  hover:bg-gray-100 hover:text-gray-900"
            onClick={() => {setcomponents('dashboard')}}
          >
            <FontAwesomeIcon icon={faTachographDigital} className="mr-2" />
            {isAboveMediumScreens ? 'Dashboard' : ""}
            
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4  hover:bg-gray-100 hover:text-gray-900"
            onClick={() => {setcomponents('editProfile')}}
          >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            {isAboveMediumScreens ? 'Edit Profile' : ""}
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4  hover:bg-gray-100 hover:text-gray-900"
            onClick={() => {setcomponents('service')}}
          >
            <FontAwesomeIcon icon={faBowlFood} className="mr-2" />
            {isAboveMediumScreens ? 'Service History' : ""}
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4  hover:bg-gray-100 hover:text-gray-900"
            onClick={() => {setcomponents('reviews')}}
          >
            <FontAwesomeIcon icon={faReceipt} className="mr-2" />
            {isAboveMediumScreens ? 'Reviews' : ""}
          </a>
          <a
            href="#"
            className="flex items-center py-2 px-4  hover:bg-gray-100 hover:text-gray-900"
            onClick={() => {setcomponents('addAddress')}}
          >
            <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
            {isAboveMediumScreens ? 'Add Address' : ""}
          </a>
          
        </div>
      </div>
      <div className="w-full mx-10">
        {components === 'editProfile' && <EditProfile/>}
        {components === 'dashboard' && <UserProfile/>}
      </div>
      </>
    );
  };
  


export default UserSidebar;