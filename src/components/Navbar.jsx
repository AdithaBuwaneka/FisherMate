import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';  
import logo from '../assets/images/logo.png';

const Navibar = () => {
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // Get the navigate function

  const handleSignOut = () => {
    // Add your sign out logic here
    console.log("User signed out");
    // Redirect to the login page after signing out
    navigate('/');
  };

  return (
    <Navbar fluid className="bg-blue-600 fixed top-0 left-0 right-0 z-50">
      <Navbar.Brand>
        <Link to="/home" className="flex items-center pl-12 md:pl-0"> {/* Adjust padding for small screens */}
          <img src={logo} className="mr-3 h-11 sm:h-11" alt="FisherMate Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
            FisherMate
          </span>
        </Link>
      </Navbar.Brand>
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
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="/home" className={`text-white ${location.pathname === '/' ? 'font-bold' : ''}`}>Home</Link>
        </Navbar.Link>
        
        <Navbar.Link>
          <Link to="/dashboard" className={`text-white ${location.pathname === '/dashboard' ? 'font-bold' : ''}`}>Dashboard</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="#" className={`text-white ${location.pathname === '/about' ? 'font-bold' : ''}`}>About</Link>
        </Navbar.Link>
        <Navbar.Link>
          <Link to="#" className={`text-white ${location.pathname === '/contact' ? 'font-bold' : ''}`}>Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navibar;
