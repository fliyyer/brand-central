import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropNotification = () => {
    const [activeTab, setActiveTab] = useState('update');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className='w-[330px] font-inter h-[372px] p-[14px]' style={{ backgroundColor: '#3F4447' }}>
            <div className='flex gap-2'>
                <button
                    className={`${activeTab === 'update' ? 'text-primary-color border-primary-color' : 'text-[#8f8f8f]'} h-[32px] w-[82px] rounded-md font-medium text-sm border-2 ${activeTab === 'update' ? 'border-primary-color' : 'border-[#D5D5D5]'}`}
                    onClick={() => handleTabClick('update')}
                >
                    Update
                </button>
                <button
                    className={`${activeTab === 'history' ? 'border-primary-color text-white' : 'text-[#8f8f8f]'} h-[32px] w-[82px]  rounded-md font-medium text-sm border-2 ${activeTab === 'history' ? 'border-primary-color' : 'border-[#D5D5D5]'}`}
                    onClick={() => handleTabClick('history')}
                >
                    History
                </button>

            </div>
            <div className=''>
                {activeTab === 'update' ? (
                    <div className='mt-[22px]'>
                        <div className=''>
                            <div className='px-4 text-[10px] font-normal h-[18px] rounded inline-flex items-center bg-[#d5d5d5]'>Flyer</div>
                            <h2 className='font-bold my-2 text-sm text-[#fff]'>Ada template  baru di menu Flyer</h2>
                            <Link className='text-xs leading-5 text-[#bababa]'>Cek Selengkapnya</Link>
                            <hr className='mt-2' />
                        </div>
                        <div className='my-2'>
                            <div className='px-4 text-[10px] font-normal h-[18px] rounded inline-flex items-center bg-[#d5d5d5]'>Media Sosial</div>
                            <h2 className='font-bold my-2 text-sm text-[#fff]'>Ada template baru di menu Social Media</h2>
                            <Link className='text-xs leading-5 text-[#bababa]'>Cek Selengkapnya</Link>
                            <hr className='mt-2' />
                        </div>
                        <div className=''>
                            <div className='px-4 text-[10px] font-normal h-[18px] rounded inline-flex items-center bg-[#d5d5d5]'>Sign Board</div>
                            <h2 className='font-bold my-2 text-sm text-[#fff]'>Ada template  baru di menu Sign Board</h2>
                            <Link to='/' className='text-xs leading-5 text-[#bababa]'>Cek Selengkapnya</Link>
                            <hr className='mt-2' />
                        </div>
                    </div>
                ) : (
                    <div className='mt-[22px]'>
                        <div>
                            <div className='px-4 text-[10px] font-normal h-[18px] rounded inline-flex items-center bg-[#d5d5d5]'>Sign board</div>
                            <h2 className='font-bold my-2 text-sm text-[#fff]'>Kamu telah membuat project Sign Board</h2>
                            <Link className='text-xs leading-5 text-[#bababa]'>Download hasil sign board yang kamu buat disini</Link>
                            <hr className='mt-2' />
                        </div>
                        <div className='my-2'>
                            <div className='px-4 text-[10px] font-normal h-[18px] rounded inline-flex items-center bg-[#d5d5d5]'>Flyer</div>
                            <h2 className='font-bold my-2 text-sm text-[#fff]'>Kamu telah membuat project Flyer</h2>
                            <Link className='text-xs leading-5 text-[#bababa]'>Download hasil flyer yang kamu buat disini</Link>
                            <hr className='mt-2' />
                        </div>
                        <div>
                            <div className='px-4 text-[10px] font-normal h-[18px] rounded inline-flex items-center bg-[#d5d5d5]'>Media Social</div>
                            <h2 className='font-bold my-2 text-sm text-[#fff]'>Kamu telah membuat project Social Media</h2>
                            <Link to='/' className='text-xs leading-5 text-[#bababa]'>Download hasil media social yang kamu buat disini</Link>
                            <hr className='mt-2' />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DropNotification;
