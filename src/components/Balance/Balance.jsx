import React from 'react';
import SetBalance from '../../Hook/Balance/SetBalance';

const Balance = () => {
    const [balance] = SetBalance()
    console.log(balance);

    return (
        <div className="max-w-md mx-auto mt-[10px] p-6 bg-white rounded-xl shadow-md border border-gray-200">
            <div className="flex items-center justify-between flex-col">
                <h2 className="text-2xl font-semibold text-gray-800">Your Balance</h2>
            </div>
         <div className='flex items-center justify-center mt-3'>
         <input
            value={`${balance} TK`}
            
                type="text"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs text-center" />
         </div>
        </div>
    );
};

export default Balance;
