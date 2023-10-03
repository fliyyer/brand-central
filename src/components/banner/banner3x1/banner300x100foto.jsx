import React, { useState, useRef } from 'react';
import RwWhite from '../../../assets/images/raywhite-putih.png';
import { FaPhone } from 'react-icons/fa';
import { BiCamera } from 'react-icons/bi';
import ImageCropPopup from '../../pop-up/ImageCropPopup';

const Banner300x100foto = () => {
    const [profileImage, setProfileImage] = useState(null);
    const fileInputRef = useRef(null);
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState({
        title: 'Dijual',
        agentName: 'NAMA AGENT',
        agentPhone: '(0857 1188 0419)',
        agentEmail: 'Email.agent@gmail.com',
        agentOfficePhone: '(021) 3190 9333',
        officeName: 'Ray White Menteng',
        officeWebsite: 'menteng.raywhite.co.id',
    });
    const [isCropPopupOpen, setIsCropPopupOpen] = useState(false);

    const handleEditAndSave = (field, e) => {
        if (e.key === 'Enter') {
            setContent((prevContent) => ({
                ...prevContent,
                [field]: e.target.textContent,
            }));
            setIsEditing(false);
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
                openCropPopup();
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageRemove = () => {
        setProfileImage(null);
    };

    const handleImageUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const openCropPopup = () => {
        setIsCropPopupOpen(true);
    };

    const closeCropPopup = () => {
        setIsCropPopupOpen(false);
    };

    const handleCropImage = (croppedImage) => {
        setProfileImage(croppedImage);
        closeCropPopup();
    };

    return (
        <div className="w-[891px] h-[297px] bg-primary-color relative">
            <img src={RwWhite} alt="RayWhite" className="absolute right-12 max-w-full" />
            <div className="px-12 py-12 text-[#3a3a3a] relative">
                <div className='flex items-center gap-5'>
                    <div className="relative w-[110px] h-[110px] rounded-full overflow-hidden mb-2">
                        {isCropPopupOpen && (
                            <ImageCropPopup
                                image={profileImage}
                                onSave={handleCropImage}
                                onCancel={closeCropPopup}
                            />
                        )}
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
                    <div>
                        <h1
                            className="text-[68px] font-bold"
                            contentEditable={true}
                            onBlur={(e) => handleEditAndSave('title', e)}
                        >
                            {content.title}
                        </h1>
                        <div className='flex gap-2'>
                            <p
                                className="text-[29px] font-bold"
                                contentEditable={true}
                                onBlur={(e) => handleEditAndSave('agentName', e)}
                            >
                                {content.agentName}
                            </p>
                            <p
                                className="text-[29px] font-bold"
                                contentEditable={true}
                                onBlur={(e) => handleEditAndSave('agentPhone', e)}
                            >
                                {content.agentPhone}
                            </p>
                        </div>
                        <p
                            className="text-[15px] font-bold"
                            contentEditable={true}
                            onBlur={(e) => handleEditAndSave('agentEmail', e)}
                        >
                            {content.agentEmail}
                        </p>
                        <p className="flex items-center gap-2 text-[30px] font-bold" >
                            <FaPhone className="" />
                            <span contentEditable={true} onBlur={(e) => handleEditAndSave('agentOfficePhone', e)}>{content.agentOfficePhone}</span>
                        </p>
                    </div>
                </div>
                <div className='flex absolute right-12 bottom-10'>
                    <div>
                        <p
                            className="text-[15px] font-bold mt-4"
                            contentEditable={true}
                            onBlur={(e) => handleEditAndSave('officeName', e)}
                        >
                            {content.officeName}
                        </p>
                        <p
                            className="text-[15px] font-bold"
                            contentEditable={true}
                            onBlur={(e) => handleEditAndSave('officeWebsite', e)}
                        >
                            {content.officeWebsite}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner300x100foto;
