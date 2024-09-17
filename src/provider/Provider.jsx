import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext(null);

const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('access-token');
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                setUser(decodedToken);
            } catch (error) {
                console.error('Invalid token:', error);
                localStorage.removeItem('access-token');
            }
        }
        setLoading(false);
    }, []);

    const login = (token) => {
        localStorage.setItem('access-token', token);
        const decodedToken = jwtDecode(token);
        setUser(decodedToken);
      };

    const logout = () => {
        localStorage.removeItem('access-token');
        setUser(null);
    };

    const authValue={ user, logout,login,loading }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default Provider;
