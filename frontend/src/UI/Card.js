import React from "react";

const Card = (props) => {
  return (
    <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-3 h-full w-2/3 mx-auto'>
      <div className='flex items-center p-4 bg-white rounded-lg shadow-sm'>
        <div className='p-3 mr-4 text-blue-500 bg-blue-100 rounded-full'>
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z'></path>
          </svg>
        </div>
        <div>
          <p className='mb-2 text-sm font-medium text-gray-600'>
            Shopping lists count
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {props.data.lists.length}
          </p>
        </div>
      </div>
      <div className='flex items-center p-4 bg-white rounded-lg shadow-sm'>
        <div className='p-3 mr-4 text-green-500 bg-green-100 rounded-full'>
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z'></path>
          </svg>
        </div>
        <div>
          <p className='mb-2 text-sm font-medium text-gray-600'>Shops count</p>
          <p className='text-lg font-semibold text-gray-700'>
            {props.data.shops.length}
          </p>
        </div>
      </div>
      <div className='flex items-center p-4 bg-white rounded-lg shadow-sm'>
        <div className='p-3 mr-4 text-red-500 bg-red-100 rounded-full'>
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z'></path>
          </svg>
        </div>
        <div>
          <p className='mb-2 text-sm font-medium text-gray-600'>
            Item category count
          </p>
          <p className='text-lg font-semibold text-gray-700'>
            {props.data.categories.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;