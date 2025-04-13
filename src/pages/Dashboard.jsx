import React from 'react';
import { Navbar } from '../component/Navbar';
import { Sidebar } from '../component/Sidebar';
import { Outlet } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-4">
          <Outlet /> {/* Renders nested route like User or DashboardTable */}
        </div>
      </div>
    </div>
  );
};
