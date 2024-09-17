import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../../provider/Provider';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const {user,login}=useContext(AuthContext)
    const onSubmit = async(data) => {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/login', {
                email: data.email,
                mobile: data.number,
                pin: data.pin,
            });
            
            if (response.data.success) {
                const { token, status, role } = response.data;
                login(response.data.token);
                if (role==='user') {
                    navigate('/')
                    toast.success('login')
                }
                if (role==='agent') {
                    navigate('/dashboard/agenthome')
                    toast.success('login')
                }
                if (role==='admin') {
                    navigate('/dashboard/adminhome')
                    toast.success('login')
                }
            }else if (response.data.status === 'pending') {
                toast.warning('Your account is pending approval. Please wait for admin approval.');
            } else if (response.data.status === 'block'){
                toast.error('Your account is Blocked.');
            }
        } catch (error) {
            console.log('Login failed:', error.response.data.message);
        }
    };
    return (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
            <h1 className="text-4xl font-medium">Login</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="my-10">
                <div className="flex flex-col space-y-5">
                    <label>
                        <p className="font-medium text-slate-700 pb-2">Email address</p>
                        <input 
                            {...register("email", { required: true })} 
                            id="email" 
                            name="email" 
                            type="email" 
                            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                            placeholder="Enter email address" 
                        />
                        {errors.email && <p className="text-red-500">Email is required</p>}
                    </label>
                    <label>
                        <p className="font-medium text-slate-700 pb-2">Number</p>
                        <input 
                            {...register("number", { required: true })} 
                            id="number" 
                            name="number" 
                            type="text" 
                            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                            placeholder="Enter your number" 
                        />
                        {errors.number && <p className="text-red-500">Number is required</p>}
                    </label>
                    <label>
                        <p className="font-medium text-slate-700 pb-2">Pin</p>
                        <input 
                            {...register("pin", { required: true,maxLength:5 })} 
                            id="pin" 
                            name="pin" 
                            type="password" 
                            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" 
                            placeholder="Enter your pin" 
                        />
                        {errors.pin && <p className="text-red-500">Pin is required</p>}
                    </label>
                    
                    <button className="w-full py-3 font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full  border-blue-500  hover:shadow inline-flex space-x-2 items-center justify-center">
                     
                        <span>Login</span>
                    </button>
                    <p className="text-center">
                        Not registered yet? 
                        <span className="text-blue-600 font-medium inline-flex space-x-1 items-center">
                            <Link to='/register'>
                                <span>Register now</span>
                            </Link>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
