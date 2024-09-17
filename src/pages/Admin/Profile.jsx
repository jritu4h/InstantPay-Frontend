import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../Hook/Api/Api'; // Replace with your API module
import { AuthContext } from '../../provider/Provider';

const ProfileDetails = () => {
  const {user}=useContext(AuthContext)
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="py-4 text-center text-3xl font-semibold text-gray-800">User Profile Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-gray-100">
              <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6c0-1.1.9-2 2-2h11a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 3v2a2 2 0 002 2h2M7 21v-2a2 2 0 00-2-2H3M9 10h6m-4 4h2" />
              </svg>
            </div>
            <div>
              <p className="text-gray-700 text-lg font-semibold">ID:</p>
              <p className="text-gray-600">{user?.id}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <div className="p-3 rounded-full bg-gray-100">
              <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m16-8h.01M6 9h.01" />
              </svg>
            </div>
            <div>
              <p className="text-gray-700 text-lg font-semibold">Name:</p>
              <p className="text-gray-600">{user?.name}</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-gray-100">
              <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <p className="text-gray-700 text-lg font-semibold">Mobile:</p>
              <p className="text-gray-600">{user?.mobile}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <div className="p-3 rounded-full bg-gray-100">
              <svg className="w-8 h-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-700 text-lg font-semibold">Role:</p>
              <p className="text-gray-600">{user?.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
