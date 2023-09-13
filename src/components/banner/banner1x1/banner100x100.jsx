import React, { useState } from 'react';
import RwWhite from '../../../assets/images/raywhite-putih.png';
import { FaPhone } from 'react-icons/fa';

const Banner100x100 = () => {
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
        <div className="w-[468px] h-[468px] bg-primary-color relative">
            <img src={RwWhite} alt="RayWhite" className="absolute right-8 max-w-full" />
            <div className="px-8 py-28 relative">
                <h1
                    className="text-[68px] font-bold"
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
            </div>
        </div>
    );
};

export default Banner100x100;
