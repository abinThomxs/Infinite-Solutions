import React, { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import AdminUsers from "./AdminUsers";
import Dashboard from "./Dashboard";

type Props = {};

const AdminSideBar = (props: Props) => {
  const menus = [
    { name: "Dashboard", component: "dashboard", icon: MdOutlineDashboard },
    { name: "Users", component: "users", icon: AiOutlineUser },
    { name: "Consultants", component: "consultants", icon: FiMessageSquare },
    { name: "Services", component: "services", icon: TbReportAnalytics, margin: true },
    { name: "Reviews", component: "reviews", icon: FiFolder },
    { name: "Task Reports", component: "task reports", icon: FiShoppingCart },
    { name: "Monthly Reports", component: "monthly reports", icon: AiOutlineHeart, margin: true },
    { name: "Banners", component: "banners", icon: AiOutlineHeart },
    { name: "Carousal", component: "carousal", icon: AiOutlineHeart },
  ];
  const [open, setOpen] = useState(true);
  const [component, setComponent] = useState("");

  return (
    <div className="flex">
      <div
        className={`min-h-screen bg-gradient-to-r from-blue-100 to-slate-900  ${ open ? "w-72" : "w-16" } px-4 text-gray-100 duration-500`}
      >
        <div className="flex justify-end py-3">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="relative mt-4 flex flex-col gap-4">
          {menus?.map((menu, i) => (
            <button className={`${ menu?.margin && "mt-5" } group flex items-center gap-3.5  rounded-md p-2 text-sm font-medium hover:bg-gray-800`}
            onClick={() => (setComponent(menu.component))}>
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2 style={{transitionDelay: `${i + 3}00ms`,}} className={`whitespace-pre duration-500 
              ${!open && "translate-x-28 overflow-hidden opacity-0"}`}>{menu?.name}</h2>
              <h2 className={`${ open && "hidden"} absolute left-48 w-0 overflow-hidden whitespace-pre rounded-md bg-white px-0 py-0 font-semibold text-gray-900 drop-shadow-lg group-hover:left-14 group-hover:w-fit group-hover:px-2 group-hover:py-1 group-hover:duration-300 `}>
                {menu?.name}</h2>
                
            </button>
          ))}
        </div>
        <div className="mt-4">
          Logout
        </div>
      </div>
      <div className="w-full mr-10 mt-5">
        {component === 'users' && <AdminUsers/>}
        {component === 'dashboard' && <Dashboard/>}
      </div>
    </div>
  );
};

export default AdminSideBar;
