import React, { useState } from 'react';
import RwWhite from '../../../assets/images/raywhite-putih.png';
import { FaPhone } from 'react-icons/fa';
import LoanMarket from '../../../assets/images/lm-putih.png';

const Banner100x100lm = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState({
        title: 'Dijual',
        agentName: 'Nama Agent',
        agentPhone: '0857 1188 0419',
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

    return (
        <div className="relative w-[468px] font-lato text-[#3a3a3a] h-[468px] bg-primary-color">
            <img src={RwWhite} alt="RayWhite" className="absolute top-0 right-8 max-w-full h-auto" />
            <div className="px-8 py-28 relative">
                <h1
                    className="text-[68px] font-playfair font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('title', e)}
                >
                    {content.title}
                </h1>
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
                <div className='absolute bottom-28 right-8 gap-2 max-w-full flex items-baseline'>
                    <p className='text-[13px]'>In Partnership with</p>
                    <img src={LoanMarket} alt="QR Code" className='w-[65px]  h-auto' />
                </div>
            </div>
        </div>

    );
};

export default Banner100x100lm;
