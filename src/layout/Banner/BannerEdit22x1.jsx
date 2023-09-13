import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandCentral from '../../assets/images/logo-brand-central.png';
import { BiChevronLeft } from 'react-icons/bi';
import Banner22x1 from '../../components/banner/banner22x1/banner22x1';
import Banner22x1lm from '../../components/banner/banner22x1/banner22x1lm';

const BannerEdit22x1 = () => {
    const [selectedComponent, setSelectedComponent] = useState('Banner22x1');
    const [zoom, setZoom] = useState(1);

    const handleZoomIn = () => {
        setZoom(Math.min(zoom + 0.1, 2));
    };

    const handleZoomOut = () => {
        setZoom(Math.max(zoom - 0.1, 1));
    };

    const renderSelectedComponent = () => {
        const zoomStyle = {
            transform: `scale(${zoom})`,
            transformOrigin: 'center center',
        };

        switch (selectedComponent) {
            case 'Banner22x1':
                return (
                    <div style={zoomStyle}>
                        <Banner22x1 />
                    </div>
                );
            case 'Banner22x1lm':
                return (
                    <div style={zoomStyle}>
                        <Banner22x1lm />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='min-h-screen'>
            <nav className='flex flex-col lg:flex-row justify-between px-6 lg:px-24 items-center lg:h-[100px]' style={{ backgroundColor: '#3F4447', boxShadow: '0px 5px 20px 0px rgba(0, 0, 0, 0.10)' }}>
                <img src={BrandCentral} alt="Brand Central" className="mb-4 lg:mb-0" />
                <button className='px-6 w-[178px] max-w-full h-[40px] text-primary-color rounded-[100px] border border-primary-color mt-4 lg:mt-0'>Save Project</button>
            </nav>
            <div className='bg-dark px-6 lg:px-28 w-full min-h-screen flex flex-col justify-start items-center'>
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
                        <option value="Banner22x1" className='bg-text-board-color'>Banner text only</option>
                        <option value="Banner22x1lm" className='bg-text-board-color rounded-none'>Banner with Loan Market</option>
                    </select>
                    {renderSelectedComponent()}
                </div>
                <div className='mb-4 flex items-center justify-center'>
                    <button onClick={handleZoomIn} className="text-sm bg-transparent text-white">Zoom In</button>
                    <div className="w-40 h-1 bg-[#dadada] rounded-full mx-4">
                        <div
                            className="h-1 bg-[#fff] rounded-full"
                            style={{ width: `${zoom * 50}%` }}
                        ></div>
                    </div>
                    <button onClick={handleZoomOut} className="text-sm bg-transparent text-white">Zoom Out</button>
                </div>
            </div>
        </div>
    );
};

export default BannerEdit22x1;
