// export default MenuCard;
import React from "react";

interface MenuItem {
  img: string;
  title: string;
  desc: string;
  price: string;
}

interface MenuCardProps {
  item: MenuItem;
  onDelete: () => void;
  onEdit: (newData: MenuItem) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onDelete, onEdit }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-2">
      <div className="flex justify-between">
        <img src={item.img} alt={item.title} className="w-24 h-24" />
        <div className="flex flex-col justify-between ml-2 flex-grow">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
          <p className="text-gray-700 text-sm mt-1">{item.price}</p>
        </div>
        <div className="flex flex-col justify-between ml-2">
        <button onClick={() => onEdit(item)} className="text-sm text-blue-600">
            Edit
          </button>
          <button onClick={onDelete} className="text-sm text-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

