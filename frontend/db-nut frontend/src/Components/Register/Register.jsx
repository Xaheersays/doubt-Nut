import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { DoLogin, Loading, Status } from '../../Store/loginSlice';
import CircularProgress from '@mui/material/CircularProgress';
import AlertCustom from '../.././Alert'
import { Link } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const url = "http://localhost:3000/user/register";
  const isLoading = useSelector(Loading);
  const fetchStatus = useSelector(Status);
  const [showAlert, setShowAlert] = useState(false);
  
  const schema = yup.object().shape({
    username: yup.string().required('Username is required')
      .matches(/^[a-z0-9_]+$/, 'Username can only contain lowercase letters, numbers, and underscores')
      .transform((value) => value.toLowerCase()),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]).required()
  });

  console.log("fet",fetchStatus)

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    const obj = { data: data, url: url };
    dispatch(DoLogin(obj));
    setShowAlert(true); 
    setTimeout(() => setShowAlert(false), 5000)
  };

  let content;
  //info is loding 
  if (fetchStatus === 'info') {
    content = "Adding you to the Doubtnut";
  } else if (fetchStatus === 'error') {
    content = "Some Error has been Occurred. Please try again.";
  } else if (fetchStatus === 'success') {
    content = "You have successfully registered.";
  }
  return (

    <form onSubmit={handleSubmit(onSubmit)}  className=" mx-auto   px-2 ">
      
      {showAlert && (
        <div className='flex my-10'>
            <AlertCustom fetchStatus={fetchStatus} content={content}/>
        <button className='border rounded-md p-2' onClick={() => setShowAlert(false)}>Dismiss</button>
        </div>
        
      )}
        
      <div className="flex flex-col gap-4 items-center ">
        <p className='bg-slate-600 bg-opacity-50    mt-10
                      backdrop-filter backdrop-blur-md p-5 rounded-md text-center'>REGISTRATION</p>
                      <div className='flex justify-center items-center py-2'>
                        {isLoading && <CircularProgress/>}
                      </div>
        <div className="flex flex-col  w-9/12 md:w-1/2">
          <label htmlFor="username" className="text-sm mb-1">
          Username
          </label>
          <input
            placeholder='enter your username'
            id="username"
            name="username"
            {...register('username')}
            className="border p-2 rounded text-black"
          />
        </div>
        <div className="flex flex-col w-9/12 md:w-1/2">
          <label htmlFor="email" className="text-sm mb-1">
            Email
          </label>
          <input
          placeholder='enter your email'
            id="email"
            type="email"
            name="email"
            {...register('email')}
            className="border p-2 rounded text-black"
          />
        </div>
        <div className="flex flex-col w-9/12 md:w-1/2">
          <label htmlFor="password" className="text-sm mb-1">
            Password
          </label>
          <input
          placeholder='enter password'
            id="password"
            type="password"
            name="password"
            autoComplete="new-password"
            {...register('password')}
            className="border p-2 rounded text-black"
          />
        </div>
        <div className="flex flex-col w-9/12 md:w-1/2">
          <label htmlFor="confirmPassword" className="text-sm mb-1">
          Confirm Password
          </label>
          <input
          placeholder='confirm  password'
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            {...register('confirmPassword')}
            className="border p-2 rounded text-black"
          />
        </div>
        <input
        value={'Register'}
         className=' cursor-pointer flex justify-center items-center rounded bg-sky-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] text-center w-9/12 md:w-1/4 my-10' type="submit" />
      <div className='flex gap-2'>already registered?<Link className='underline' to={'/login'}>login</Link></div>
      </div>
    </form>
  );
};

export default Register;
