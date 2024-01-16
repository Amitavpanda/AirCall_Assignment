

import React from 'react';
import { ListItem } from '@/utils/types';

interface FilteredItemListProps {
  items: ListItem[];
  onChipClick: (item: ListItem) => void;
}

const FilteredItemList: React.FC<FilteredItemListProps> = ({ items, onChipClick }) => {
  return (
    <ul className="absolute left-0 right-0 bg-white border border-gray-300 mt-1 py-2 z-10" style={{ top: '100%' }}>
      {items.map((item) => (
        <li
          key={item.id}
          onClick={() => onChipClick(item)}
          className="cursor-pointer p-2 hover:bg-gray-100 flex items-center"
        >
          <div className={`bg-${item.color} text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 font-bold`}>
            {item.title[0].toUpperCase()}
          </div>
          <div className="flex flex-row items-center">
            <div>{item.title}</div>
            <div className="text-gray-500">{item.email}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FilteredItemList;
