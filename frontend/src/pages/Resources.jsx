import React, { useState } from 'react';
import Navibar from '../components/Navbarbefore';
import Leftbar from '../components/Sidebar';
import Foot from '../components/Footer';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('boats');
  const [boats, setBoats] = useState([
    { name: 'Boat 1', type: 'Sailboat', length: '20 ft' },
    { name: 'Boat 2', type: 'Motorboat', length: '15 ft' },
  ]);
  const [gearInventory, setGearInventory] = useState([
    { name: 'fish net' },
    { name: 'security jackets' },
  ]);
  const [newItem, setNewItem] = useState({ name: '', type: '', length: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Handle adding a new item (either boat or gear)
  const handleAddNewItem = () => {
    setShowForm(true);
    setNewItem({ name: '', type: '', length: '' });
    setIsEditing(false);
  };

  // Handle form submission for both boats and gear inventory
  const handleFormSubmit = () => {
    if (activeTab === 'boats') {
      if (isEditing) {
        const updatedBoats = boats.map((boat, index) =>
          index === editingIndex ? newItem : boat
        );
        setBoats(updatedBoats);
      } else {
        setBoats([...boats, newItem]);
      }
    } else if (activeTab === 'gear') {
      if (isEditing) {
        const updatedGear = gearInventory.map((gear, index) =>
          index === editingIndex ? { name: newItem.name } : gear
        );
        setGearInventory(updatedGear);
      } else {
        setGearInventory([...gearInventory, { name: newItem.name }]);
      }
    }
    setNewItem({ name: '', type: '', length: '' });
    setShowForm(false);
  };

  // Handle editing items for both boats and gear inventory
  const handleEditItem = (index) => {
    if (activeTab === 'boats') {
      setNewItem(boats[index]);
    } else if (activeTab === 'gear') {
      setNewItem({ name: gearInventory[index].name });
    }
    setEditingIndex(index);
    setIsEditing(true);
    setShowForm(true);
  };

  // Handle deleting items from both boats and gear inventory
  const handleDeleteItem = (index) => {
    if (activeTab === 'boats') {
      const updatedBoats = boats.filter((_, i) => i !== index);
      setBoats(updatedBoats);
    } else if (activeTab === 'gear') {
      const updatedGear = gearInventory.filter((_, i) => i !== index);
      setGearInventory(updatedGear);
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen"> {/* Full height layout */}
        <Navibar /> {/* Navbar at the top */}
        <div className="flex flex-grow mt-16"> {/* Main content area */}
          <Leftbar /> {/* Sidebar on larger screens */}
          <div className="flex flex-col flex-grow p-6 bg-gray-200 sm:ml-64"> {/* Main content area */}
            <h1 className="text-3xl font-bold">Resources Page</h1>

            <div className="flex space-x-4 mt-4">
              <button
                className={`px-6 py-3 text-lg rounded-full ${activeTab === 'boats' ? 'bg-blue-500 text-white' : 'bg-gray-400'}`}
                onClick={() => setActiveTab('boats')}
              >
                Boats
              </button>
              <button
                className={`px-6 py-3 text-lg rounded-full ${activeTab === 'gear' ? 'bg-blue-500 text-white' : 'bg-gray-400'}`}
                onClick={() => setActiveTab('gear')}
              >
                Gear Inventory
              </button>
            </div>

            {/* Boat and Gear Inventory Section */}
            <div className="mt-6">
              {activeTab === 'boats' && (
                <>
                  <h2 className="text-2xl font-semibold mb-4">Boat List</h2>
                  <ul>
                    {boats.map((boat, index) => (
                      <li key={index} className="flex items-center justify-between p-2 bg-blue-200 rounded-md mb-2">
                        <div>
                          <strong>{boat.name}</strong> - {boat.type}, {boat.length}
                        </div>
                        <div>
                          <button onClick={() => handleEditItem(index)} className="text-sm text-blue-600 hover:underline mr-2">edit</button>
                          <button onClick={() => handleDeleteItem(index)} className="text-sm text-red-600 hover:underline">delete</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {activeTab === 'gear' && (
                <>
                  <h2 className="text-2xl font-semibold mb-4">Gear Inventory</h2>
                  <ul>
                    {gearInventory.map((gear, index) => (
                      <li key={index} className="flex items-center justify-between p-2 bg-blue-200 rounded-md mb-2">
                        <div>{gear.name}</div>
                        <div>
                          <button onClick={() => handleEditItem(index)} className="text-sm text-blue-600 hover:underline mr-2">edit</button>
                          <button onClick={() => handleDeleteItem(index)} className="text-sm text-red-600 hover:underline">delete</button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <button
                onClick={handleAddNewItem}
                className="mt-4 px-4 py-2 bg-gray-400 text-white rounded hover:bg-blue-500 focus:outline-none"
              >
                Add New
              </button>

              {/* Form to Add or Edit Item Details */}
              {showForm && (
                <div className="mt-6 p-4 border border-gray-300 rounded-md bg-white">
                  <h2 className="text-xl font-semibold mb-4">
                    {isEditing ? 'Edit Item Details' : 'Add Item Details'}
                  </h2>
                  <div className="mb-4">
                    <label className="block text-sm font-medium">Name:</label>
                    <input
                      type="text"
                      value={newItem.name}
                      onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                      className="w-full p-2 border border-gray-400 rounded focus:outline-none"
                    />
                  </div>
                  {activeTab === 'boats' && (
                    <>
                      <div className="mb-4">
                        <label className="block text-sm font-medium">Type:</label>
                        <input
                          type="text"
                          value={newItem.type}
                          onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
                          className="w-full p-2 border border-gray-400 rounded focus:outline-none"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium">Length:</label>
                        <input
                          type="text"
                          value={newItem.length}
                          onChange={(e) => setNewItem({ ...newItem, length: e.target.value })}
                          className="w-full p-2 border border-gray-400 rounded focus:outline-none"
                        />
                      </div>
                    </>
                  )}
                  <button
                    onClick={handleFormSubmit}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                  >
                    {isEditing ? 'Update Item' : 'Add Item'}
                  </button>
                </div>
              )}
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
