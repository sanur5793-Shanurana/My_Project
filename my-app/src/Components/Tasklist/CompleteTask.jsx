import React from 'react';

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[350px] p-5 bg-blue-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>{data.description}
      </p>
      <div className='mt-2'>
        <button className='w-full bg-green-700'>Completed Task</button>
      </div>
    </div>
  );
};

export default CompleteTask;
