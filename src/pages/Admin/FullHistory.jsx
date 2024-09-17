import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/Provider';
import SetAdminHistory from '../../Hook/Admin/SetAdminHistory';

const TransactionHistoryAdmin = () => {
    const [selectedType, setSelectedType] = useState('cash-out'); // Initial type state
    const { user } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Fetching data with the selected type
    const { data, handleTypeChange, handlePageChange, page } = SetAdminHistory({ types: selectedType });

    // Destructure the data object safely with default values
    const { transactions = [], totalPages = 1, currentPage = 1 } = data || {};

    const handleTypeSelection = (type) => {
        setSelectedType(type);
        handleTypeChange(type);
        closeDropdown();
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-center mb-4">
                <div className="relative">
                    <button
                        className='btn ms-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700'
                        onClick={toggleDropdown}
                    >
                        {selectedType === 'cash-out' && 'Cash Out'}
                        {selectedType === 'send-money' && 'Send Money'}
                        {selectedType === 'cash-in' && 'Cash In'}
                    </button>
                    {isDropdownOpen && (
                        <ul className="absolute left-0 mt-1 w-36 bg-white border border-gray-200 shadow-lg rounded-lg z-10">
                            <li
                                className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white cursor-pointer"
                                onClick={() => handleTypeSelection('cash-out')}
                            >
                                Cash Out
                            </li>
                            <li
                                className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white cursor-pointer"
                                onClick={() => handleTypeSelection('send-money')}
                            >
                                Send Money
                            </li>
                            <li
                                className="block py-2 px-4 text-gray-800 hover:bg-indigo-500 hover:text-white cursor-pointer"
                                onClick={() => handleTypeSelection('cash-in')}
                            >
                                Cash In
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4 border border-gray-300">Amount</th>
                            <th className="py-2 px-4 border border-gray-300">Type</th>
                            <th className="py-2 px-4 border border-gray-300">Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(transaction => (
                            <tr key={transaction._id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border border-gray-300">{transaction.amount}</td>
                                <td className="py-2 px-4 border border-gray-300">
                                    {transaction.recipientId === user?.id && transaction.type === 'send-money' ? 'receive-money' : transaction.type}
                                </td>
                                <td className="py-2 px-4 border border-gray-300">{new Date(transaction.timestamp).toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center mt-4">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`btn btn-sm mx-1 ${page === i + 1 ? 'btn-primary' : 'btn-success'}`}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TransactionHistoryAdmin;

