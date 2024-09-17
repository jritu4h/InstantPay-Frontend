import React, { useContext } from 'react';
import { AuthContext } from '../provider/Provider';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

const AgentPrivate = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>; // Add a proper loading indicator here
    }

    if (!user && !loading) {
        return <Navigate to='/login' replace={true} />;
    }
    if (user && user?.role === 'admin') {
        return <Navigate to='/dashboard/adminhome' replace={true} />;
    }
    if (user && user?.role === 'user') {
        return <Navigate to='/' replace={true} />;
    }
    if (user && user?.role === 'agent') {
        return children;;
    }


};

export default AgentPrivate;