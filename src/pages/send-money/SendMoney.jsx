import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineUser, AiOutlineDollarCircle, AiOutlineLock } from 'react-icons/ai';
import { AuthContext } from '../../provider/Provider';
import api from '../../Hook/Api/Api';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SendMoneyInputSection = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/api/v1/send-money', {
        recipientMobile: data.recipient,
        amount: parseFloat(data.amount),
        pin: data.pin,
        senderNumber: user?.mobile,
      });
      console.log('Response:', response.data);
      toast.success('Money sent successfully');
      reset();
      navigate('/');
    } catch (error) {
      console.error('Error sending money:', error.response?.data || error.message);
      toast.error('An error occurred: ' + (error.response?.data.message || error.message));
    }
  };

  return (
    <div>
       <h2 className="text-center text-3xl font-semibold text-blue-600 mb-6">Send Money</h2>
      <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded-2xl shadow-lg">
     
     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
       <div className="flex items-center space-x-4">
         <div className="p-3 rounded-full bg-blue-100">
           <AiOutlineUser className="w-6 h-6 text-blue-600" />
         </div>
         <div className="flex-1">
           <input
             {...register('recipient', { required: true })}
             type="text"
             className="w-full py-3 border border-gray-300 rounded-lg px-4 focus:outline-none focus:border-blue-500"
             placeholder="Recipient's number"
           />
           {errors.recipient && <span className="text-red-500">Recipient is required</span>}
         </div>
       </div>
       <div className="flex items-center space-x-4">
         <div className="p-3 rounded-full bg-blue-100">
           <AiOutlineDollarCircle className="w-6 h-6 text-blue-600" />
         </div>
         <div className="flex-1">
           <input
             {...register('amount', { required: true, min: 1 })}
             type="number"
             className="w-full py-3 border border-gray-300 rounded-lg px-4 focus:outline-none focus:border-blue-500"
             placeholder="Amount to send"
           />
           {errors.amount && <span className="text-red-500">Amount is required and should be at least 1</span>}
         </div>
       </div>
       <div className="flex items-center space-x-4">
         <div className="p-3 rounded-full bg-blue-100">
           <AiOutlineLock className="w-6 h-6 text-blue-600" />
         </div>
         <div className="flex-1">
           <input
             {...register('pin', { required: true, minLength: 4, maxLength: 6 })}
             type="password"
             className="w-full py-3 border border-gray-300 rounded-lg px-4 focus:outline-none focus:border-blue-500"
             placeholder="Enter your PIN"
           />
           {errors.pin && errors.pin.type === 'required' && <span className="text-red-500">PIN is required</span>}
           {errors.pin && errors.pin.type === 'minLength' && <span className="text-red-500">PIN must be at least 4 characters long</span>}
           {errors.pin && errors.pin.type === 'maxLength' && <span className="text-red-500">PIN cannot exceed 6 characters</span>}
         </div>
       </div>
       <div>
         <button
           type="submit"
           className="w-full py-3 font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg focus:outline-none transition duration-200"
         >
           Send Money
         </button>
       </div>
     </form>
   </div>
    </div>
  );
};

export default SendMoneyInputSection;
