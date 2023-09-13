import React from 'react'
import BrandCentral from '../../assets/images/logo-brand-central.png'
import { BiChevronLeft } from 'react-icons/bi'
import SignBoard8x6 from '../../components/signboard/SignBoard8x6'

const SignBoardEdit = () => {
    return (
        <div className=''>
            <nav className='flex justify-between px-6 lg:px-24 items-center h-[125px]' style={{ backgroundColor: '#3F4447', boxShadow: '0px 5px 20px 0px rgba(0, 0, 0, 0.10)' }}>
                <img src={BrandCentral} alt="Brand Central" />
                <button className='px-6 w-[178px] h-[40px] text-primary-color rounded-[100px] border border-primary-color'>Save Project</button>
            </nav>
            <div className='bg-dark px-6 lg:px-28 py-7 w-full min-h-screen flex flex-col justify-center items-center'>
                <button className='text-[#fff] font-roboto absolute top-36 left-28 flex items-center gap-2 font-medium py-1 border rounded-[100px] border-[#fff] border-solid border-1 px-3'>
                    <BiChevronLeft className='w-8 h-8' />
                    <p>Back</p>
                </button>
                <div className='my-auto'>
                    <SignBoard8x6 />
                </div>
            </div>
        </div>
    )
}

export default SignBoardEdit
