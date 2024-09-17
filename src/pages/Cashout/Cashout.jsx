import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineArrowDown, AiOutlineLock, AiOutlinePhone } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/Provider';
import api from '../../Hook/Api/Api';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CashOutInputSection = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const cashoutData = {
            agentMobile: data.agentNumber,
            amount: parseFloat(data.amount),
            pin: data.pin,
            userMobile: user?.mobile,
        };

        try {
            const response = await api.post('/api/v1/cash-out', cashoutData);

            if (response.status === 200) {
                if (response.data.status === true) {
                    console.log('Cash out successful');
                    reset();
                    toast.success('Cash out successful');
                    navigate('/');
                } else {
                    console.log('Cash out failed:', response.data.message);
                    toast.error('Cash out failed: ' + response.data.message);
                }
            } else {
                console.error('Request failed with status:', response.status);
                toast.error('Request failed with status: ' + response.status);
            }
        } catch (error) {
            console.error('An error occurred while cashing out:', error.response?.data || error.message);
            toast.error('An error occurred: ' + (error.response?.data.message || error.message));
        }
    };

    return (
      <div>
           <h2 className="py-2 text-center text-3xl font-bold text-gray-700">Cash Out</h2>
          <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg border border-gray-300">
         <form onSubmit={handleSubmit(onSubmit)}>
             <div className="flex flex-col space-y-6">
                 <div className="flex items-center space-x-4">
                     <div className="p-3 rounded-full bg-gray-200">
                         <AiOutlineArrowDown className="w-6 h-6 text-gray-600" />
                     </div>
                     <div className="flex-grow">
                         <input
                             {...register('amount', { required: true, min: 1 })}
                             type="number"
                             className="w-full py-3 border border-gray-300 rounded-lg px-4 focus:outline-none focus:border-blue-500 hover:shadow"
                             placeholder="Amount to cash out"
                         />
                         {errors.amount && <span className="text-red-500">Amount is required and should be at least 1</span>}
                     </div>
                 </div>
                 <div className="flex items-center space-x-4">
                     <div className="p-3 rounded-full bg-gray-200">
                         <AiOutlinePhone className="w-6 h-6 text-gray-600" />
                     </div>
                     <div className="flex-grow">
                         <input
                             {...register('agentNumber', { required: true, minLength: 11, maxLength: 11 })}
                             type="text"
                             className="w-full py-3 border border-gray-300 rounded-lg px-4 focus:outline-none focus:border-blue-500 hover:shadow"
                             placeholder="Agent Number"
                         />
                         {errors.agentNumber && errors.agentNumber.type === 'required' && <span className="text-red-500">Agent number is required</span>}
                         {errors.agentNumber && errors.agentNumber.type === 'minLength' && <span className="text-red-500">Agent number must be at least 11 characters long</span>}
                         {errors.agentNumber && errors.agentNumber.type === 'maxLength' && <span className="text-red-500">Agent number cannot exceed 11 characters</span>}
                     </div>
                 </div>
                 <div className="flex items-center space-x-4">
                     <div className="p-3 rounded-full bg-gray-200">
                         <AiOutlineLock className="w-6 h-6 text-gray-600" />
                     </div>
                     <div className="flex-grow">
                         <input
                             {...register('pin', { required: true, minLength: 5, maxLength: 5 })}
                             type="password"
                             className="w-full py-3 border border-gray-300 rounded-lg px-4 focus:outline-none focus:border-blue-500 hover:shadow"
                             placeholder="Enter your PIN"
                         />
                         {errors.pin && errors.pin.type === 'required' && <span className="text-red-500">PIN is required</span>}
                         {errors.pin && errors.pin.type === 'minLength' && <span className="text-red-500">PIN must be at least 5 characters long</span>}
                         {errors.pin && errors.pin.type === 'maxLength' && <span className="text-red-500">PIN cannot exceed 5 characters</span>}
                     </div>
                 </div>
                 <div>
                     <button
                         type="submit"
                         className="w-full py-3 font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg focus:outline-none"
                     >
                         Cash Out
                     </button>
                 </div>
             </div>
         </form>
     </div>
      </div>
    );
};

export default CashOutInputSection;

