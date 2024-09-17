import React, { useContext } from 'react';
import { AuthContext } from '../provider/Provider';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

const ExistPrivate = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>; // Add a proper loading indicator here
    }

    if (user && !loading && user.role==='user') {
        return <Navigate to='/' replace={true} />;
    }
    if (user && !loading && user.role==='agent') {
        return <Navigate to='/dashboard/agenthome' replace={true} />;
    }
    if (user && !loading && user.role==='admin') {
        return <Navigate to='/dashboard/adminhome' replace={true} />;
    }

    return children;
};

export default ExistPrivate;