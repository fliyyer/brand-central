import React from 'react'
import SB_8x6 from '../../assets/images/SB-8x6.png';

const CardSignBoard = () => {
    return (
        <div className='w-[300px] h-[311px] bg-[#fff] p-5 rounded-[20px] flex flex-col justify-center items-center'>
            <div className='flex gap-[18px] items-center'>
                <div className='p-2 bg-primary-color rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.5 4H3.5V11C3.5 15.9706 7.52944 20 12.5 20C17.4706 20 21.5 15.9706 21.5 11V4ZM23.5 2H1.5V11C1.5 17.0751 6.42487 22 12.5 22C18.5751 22 23.5 17.0751 23.5 11V2ZM13.2071 14.6935C12.8166 15.084 12.1834 15.084 11.7929 14.6935L7.55025 10.4508C7.15973 10.0603 7.15973 9.42714 7.55025 9.03661C7.94078 8.64609 8.57394 8.64609 8.96447 9.03661L12.5 12.5721L16.0355 9.03661C16.4261 8.64609 17.0592 8.64609 17.4497 9.03661C17.8403 9.42714 17.8403 10.0603 17.4497 10.4508L13.2071 14.6935Z" fill="#1C1C1C" />
                    </svg>
                </div>
                <h1 className='font-roboto text-sm font-medium leading-5 text-[#3a3a3a]'>Sign Board 8 x 6</h1>
            </div>
            <img className='mt-[9.6px]' src={SB_8x6} alt="Sign Board 8x6" />
            <button className='bg-[#d5d5d5] flex w-[95px] p-[4.5px] justify-center gap-[4.5px] rounded-[4px] mt-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                    <path d="M8.45876 4.31641L7.66513 5.11376L9.50464 6.94468L1.85181 6.95238L1.85294 8.07738L9.4848 8.0697L7.67628 9.88671L8.47364 10.6803L11.6482 7.49093L8.45876 4.31641Z" fill="white" />
                </svg>
                <div className='text-[#FAFAFA] text-xs font-bolds'>Create</div>
            </button>
        </div>
    )
}

export default CardSignBoard
