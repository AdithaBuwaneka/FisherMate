import React from 'react';
import Navibar from '../components/Navbar';
import Leftbar from '../components/Sidebar';
import Foot from '../components/Footer';

const Resources = () => {
  return (
    <>
      <div className="flex flex-col h-screen"> {/* Full height layout */}
      <Navibar /> {/* Navbar at the top */}
      <div className="flex flex-grow mt-16"> {/* Main content area */}
      <Leftbar /> {/* Sidebar on larger screens */}
      <div className="flex flex-col flex-grow p-6 bg-gray-200 sm:ml-64"> {/* Main content area */}
      <h1 className="text-3xl font-bold">Resources page</h1>
      
      <div className="flex space-x-4">
       <button className="px-6 py-3 text-lg bg-gray-400 rounded-full hover:bg-blue-500 focus:outline-none">
        Boats
       </button>
        <button className="px-6 py-3 text-lg bg-gray-400 rounded-full hover:bg-blue-500 focus:outline-none">
        Gear Inventory
        </button>
      </div>
      
      </div>
      </div>
      <div className="mt-auto sm:ml-64"> {/* Ensures the footer is at the bottom and matches sidebar width */}
      <Foot /> {/* Footer at the bottom of the viewport */}
      </div>
      </div>
    </>
  );
};

export default Resources;