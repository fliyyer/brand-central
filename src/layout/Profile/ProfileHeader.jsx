import React, { useState, useRef } from 'react';
import { BiCamera } from 'react-icons/bi';
import Button from '../../components/Button';

const ProfileHeader = () => {
    const [profileImage, setProfileImage] = useState(null);
    const fileInputRef = useRef(null);
    const [activeMode, setActiveMode] = useState("light");

    const handleModeClick = (mode) => {
        setActiveMode(mode);
    };

    // Handler untuk mengubah foto profil
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Handler untuk menghapus foto profil
    const handleImageRemove = () => {
        setProfileImage(null);
    };

    // Handler untuk membuka dialog pemilihan berkas ketika tombol "Change Photo" diklik
    const handleImageUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className='mt-11'>
            <h1 className='text-white text-[22px] font-inter font-semibold'>Your Profile</h1>
            <div className='flex gap-4 mt-7 justify-between items-center'>
                <div className="relative w-[104px] h-[104px] rounded-full overflow-hidden mb-2">
                    <label htmlFor="file-input" className="w-full h-full bg-gray-200 flex items-center justify-center cursor-pointer">
                        {profileImage ? (
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <BiCamera size={32} color="#BABABA" />
                        )}
                        <input
                            ref={fileInputRef}
                            id="file-input"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                        />
                    </label>
                </div>
                <div className="flex font-roboto flex-col">
                    <button className="text-white font-medium text-sm py-2 px-4 w-[378px] border border-white rounded-full" onClick={handleImageUploadClick}>
                        Change Photo
                    </button>
                    <button className="text-white font-medium text-sm py-2 px-4 w-[378px] mt-3 border border-white rounded-full" onClick={handleImageRemove}>
                        Remove Photo
                    </button>
                </div>
            </div>
            <div className='flex mt-7 items-center text-white justify-between font-inter'>
                <div className='text-lg'>
                    <h1 className='font-semibold'>Name</h1>
                    <p className='font-light'>Username123</p>
                </div>
                <button className='border font-medium text-sm border-white rounded-full w-[151px] h-10'>Edit</button>
            </div>
            <div className="border-b border-white border-opacity-50" style={{ height: "0.5px" }}></div>
            <div className='flex mt-7 items-center text-white justify-between font-inter'>
                <div className='text-lg'>
                    <h1 className='font-semibold'>Email</h1>
                    <p className='font-light'>Email@gmail.com</p>
                </div>
            </div>
            <div className="border-b border-white border-opacity-50" style={{ height: "0.5px" }}></div>
            <button className='border font-roboto font-medium text-sm mt-7 flex justify-between items-center px-[23px] text-white border-white rounded-full w-[260px] h-10'><div>
                Language
            </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
                    <path d="M6.34317 7.75781L4.92896 9.17203L12 16.2431L19.0711 9.17205L17.6569 7.75784L12 13.4147L6.34317 7.75781Z" fill="white" />
                </svg></button>
            <div className='text-white mt-7 font-inter'>
                <h1 className='text-[22px] font-semibold'>Theme</h1>
                <p className='max-w-[511px] text-base mt-2 font-light'>Choose how you’d like to appear. Select a theme, or sync themes with your system preferences.</p>
                <div className="flex gap-[30px] mt-7">
                    <div
                        className={`w-[246px] rounded-[20px] h-[181px] cursor-pointer flex justify-center items-center text-text-board-color ${activeMode === "light" ? "border-2 border-primary-color" : ""
                            }`}
                        style={{ backgroundColor: "#D9D9D9" }}
                        onClick={() => handleModeClick("light")}
                    >
                        Light Mode
                    </div>
                    <div
                        className={`w-[246px] rounded-[20px] cursor-pointer h-[181px] flex justify-center items-center text-white ${activeMode === "dark" ? "border-2 border-primary-color" : ""
                            }`}
                        style={{ backgroundColor: "#524D4D" }}
                        onClick={() => handleModeClick("dark")}
                    >
                        Dark Mode
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;
