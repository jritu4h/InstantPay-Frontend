import React from 'react';
import { AiOutlineSend, AiOutlineArrowDown, AiOutlinePhone } from 'react-icons/ai'; // Import the new icon for Mobile Recharge
import { Link } from 'react-router-dom';

const SendMoneyCashOutSection = () => {
    return (
        <div className="card bg-base-100 shadow-xl p-6 my-4">
            <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Send Money Section */}
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md border border-gray-200">
                    <div className="p-3 rounded-full bg-indigo-100">
                        <AiOutlineSend className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                        <h2 className="card-title">Send Money</h2>
                        <p>Send money to another user</p>
                    </div>
                    <Link to='/sendmoney' className="ml-auto">
                        <button className="btn btn-primary">Send Money</button>
                    </Link>
                </div>

                {/* Cash Out Section */}
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md border border-gray-200">
                    <div className="p-3 rounded-full bg-green-100">
                        <AiOutlineArrowDown className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <h2 className="card-title">Cash Out</h2>
                        <p>Withdraw money from your account</p>
                    </div>
                    <Link to='/cashout' className="ml-auto">
                        <button className="btn btn-primary">CashOut</button>
                    </Link>
                </div>

                {/* Mobile Recharge Section */}
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
                {/* Mobile Recharge Section */}
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md border border-gray-200">
                    <div className="p-3 rounded-full bg-yellow-100">
                        <AiOutlinePhone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <h2 className="card-title">Contact Us</h2>
                        <p>Any Problem contact Us</p>
                    </div>
                    <div className="ml-auto">
                      <Link to='/contact-us'><button className="btn btn-secondary">Contact Us</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendMoneyCashOutSection;



