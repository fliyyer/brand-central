import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BrandCentral from '../../assets/images/logo-brand-central.png';
import BcLight from '../../assets/images/bc-light.svg';
import { BiChevronLeft } from 'react-icons/bi';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import PopImg from '../../components/pop-up/PopImg';
import { listingImages } from '../../utils/ListingImg';
import Signboard3 from '../../components/signboard/signboard3/Signboard3';
import Signboard3qr from '../../components/signboard/signboard3/Signboard3qr';
import Signboard3lm from '../../components/signboard/signboard3/Signboard3lm';
import Signboard3qrlm from '../../components/signboard/signboard3/SIgnboard3qrlm';

const SignBoardEdit3 = () => {
    const [selectedComponent, setSelectedComponent] = useState('Sign Board text only');
    const [zoom, setZoom] = useState(1);
    const [bgImage, setBgImage] = useState('')
    const setZoomByScreenWidth = () => {
        if (window.innerWidth <= 768) {
            setZoom(0.8);
        } else {
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
            case 'Sign Board text only':
                return <Signboard3 onClick={openPopImg} bgImage={bgImage} setBgImage={setBgImage} />;
            case 'Sign Board Qr':
                return <Signboard3qr onClick={openPopImg} bgImage={bgImage} setBgImage={setBgImage} />;
            case 'Sign Board with Loan Market':
                return <Signboard3lm onClick={openPopImg} bgImage={bgImage} setBgImage={setBgImage} />;
            case 'Sign Board Qr with Loan Market':
                return <Signboard3qrlm onClick={openPopImg} bgImage={bgImage} setBgImage={setBgImage} />;
        }
    };

    const [isPopImgOpen, setIsPopImgOpen] = useState(false);
    const openPopImg = () => {
        setIsPopImgOpen(true);
    };

    const closePopImg = () => {
        setIsPopImgOpen(false);
    };

    const theme = localStorage.getItem('theme') || 'light';
    const brandCentralImage = theme === 'light' ? BcLight : BrandCentral;

    return (
        <div className='min-h-screen'>
            <div>
                {isPopImgOpen && (
                    <PopImg
                        onClose={closePopImg}
                        images={listingImages}
                        onChooseImage={(selectedImage) => {
                            console.log('Selected Image:', selectedImage);
                            closePopImg();
                        }}
                    />
                )}
            </div>
            <nav className='flex justify-between px-6 lg:px-24 md:py-7 py-5 items-center dark:bg-[#3F4447] shadow-2xl bg-[#fff]'>
                <img src={brandCentralImage} alt="Brand Central" className="w-40 md:w-auto" />
                <button className='px-4 md:px-6 w-28 md:w-[178px] h-7 md:h-[40px] text-[#000] bg-primary-color dark:bg-transparent font-medium dark:text-primary-color text-sm md:text-base rounded-[100px] border border-primary-color'>Save Project</button>
            </nav>
            <div className='dark:bg-bg-content bg-[#f2f2f2] bg-cover bg-no-repeat  px-6 lg:px-28 py-7 w-full min-h-screen flex flex-col justify-start items-center'>
                <Link to='/'>
                    <button className='text-[#5c5c5c] dark:text-[#fff] font-roboto absolute top-30 md:top-28 lg:top-36 left-6 lg:left-28 flex items-center gap-2 font-medium py-1 border rounded-[100px] border-[#5c5c5c] dark:border-[#fff] border-solid border-1 px-3'>
                        <BiChevronLeft className='w-8 h-8' />
                        <p>Back</p>
                    </button>
                </Link>
                <div className='md:my-16' style={zoomStyle}>
                    <select
                        value={selectedComponent}
                        onChange={(e) => setSelectedComponent(e.target.value)}
                        className="py-2 mb-2 text-sm font-medium bg-transparent leading-[20px] text-[#5c5c5c] dark:text-[#fff] border-none w-full lg:w-auto"
                    >
                        <option value="Sign Board text only" className='bg-[#fff] dark:bg-text-board-color'>Sign Board text only</option>
                        <option value="Sign Board Qr" className='bg-[#fff] dark:bg-text-board-color'>Sign Board Qr</option>
                        <option value="Sign Board with Loan Market" className='bg-[#fff] dark:bg-text-board-color'>Sign Board Loan Market</option>
                        <option value="Sign Board Qr with Loan Market" className='bg-[#fff] dark:bg-text-board-color'>Sign Board Qr with Loan Market</option>
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

export default SignBoardEdit3;
