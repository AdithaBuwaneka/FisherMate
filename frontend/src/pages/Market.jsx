import React from 'react';
import Navibar from '../components/Navbar';
import Leftbar from '../components/Sidebar';
import Foot from '../components/Footer';

const Market = () => {
    return (
        <>
         <div className="flex flex-col h-screen"> {/* Full height layout */}
      <Navibar /> {/* Navbar at the top */}
      <div className="flex flex-grow mt-16"> {/* Main content area */}
        <Leftbar /> {/* Sidebar on larger screens */}
        <div className="flex-grow p-6 bg-gray-200 sm:ml-64 flex flex-col"> {/* Main content area */}
          <h1 className="text-3xl font-bold">Market page</h1>
          <p>This is where your main content will go, separate from the dashboard part and navigation part.</p>
          
        </div>
      </div>
      <div className="mt-auto sm:ml-64"> {/* Ensures the footer is at the bottom and matches sidebar width */}
        <Foot /> {/* Footer at the bottom of the viewport */}
      </div>
    </div>
      </>
    );
};

export default Market;