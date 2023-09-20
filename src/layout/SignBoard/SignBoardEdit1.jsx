import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandCentral from '../../assets/images/logo-brand-central.png';
import { BiChevronLeft } from 'react-icons/bi';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import Banner100x100foto from '../../components/banner/banner1x1/banner100x100foto'; // 
import Banner100x100qr from '../../components/banner/banner1x1/banner100x100qr';
import Banner100x100lm from '../../components/banner/banner1x1/banner100x100lm';
import Banner100x100qrlm from '../../components/banner/banner1x1/banner100x100qrlm';
import Signboard1 from '../../components/signboard/signboard1/Signboard1';

const SignBoardEdit1 = () => {
    const [selectedComponent, setSelectedComponent] = useState('Sign Board text only');

    const [zoom, setZoom] = useState(1);
    const handleZoomIn = () => {
        setZoom(Math.min(zoom + 0.1, 1.3));
    };
    const handleZoomOut = () => {
        setZoom(Math.max(zoom - 0.1, 0.3));
    };
    const zoomStyle = {
        transform: `scale(${zoom})`,
        transformOrigin: 'center center',
    }

    const renderSelectedComponent = () => {
        switch (selectedComponent) {
            case 'Sign Board text only':
                return <Signboard1 />;
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
                <div className='my-auto' style={zoomStyle}>
                    <select
                        value={selectedComponent}
                        onChange={(e) => setSelectedComponent(e.target.value)}
                        className="py-2 mb-2 text-sm font-medium bg-transparent leading-[20px] text-[#fff] border-none w-full lg:w-auto"
                    >
                        <option value="Sign Board text only" className='bg-text-board-color'>Sign Board text only</option>
                        <option value="Banner100x100foto" className='bg-text-board-color rounded-none'>Banner with Photo</option>
                        <option value="Banner100x100qr" className='bg-text-board-color rounded-none'>Banner with QR</option>
                        <option value="Banner100x100lm" className='bg-text-board-color rounded-none'>Banner with Loan Market</option>
                        <option value="Banner100x100qrlm" className='bg-text-board-color rounded-none'>Banner QR with Loan Market</option>
                    </select>
                    {renderSelectedComponent()}
                </div>
                <div className='mb-4 flex items-center justify-center'>
                    <button onClick={handleZoomOut} className="text-sm w-[15px] bg-transparent py-10 text-white">
                        <AiOutlineMinusCircle />
                    </button>
                    <div className="w-40 h-1 bg-slate-600 rounded-full mx-4">
                        <div
                            className="h-1 bg-[#fff] rounded-full"
                            style={{ width: `${zoom * 50}%` }}
                        ></div>
                    </div>
                    <button onClick={handleZoomIn} className="text-sm w-[15px] bg-transparent text-white">
                        <AiOutlinePlusCircle />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignBoardEdit1;
