import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandCentral from '../../assets/images/logo-brand-central.png';
import { BiChevronLeft } from 'react-icons/bi';
import Banner6x16qr from '../../components/banner/banner6x16/banner6x16qr';
import Banner6x16photo from '../../components/banner/banner6x16/banner6x16photo';

const BannerEdit6x16 = () => {
    const [selectedComponent, setSelectedComponent] = useState('Banner6x16qr');

    const renderSelectedComponent = () => {
        switch (selectedComponent) {
            case 'Banner6x16qr':
                return <Banner6x16qr />;
            case 'Banner6x16photo':
                return <Banner6x16photo />;
            default:
                return null;
        }
    };

    return (
        <div className='min-h-screen'>
            <nav className='flex flex-col lg:flex-row justify-between px-6 lg:px-24 items-center lg:h-[100px]' style={{ backgroundColor: '#3F4447', boxShadow: '0px 5px 20px 0px rgba(0, 0, 0, 0.10)' }}>
                <img src={BrandCentral} alt="Brand Central" className="mb-4 lg:mb-0" />
                <button className='px-6 w-[178px] h-[40px] text-primary-color rounded-[100px] border border-primary-color mt-4 lg:mt-0'>Save Project</button>
            </nav>
            <div className='bg-dark  px-6 lg:px-28 py-7 w-full min-h-screen flex flex-col justify-start items-center'>
                <Link to='/'>
                    <button className='text-[#fff] font-roboto relative -left-[589px] top-10  flex items-center gap-2 font-medium py-1 border rounded-[100px] border-[#fff] border-solid border-1 px-3'>
                        <BiChevronLeft className='w-8 h-8' />
                        <p>Back</p>
                    </button>
                </Link>
                <div className='my-auto'>
                    <select
                        value={selectedComponent}
                        onChange={(e) => setSelectedComponent(e.target.value)}
                        className="py-2 mb-2 text-sm font-medium bg-transparent leading-[20px] text-[#fff] border-none w-full lg:w-auto"
                    >
                        <option value="Banner6x16qr" className='bg-text-board-color'>X Banner with QR code</option>
                        <option value="Banner6x16photo" className='bg-text-board-color rounded-none'>X Banner photo with Loan Market</option>
                    </select>
                    {renderSelectedComponent()}
                </div>
            </div>
        </div>

    );
};

export default BannerEdit6x16;
