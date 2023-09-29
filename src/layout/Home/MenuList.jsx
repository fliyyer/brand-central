import React, { useState } from 'react';
import AllTools from '../AllTools/AllTools';
import SignBoard from '../SignBoard/SignBoard';
import Banner from '../Banner/Banner'
import SocialMedia from '../SocialMedia/SocialMedia';
import Flyer from '../Flyer/Flyer';
import Namecard from '../Namecard/Namecard';
import EmailSignature from '../EmailSignature/EmailSignature';
import Envelope from '../Envelope/Envelope';
import Proposal from '../Proposal/Proposal';

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
            case 'Banner':
                return <Banner />
            case 'Social Media':
                return <SocialMedia />;
            case 'Flyer':
                return <Flyer />;
            case 'Namecard':
                return <Namecard />;
            case 'Email Signature':
                return <EmailSignature />;
            case 'Envelope':
                return <Envelope />;
            case 'Proposal':
                return <Proposal />;
            default:
                return <AllTools onCardToolClick={handleCardToolClick} />;
        }
    };

    return (
        <><div className="flex-1 flex justify-center mx-auto">
            <div className="overflow-x-auto px-4">
                <ul className="flex mt-[26px] gap-4">
                    <li
                        className={`cursor-pointer font-medium text-sm rounded-[99px] px-[11px] py-[9.6px] ${activeMenu === 'All' ? 'text-[#3a3a3a] bg-primary-color px-[24px]' : 'text-[#5C5C5C] dark:text-white'} transition-all duration-300 ease-in-out`}
                        onClick={() => handleMenuClick('All')}
                    >
                        All
                    </li>
                    <li
                        className={`cursor-pointer font-medium text-sm rounded-[99px] whitespace-nowrap px-[11px] py-[9.6px]  ${activeMenu === 'Sign Board' ? 'text-[#3a3a3a] bg-primary-color px-[22px] ' : 'text-[#5C5C5C] dark:text-white'} transition-all duration-300 ease-in-out`}
                        onClick={() => handleMenuClick('Sign Board')}
                    >
                        Sign Board
                    </li>
                    <li
                        className={`cursor-pointer font-medium text-sm rounded-[99px] px-[11px] py-[9.6px]  ${activeMenu === 'Banner' ? 'text-[#3a3a3a] bg-primary-color px-[22px] ' : 'text-[#5C5C5C] dark:text-white'} transition-all duration-300 ease-in-out`}
                        onClick={() => handleMenuClick('Banner')}
                    >
                        Banner
                    </li>
                    <li
                        className={`cursor-pointer font-medium text-sm rounded-[99px] px-[11px] whitespace-nowrap py-[9.6px] ${activeMenu === 'Social Media' ? 'text-[#3a3a3a] bg-primary-color transition-all px-[22px] duration-300 ease-in-out' : 'text-[#5C5C5C] dark:text-white'} transition-all duration-300 ease-in-out`}
                        onClick={() => handleMenuClick('Social Media')}
                    >
                        Social Media
                    </li>
                    <li
                        className={`cursor-pointer font-medium text-sm rounded-[99px] px-[11px] py-[9.6px] ${activeMenu === 'Flyer' ? 'text-[#3a3a3a] bg-primary-color px-[22px]' : 'text-[#5C5C5C] dark:text-white'} transition-all duration-300 ease-in-out`}
                        onClick={() => handleMenuClick('Flyer')}
                    >
                        Flyer
                    </li>
                    <li
                        className={`cursor-pointer font-medium text-sm rounded-[99px] px-[11px] py-[9.6px] ${activeMenu === 'Namecard' ? 'text-[#3a3a3a] bg-primary-color px-[22px]' : 'text-[#5C5C5C] dark:text-white'} transition-all duration-300 ease-in-out`}
                        onClick={() => handleMenuClick('Namecard')}
                    >
                        Namecard
                    </li>
                    <li
                        className={`cursor-pointer font-medium text-sm rounded-[99px] px-[11px] whitespace-nowrap py-[9.6px] ${activeMenu === 'Email Signature' ? 'text-[#3a3a3a] bg-primary-color px-[22px]' : 'text-[#5C5C5C] dark:text-white'} transition-all duration-300 ease-in-out'}`}
                        onClick={() => handleMenuClick('Email Signature')}
                    >
                        Email Signature
                    </li>
                    <li
                        className={`cursor-pointer font-medium text-sm rounded-[99px] px-[11px] py-[9.6px] ${activeMenu === 'Envelope' ? 'text-[#3a3a3a] bg-primary-color px-[22px]' : 'text-[#5C5C5C] dark:text-white'} transition-all duration-300 ease-in-out'}`}
                        onClick={() => handleMenuClick('Envelope')}
                    >
                        Envelope
                    </li>
                    <li
                        className={`cursor-pointer font-medium text-sm rounded-[99px] px-[11px] py-[9.6px] ${activeMenu === 'Proposal' ? 'text-[#3a3a3a] bg-primary-color px-[22px]' : 'text-[#5C5C5C] dark:text-white'} transition-all duration-300 ease-in-out'}`}
                        onClick={() => handleMenuClick('Proposal')}
                    >
                        Proposal
                    </li>
                </ul>
            </div>
        </div><div className="w-full">{getMenuContent(activeMenu)}</div></>
    );
};

export default MenuList;
