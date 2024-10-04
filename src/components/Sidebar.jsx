import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiShoppingBag, HiBell, HiUser, HiViewBoards, HiMenu } from "react-icons/hi";

const Leftbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Get the current location for active link

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    setIsSidebarOpen(false); // Close sidebar on link click
  };

  return (
    <>
      {/* Toggle button for small screens */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-600 text-white rounded"
        onClick={toggleSidebar}
        aria-expanded={isSidebarOpen}
        aria-controls="sidebar"
      >
        <HiMenu className="h-6 w-6" />
      </button>
      
      {/* Sidebar container with responsive styles */}
      <div
        className={`fixed top-16 left-0 h-full w-64 bg-blue-600 text-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
        role="navigation"
        id="sidebar"
      >
        <Sidebar aria-label="Responsive Sidebar">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item icon={HiChartPie} active={location.pathname === "/dashboard"}>
                <Link to="/dashboard" onClick={handleLinkClick}>Dashboard</Link>
              </Sidebar.Item>
              <Sidebar.Item icon={HiViewBoards} label="Pro" labelColor="dark" active={location.pathname === "/resources"}>
                <Link to="/resources" onClick={handleLinkClick}>Resources</Link>
              </Sidebar.Item>
              <Sidebar.Item icon={HiBell} label="3" active={location.pathname === "/alerts"}>
                <Link to="/alerts" onClick={handleLinkClick}>Safety Alert</Link>
              </Sidebar.Item>
              <Sidebar.Item icon={HiShoppingBag} active={location.pathname === "/market"}>
                <Link to="/market" onClick={handleLinkClick}>Market Access</Link>
              </Sidebar.Item>
              <Sidebar.Item icon={HiUser} active={location.pathname === "/profile"}>
                <Link to="/profile" onClick={handleLinkClick}>My Profile</Link>
              </Sidebar.Item>
              <Sidebar.Item icon={HiArrowSmRight} active={location.pathname === "/settings"}>
                <Link to="/settings" onClick={handleLinkClick}>Settings</Link>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
     
      {/* Overlay for small screens when the sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Leftbar;
