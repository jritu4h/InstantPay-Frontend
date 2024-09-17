import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineUser, AiOutlineDollarCircle } from 'react-icons/ai';
import { AuthContext } from '../../provider/Provider';
import api from '../../Hook/Api/Api';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CashInInputSection = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/api/v1/cash-in', {
        agentNumber: user?.mobile, // Replace with actual agent's mobile number or fetch from context
        amount: parseFloat(data.amount),
        userNumber: data.userNumber,
      });
      console.log('Response:', response.data);
      toast.success('Cash in successful');
      reset();
      navigate('/');
    } catch (error) {
      console.error('Error performing cash in:', error.response?.data || error.message);
      toast.error('An error occurred: ' + (error.response?.data.message || error.message));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className='py-4 text-center text-3xl font-semibold'>Cash In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-indigo-100">
              <AiOutlineUser className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <input
                {...register('userNumber', { required: true })}
                type="text"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="User's number"
              />
              {errors.userNumber && <span className="text-red-500">User number is required</span>}
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-indigo-100">
              <AiOutlineDollarCircle className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <input
                {...register('amount', { required: true, min: 1 })}
                type="number"
                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Amount to cash in"
              />
              {errors.amount && <span className="text-red-500">Amount is required and should be at least 1</span>}
            </div>
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg focus:outline-none"
          >
            Cash In
          </button>
        </div>
      </form>
    </div>
  );
};

export default CashInInputSection;
