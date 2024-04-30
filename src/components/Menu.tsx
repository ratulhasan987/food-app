"use client"; 
import React, { useState } from "react";
import menuDataJson from './menuData.json';
import MenuCard from "./MenuCard";
import EditWindow from "./EditWindow"; // Import the component for the edit window

// Define an interface for the menu item
interface MenuItem {
  img: string;
  title: string;
  desc: string;
  price: string;
}

const Menu = () => {
  const [menuData, setMenuData] = useState<MenuItem[]>(menuDataJson);
  const [showEditWindow, setShowEditWindow] = useState(false); // State to control the visibility of the edit window
  const [editedItemIndex, setEditedItemIndex] = useState<number | null>(null); // State to store the index of the item being edited

  const handleDelete = (index: number) => {
    const updatedMenuData = [...menuData];
    updatedMenuData.splice(index, 1);
    setMenuData(updatedMenuData);
  };
  
  const handleEdit = (index: number, newData: MenuItem) => {
    const updatedMenuData = [...menuData];
    updatedMenuData[index] = newData;
    setMenuData(updatedMenuData);
  };
  const handleAddNewItem = () => {
    //dummy data
    const newItem: MenuItem = {
      img: "/cake.avif",
      title: "New Item",
      desc: "New item description",
      price: "$20.10",
    };

    setMenuData([...menuData, newItem]);
  };
  
  // const handleAddNewItem = () => {
  //   setShowEditWindow(true); // Show the edit window when adding a new item
  //   // setEditedItemIndex(null); // Reset the edited item index
  // };

  const handleEditItem = (index: number) => {
    setShowEditWindow(true); // Show the edit window when editing an item
    setEditedItemIndex(index); // Set the index of the edited item
  };

  return (
    <div className="container pt-0">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
      </div>

      <ul className="mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto">
        <li className="bg-accent text-white p-1">Appetizers</li>
        <li>Breakfast</li>
        <li>Salads</li>
        <li>Meat & Fish</li>
        <li>Soup</li>
        <li>Desert</li>
        <li>Drinks</li>
      </ul>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={handleAddNewItem}
          className="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-2 rounded mt-4"
        >
          Add New Item
        </button>
      </div>

      <div className="grid w-fit mx-auto sm:grid-cols-3 gap-4  pt-10">
        {menuData.map((item, index) => (
          <MenuCard
            key={index}
            item={item}
            onDelete={() => handleDelete(index)}
            onEdit={() => handleEditItem(index)}
          />
        ))}
      </div>

      {/* Render the edit window if showEditWindow is true */}
      {showEditWindow && (
        <EditWindow
          item={editedItemIndex !== null ? menuData[editedItemIndex] : null} // Pass the item to edit if an item is being edited
          onClose={() => setShowEditWindow(false)} // Close the edit window when closed
          onSave={(newData: MenuItem) => {
            if (editedItemIndex !== null) {
              handleEdit(editedItemIndex, newData); // Edit the item if an item is being edited
            } else {
              setMenuData([...menuData, newData]); // Add the new item if adding a new item
            }
            setShowEditWindow(false); // Close the edit window after saving
          }}
        />
      )}
    </div>
  );
};

export default Menu;

