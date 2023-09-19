import React, { useState } from 'react'
import Rw from '../../assets/images/rw-hd.png';
import { GrAddCircle } from 'react-icons/gr'

const Namecard1 = () => {
    const [content, setContent] = useState({
        name: 'Nama Agent',
        position: 'Marketing Executive',
        email: 'Namaagent@raywhite.co.id',
        office: 'Ray White Indonesia',
        pt: 'PT Ray Propertindo',
        telp: '(62-21) 2788 9777',
        fax: '(62-21) 2788 9777',
        location: 'Sahid Sudirman Center level 43 No. 86  Jakarta Pusat  DKI Jakarta 10220',
        web: 'www.raywhite.co.id'
    })

    const handleEditAndSave = (field, e) => {
        if (e.key === 'Enter') {
            setContent((prevContent) => ({
                ...prevContent,
                [field]: e.target.textContent,
            }));
            setIsEditing(false);
        }
    };

    return (
        <div>
            <div className='w-[440px] bg-[#fff] h-[269px]'>
                <img src={Rw} alt="Raywhite" className=' absolute right-8' />
                <button className='border border-[#3a3a3a] gap-[4.6px] font-poppins text-[#3a3a3a] flex items-center justify-center rounded-[57px] px-2 absolute top-28 left-16 py-1 text-sm font-medium'>
                    <GrAddCircle />Add Image</button>
            </div>
            <div className='w-[440px] text-[#5F5C60] py-[22px] px-[37.7px] mt-[22px] bg-[#fff] h-[269px]'>
                <h1 className='font-lato  text-[20.6px] font-medium leading-[34.78px] tracking-[0.178px]' contentEditable={true} onBlur={(e) => handleEditAndSave('name', e)} suppressContentEditableWarning={true}>{content.name}</h1>
                <p className='font-source-sans leading-[34.78px] tracking-[0.178px' contentEditable={true} onBlur={(e) => handleEditAndSave('position', e)} suppressContentEditableWarning={true}>{content.position}</p>
                <div className='flex gap-[3.45px] items-center'>
                    <h1 className='font-medium text-[13.7px]'>E</h1>
                    <p className='font-light text-[10px] font-source-sans' contentEditable={true} onBlur={(e) => handleEditAndSave('email', e)} suppressContentEditableWarning={true}>{content.email}</p>
                </div>
                <div className='border-primary-color border-b-[3px] t-2 '></div>
                <h1 className='font-medium font-lato text-[15.5px] leading-[34.78px] tracking-[0.178px]' contentEditable={true} onBlur={(e) => handleEditAndSave('office', e)} suppressContentEditableWarning={true}>{content.office}</h1>
                <h1 className='text-[10px] font-light font-source-sans tracking-[0.178px]'>{content.pt}</h1>
                <div className='flex gap-[22px] mb-[6.9px]'>
                    <div className='flex gap-[3.45px] items-center'>
                        <h1 className='font-medium text-[15px]'>T</h1>
                        <p className='font-light text-[13.7px]' contentEditable={true} onBlur={(e) => handleEditAndSave('telp', e)} suppressContentEditableWarning={true}>{content.telp}</p>
                    </div>
                    <div className='flex gap-[3.45px] items-center'>
                        <h1 className='font-medium text-[15px]'>F</h1>
                        <p className='font-light text-[13.7px]' contentEditable={true} onBlur={(e) => handleEditAndSave('fax', e)} suppressContentEditableWarning={true}>{content.fax}</p>
                    </div>
                </div>
                <p className='font-light text-[10px] font-source-sans tracking-[0.178px] mb-3' contentEditable={true} onBlur={(e) => handleEditAndSave('location', e)} suppressContentEditableWarning={true}>{content.location}</p>
                <h1 className='font-medium text-[10px] font-source-sans' contentEditable={true} onBlur={(e) => handleEditAndSave('web', e)} suppressContentEditableWarning={true}>{content.web}</h1>
            </div>
        </div>
    )
}

export default Namecard1
