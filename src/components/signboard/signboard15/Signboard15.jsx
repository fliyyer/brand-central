import React, { useState } from 'react';
import Rw from '../../../assets/images/raywhite-putih.png';
import { FaPhone } from 'react-icons/fa6';

const Signboard15 = () => {
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
        <div className='bg-primary-color w-[393px] h-[524px] flex flex-col items-center justify-center relative'>
            <img src={Rw} alt="Raywhite" className='w-[130px] h-[130px] absolute top-0 ' />
            <div className="px-8 mt-24 py-28 font-lato text-[#3a3a3a] text-center relative">
                <h1
                    className="text-[51px] font-medium"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('title', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.title}
                </h1>
                <p
                    className="text-[38px] font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('agentName', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.agentName}
                </p>
                <p
                    className="text-[38px] font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('agentPhone', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.agentPhone}
                </p>
                <p
                    className="text-[19px] font-bold"
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
                    className="text-[18px] font-bold mt-5"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('officeName', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.officeName}
                </p>
                <p
                    className="text-[11px] font-bold mt-1"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('officeWebsite', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.officeWebsite}
                </p>
            </div>
        </div>
    )
}

export default Signboard15
