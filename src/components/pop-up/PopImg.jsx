import React, { useState } from "react";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import BrandCentral from '../../assets/images/logo-brand-central.png'
import BcLight from '../../assets/images/bc-light.svg';

function PopImg({ onClose, images, onChooseImage }) {
    const [showImage, setShowImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClose = () => {
        if (selectedImage) {
            onChooseImage(selectedImage);
        }
        setShowImage(false);
        onClose();
    };


    const handleImageSelect = (image) => {
        onChooseImage(image);
        setSelectedImage(image);
    };



    const theme = localStorage.getItem('theme') || 'light';
    const brandCentralImage = theme === 'light' ? BcLight : BrandCentral;

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-black bg-opacity-50 px-3 md:px-0">
            <div className="dark:bg-[#3F4447] bg-[#fff]  rounded-[20px] w-[100%] max-w-[796px] h-[480px] md:h-[535px] flex flex-col justify-between px-7" style={{ zIndex: 9999 }}>
                <div className="flex justify-between mt-[26px] items-center">
                    <button
                        className="dark:text-white text-[#5c5c5c] rounded-full top-4 left-4 items-center z-10"
                        onClick={handleClose}
                    >
                        <AiOutlineCloseCircle className="w-6 h-6" />
                    </button>
                    <img src={brandCentralImage} alt="BrandCentral" />
                </div>
                <div className="font-roboto md:px-[95px]">
                    <h1 className="dark:text-[#fff] text-[#5c5c5c5] mt-4 text-lg">Choose Image</h1>
                    <div className="md:mt-[30px] mt-5 grid grid-cols-2 gap-4">
                        {images.map((item) => (
                            <div key={item.id} className="flex items-center gap-[15.5px]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-16 md:w-[98px] h-12 md:h-[82px] rounded-md cursor-pointer"
                                    onClick={() => handleImageSelect(item.image)}
                                />
                                <h1 className="text-sm w-[115px] text-[#5c5c5c] dark:text-[#fff]">{item.title}</h1>
                                <input
                                    className=""
                                    type="checkbox"
                                    checked={selectedImage === item.image}
                                    onChange={() => handleImageSelect(item.image)}
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        className="bg-primary-color w-full mt-12 md:mt-8 mb-[74px] p-2 font-inter text-sm font-bold text-[#5c5c5c] rounded-md"
                        onClick={handleClose}
                    >
                        Choose Image
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PopImg;
