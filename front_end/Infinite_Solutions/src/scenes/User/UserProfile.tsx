import React from "react";

type Props = {};

const UserProfile = (props: Props) => {
  return (
    <>
      <div className="md:flex w-full justify-center border-2 shadow-xl">
        <div className="flex flex-col items-center border-b md:p-4">
          <img
            className="h-40 w-40 rounded-full object-cover"
            src="./assets/john.webp"
            alt={`Profile picture of John Wick`}
          />
          <a
            href="#"
            className="flex items-center py-2 md:px-4  hover:bg-green-200 hover:text-blue-100"
          >
            Change Picture
          </a>
          <h2 className="mt-2 mb-1 font-medium text-blue-100">John wick</h2>
        </div>
        <div className="flex my-8">
          <div className="md:mx-8">
            <h4 className="md:my-6">Name</h4>
            <h4 className="md:my-6">Location</h4>
            <h4 className="md:my-6">No of Services</h4>
            <h4 className="md:my-6">No of Reviews</h4>
          </div>
          <div className="">
            <h4 className="md:my-6">John Wick</h4>
            <h4 className="md:my-6">New York</h4>
            <h4 className="md:my-6">12</h4>
            <h4 className="md:my-6">10</h4>
          </div>
          
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className=" mt-6">
        <a
            href="#"
            className="flex items-center py-2 px-4  hover:bg-green-200 hover:text-blue-900"
          >
            
            Register as a Consultant
          </a>
        </div>
     
      </div>
    </>
  );
};

export default UserProfile;
