import React, { useState } from 'react';
import RwWhite from '../../../assets/images/raywhite-putih.png';
import { FaPhone } from 'react-icons/fa';
import QrCode from '../../../assets/images/qr-banner100.png';
import LoanMarket from '../../../assets/images/lm-biru.png'

const Banner4x1qrlm = () => {
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


    return (
        <div className="w-[1048px] h-[262px] bg-primary-color relative">
            <img src={RwWhite} alt="RayWhite" className="absolute right-12 max-w-full" />
            <div className="px-12 text-[#3a3a3a] relative">
                <div className='flex items-center pt-4 gap-5'>
                    <img src={QrCode} alt="QR CODE" className='w-[150px] h-[150px]' />
                    <div>
                        <h1
                            className="text-[59px] font-bold"
                            contentEditable={true}
                            onBlur={(e) => handleEditAndSave('title', e)}
                        >
                            {content.title}
                        </h1>
                        <div className='flex gap-2'>
                            <p
                                className="text-[26px] font-bold"
                                contentEditable={true}
                                onBlur={(e) => handleEditAndSave('agentName', e)}
                            >
                                {content.agentName}
                            </p>
                            <p
                                className="text-[26px] font-bold"
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
                        <div className='flex mt-2 items-center'>
                            <p
                                className="text-[15px] font-bold"
                                contentEditable={true}
                                onBlur={(e) => handleEditAndSave('officeName', e)}
                            >
                                {content.officeName}
                            </p>
                            <span className="mx-2 text-[15px] font-bold">|</span>
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
                <div className='flex absolute items-baseline gap-2 right-12 bottom-0'>
                    <p>In Partnership With</p>
                    <img src={LoanMarket} alt="Loan Market" className='w-[65px]' />
                </div>
            </div>
        </div>
    );
};

export default Banner4x1qrlm;
