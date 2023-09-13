import React, { useState } from 'react';
import RwWhite from '../../../assets/images/openhouse.png';
import { FaPhone } from 'react-icons/fa';
import QrRw from '../../../assets/images/qr-rw.png';
import LoanMarket from '../../../assets/images/lm-putih.png'

const Banner6x16qr = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState({
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
        <div className="w-[174px] h-[466px] bg-primary-color relative flex flex-col justify-center items-center">
            <img src={RwWhite} alt="RayWhite" className="absolute w-[85px] right-12 top-0 justify-center max-w-full" />
            <img src={QrRw} alt="QR Code Raywhite" className='w-[82px] mt-48' />
            <div className='flex gap-1 mt-9 items-baseline'>
                <p className='text-[8px] text-text-board-color'>In Partnership With</p>
                <img src={LoanMarket} alt="Loan Market" className='w-[26px] mb-[19px]' />
            </div>
            <div className="px-8 relative text-center">
                <p
                    className="text-[12px] font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('agentName', e)}
                >
                    {content.agentName}
                </p>
                <p
                    className="text-[12px] font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('agentPhone', e)}
                >
                    {content.agentPhone}
                </p>
                <p
                    className="text-[6px] text-[#595A5C] font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('agentEmail', e)}
                >
                    {content.agentEmail}
                </p>
                <p className="flex items-center text-[#595A5C] text-[12.5px] font-bold" >
                    <FaPhone className="" />
                    <span contentEditable={true} onBlur={(e) => handleEditAndSave('agentOfficePhone', e)}>{content.agentOfficePhone}</span>
                </p>
                <p
                    className="text-[7.4px] font-bold mt-3"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('officeName', e)}
                >
                    {content.officeName}
                </p>
                <p
                    className="text-[5px] font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('officeWebsite', e)}
                >
                    {content.officeWebsite}
                </p>
            </div>
        </div>
    );
};

export default Banner6x16qr;
