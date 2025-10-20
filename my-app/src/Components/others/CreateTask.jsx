import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskAssignedTo, setTaskAssignedTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setNewTask({
      taskTitle,
      taskDate,
      taskAssignedTo,
      taskCategory,
      taskDescription,
      active: false,
      newTask: true,
      completed: false,
      failed: false
    });

    const data = userData;
    data.forEach((elem) => {
      if (taskAssignedTo === elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCount.newTask=elem.taskCount.newTask+1;
      }
    });
    setUserData(data);
    console.log(data);
    
    setTaskAssignedTo('');
    setTaskCategory('');
    setTaskDate('');
    setTaskDescription('');
    setTaskTitle('');
  };
  return (
    <div className='mt-10 p-5 bg-[#1c1c1c] rounded'>
      <form onSubmit={(e) => {
        submitHandler(e);
      }} className='flex flex-wrap w-full items-start justify-between p-5'>
        <div className='w-1/2 '>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input value={taskTitle} onChange={(e) => {
              setTaskTitle(e.target.value);
            }} className='py-1 px-2 w-4/5 border-1 border-white rounded mb-4' type="text" placeholder='Make a UI design' />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input value={taskDate} onChange={(e) => {
              setTaskDate(e.target.value);
            }} className='py-1 px-2 w-4/5 border-1 border-white rounded mb-4' type="date" />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input value={taskAssignedTo} onChange={(e) => {
              setTaskAssignedTo(e.target.value);
            }} className='py-1 px-2 w-4/5 border-1 border-white rounded mb-4' type="text" placeholder='employee name' />
          </div>
          <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input value={taskCategory} onChange={(e) => {
              setTaskCategory(e.target.value);
            }} className='py-1 px-2 w-4/5 border-1 border-white rounded mb-4' type="text" placeholder='design, dev, etc' />
          </div>
        </div>

        <div className='w-2/5 flex flex-col items-start '>
          <h3 className='text-sm text-gray-300 mb-0.5'>Discription</h3>
          <textarea value={taskDescription} onChange={(e) => {
            setTaskDescription(e.target.value);
          }} className='w-full h-44 text-sm py-2 px-4 outline-none bg-transparent border-1 border-white rounded' name="" id="" cols='30' rows='10'></textarea>
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create task</button>
        </div>

      </form>
    </div>
  );
};

export default CreateTask;
