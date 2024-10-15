import React, { useState, useRef } from 'react';
import { FaCamera } from 'react-icons/fa'; // Importing a camera icon
import Navibar from '../components/Navbar';
import Leftbar from '../components/Sidebar';
import Foot from '../components/Footer';

const Profile = () => {
    // State to store selected profile photo
    const [profilePhoto, setProfilePhoto] = useState('https://via.placeholder.com/150'); // Default placeholder image
    const fileInputRef = useRef(null); // Reference to the hidden file input

    // Function to handle the file input change event
    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file); // Create URL for selected image
            setProfilePhoto(fileUrl); // Update state with new profile photo
        }
    };

    // Function to trigger file input click when icon is clicked
    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <div className="flex flex-col h-screen"> {/* Full height layout */}
                <Navibar /> {/* Navbar at the top */}
                <div className="flex flex-grow mt-16"> {/* Main content area */}
                    <Leftbar /> {/* Sidebar on larger screens */}
                    <div className="flex-grow p-6 bg-gray-200 sm:ml-64 flex flex-col"> {/* Main content area */}
                        <h1 className="text-3xl font-bold mb-6"> My Profile Page</h1>
                        <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md w-full sm:w-3/4 lg:w-1/2 mx-auto">
                            {/* Profile Picture with hover effect */}
                            <div className="relative mb-6">
                                <img 
                                    src={profilePhoto} // Display selected or default profile photo
                                    alt="Profile" 
                                    className="w-32 h-32 rounded-full object-cover mb-4"
                                />
                                {/* Camera icon on hover */}
                                <div 
                                    className="absolute inset-5 bg-opacity-50 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                                    onClick={handleUploadClick}
                                >
                                    <FaCamera className="text-white text-2xl" />
                                </div>
                                {/* Hidden file input */}
                                <input 
                                    type="file" 
                                    ref={fileInputRef} 
                                    onChange={handlePhotoChange} 
                                    accept="image/*" // Only allow image files
                                    className="hidden" // Hide the input element
                                />
                            </div>

                            {/* Profile Info */}
                            <div className="w-full space-y-4">
                                <div className="flex flex-col">
                                    <label className="font-semibold">First Name</label>
                                    <input type="text" className="p-2 border border-gray-300 rounded-md" placeholder="First Name" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold">Last Name</label>
                                    <input type="text" className="p-2 border border-gray-300 rounded-md" placeholder="Last Name" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold">Email</label>
                                    <input type="email" className="p-2 border border-gray-300 rounded-md" placeholder="johndoe@example.com" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold">Phone</label>
                                    <input type="tel" className="p-2 border border-gray-300 rounded-md" placeholder="+1 123 456 7890" />
                                </div>
                              
                                <div className="flex flex-col">
                                    <label className="font-semibold">Address</label>
                                    <input type="text" className="p-2 border border-gray-300 rounded-md" placeholder="123 Main Street, City, Country" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="font-semibold">Date of Birth</label>
                                    <input type="date" className="p-2 border border-gray-300 rounded-md" />
                                </div>
                            </div>

                            {/* Buttons: Edit Details on left and Save Changes on right */}
                            <div className="mt-6 w-full flex justify-between">
                                <button className="bg-gray-500 text-white px-6 py-2 rounded-md">Edit Details</button>
                                <button className="bg-blue-500 text-white px-6 py-2 rounded-md">Save Changes</button>
                            </div>
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

export default Profile;
