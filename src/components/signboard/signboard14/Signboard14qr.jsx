import React, { useState } from 'react';
import Rw from '../../../assets/images/raywhite-putih.png';
import { FaPhone } from 'react-icons/fa6';
import Qr from '../../../assets/images/qrhd.png';

const Signboard14qr = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [content, setContent] = useState({
        title: 'Dijual',
        agentName: 'NAMA',
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
        <div className='w-[611px] h-[488px] bg-primary-color relative'>
            <img src={Rw} alt="Raywhite" className='w-[123px] h-[123px] absolute top-0 right-[73px]' />
            <div className='text-[#3a3a3a] px-[43px] pt-[91px]'>
                <h1
                    className="text-[90px] font-medium"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('title', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.title}
                </h1>
                <div className='flex gap-6 mt-3'>
                    <p
                        className="text-[44px] font-bold"
                        contentEditable={true}
                        onBlur={(e) => handleEditAndSave('agentName', e)}
                        suppressContentEditableWarning={true}
                    >
                        {content.agentName}
                    </p>
                    <p
                        className="text-[44px] font-bold"
                        contentEditable={true}
                        onBlur={(e) => handleEditAndSave('agentPhone', e)}
                        suppressContentEditableWarning={true}
                    >
                        {content.agentPhone}
                    </p>
                </div>
                <p
                    className="text-[19px] mt-3 font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('agentEmail', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.agentEmail}
                </p>
                <p className="flex items-center mt-3 gap-2 text-[30px] font-bold" >
                    <FaPhone className="" />
                    <span contentEditable={true} onBlur={(e) => handleEditAndSave('agentOfficePhone', e)} suppressContentEditableWarning={true}>{content.agentOfficePhone}</span>
                </p>
                <p
                    className="text-[16px] font-bold mt-7"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('officeName', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.officeName}
                </p>
                <p
                    className="text-[10px] font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('officeWebsite', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.officeWebsite}
                </p>
            </div>
            <img src={Qr} alt="QR Code" className='w-[139px] h-[137px] absolute bottom-8 right-10' />
        </div>
    )
}

export default Signboard14qr
