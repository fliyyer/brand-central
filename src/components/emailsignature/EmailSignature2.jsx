import React, { useState } from 'react'
import Rw from '../../assets/images/raywhite-kuning.png'
const EmailSignature2 = () => {
    const [content, setContent] = useState({
        name: 'Nama Agent',
        position: 'Posisi Agent',
        office: 'Ray White Indonesia',
        web: 'raywhite.co.id',
        notelp: '(021) 12345 678',
        notekp: '(021) 12345 678',

    });

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
        <div className='w-[735px] h-[238px] p-[15.4px] bg-[#3a3a3a]'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-[#fff] mt-8 text-[27px] font-bold' contentEditable={true} onBlur={(e) => handleEditAndSave('name', e)} suppressContentEditableWarning={true}>{content.name}</h1>
                    <h1 className='text-[#fff] text-[21.7px] font-extralight' contentEditable={true} onBlur={(e) => handleEditAndSave('position', e)} suppressContentEditableWarning={true}>{content.position}</h1>
                </div>
                <img src={Rw} alt="Raywhite" />
            </div>
            <hr className='my-[17px]' />
            <div className='text-[#fff]'>
                <h1 className='text-[21.7px] font-bold' contentEditable={true} onBlur={(e) => handleEditAndSave('office', e)} suppressContentEditableWarning={true}>{content.office} <span className='font-extralight' contentEditable={true} onBlur={(e) => handleEditAndSave('web', e)} suppressContentEditableWarning={true}>- {content.web}</span></h1>
                <div className='flex gap-3'>
                    <div className='flex gap-[6.2px]'>
                        <h1 className='font-bold'>T</h1>
                        <h1 contentEditable={true} onBlur={(e) => handleEditAndSave('notelp', e)} suppressContentEditableWarning={true}>{content.notelp}</h1>
                    </div>
                    <div>|</div>
                    <div className='flex gap-[6.2px]'>
                        <h1 className='font-bold'>F</h1>
                        <h1 contentEditable={true} onBlur={(e) => handleEditAndSave('notekp', e)} suppressContentEditableWarning={true}>{content.notekp}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailSignature2
