import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandCentral from '../../assets/images/logo-brand-central.png';
import { BiChevronLeft } from 'react-icons/bi';
import Banner4x1 from '../../components/banner/banner4x1/banner4x1';
import Banner4x1foto from '../../components/banner/banner4x1/banner4x1foto';
import Banner4x1qr from '../../components/banner/banner4x1/Banner4x1qr';
import Banner4x1lm from '../../components/banner/banner4x1/banner4x1lm';
import Banner4x1qrlm from '../../components/banner/banner4x1/banner4x1qrlm';

const BannerEdit4x1 = () => {
    const [selectedComponent, setSelectedComponent] = useState('Banner400x100');

    const renderSelectedComponent = () => {
        switch (selectedComponent) {
            case 'Banner400x100':
                return <Banner4x1 />;
            case 'Banner400x100foto':
                return <Banner4x1foto />;
            case 'Banner400x100qr':
                return <Banner4x1qr />;
            case 'Banner400x100lm':
                return <Banner4x1lm />;
            case 'Banner400x100qrlm':
                return <Banner4x1qrlm />;
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
                    <button className='text-[#fff] font-roboto absolute top-8 lg:top-36 left-4 lg:left-28 flex items-center gap-2 font-medium py-1 border rounded-[100px] border-[#fff] border-solid border-1 px-3'>
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
                        <option value="Banner400x100" className='bg-text-board-color'>Banner text only</option>
                        <option value="Banner400x100foto" className='bg-text-board-color rounded-none'>Banner with Photo</option>
                        <option value="Banner400x100qr" className='bg-text-board-color rounded-none'>Banner with QR</option>
                        <option value="Banner400x100lm" className='bg-text-board-color rounded-none'>Banner with Loan Market</option>
                        <option value="Banner400x100qrlm" className='bg-text-board-color rounded-none'>Banner QR with Loan Market</option>
                    </select>
                    {renderSelectedComponent()}
                </div>
            </div>
        </div>

    );
};

export default BannerEdit4x1;
