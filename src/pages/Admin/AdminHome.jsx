import React, { useState, useEffect } from 'react';
import api from '../../Hook/Api/Api';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UserSearch = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, [name]);

  const fetchUsers = async () => {
    try {
      const response = await api.get(`/api/v1/admin/users/search?name=${name}`);
      setUsers(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to fetch users. Please try again.');
      setUsers([]);
    }
  };

  const handelManageActive = (ID) => {
    api.put(`/api/v1/admin/approve-user/${ID}`, { status: 'active' })
      .then((data) => {
        console.log(data.data);
        toast.success('Activated');
      })
      .catch(error => {
        console.error('Error activating user:', error);
        toast.error('Failed to activate user. Please try again.');
      });
  };

  const handelManageBlock = (ID) => {
    api.put(`/api/v1/admin/users/block/${ID}`, { status: 'block' })
      .then((data) => {
        console.log(data.data);
        toast.success('Blocked');
      })
      .catch(error => {
        console.error('Error blocking user:', error);
        toast.error('Failed to block user. Please try again.');
      });
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Search by name..."
        className="p-2 border rounded w-full mb-4"
      />

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>

              <th>Name</th>
              <th>mobile</th>
              <th>Status</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.filter(user => user.role !== 'admin').map(user => (
              <tr key={user._id}>
              
                <td>{user.name}</td>
                <td>{user.mobile}</td>
                <td>{user.status}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    onClick={() => handelManageActive(user._id)}
                    className='btn btn-ghost btn-xs mx-2'
                    disabled={user.status !== 'pending'}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handelManageBlock(user._id)}
                    className='btn btn-ghost btn-xs mx-2'
                    disabled={user.status !== 'pending'}
                  >
                    Block
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
       
        </table>
      </div>
    </div>
  );
};

export default UserSearch;

