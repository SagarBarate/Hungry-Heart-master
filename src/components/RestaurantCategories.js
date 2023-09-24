import React from 'react'
import ItemList from './ItemList';

const RestaurantCategories = ({data}) => {
  return (
    <div>
    {/* //Header */}

    <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 '>
        <div className='flex justify-between'>
        <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
        <span>🚩</span>
        </div>
    <ItemList items={data.itemCards}/>
    </div>

    {/* //accordian body */}
    </div>
  );
};

export default RestaurantCategories;
