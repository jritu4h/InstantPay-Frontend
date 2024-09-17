import React, { useContext, useState } from 'react';
import SetHistory from '../../Hook/transfer/SetHistory';
import { AuthContext } from '../../provider/Provider';

const Tran = () => {
  const [selectedType, setSelectedType] = useState('cash-out'); // Initial type state, you can set it to any default type
  const { trans, handleTypeChange } = SetHistory({ types: selectedType });
  const { user } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
            {trans?.filter(transaction =>
              transaction.agentId === user?._id || // Assuming user ID is stored in _id
              transaction.recipientId === user?._id
            ).map(transaction => (
              <tr key={transaction._id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border border-gray-300">{transaction.amount}</td>
                <td className="py-2 px-4 border border-gray-300">{transaction.recipientId === user?.id && transaction.type === 'send-money' ? 'receive-money' : transaction.type}</td>
                <td className="py-2 px-4 border border-gray-300">{new Date(transaction.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tran;
