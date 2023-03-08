import Navbar from "@/scenes/Navbar";
import UserSidebar from "@/scenes/User/UserSidebar";
import React from "react";
import { FiUnderline } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

type Props = {};

const ConsultantRegister = (props: Props) => {
  const { name } = useParams();
  return (
    <div className=" h-screen bg-cover">
      <Navbar isTopOfPage={false}></Navbar>
      <div className="flex  justify-around pt-40   text-blue-100 ">
        <div className="w-4/12">
          <img src="/assets/joinourteam.jpg" alt="" />
          <div className="mt-6 text-center ">
            <Link
              className="bg-blue-100 rounded-md py-2 px-4 text-xl text-white hover:bg-black "
              to={"/"}
            >
              Go Home
            </Link>
          </div>
        </div>
        <div className=" w-5/12 p-8 text-2xl shadow-2xl">
          <p className="mb-6">
            Dear <strong>{name}</strong>, We are really happy to see that you
            have shown interest in applying to work as a consultant for our
            company. But since this is a company that handles a lot of
            responsibilities and reputation, we would like to have a proper
            interview scheduled, where you can convince your skillsets and
            negotiate the remuneration.
          </p>
          So kindly share your detailed resume with relevant experience to our
          mail id, <strong>infinitesolutions@gmail.com</strong> . We will
          contact you with the scheduled interview date.
        </div>
      </div>
    </div>
  );
};

export default ConsultantRegister;
