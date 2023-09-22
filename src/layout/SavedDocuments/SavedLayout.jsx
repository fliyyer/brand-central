import React, { useState } from 'react';
import HistoryDocument from '../../components/HistoryDocument';
import datas from '../../utils/datas';

const itemsPerPage = 6;

const SavedLayout = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(datas.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedData = datas.slice(startIndex, endIndex);
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className=''>
            <div className='mt-11'>
                <h1 className='text-white text-[18px] md:text-[22px] font-inter font-semibold'>Saved Document</h1>
            </div>
            <div className='mt-8'>
                {displayedData.map((data) => (
                    <HistoryDocument key={data.id} title={data.title} />
                ))}
            </div>
            <div className="flex justify-center py-4 md:py-8">
                <button
                    onClick={prevPage}
                    className="text-white flex items-center font-inter font-bold text-sm space-x-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                        <path d="M11.9999 3.58594L10.5857 2.17173L3.51465 9.24278L10.5857 16.3138L11.9999 14.8996L7.34308 9.24278L11.9999 3.58594Z" fill="white" />
                    </svg>
                    <h1 className='text-xs md:text-sm'>Sebelumnya</h1>
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`mx-1 md:mx-2 w-6 h-6 md:w-8 md:h-8 rounded-lg ${currentPage === index + 1
                            ? 'bg-primary-color text-text-board-color text-xs md:text-sm font-bold'
                            : ' text-white text-xs md:text-sm'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={nextPage}
                    className="text-white flex items-center font-inter font-bold text-sm space-x-2"
                >
                    <h1 className='text-xs md:text-sm'>Selanjutnya</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                        <path d="M6.00008 3.58594L7.41429 2.17173L14.4853 9.24278L7.41429 16.3138L6.00008 14.8996L10.6569 9.24278L6.00008 3.58594Z" fill="white" />
                    </svg>
                </button>
            </div>
        </div>

    );
};

export default SavedLayout;
