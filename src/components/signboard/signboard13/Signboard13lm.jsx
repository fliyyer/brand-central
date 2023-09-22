import React, { useState } from 'react';
import Rw from '../../../assets/images/raywhite-putih.png';
import { FaPhone } from 'react-icons/fa6';
import Lm from '../../../assets/images/lm-biru.png';

const Signboard13lm = () => {
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
        <div className='bg-primary-color w-[384px] h-[512px] flex flex-col items-center justify-center relative'>
            <img src={Rw} alt="Raywhite" className='w-[130px] h-[130px] absolute top-0 ' />
            <div className=" mt-24 py-14 font-lato text-[#3a3a3a] text-center relative">
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
                <div className='flex text-left items-end mt-5 justify-between'>
                    <div>
                        <p
                            className="text-[15px] font-bold mt-4"
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
                    <div className='flex items-end gap-[6px]'>
                        <h1 className='font-lato text-[8.6px]'>In Partnership with</h1>
                        <img src={Lm} className='w-[41px]' alt="Loan Market" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signboard13lm
