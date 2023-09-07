import React, { useState } from 'react';
import AllTools from '../AllTools/AllTools';
import SignBoard from '../SignBoard/SignBoard';

const MenuList = () => {
    const [activeMenu, setActiveMenu] = useState('All');
    const handleMenuClick = (menuTitle) => {
        setActiveMenu(menuTitle);
    };

    const handleCardToolClick = (menuTitle) => {
        setActiveMenu(menuTitle);
    }

    const getMenuContent = (menuTitle) => {
        switch (menuTitle) {
            case 'Sign Board':
                return <SignBoard />;
            case 'Social Media':
            case 'Flyer':
            case 'Namecard':
            case 'Email Signature':
            case 'Envelope':
            case 'Proposal':
                return <AllTools onCardToolClick={handleCardToolClick} />;
            default:
                return <AllTools onCardToolClick={handleCardToolClick} />;
        }
    };

    return (
        <><div className="flex-1 flex justify-center mx-auto">
            <ul className='flex mt-[26px] flex-wrap gap-4'>
                <li
                    className={`cursor-pointer font-medium text-sm rounded-[99px] px-[11px] py-[9.6px] ${activeMenu === 'All' ? 'text-[#3a3a3a] bg-primary-color px-[24px]' : 'text-white'} transition-all duration-300 ease-in-out`}
                    onClick={() => handleMenuClick('All')}
                >
                    All
                </li>
                <li
                    className={`cursor-pointer font-medium text-sm rounded-[99px] px-[11px] py-[9.6px]  ${activeMenu === 'Sign Board' ? 'text-[#3a3a3a] bg-primary-color px-[22px] ' : 'text-white'} transition-all duration-300 ease-in-out`}
                    onClick={() => handleMenuClick('Sign Board')}
                >
                    Sign Board
                </li>
                <li
                    className={`cursor-pointer font-medium text-sm rounded-[99px] px-[11px] py-[9.6px]  ${activeMenu === 'Banner' ? 'text-[#3a3a3a] bg-primary-color px-[22px] ' : 'text-white'} transition-all duration-300 ease-in-out`}
                    onClick={() => handleMenuClick('Banner')}
                >
                    Banner
                </li>
                <li
                    className={`cursor-pointer font-medium text-sm rounded-[99px] px-[11px] py-[9.6px] ${activeMenu === 'Social Media' ? 'text-[#3a3a3a] bg-primary-color transition-all px-[22px] duration-300 ease-in-out' : 'text-white'} transition-all duration-300 ease-in-out`}
                    onClick={() => handleMenuClick('Social Media')}
                >
                    Social Media
                </li>
                <li
                    className={`cursor-pointer font-medium text-sm rounded-[99px] px-[11px] py-[9.6px] ${activeMenu === 'Flyer' ? 'text-[#3a3a3a] bg-primary-color px-[22px]' : 'text-white'} transition-all duration-300 ease-in-out`}
                    onClick={() => handleMenuClick('Flyer')}
                >
                    Flyer
                </li>
                <li
                    className={`cursor-pointer font-medium text-sm rounded-[99px] px-[11px] py-[9.6px] ${activeMenu === 'Namecard' ? 'text-[#3a3a3a] bg-primary-color px-[22px]' : 'text-white'} transition-all duration-300 ease-in-out`}
                    onClick={() => handleMenuClick('Namecard')}
                >
                    Namecard
                </li>
                <li
                    className={`cursor-pointer font-medium text-sm rounded-[99px] px-[11px] py-[9.6px] ${activeMenu === 'Email Signature' ? 'text-[#3a3a3a] bg-primary-color px-[22px]' : 'text-white'} transition-all duration-300 ease-in-out'}`}
                    onClick={() => handleMenuClick('Email Signature')}
                >
                    Email Signature
                </li>
                <li
                    className={`cursor-pointer font-medium text-sm rounded-[99px] px-[11px] py-[9.6px] ${activeMenu === 'Envelope' ? 'text-[#3a3a3a] bg-primary-color px-[22px]' : 'text-white'} transition-all duration-300 ease-in-out'}`}
                    onClick={() => handleMenuClick('Envelope')}
                >
                    Envelope
                </li>
                <li
                    className={`cursor-pointer font-medium text-sm rounded-[99px] px-[11px] py-[9.6px] ${activeMenu === 'Proposal' ? 'text-[#3a3a3a] bg-primary-color px-[22px]' : 'text-white'} transition-all duration-300 ease-in-out'}`}
                    onClick={() => handleMenuClick('Proposal')}
                >
                    Proposal
                </li>
            </ul>
        </div>
            <div className="w-full">
                {getMenuContent(activeMenu)}
            </div></>
    );
};

export default MenuList;
