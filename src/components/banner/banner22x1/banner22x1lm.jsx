import React, { useState } from 'react';
import RwWhite from '../../../assets/images/raywhite-putih.png';
import { FaPhone } from 'react-icons/fa';
import LoanMarket from '../../../assets/images/lm-putih.png'

const Banner22x1lm = () => {
    const [content, setContent] = useState({
        title: 'Dijual',
        agentName: 'NAMA AGENT',
        agentName2: 'NAMA AGENT 2',
        agentPhone: '0857 1188 0419',
        agentPhone2: '0857 0419 1188',
        agentEmail: 'Email.agent@gmail.com',
        agentEmail2: 'Email.agent2@gmail.com',
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
        <div className="w-[641px] h-[318px] bg-primary-color relative">
            <img src={RwWhite} alt="RayWhite" className="absolute right-8 max-w-full" />
            <div className="px-8 text-[#3a3a3a] relative">
                <h1
                    className="text-[77px] font-bold"
                    contentEditable={true}
                    onInput={(e) => handleEditAndSave('title', e)}
                    dangerouslySetInnerHTML={{ __html: content.title }}
                />
                <div className='flex gap-4'>
                    <p
                        className="text-[24px] font-bold"
                        contentEditable={true}
                        onInput={(e) => handleEditAndSave('agentName', e)}
                        dangerouslySetInnerHTML={{ __html: content.agentName }}
                    />
                    <p
                        className="text-[24px] font-bold"
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
                <div className='flex gap-4'>
                    <p
                        className="text-[24px] font-bold"
                        contentEditable={true}
                        onInput={(e) => handleEditAndSave('agentName2', e)}
                        dangerouslySetInnerHTML={{ __html: content.agentName2 }}
                    />
                    <p
                        className="text-[24px] font-bold"
                        contentEditable={true}
                        onInput={(e) => handleEditAndSave('agentPhone2', e)}
                        dangerouslySetInnerHTML={{ __html: content.agentPhone2 }}
                    />
                </div>
                <p
                    className="text-[15px] font-bold"
                    contentEditable={true}
                    onInput={(e) => handleEditAndSave('agentEmail2', e)}
                    dangerouslySetInnerHTML={{ __html: content.agentEmail2 }}
                />
                <div className='flex justify-between'>
                    <p className="flex items-center gap-2 text-[28px] font-bold" >
                        <FaPhone className="" />
                        <span
                            contentEditable={true}
                            onInput={(e) => handleEditAndSave('agentOfficePhone', e)}
                            dangerouslySetInnerHTML={{ __html: content.agentOfficePhone }}
                        />
                    </p>
                    <div className='flex items-center justify-end'>
                        <div className='absolute bottom-12'>
                            <div className='flex items-baseline gap-2'>
                                <p className='text-[7px] font-bold'>In Partnership With</p>
                                <img src={LoanMarket} alt="Loan Market" className='w-[33px]' />
                            </div>
                        </div>
                        <div>
                            <p
                                className="text-sm text-right font-bold mt-4"
                                contentEditable={true}
                                onInput={(e) => handleEditAndSave('officeName', e)}
                                dangerouslySetInnerHTML={{ __html: content.officeName }}
                            />
                            <p
                                className="text-sm font-bold text-right"
                                contentEditable={true}
                                onInput={(e) => handleEditAndSave('officeWebsite', e)}
                                dangerouslySetInnerHTML={{ __html: content.officeWebsite }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner22x1lm;
