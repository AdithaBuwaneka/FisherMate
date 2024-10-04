'use client';
import { Navbar } from "flowbite-react";
import React from 'react';
import { Link } from 'react-router-dom';  
import logo from '../assets/images/logo.png';

const Navibar = () => {
  return (
    <Navbar fluid className="bg-blue-600 fixed top-0 left-0 right-0 z-50">
      <Navbar.Brand>
        {/* Logo and title */}
        <Link to="/" className="flex items-center pl-2 md:pl-0">
          <img src={logo} className="mr-3 h-11 sm:h-11" alt="Fishermate Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
            Fishermate
          </span>
        </Link>
      </Navbar.Brand>

      {/* Links and Buttons (always visible) */}
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
    </Navbar>
  );
};

export default Navibar;
