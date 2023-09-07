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
        <div>
            <div className='mt-11'>
                <h1 className='text-white text-[22px] font-inter font-semibold'>Saved Document</h1>
            </div>
            <div className='mt-8'>
                {displayedData.map((data) => (
                    <HistoryDocument key={data.id} title={data.title} />
                ))}
            </div>
            <div className="flex justify-center py-8">
                <button
                    onClick={prevPage}
                    className="text-white flex items-center font-inter font-bold text-sm space-x-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
                        <path d="M16.2426 6.3439L14.8284 4.92969L7.75732 12.0007L14.8284 19.0718L16.2426 17.6576L10.5857 12.0007L16.2426 6.3439Z" fill="white" />
                    </svg>
                    <h1>Sebelumnya</h1>
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`mx-2 w-8 h-8 rounded-lg ${currentPage === index + 1
                            ? 'bg-primary-color text-text-board-color text-sm font-bold'
                            : ' text-white'
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={nextPage}
                    className="text-white flex items-center font-inter font-bold text-sm space-x-2"
                >
                    <h1>Selanjutnya</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none">
                        <path d="M10.5857 6.3439L11.9999 4.92969L19.071 12.0008L11.9999 19.0718L10.5857 17.6576L16.2425 12.0008L10.5857 6.3439Z" fill="white" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SavedLayout;
