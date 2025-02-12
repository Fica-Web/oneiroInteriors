import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegUser, FaLock } from "react-icons/fa";
import { adminLoginApi } from '../../utils/api/adminApi';
import useCheckAuth from '../../utils/auth/AuthenticatedRedirect';
import Input from '../../components/reusable/Input';

const AdminLogin = () => {
    useCheckAuth(); // Preventing authorized user to access login page
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    // Validation function for username
    const validateUsername = (username) => {
        if (!username) {
            return 'Username is required';
        }
        return '';
    };

    // Validation function for password
    const validatePassword = (password) => {
        if (!password) {
            return 'Password is required';
        }
        if (password.length < 6) {
            return 'Password must be at least 6 characters long';
        }
        return '';
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form fields
        const usernameError = validateUsername(username);
        const passwordError = validatePassword(password);

        // If there are validation errors, update the state
        if (usernameError || passwordError) {
            setErrors({
                username: usernameError,
                password: passwordError
            });
            return; // Don't submit the form if there are errors
        }

        // No validation errors, proceed with form submission
        const formData = { username, password };
        
        try {
            // Make the API call
            const response = await adminLoginApi(formData);
            
            if (response && response.admin) {
            const { username, email } = response.admin;

            if (username && email) {
                // Optionally, clear the form after successful submission
                setUsername('');
                setPassword('');
                
                navigate('/admin');
            }
        }

            // Reset errors on successful submit
            setErrors({
                username: '',
                password: ''
            });

        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-admin-gray px-4">
            <div className='pt-10 pb-6 px-8 max-w-md sm:w-auto w-full min-w-80 shadow-2xl shadow-gray-500/40 min-h-[60vh] '>
                <div className="text-center text-3xl my-8 font-semibold">
                    Login
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                    <Input
                        type='text'
                        name='username'
                        placeholder='Enter your username'
                        value={username}
                        Icon={FaRegUser}
                        error={errors.username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        name='password'
                        placeholder='Enter your password' 
                        value={password}
                        Icon={FaLock}
                        isPassword={true}
                        error={errors.password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit' className='bg-green-300 hover:bg-green-500 text-white w-full rounded-full p-2 cursor-pointer'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;