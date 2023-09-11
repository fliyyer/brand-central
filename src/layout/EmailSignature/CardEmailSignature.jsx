import React from 'react'
import propTypes from 'prop-types'

const CardEmailSignature = (props) => {
    const { title, img } = props
    return (
        <div className='w-[300px] h-[311px] bg-[#fff] p-5 rounded-[20px] flex flex-col justify-center items-center border-1 border-[#F2F2F2]'>
            <div className='flex gap-[18px] pb-[6px] items-center'>
                <div className='p-2 bg-primary-color rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                        <path d="M28.2884 13.3444V7.7001H5.71108V13.3444H28.2884ZM28.2884 16.1666H5.71108V27.4553H28.2884V16.1666ZM4.3 4.87793H29.6995C30.0737 4.87793 30.4327 5.0266 30.6973 5.29123C30.9619 5.55586 31.1106 5.91477 31.1106 6.28901V28.8663C31.1106 29.2406 30.9619 29.5995 30.6973 29.8641C30.4327 30.1288 30.0737 30.2774 29.6995 30.2774H4.3C3.92576 30.2774 3.56684 30.1288 3.30221 29.8641C3.03758 29.5995 2.88892 29.2406 2.88892 28.8663V6.28901C2.88892 5.91477 3.03758 5.55586 3.30221 5.29123C3.56684 5.0266 3.92576 4.87793 4.3 4.87793ZM7.12217 17.5777H11.3554V24.6331H7.12217V17.5777ZM7.12217 9.11118H9.94433V11.9333H7.12217V9.11118ZM12.7665 9.11118H15.5887V11.9333H12.7665V9.11118Z" fill="black" />
                    </svg>
                </div>
                <h1 className='font-roboto text-sm font-medium leading-5 text-[#3a3a3a]'>{title}</h1>
            </div>
            <img className={`my-auto w-auto`} src={img} alt="Social Meedia" />
            <button className='bg-[#d5d5d5] flex w-[95px] p-[4.5px] justify-center gap-[4.5px] rounded-[4px] mt-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                    <path d="M8.45876 4.31641L7.66513 5.11376L9.50464 6.94468L1.85181 6.95238L1.85294 8.07738L9.4848 8.0697L7.67628 9.88671L8.47364 10.6803L11.6482 7.49093L8.45876 4.31641Z" fill="white" />
                </svg>
                <div className='text-[#FAFAFA] text-xs font-bolds'>Create</div>
            </button>
        </div>
    )
}

CardEmailSignature.propTypes = {
    title: propTypes.string,
    img: propTypes.string,
}

export default CardEmailSignature;
