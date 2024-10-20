import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';  
import logo from '../assets/images/logo.png';
import { useAuth } from "../AuthContext";

const Navibar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout, userInfo } = useAuth();

  const handleSignOut = () => {
    // Clear local storage
    localStorage.removeItem("userId");
    localStorage.removeItem("userDetails");
    // Call logout from context
    logout();
    // Redirect to login page
    navigate('/login');
  };

  // Get initials for avatar fallback
  const getInitials = (firstName = "", lastName = "") => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  return (
    <Navbar fluid className="bg-blue-600 fixed top-0 left-0 right-0 z-50">
      <Navbar.Brand>
        <Link to="/" className="flex items-center pl-12 md:pl-0">
          <img src={logo} className="mr-3 h-11 sm:h-11" alt="FisherMate Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
            FisherMate
          </span>
        </Link>
      </Navbar.Brand>

      <div>
        {isAuthenticated && userInfo ? (
          <div className="flex md:order-2">
            <span className="block text-lg pt-2 pr-2 font-semibold text-white italic">{userInfo.firstName}</span>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                
                <Avatar 
                  alt="User profile"
                  rounded
                  img={userInfo.profilePhoto}
                  placeholderInitials={getInitials(userInfo.firstName, userInfo.lastName)}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{`${userInfo.firstName} ${userInfo.lastName}`}</span>
                <span className="block truncate text-sm font-medium">{userInfo.email}</span>
              </Dropdown.Header>
              <Dropdown.Item>
                <Link to="/dashboard">Dashboard</Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
        ) : (
          <div className="flex items-center ml-auto">
            <Link to="/login" className="text-white hover:bg-blue-500 md:inline-block hidden px-4 py-2 mx-2 rounded text-center">
              Login
            </Link>
            <Link to="/signup" className="bg-white text-blue-600 md:inline-block hidden px-2 py-2 rounded text-center">
              Sign up
            </Link>

            {/* Mobile View */}
            <Link to="/login" className="text-white hover:bg-blue-500 px-4 py-2 mx-2 rounded md:hidden text-center">
              Login
            </Link>
            <Link to="/signup" className="bg-white text-blue-600 md:hidden px-2 py-2 rounded text-center">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </Navbar>
  );
};

export default Navibar;
