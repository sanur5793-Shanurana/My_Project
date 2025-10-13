import React from 'react'
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../Tasklist/TaskList';

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <h1>{data.id}</h1>
      <Header data={data} />
      <TaskListNumbers data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
