import React from 'react'
import propTypes from 'prop-types'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

const CardTool = (props) => {

    const { Label, Title, description, onClick } = props;

    return (
        <div className='bg-white font-roboto border-1 border-text-board-color rounded-[28px] w-[332px] h-[183px] p-7' onClick={onClick}>
            <div className='flex items-center gap-3 '>
                <div className='bg-primary-color rounded-lg text-[32px] font-medium w-[54px] text-center h-[45px]'>{Label}</div>
                <button className='text-text-board-color text-md font-medium leading-[20px]'>{Title}</button>
            </div>
            <div className='flex gap-[7px]'>
                <h1 className='leading-8 text-base mt-2' style={{ color: '#8F8F8F' }} > {description}</h1>
                <button >
                    <BsFillArrowRightCircleFill className='w-[25.4px] h-[25.4px]' style={{ color: '#D5D5D5' }} />
                </button>
            </div>
        </div >
    )
}

CardTool.propTypes = {
    Label: propTypes.string,
    Title: propTypes.string,
    description: propTypes.string,
    onClick: propTypes.func,
}
export default CardTool
