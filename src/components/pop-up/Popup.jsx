import React, { useState } from "react";
import ImgPopup from '../../assets/images/img-popup.png'
import FindHome from '../../assets/images/find-id.png'
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { searchByListing } from "../../utils/ListingId";
import { ImLocation2 } from 'react-icons/im'
function Popup({ onClose, to }) {
    const [filterIdInput, setFilterIdInput] = useState("");
    const [filteredListing, setFilteredListing] = useState([]);
    const [showImage, setShowImage] = useState(false);

    const handleFilterChange = (event) => {
        setFilterIdInput(event.target.value);
    };

    const handleSearch = () => {
        const filteredData = searchByListing(filterIdInput);
        setFilteredListing(filteredData);
        setShowImage(filteredData.length > 0);
    };

    const handleClose = () => {
        setShowImage(false);
        setFilterIdInput("");
        setFilteredListing([]);
        onClose();
    };

    return (
        <div className="fixed font-inter top-0 left-0 right-0 bottom-0 flex justify-center items-center px-11 z-50 bg-black bg-opacity-50">
            <div className="dark:bg-[#3F4447] bg-[#fff] rounded-[20px] w-[796px] h-[535px] flex gap-11 justify-center items-center relative">
                <div className="w-full md:w-1/2 px-5">
                    <button
                        className="dark:text-white text-[#5c5c5c] rounded-full absolute top-4 left-4 items-center z-10"
                        onClick={handleClose}
                    >
                        <AiOutlineCloseCircle className="w-6 h-6" />
                    </button>
                    <div className="flex px-10 gap-1 items-center relative">
                        <div className="relative flex">
                            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                                <AiOutlineSearch className="text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Cari id listing"
                                value={filterIdInput}
                                onChange={handleFilterChange}
                                className="border rounded-md text-[10px] p-2 pl-7 pr-4 w-[196px] h-9 focus:outline-none focus:border-primary-color"
                            />
                        </div>
                        <button
                            onClick={handleSearch}
                            className="bg-[#FFE512] text-text-board-color font-medium text-[10px] rounded-md p-[6px] w-[56px] h-9 hover:opacity-50 transition ease-out duration-300"
                        >
                            Cari
                        </button>
                    </div>
                    {showImage && filteredListing.length > 0 ? (
                        <div className="px-10">
                            <div className="flex font-inter py-6 gap-4">
                                <img src={filteredListing[0].image} alt={`ID ${filteredListing[0].id}`} className="w-[91px] h-auto rounded-md" />
                                <div className="dark:text-[#fff] text-[#5C5C5C]">
                                    <h2 className="text-sm">{filteredListing[0].title}</h2>
                                    <h2 className="text-xs my-[6px] font-bold">Listing ID {filteredListing[0].listing}</h2>
                                    <h2 className="text-xs font-light flex items-center gap-[5.5px]"><div className="dark:text-white text-[#5C5C5C]">
                                        <ImLocation2 /></div> {filteredListing[0].location}</h2>
                                </div>
                            </div>
                            <Link to={to}>
                                <button className="h-6 bg-primary-color w-full rounded text-[10px] text-[#3A3A3A]">Pilih</button>
                            </Link>
                        </div>
                    ) : (
                        <img src={FindHome} alt="Property Finder" className="w-full h-auto" />
                    )}
                </div>
                <img src={ImgPopup} alt="Image Popup" className="hidden md:block w-1/2 h-auto" />
            </div>
        </div>
    );
}

export default Popup;
