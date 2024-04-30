import React, { useState } from "react";

// Define an interface for the menu item
interface MenuItem {
  img: string;
  title: string;
  desc: string;
  price: string;
}

interface EditWindowProps {
  item: MenuItem | null;
  onClose: () => void;
  onSave: (newData: MenuItem) => void;
}

const EditWindow: React.FC<EditWindowProps> = ({ item, onClose, onSave }) => {
  const [editedItem, setEditedItem] = useState<MenuItem | null>(item);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (editedItem) {
      setEditedItem({
        ...editedItem,
        [name]: value,
      });
    }
  };

  const handleSave = () => {
    if (editedItem) {
      onSave(editedItem);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Edit Item</h2>
        <label className="block mb-2">
          <span className="text-gray-700">Title:</span>
          <input
            type="text"
            name="title"
            value={editedItem?.title || ""}
            onChange={handleChange}
            className="block w-full border rounded-md mt-1 focus:outline-none focus:border-blue-500 border-gray-300"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Description:</span>
          <textarea
            name="desc"
            value={editedItem?.desc || ""}
            onChange={handleChange}
            className="block w-full border rounded-md mt-1 focus:outline-none focus:border-blue-500 border-gray-300"
          />
        </label>
        <label className="block mb-2">
          <span className="text-gray-700">Price:</span>
          <input
            type="text"
            name="price"
            value={editedItem?.price || ""}
            onChange={handleChange}
            className="block w-full border rounded-md mt-1 focus:outline-none focus:border-blue-500 border-gray-300"
          />
        </label>
        <div className="flex justify-end">
          <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-700">
            Save
          </button>
          <button onClick={onClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditWindow;
