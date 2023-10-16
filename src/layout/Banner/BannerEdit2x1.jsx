import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BrandCentral from '../../assets/images/logo-brand-central.png';
import BcLight from '../../assets/images/bc-light.svg';
import { BiChevronLeft } from 'react-icons/bi';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import Banner200x100 from '../../components/banner/banner2x1/banner200x100';
import Banner200x100foto from '../../components/banner/banner2x1/banner200x100foto';
import Banner200x100qr from '../../components/banner/banner2x1/banner200x100qr';
import Banner200x100lm from '../../components/banner/banner2x1/banner200x100lm';
import Banner200x100qrlm from '../../components/banner/banner2x1/banner200x100.qrlm';

const BannerEdit2x1 = () => {
    const [selectedComponent, setSelectedComponent] = useState('Banner200x100');
    const [zoom, setZoom] = useState(1);
    const setZoomByScreenWidth = () => {
        if (window.innerWidth <= 760) {
            setZoom(0.5);
        }
        else if (window.innerWidth <= 1024) {
            setZoom(0.9);
        }
        else {
            setZoom(1.0);
        }
    };

    useEffect(() => {
        setZoomByScreenWidth();
        window.addEventListener('resize', setZoomByScreenWidth);
        return () => {
            window.removeEventListener('resize', setZoomByScreenWidth);
        };
    }, []);
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
            case 'Banner200x100':
                return <Banner200x100 />;
            case 'Banner200x100foto':
                return <Banner200x100foto />;
            case 'Banner200x100qr':
                return <Banner200x100qr />;
            case 'Banner200x100lm':
                return <Banner200x100lm />;
            case 'Banner200x100qrlm':
                return <Banner200x100qrlm />;
            default:
                return null;
        }
    };

    const theme = localStorage.getItem('theme') || 'light';
    const brandCentralImage = theme === 'light' ? BcLight : BrandCentral;

    return (
        <div className='min-h-screen'>
            <nav className='flex justify-between px-6 lg:px-24 md:py-7 py-5 items-center dark:bg-[#3F4447] shadow-2xl bg-[#fff]'>
                <img src={brandCentralImage} alt="Brand Central" className="w-40 md:w-auto" />
                <button className='px-4 md:px-6 w-28 md:w-[178px] h-7 md:h-[40px] text-[#000] bg-primary-color dark:bg-transparent font-medium dark:text-primary-color text-sm md:text-base rounded-[100px] border border-primary-color'>Save Project</button>
            </nav>
            <div className='dark:bg-bg-content bg-cover bg-no-repeat bg-[#f2f2f2]  px-6 lg:px-28 py-7 w-full min-h-screen flex flex-col justify-start items-center'>
                <Link to='/'>
                    <button className='text-[#5c5c5c] dark:text-[#fff] font-roboto absolute top-30 md:top-28 lg:top-36 left-6 lg:left-28 flex items-center gap-2 font-medium py-1 border rounded-[100px] border-[#5c5c5c] dark:border-[#fff] border-solid border-1 px-3'>
                        <BiChevronLeft className='w-8 h-8' />
                        <p>Back</p>
                    </button>
                </Link>
                <div className='my-16' style={zoomStyle}>
                    <select
                        value={selectedComponent}
                        onChange={(e) => setSelectedComponent(e.target.value)}
                        className="py-2 mb-2 text-sm font-medium bg-transparent leading-[20px] text-[#5c5c5c] dark:text-[#fff] border-none w-auto"
                    >
                        <option value="Banner200x100" className='bg-[#fff] dark:bg-text-board-color'>Banner text only</option>
                        <option value="Banner200x100foto" className='bg-[#fff] dark:bg-text-board-color rounded-none'>Banner with Photo</option>
                        <option value="Banner200x100qr" className='bg-[#fff] dark:bg-text-board-color rounded-none'>Banner with QR</option>
                        <option value="Banner200x100lm" className='bg-[#fff] dark:bg-text-board-color rounded-none'>Banner with Loan Market</option>
                        <option value="Banner200x100qrlm" className='bg-[#fff] dark:bg-text-board-color rounded-none'>Banner QR with Loan Market</option>
                    </select>
                    {renderSelectedComponent()}
                </div>
                <div className='mb-4 flex items-center justify-center'>
                    <button onClick={handleZoomOut} className="text-sm w-[15px] bg-transparent py-10 text-[#5c5c5c] dark:text-white">
                        <AiOutlineMinusCircle />
                    </button>
                    <div className="w-40 h-1 bg-slate-300 dark:bg-slate-600 rounded-full mx-4">
                        <div
                            className="h-1 dark:bg-[#fff] bg-slate-600 rounded-full"
                            style={{ width: `${zoom * 80}%` }}
                        ></div>
                    </div>
                    <button onClick={handleZoomIn} className="text-sm w-[15px] bg-transparent text-[#5c5c5c] dark:text-white">
                        <AiOutlinePlusCircle />
                    </button>
                </div>
            </div>
        </div>

    );
};

export default BannerEdit2x1;
