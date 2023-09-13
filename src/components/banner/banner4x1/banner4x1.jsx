import React, { useState } from 'react';
import RwWhite from '../../../assets/images/raywhite-putih.png';
import { FaPhone } from 'react-icons/fa';

const Banner4x1 = () => {
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
        }
    };

    return (
        <div className="w-[1048px] h-[262px] bg-primary-color relative">
            <img src={RwWhite} alt="RayWhite" className="absolute right-12 max-w-full" />
            <div className="px-12 py-0 text-[#3a3a3a] relative">
                <h1
                    className="text-[68px] font-bold"
                    contentEditable={true}
                    onInput={(e) => handleEditAndSave('title', e)}
                    dangerouslySetInnerHTML={{ __html: content.title }}
                />
                <div className='flex gap-3'>
                    <p
                        className="text-[29px] font-bold"
                        contentEditable={true}
                        onInput={(e) => handleEditAndSave('agentName', e)}
                        dangerouslySetInnerHTML={{ __html: content.agentName }}
                    />
                    <p
                        className="text-[29px] font-bold"
                        contentEditable={true}
                        onInput={(e) => handleEditAndSave('agentPhone', e)}
                        dangerouslySetInnerHTML={{ __html: content.agentPhone }}
                    />
                </div>
                <p
                    className="text-[15px] font-bold"
                    contentEditable={true}
                    onInput={(e) => handleEditAndSave('agentEmail', e)}
                    dangerouslySetInnerHTML={{ __html: content.agentEmail }}
                />
                <div className='flex justify-between'>
                    <p className="flex items-center gap-2 text-[30px] font-bold" >
                        <FaPhone className="" />
                        <span
                            contentEditable={true}
                            onInput={(e) => handleEditAndSave('agentOfficePhone', e)}
                            dangerouslySetInnerHTML={{ __html: content.agentOfficePhone }}
                        />
                    </p>
                    <div>
                        <p
                            className="text-[15px] font-bold mt-4"
                            contentEditable={true}
                            onInput={(e) => handleEditAndSave('officeName', e)}
                            dangerouslySetInnerHTML={{ __html: content.officeName }}
                        />
                        <p
                            className="text-[15px] font-bold"
                            contentEditable={true}
                            onInput={(e) => handleEditAndSave('officeWebsite', e)}
                            dangerouslySetInnerHTML={{ __html: content.officeWebsite }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner4x1;
