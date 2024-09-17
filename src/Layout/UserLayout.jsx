import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../provider/Provider';

const UserLayout = () => {
    const {user,logout}=useContext(AuthContext)
  console.log(user);
    const handelLogout=()=>{
        logout()
    }
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  ">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open drawer
                    </label>
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-gray-600 text-white text-content min-h-full w-[230px] p-4">
                        <h2 className='text-3xl text-center py-4 text-white font-bold'>InstantPay</h2>
                        {/* Sidebar content here */}
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/transaction-history'>Transiction History</Link></li>
                        <hr />
                        <li>
                            <button onClick={handelLogout} className="btn btn-danger w-full rounded-full btn-error text-white mt-4">Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserLayout;
