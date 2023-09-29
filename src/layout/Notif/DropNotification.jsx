import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { history } from '../../utils/history';
import { notification } from '../../utils/notification';

const DropNotification = () => {
    const [activeTab, setActiveTab] = useState('update');

    const dataHistory = history;
    const dataNotification = notification;
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='w-[330px] font-inter h-[372px] p-[14px] notification-container bg-[#fff] dark:bg-[#3f4447]' style={{ overflowY: 'auto', maxHeight: '372px' }}>
            <div className='flex gap-2'>
                <button
                    className={`${activeTab === 'update' ? ' dark:text-white border-primary-color' : 'text-[#8f8f8f]'} h-[32px] w-[82px] rounded-md font-medium text-sm border-2 ${activeTab === 'update' ? 'border-primary-color bg-primary-color dark:bg-transparent text-[#000]' : 'border-[#D5D5D5]'}`}
                    onClick={() => handleTabClick('update')}
                >
                    Update
                </button>
                <button
                    className={`${activeTab === 'history' ? 'border-primary-color dark:text-white' : 'text-[#8f8f8f]'} h-[32px] w-[82px]  rounded-md font-medium text-sm border-2 ${activeTab === 'history' ? 'border-primary-color bg-primary-color dark:bg-transparent text-[#000]' : 'border-[#D5D5D5]'}`}
                    onClick={() => handleTabClick('history')}
                >
                    History
                </button>
            </div>
            <div className=''>
                {activeTab === 'update' ? (
                    <div className='mt-[22px]'>
                        {dataNotification.slice(0, 3).map((item, index) => (
                            <div key={index}>
                                <div className='px-4 text-[10px] font-normal h-[18px] rounded inline-flex items-center bg-[#d5d5d5]'>{item.title}</div>
                                <h2 className='font-bold my-2 text-sm text-[#5c5c5c] dark:text-[#fff]'>{item.desc}</h2>
                                <Link className='text-xs leading-5 text-[#bababa]'>Cek Selengkapnya</Link>
                                <hr className='mt-2' />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='mt-[22px]'>
                        {dataHistory.slice(0, 5).map((item, index) => (
                            <div key={index}>
                                <div className='px-4 text-[10px] font-normal h-[18px] rounded inline-flex items-center bg-[#d5d5d5]'>{item.title}</div>
                                <h2 className='font-bold my-2 text-sm text-[#5c5c5c] dark:text-[#fff]'>{item.desc}</h2>
                                <Link className='text-xs leading-5 text-[#bababa]'>Download hasil sign board yang kamu buat disini</Link>
                                <hr className='mt-2' />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DropNotification;
