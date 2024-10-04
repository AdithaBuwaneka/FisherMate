
import React from 'react';
import Navibar from '../components/Navbarbefore';
import Foot from '../components/Footer';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen"> {/* Flex container for layout */}
            <Navibar />

            <main className="flex-grow flex flex-col items-center justify-center text-center p-6 bg-gray-100"> {/* Main content area */}
                <h1 className="text-4xl font-bold mb-4">Welcome to FisherMate</h1> {/* Larger heading */}
                <p className="text-lg mb-8">Your go-to app for all things fishing!</p> 
               
                {/* You can add more content here */}
            </main>

            <Foot /> {/* Footer at the bottom */}
        </div>
    );
};

export default Home;
