import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'
import BrandCentral from '../../assets/images/logo-brand-central.png'

function PopImg({ onClose, images }) {
    const [showImage, setShowImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClose = () => {
        setShowImage(false);
        setFilterIdInput("");
        setFilteredListing([]);
        onClose();
    };

    const handleImageSelect = (image) => {
        if (selectedImage === image) {
            setSelectedImage(null);
        } else {
            setSelectedImage(image);
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
            <div className="bg-[#3F4447] rounded-[20px] w-[100%] max-w-[796px] h-[535px] flex flex-col justify-between px-7">
                <div className="flex justify-between mt-[26px] items-center">
                    <button
                        className="text-white rounded-full top-4 left-4 items-center z-10"
                        onClick={handleClose}
                    >
                        <AiOutlineCloseCircle className="w-6 h-6" />
                    </button>
                    <img src={BrandCentral} alt="BrandCentral" />
                </div>
                <div className="font-roboto px-[95px]">
                    <h1 className="text-[#fff] mt-4 text-lg">Choose Image</h1>
                    <div className="mt-[30px] grid grid-cols-2 gap-4">
                        {images.map((item) => (
                            <div key={item.id} className="flex items-center gap-[15.5px]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-[98px] h-[82px] rounded-md cursor-pointer"
                                    onClick={() => handleImageSelect(item.image)}
                                />
                                <h1 className="text-sm w-[115px] text-[#fff]">{item.title}</h1>
                                <input
                                    className=""
                                    type="checkbox"
                                    checked={selectedImage === item.image}
                                    onChange={() => handleImageSelect(item.image)}
                                />
                            </div>
                        ))}
                    </div>
                    <button className="bg-primary-color w-full mt-8 mb-[74px] p-2 font-inter text-sm font-bold text-[#5c5c5c] rounded-md">Choose Image</button>
                </div>
            </div>
        </div>
    );
}

export default PopImg;
