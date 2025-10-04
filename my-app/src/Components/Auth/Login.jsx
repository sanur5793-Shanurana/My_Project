import React from 'react';
import { useState } from 'react';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Hey Your Form Is Submitted...");

  };
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-white p-20' >
        <form
          onSubmit={(e) => {
            submitHandler(e);
            console.log("your email is ", email)
            console.log("Your password is", password)
            setEmail("")
            setPassword("")
          }
          }
          className='flex flex-col items-center justify-center'>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required className='outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-3 px-5 text-xl rounded-full' type="email" placeholder='Enter your email'
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required className='outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 py-3 px-5  mt-3   text-xl rounded-full' type="password" placeholder='Enter you password' 
            />
          <button className='outline-none bg-emerald-600 text-xl py-3 px-5 mt-5  rounded-full'>Login</button>
        </form>
      </div>
    </div>

  );
};

export default Login;
