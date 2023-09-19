import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CardFlyer = (props) => {
    const { title, img, to } = props

    return (
        <div className='w-[300px] h-[494px] bg-[#fff] p-5 rounded-[20px] flex flex-col justify-center items-center border-1 border-[#F2F2F2]'>
            <div className='flex gap-[6px] pb-[11px] items-center'>
                <div className='p-2 bg-primary-color rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                        <path d="M10.4445 18.9888H16.0889V24.6331H10.4445V18.9888Z" fill="#1C1C1C" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M30.1997 4.87793H4.80021V30.2774H30.1997V4.87793ZM27.3775 7.7001H7.62237V27.4553H27.3775V7.7001Z" fill="#1C1C1C" />
                    </svg>
                </div>
                <h1 className='font-roboto text-sm px-3 py-[10px] font-medium leading-5 text-[#3a3a3a]'>{title}</h1>
            </div>
            <img className={`my-auto w-auto`} src={img} alt="Flyer" />
            <Link to={to}>
                <button className='bg-[#d5d5d5] flex w-[95px] p-[4.5px] justify-center gap-[4.5px] rounded-[4px] mt-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                        <path d="M8.45876 4.31641L7.66513 5.11376L9.50464 6.94468L1.85181 6.95238L1.85294 8.07738L9.4848 8.0697L7.67628 9.88671L8.47364 10.6803L11.6482 7.49093L8.45876 4.31641Z" fill="white" />
                    </svg>
                    <div className='text-[#FAFAFA] text-xs font-bolds'>Create</div>
                </button>
            </Link>
        </div>
    )
}

CardFlyer.propTypes = {
    title: propTypes.string,
    img: propTypes.string,
    to: propTypes.string
}

export default CardFlyer
