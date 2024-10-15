'use client';
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';  
import logo from '../assets/images/logo.png';
import { useAuth } from "../AuthContext";


const Navibar = () => {
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Get the navigate function

  const handleSignOut = () => {
    // Add your sign out logic here
    console.log("User signed out");
    // Redirect to the login page after signing out
    navigate('/login');
  };

  const { isAuthenticated, logout } = useAuth(); // Get the authentication state
  return (
    <Navbar fluid className="bg-blue-600 fixed top-0 left-0 right-0 z-50">
      <Navbar.Brand>
        {/* Logo and title */}
        <Link to="/" className="flex items-center pl-12 md:pl-0">
          <img src={logo} className="mr-3 h-11 sm:h-11" alt="FisherMate Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
            FisherMate
          </span>
        </Link>
      </Navbar.Brand>

      <div>
          {isAuthenticated ? (
            <>
              <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">Aditha Buwaneka</span>
            <span className="block truncate text-sm font-medium">adithabuwaneka0@gmail.com</span>
          </Dropdown.Header>
          <Dropdown.Item>
            <Link to="/dashboard">Dashboard</Link>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
        </Dropdown>
      
      </div>
            </>
          ) : (
            <>
              <div className="flex items-center ml-auto">
        <Link to="/login" className="text-white hover:bg-blue-500 md:inline-block hidden px-4 py-2 mx-2 rounded text-center">
          Login
        </Link>
        <Link to="/signup" className="bg-white text-blue-600 md:inline-block hidden px-2 py-2  rounded text-center">
          Sign up
        </Link>

        {/* Mobile View: Login and Sign up buttons always visible */}
        <Link to="/login" className="text-white hover:bg-blue-500 px-4 py-2 mx-2 rounded md:hidden text-center">
          Login
        </Link>
        <Link to="/signup" className="bg-white text-blue-600 md:hidden px-2 py-2 rounded text-center">
          Sign up
        </Link>
      </div>
            </>
          )}
        </div>

      {/* Links and Buttons (always visible) */}
      
    </Navbar>
  );
};

export default Navibar;
