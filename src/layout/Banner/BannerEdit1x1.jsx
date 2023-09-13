import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandCentral from '../../assets/images/logo-brand-central.png';
import { BiChevronLeft } from 'react-icons/bi';
import Banner100x100 from '../../components/banner/banner1x1/banner100x100';
import Banner100x100foto from '../../components/banner/banner1x1/banner100x100foto'; // 
import Banner100x100qr from '../../components/banner/banner1x1/banner100x100qr';
import Banner100x100lm from '../../components/banner/banner1x1/banner100x100lm';
import Banner100x100qrlm from '../../components/banner/banner1x1/banner100x100qrlm';

const BannerEdit1x1 = () => {
    const [selectedComponent, setSelectedComponent] = useState('Banner100x100'); // Default komponen yang akan ditampilkan

    const renderSelectedComponent = () => {
        switch (selectedComponent) {
            case 'Banner100x100':
                return <Banner100x100 />;
            case 'Banner100x100foto':
                return <Banner100x100foto />;
            case 'Banner100x100qr':
                return <Banner100x100qr />;
            case 'Banner100x100lm':
                return <Banner100x100lm />;
            case 'Banner100x100qrlm':
                return <Banner100x100qrlm />;
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
                        <option value="Banner100x100" className='bg-text-board-color'>Banner text only</option>
                        <option value="Banner100x100foto" className='bg-text-board-color rounded-none'>Banner with Photo</option>
                        <option value="Banner100x100qr" className='bg-text-board-color rounded-none'>Banner with QR</option>
                        <option value="Banner100x100lm" className='bg-text-board-color rounded-none'>Banner with Loan Market</option>
                        <option value="Banner100x100qrlm" className='bg-text-board-color rounded-none'>Banner QR with Loan Market</option>
                    </select>
                    {renderSelectedComponent()}
                </div>
            </div>
        </div>

    );
};

export default BannerEdit1x1;
