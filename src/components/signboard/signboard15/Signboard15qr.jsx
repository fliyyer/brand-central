import React, { useState } from 'react';
import Rw from '../../../assets/images/raywhite-putih.png';
import { FaPhone } from 'react-icons/fa6';
import Qr from '../../../assets/images/qrhd.png';

const Signboard15qr = () => {
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
        <div className='bg-primary-color w-[393px] h-[524px] flex flex-col items-center justify-center'>
            <img src={Rw} alt="Raywhite" className='w-[130px] h-[130px] absolute top-11  ' />
            <div className=" mt-24 font-lato text-[#3a3a3a] text-center">
                <h1
                    className="text-[54px] font-medium"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('title', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.title}
                </h1>
                <p
                    className="text-[40px] font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('agentName', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.agentName}
                </p>
                <p
                    className="text-[40px] font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('agentPhone', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.agentPhone}
                </p>
                <p
                    className="text-[20px] font-bold"
                    contentEditable={true}
                    onBlur={(e) => handleEditAndSave('agentEmail', e)}
                    suppressContentEditableWarning={true}
                >
                    {content.agentEmail}
                </p>
                <p className="flex items-end gap-2 text-[30px] font-bold" >
                    <FaPhone className="" />
                    <span contentEditable={true} onBlur={(e) => handleEditAndSave('agentOfficePhone', e)} suppressContentEditableWarning={true}>{content.agentOfficePhone}</span>
                </p>
            </div>
            <div className='flex text-left mt-8 items-center gap-[100px] '>
                <div>
                    <p
                        className="text-[18px] font-bold mt-4"
                        contentEditable={true}
                        onBlur={(e) => handleEditAndSave('officeName', e)}
                        suppressContentEditableWarning={true}
                    >
                        {content.officeName}
                    </p>
                    <p
                        className="text-[11px] font-bold"
                        contentEditable={true}
                        onBlur={(e) => handleEditAndSave('officeWebsite', e)}
                        suppressContentEditableWarning={true}
                    >
                        {content.officeWebsite}
                    </p>
                </div>
                <img src={Qr} className='w-[57px]' alt="QR Code" />
            </div>
        </div>
    )
}

export default Signboard15qr
