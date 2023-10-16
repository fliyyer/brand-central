import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HiEyeOff, HiEye } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../../../redux/Slice/authSlice';

const InputLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://brandcentralapi.raywhite.co.id/signin', {
                email,
                password,
                "RequestToken": true
            });
            sessionStorage.setItem('token', response.data.token);
            sessionStorage.setItem('email', response.data.email);
            sessionStorage.setItem('firstname', response.data.firstname);
            sessionStorage.setItem('lastname', response.data.lastname);
            navigate('/');
        } catch (error) {
            dispatch(loginFailure(error.message));
            console.error('Login Failure:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
                <div className="">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="appearance-none bg-transparent h-[45px] border-2 border-[#5C5C5C] rounded-[90px] w-full py-6 px-3 dark:text-white text-[#5C5C5C] placeholder-[#BABABA] dark:placeholder-white placeholder:font-inter placeholder:font-light  focus:outline-none focus:shadow-outline font-inter"
                        placeholder="Email Address"
                        required
                    />
                </div>
                <div className="relative py-7">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="appearance-none placeholder:font-inter bg-transparent h-[45px] border-2 border-[#5C5C5C] rounded-[90px] w-full py-6 px-3 placeholder:font-light dark:text-white text-[#5C5C5C] placeholder-[#BABABA] dark:placeholder-white focus:outline-none focus:shadow-outline"
                        placeholder="Password"
                        required
                    />
                    <div
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? (
                            <HiEye className='text-white w-6 h-6' />
                        ) : (
                            <HiEyeOff className='text-white w-6 h-6' />
                        )}
                    </div>
                </div>
                <div className="text-center">
                    <button className='bg-primary-color rounded-[90px] w-full py-4 text-typo-color font-medium text-md px-3'>Log In</button>
                    <div className='flex items-center justify-center mt-[27px]'>
                        <hr className='flex-grow border-t-1 border-gray-300' />
                        <Link to='/forgot-password' className='px-2 text-gray-400'>Forgot Password</Link>
                        <hr className='flex-grow border-t-1 border-gray-300' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default InputLogin;
