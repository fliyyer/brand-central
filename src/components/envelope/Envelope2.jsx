import React, { useState } from 'react'
import Rw from '../../assets/images/raywhite-kuning.png'

const Envelope2 = () => {
    const [content, setContent] = useState({
        office: 'Ray White Indonesia',
        location: 'Sahid Sudirman Center level 43 No. 86  Jakarta Pusat  DKI Jakarta 10220',
        telp: '(021) 12345 678',
        email: 'corporate@raywhite.co.id',
        website: 'raywhite.co.id'
    })

    const handleEditAndSave = (field, e) => {
        if (e.key === 'Enter') {
            setContent((prevContent) => ({
                ...prevContent,
                [field]: e.target.textContent,
            }));
            setIsEditing(false);
        }
    }


    return (
        <div className='w-[643px] h-[333px] bg-[#fff] px-[26px]'>
            <img src={Rw} alt="RayWhite" className='absolute top-[-1px] right-16' />
            <div className='font-lato absolute right-9 top-40'>
                <h1 className='text-[#5C5C5C] text-[11.7px] font-bold mb-[2px]' contentEditable={true} onBlur={(e) => handleEditAndSave('office', e)} suppressContentEditableWarning={true}>{content.office}</h1>
                <p className='text-[#5F5C60] w-[140px] font-light text-[8px] tracking-[0.172px] mb-2' contentEditable={true} onBlur={(e) => handleEditAndSave('location', e)} suppressContentEditableWarning={true}>{content.location}</p>
                <div className=' text-[8.76px] mb-[3px] flex gap-[7px] text-[#5F5C60]'>
                    <h1 className='font-bold'>T</h1>
                    <p contentEditable={true} onBlur={(e) => handleEditAndSave('telp', e)} suppressContentEditableWarning={true}>{content.telp}</p>
                </div>
                <div className=' text-[8.76px] mb-[4px] flex gap-[7px] text-[#5F5C60]'>
                    <h1 className='font-bold'>E</h1>
                    <p contentEditable={true} onBlur={(e) => handleEditAndSave('email', e)} suppressContentEditableWarning={true}>{content.email}</p>
                </div>
                <h1 className='font-bold text-[9px] text-[#5F5C60]' contentEditable={true} onBlur={(e) => handleEditAndSave('website', e)} suppressContentEditableWarning={true}>{content.website}</h1>
            </div>
        </div>
    )
}

export default Envelope2
