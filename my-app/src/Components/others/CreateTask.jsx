import React from 'react'

const CreateTask = () => {
  return (
    <div className='mt-10 p-5 bg-[#1c1c1c] rounded'>
        <form className='flex flex-wrap w-full items-start justify-between p-5'>
          <div className='w-1/2 '>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
              <input className='py-1 px-2 w-4/5 border-1 border-white rounded mb-4' type="text" placeholder='Make a UI design' />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
              <input className='py-1 px-2 w-4/5 border-1 border-white rounded mb-4' type="date" />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
              <input className='py-1 px-2 w-4/5 border-1 border-white rounded mb-4' type="text" placeholder='employee name' />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
              <input className='py-1 px-2 w-4/5 border-1 border-white rounded mb-4' type="text" placeholder='design, dev, etc' />
            </div>
          </div>

          <div className='w-2/5 flex flex-col items-start '>
            <h3 className='text-sm text-gray-300 mb-0.5'>Discription</h3>
            <textarea className='w-full h-44 text-sm py-2 px-4 outline-none bg-transparent border-1 border-white rounded' name="" id="" cols='30' rows='10'></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-embrald-600 px-5 rounded text-sm mt-4 w-full'>Create task</button>
          </div>

        </form>
      </div>
  )
}

export default CreateTask
