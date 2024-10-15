import React from 'react';
import Navibar from '../components/Navbarbefore'; // Importing the navigation bar
import Foot from '../components/Footer'; // Importing the footer
import Body from '../components/Homebody'; // Importing the home body component

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen"> {/* Flex container for layout */}
            <Navibar /> {/* Navbar at the top */}

            <main className="flex-grow flex flex-col items-center justify-center text-center  bg-gray-100"> {/* Main content area */}
                
                
                {/* Render the Body component to fill the main area */}
                <Body /> {/* Rendering the HomeBody component here */}
                
            </main>

            <Foot /> {/* Footer at the bottom */}
        </div>
    );
};

export default Home;
