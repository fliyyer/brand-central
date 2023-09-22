import React, { useState } from 'react';
import Rw from '../../../assets/images/raywhite-putih.png';
import { FaPhone } from 'react-icons/fa6';
import Arrow from '../../../assets/images/aleft.png';
import Lm from '../../../assets/images/lm-biru.png';

const Signboard16lm = () => {
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
        <div className='w-[509px] h-[509px] bg-primary-color'>
            <img src={Arrow} className='w-[171px] h-[171px] absolute top-14 left-4' alt="Arrow Left" />
            <img src={Rw} alt="Raywhite" className='w-[125px] h-[125px] absolute top-11 right-9' />
            <div className='text-right px-8 pt-32 text-[#3a3a3a]'>
                <h1
                    className="text-[77px] font-medium"
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
                <p className="flex items-center absolute right-8 gap-2 text-[30px] font-bold" >
                    <FaPhone className="" />
                    <span contentEditable={true} onBlur={(e) => handleEditAndSave('agentOfficePhone', e)} suppressContentEditableWarning={true}>{content.agentOfficePhone}</span>
                </p>
                <div className='justify-between pt-16 flex items-end'>
                    <p
                        className="text-[17.8px] font-bold"
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
                <div className='absolute bottom-14'>
                    <h1 className='font-lato text-[11.6px]'>In Partnership with</h1>
                    <img src={Lm} className='w-[55px]' alt="Loan Market" />
                </div>
            </div>
        </div>
    )
}

export default Signboard16lm
