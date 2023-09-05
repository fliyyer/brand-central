import React, { useState } from 'react';
import AllTools from '../AllTools/AllTools';

const MenuList = () => {
    const [activeMenu, setActiveMenu] = useState('All');

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    const getMenuContent = () => {
        switch (activeMenu) {
            case 'Sign Board':
                return <div>Isi dari Sign Board</div>;
            case 'Social Media':
                return <div>Isi dari Social Media</div>;
            case 'Flyer':
                return <div>Isi dari Flyer</div>;
            case 'Namecard':
                return <div>Isi dari Namecard</div>;
            case 'Email Signature':
                return <div>Isi dari Email Signature</div>;
            case 'Envelope':
                return <div>Isi dari Envelope</div>;
            case 'Proposal':
                return <div>Isi dari Proposal</div>;
            default:
                return <AllTools />;
        }
    };

    return (
        <><div className="flex-1 flex justify-center mx-auto">
            <ul className='flex mt-[26px] flex-wrap gap-4'>
                <li
                    className={`cursor-pointer font-medium text-sm rounded-[99px] px-9 py-3 text-white ${activeMenu === 'All' ? 'text-text-board-color bg-primary-color transition-all duration-300 ease-in-out' : ''}`}
                    onClick={() => handleMenuClick('All')}
                >
                    All
                </li>
                <li
                    className={`cursor-pointer font-medium text-sm rounded-[99px] px-5 py-3 text-white ${activeMenu === 'Sign Board' ? 'text-text-board-color bg-primary-color transition-all duration-300 ease-in-out' : ''}`}
                    onClick={() => handleMenuClick('Sign Board')}
                >
                    Sign Board
                </li>
                <li
                    className={`cursor-pointer font-medium text-sm rounded-[99px] px-5 py-3 text-white ${activeMenu === 'Social Media' ? 'text-text-board-color bg-primary-color transition-all duration-300 ease-in-out' : ''}`}
                    onClick={() => handleMenuClick('Social Media')}
                >
                    Social Media
                </li>
                <li
                    className={`cursor-pointer font-medium text-sm rounded-[99px] px-8 py-3 text-white ${activeMenu === 'Flyer' ? 'text-text-board-color bg-primary-color transition-all duration-300 ease-in-out' : ''}`}
                    onClick={() => handleMenuClick('Flyer')}
                >
                    Flyer
                </li>
                <li
                    className={`cursor-pointer font-medium text-sm rounded-[99px] px-5 py-3 text-white ${activeMenu === 'Namecard' ? 'text-text-board-color bg-primary-color transition-all duration-300 ease-in-out' : ''}`}
                    onClick={() => handleMenuClick('Namecard')}
                >
                    Namecard
                </li>
                <li
                    className={`cursor-pointer font-medium text-sm rounded-[99px] px-5 py-3 text-white ${activeMenu === 'Email Signature' ? 'text-text-board-color bg-primary-color transition-all duration-300 ease-in-out' : ''}`}
                    onClick={() => handleMenuClick('Email Signature')}
                >
                    Email Signature
                </li>
                <li
                    className={`cursor-pointer font-medium text-sm rounded-[99px] px-5 py-3 text-white ${activeMenu === 'Envelope' ? 'text-text-board-color bg-primary-color transition-all duration-300 ease-in-out' : ''}`}
                    onClick={() => handleMenuClick('Envelope')}
                >
                    Envelope
                </li>
                <li
                    className={`cursor-pointer font-medium text-sm rounded-[99px] px-5 py-3 text-white ${activeMenu === 'Proposal' ? 'text-text-board-color bg-primary-color transition-all duration-300 ease-in-out' : ''}`}
                    onClick={() => handleMenuClick('Proposal')}
                >
                    Proposal
                </li>
            </ul>
        </div>
            <div className="w-full">{getMenuContent()}</div></>
    );
};

export default MenuList;
