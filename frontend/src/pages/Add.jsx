import React from 'react';
import back2 from '../assets/images/Back1.jpg';
import Foot from './Foot';

export default function Add() {
  return (
    <div className="bg-cover min-h-screen flex flex-col justify-between" style={{ backgroundImage: `url(${back2})` }}>
      <div className="flex-grow flex items-center justify-center backdrop-blur-sm py-12">
        <form className="max-w-sm w-full bg-white rounded-xl px-4 py-10 shadow-xl mx-auto">
          <p className="text-center font-bold text-2xl font-sans text-green-500 mb-6">Add a website monitor</p>

          <label htmlFor="text" className="block mb-2 text-sm font-medium text-black">Your URL</label>
          <input 
            type="text" 
            name="text" 
            id="text" 
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4"
            required
          />

          <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Select your Email</label>
          <select id="email" defaultValue="" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-8">
            <option value="" disabled>--Select an option--</option>
            <option value="off">Off</option>
            <option value="alerts">Send alerts to:</option>
          </select>


          <button 
            type="button" 
            className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Add
          </button>
        </form>
      </div>
      <Foot />
    </div>
  );
}
