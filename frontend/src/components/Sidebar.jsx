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
        className={`fixed top-16 left-0 h-full w-64 bg-white text-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
        role="navigation"
        id="sidebar"
      >
        <Sidebar aria-label="Responsive Sidebar">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
            <Link to="/dashboard" onClick={handleLinkClick}>
              <Sidebar.Item icon={HiChartPie} active={location.pathname === "/dashboard"} className="hover:bg-blue-500">
                Dashboard
              </Sidebar.Item>
              </Link>
              <Link to="/resources" onClick={handleLinkClick}>
                <Sidebar.Item icon={HiViewBoards} label="Pro" labelColor="dark" active={location.pathname === "/resources"} className="hover:bg-blue-500">
                  Resources
                </Sidebar.Item>
              </Link>
              <Link to="/alerts" onClick={handleLinkClick}>
                <Sidebar.Item icon={HiBell} label="3" active={location.pathname === "/alerts"} className="hover:bg-blue-500">
                  Safety Alert
                </Sidebar.Item>
              </Link>
              <Link to="/market" onClick={handleLinkClick}>
                <Sidebar.Item icon={HiShoppingBag} active={location.pathname === "/market"} className="hover:bg-blue-500">
                  Market Access
                </Sidebar.Item>
              </Link>
              <Link to="/profile" onClick={handleLinkClick}>
                <Sidebar.Item icon={HiUser} active={location.pathname === "/profile"} className="hover:bg-blue-500">
                  My Profile
                </Sidebar.Item>
              </Link>
              <Link to="/settings" onClick={handleLinkClick}>
                <Sidebar.Item icon={HiArrowSmRight} active={location.pathname === "/settings"} className="hover:bg-blue-500">
                  Settings
                </Sidebar.Item>
              </Link>
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
