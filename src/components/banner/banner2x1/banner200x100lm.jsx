import React, { useState } from 'react';
import RwWhite from '../../../assets/images/raywhite-putih.png';
import { FaPhone } from 'react-icons/fa';
import LoanMarket from '../../../assets/images/lm-putih.png'

const Banner200x100lm = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState({
        title: 'Dijual',
        agentName: 'NAMA AGENT',
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
        <div className="w-[769px] h-[381px] bg-primary-color relative">
            <img src={RwWhite} alt="RayWhite" className="absolute right-12 max-w-full" />
            <div className="px-12 py-8 text-[#3a3a3a] relative">
                <h1
                    className="text-[68px] font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('title', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.title}
                </h1>
                <p
                    className="text-[29px] font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('agentName', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.agentName}
                </p>
                <p
                    className="text-[29px] font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('agentPhone', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.agentPhone}
                </p>
                <p
                    className="text-[15px] font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('agentEmail', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.agentEmail}
                </p>
                <p className="flex items-center gap-2 text-[30px] font-bold" >
                    <FaPhone className="" />
                    <span contentEditable={true} onBlur={(e) => handleEditAndSave('agentOfficePhone', e)} suppressContentEditableWarning={true}>{content.agentOfficePhone}</span>
                </p>
                <p
                    className="text-[15px] font-bold mt-2"
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
                <div className='absolute right-12 bottom-6'>
                    <div className='flex items-baseline gap-2'>
                        <p>In Partnership With</p>
                        <img src={LoanMarket} alt="Loan Market" className='w-[65px]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner200x100lm;
