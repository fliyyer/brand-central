import React from 'react'

const HistoryDocument = (props) => {
    const { title } = props;
    return (
        <><div className='flex items-center justify-between gap-8 '>
            <h1 className='text-sm whitespace-nowrap md:text-[22px] text-[#5C5C5C] dark:text-white font-light font-roboto'>{title}</h1>
            <div className='space-x-1 flex md:flex-none'>
                <button
                    className='w-14 md:w-[111px] py-1 md:py-[10px] text-[#5C5C5C] dark:text-white text-[10px] md:text-sm font-roboto font-medium md:px-6 rounded-full'
                    style={{
                        border: '1px solid var(--m-3-sys-light-outline, #79747E)'
                    }}
                >
                    View
                </button>
                <button
                    className='w-14 md:w-[111px] py-1 md:py-[10px] text-[#5C5C5C] dark:text-white text-[10px] md:text-sm font-roboto font-medium md:px-6 rounded-full'
                    style={{
                        border: '1px solid var(--m-3-sys-light-outline, #79747E)'
                    }}
                >
                    Edit
                </button>
                <button
                    className=' md:w-[111px] w-14 py-1 md:py-[10px] text-[#5C5C5C] dark:text-white text-[10px] md:text-sm font-roboto font-medium md:px-6 rounded-full'
                    style={{
                        border: '1px solid var(--m-3-sys-light-outline, #79747E)'
                    }}
                >
                    Delete
                </button>
                <button
                    className='md:w-[111px] w-14 py-1 md:py-[10px bg-primary-color  text-text-board-color text-[10px] md:text-sm font-roboto font-medium md:px-6 rounded-full'
                    style={{
                        border: '1px solid var(--m-3-sys-light-outline, #79747E)'
                    }}
                >
                    Download
                </button>
            </div>
        </div><div className="border-b mt-[18px] mb-[26px] border-white border-opacity-50" style={{ height: "0.5px" }}></div></>
    )
}

export default HistoryDocument
