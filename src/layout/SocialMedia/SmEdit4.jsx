import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandCentral from '../../assets/images/logo-brand-central.png';
import { BiChevronLeft } from 'react-icons/bi';
import Instagram4 from '../../components/socialmedia/Instagram4'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import PopImg from '../../components/pop-up/PopImg';
import { listingImages } from '../../utils/ListingImg';

const SmEdit4 = () => {
    const [selectedComponent, setSelectedComponent] = useState('Sign Board text only');
    const [zoom, setZoom] = useState(1);
    const [bgImage, setBgImage] = useState('')
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

    const [isPopImgOpen, setIsPopImgOpen] = useState(false);
    const openPopImg = () => {
        setIsPopImgOpen(true);
    };

    const closePopImg = () => {
        setIsPopImgOpen(false);
    };


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
                <div className='my-auto' style={zoomStyle}>
                    <Instagram4 onClick={openPopImg} bgImage={bgImage} setBgImage={setBgImage} />
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

export default SmEdit4;
