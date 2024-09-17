import React, { useContext } from 'react';
import { AuthContext } from '../provider/Provider';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

const AdminPrivate = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }

    if (!user && !loading) {
        return <Navigate to='/login' replace={true} />;
    }
    if (user && user?.role === 'agent') {
        return <Navigate to='/dashboard/agenthome' replace={true} />;
    }
    if (user && user?.role === 'user') {
        return <Navigate to='/' replace={true} />;
    }
    if (user && user?.role === 'admin') {
        return children;;
    }


};

export default AdminPrivate;
