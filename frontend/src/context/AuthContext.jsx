import { createContext, useContext, useState, useEffect } from 'react';
import client from '../api/client';
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check if user is logged in
    useEffect(() => {
        const token = localStorage.getItem('token');
        // If we had a /me endpoint, we would fetch user data here.
        // For now, we trust the token presence or parse user from localStorage if saved.
        const savedUser = localStorage.getItem('user');
        if (token && savedUser) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        try {
            const { data } = await client.post('/login', { email, password });
            // Backend returns { token: "...", user: { ... } } based on model
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            setUser(data.user);
            toast.success('Welcome back!');
            return true;
        } catch (error) {
            console.error(error);
            const msg = error.response?.data?.error || 'Login failed';
            toast.error(msg);
            throw error;
        }
    };

    const signup = async (name, email, password) => {
        try {
            await client.post('/signup', { name, email, password });
            toast.success('Account created! Please login.');
            return true;
        } catch (error) {
            console.error(error);
            const msg = error.response?.data?.error || 'Signup failed';
            toast.error(msg);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        toast.success('Logged out successfully');
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
