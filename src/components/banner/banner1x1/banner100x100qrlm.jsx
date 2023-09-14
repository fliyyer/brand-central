import React, { useState } from 'react';
import RwWhite from '../../../assets/images/raywhite-putih.png';
import { FaPhone } from 'react-icons/fa';
import qrBanner from '../../../assets/images/qr-banner100.png'
import LoanMarket from '../../../assets/images/lm-putih.png';

const Banner100x100qrlm = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState({
        title: 'Dijual',
        agentName: 'NAMA AGENT (0857 1188 0419)',
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
            <img
                src={RwWhite}
                alt="RayWhite"
                className="absolute top-0 right-8 max-w-full max-h-full"
            />
            <div className="px-8 py-16">
                <h1
                    className="text-[68px] font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('title', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.title}
                </h1>
                <div>
                    <p
                        className="text-[24px] font-bold"
                        contentEditable={true}
                        onBlur={(e) => handleEditAndSave('agentName', e)}
                        suppressContentEditableWarning={true}
                    >
                        {content.agentName}
                    </p>
                </div>
                <p
                    className="text-[15px] font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('agentEmail', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.agentEmail}
                </p>
                <p className="flex items-center gap-2 text-[30px] font-bold">
                    <FaPhone className="" />
                    <span
                        contentEditable={true}
                        onBlur={(e) => handleEditAndSave('agentOfficePhone', e)}
                        suppressContentEditableWarning={true}
                    >
                        {content.agentOfficePhone}
                    </span>
                </p>
                <img src={qrBanner} className='w-[98px] mt-6' alt="" />
                <p
                    className="text-[15px] font-bold mt-4"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('officeName', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.officeName}
                </p>
                <p
                    className="text-[15px] font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('officeWebsite', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.officeWebsite}
                </p>
            </div>
            <div className='absolute bottom-[16px] right-8 gap-2 max-w-full flex items-baseline'>
                <p className='text-[13px]'>In Partnership with</p>
                <img src={LoanMarket} alt="QR Code" className='w-[65px]  h-auto' />
            </div>
        </div>

    );
};

export default Banner100x100qrlm;
