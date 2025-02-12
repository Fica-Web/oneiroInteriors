import React, { useState } from 'react';
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Input = ({ name, Icon, placeholder, type = "text", value, onChange, isPassword = false, error }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className='flex flex-col min-w-72 mb-6'>
            <div className='flex items-center border-b-2 border-gray-400 text-gray-500'>
                {Icon && <Icon className='mr-2' />}
                <input
                    name={name}
                    type={isPassword ? (passwordVisible ? "text" : "password") : type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className='p-3 w-full focus:outline-none'
                />
                {isPassword && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="focus:outline-none"
                    >
                        {passwordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                    </button>
                )}
            </div>
            {error && <p className='text-red-600 text-sm mt-1'>{error}</p>}
        </div>
    );
};

export default Input;