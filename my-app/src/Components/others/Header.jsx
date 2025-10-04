import React from 'react';

const Header = () => {
  return (
    <div className='flex flex-col items-center text-xl font-semibold'>
      <h1 className='text-[80px]'>Employee Panel</h1>
      <div className='flex flex-col items-start w-100 h-150 border-2 border-red-400 p-5 mt-5 bg-amber-950'>
        <h6 className='text-[20px]'>Hello,</h6>
        <h1 className='text-[30px]'>Vishvjeet 👋</h1>
        <button className=''>Log Out</button>
      </div>
    </div>
  );
};

export default Header;
