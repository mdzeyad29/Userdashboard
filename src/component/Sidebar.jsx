import React from "react";
import { Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import Vector from "./image/Vector.png"
export const Sidebar = () => {
  return (
    <div className="h-screen p-6 space-y-6 text-white bg-black shadow-lg w-60">
    <div className="inline-block text-left">
    <div className="flex items-center mb-2 space-x-2">
      <img src={Vector} alt="logo" className="w-10 h-10" />
      <h1 className="text-3xl font-extrabold text-white">Neptastic</h1>
    </div>
    <p className="text-lg text-gray-400 ml-[5.4rem]">Creative Hub</p>
  </div>
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard/dashboardtable" className="flex items-center gap-3 transition hover:text-blue-400">
            <FaCircle className="text-xs" />
            Dashboard
          </Link>
        </li>
        <li>
        <Link to="/dashboard/User" className="flex items-center gap-3 transition hover:text-blue-400">
        <FaCircle className="text-xs" />
        User
      </Link>
        </li>
      </ul>
    </div>
  );
};
