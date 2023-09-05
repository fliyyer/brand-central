import React, { useState } from 'react';
import Button from '../../Button';
import { HiEyeOff, HiEye } from 'react-icons/hi'

const InputLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Cek Validasi
        console.log('Email:', email);
        console.log('Password:', password);
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
                        className="appearance-none bg-transparent h-[45px] border-2 rounded-[90px] w-full py-6 px-3 text-white placeholder-white placeholder:font-inter placeholder:font-light  focus:outline-none focus:shadow-outline font-inter"
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
                        className="appearance-none placeholder:font-inter bg-transparent h-[45px] border-2 rounded-[90px] w-full py-6 px-3 placeholder:font-light text-white placeholder-white focus:outline-none focus:shadow-outline"
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
                        <p className='px-2 text-gray-400'>Forgot Password</p>
                        <hr className='flex-grow border-t-1 border-gray-300' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default InputLogin;
