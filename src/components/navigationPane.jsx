import React from 'react';
import logo from './assets/logo.png';


const NavigationPane = () =>{
    return (
        <div className='flex justify-between items-center px-6 py-4 bg-white border-b-2'>
  <div className='flex space-x-6'>
    <a href='#' className='text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-red-500'>Dashboard</a>
    <a href='#' className='text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-red-500'>Customer</a>
    <a href='#' className='text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-red-500'>Statistics</a>
    <a href='#' className='text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-red-500'>Review</a>
    <a href='#' className='text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-red-500'>Settings</a>
  </div>
  <div className='inline-block'>
  <button className='flex items-center px-3 py-2 bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200'>
    <img
      src={logo} className='w-5 h-5 rounded-full mr-2'/>
    <span className='text-gray-700 text-sm mr-1'>EN</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className='h-4 w-4 text-gray-700'
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
  </div>
  </div>
    )
}

export default NavigationPane;