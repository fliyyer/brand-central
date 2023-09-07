import React from 'react'

const HistoryDocument = (props) => {
    const { title } = props;
    return (
        <><div className='flex items-center gap-[38px]'>
            <h1 className='text-[22px] text-white font-light font-roboto'>{title}</h1>
            <div className='space-x-3'>
                <button
                    className='w-[111px] py-[10px] text-white text-sm font-roboto font-medium px-6 rounded-full'
                    style={{
                        border: '1px solid var(--m-3-sys-light-outline, #79747E)'
                    }}
                >
                    View
                </button>
                <button
                    className='w-[111px] py-[10px] text-white text-sm font-roboto font-medium px-6 rounded-full'
                    style={{
                        border: '1px solid var(--m-3-sys-light-outline, #79747E)'
                    }}
                >
                    Edit
                </button>
                <button
                    className='w-[111px] py-[10px] text-white text-sm font-roboto font-medium px-6 rounded-full'
                    style={{
                        border: '1px solid var(--m-3-sys-light-outline, #79747E)'
                    }}
                >
                    Delete
                </button>
                <button
                    className='w-[111px] bg-primary-color py-[10px] text-text-board-color text-sm font-roboto font-medium px-6 rounded-full'
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
