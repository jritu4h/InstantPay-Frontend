import React from 'react';
import { AiOutlineArrowDown, AiOutlinePhone, AiOutlineSend } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Chashin = () => {
    return (
        <div className="card bg-base-100 shadow-xl p-6 my-4">
        <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Send Money Section */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md border border-gray-200">
                <div className="p-3 rounded-full bg-indigo-100">
                    <AiOutlineArrowDown className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                    <h2 className="card-title">Cash In</h2>
                    <p>Cash In to another user</p>
                </div>
                <Link to='/dashboard/cashin' className="ml-auto">
                    <button className="btn btn-primary">Cash In</button>
                </Link>
            </div>

            {/* Cash Out Section */}
            <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md border border-gray-200">
                <div className="p-3 rounded-full bg-yellow-100">
                    <AiOutlinePhone className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                    <h2 className="card-title">Mobile Recharge</h2>
                    <p>Coming Soon</p>
                </div>
                <div className="ml-auto">
                    <button className="btn btn-secondary" disabled>Coming Soon</button>
                </div>
            </div>

          
        </div>
    </div>
    );
};

export default Chashin;