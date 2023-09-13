import React, { useState, useRef } from 'react';
import RwWhite from '../../../assets/images/raywhite-putih.png';
import { FaPhone } from 'react-icons/fa';
import { BiCamera } from 'react-icons/bi';
import QrCode from '../../../assets/images/qr-banner100.png';

const Banner300x100qr = () => {
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
        <div className="w-[891px] h-[297px] bg-primary-color relative">
            <img src={RwWhite} alt="RayWhite" className="absolute right-12 max-w-full" />
            <div className="px-12 py-12 text-[#3a3a3a] relative">
                <div className='flex items-center gap-5'>
                    <img src={QrCode} alt="QR CODE" className='w-[150px]' />
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

export default Banner300x100qr;
