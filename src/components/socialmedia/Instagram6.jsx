import React, { useState, useEffect } from 'react';
import Ig3 from '../../assets/images/instagram/Ig3.jpeg';

const Instagram6 = () => {
    const [bgImage, setBgImage] = useState(localStorage.getItem('instagram_6_image1') || Ig3);

    const [content, setContent] = useState({
        descripsion: 'Nisl consectetur curabitur placerat aliquet ut ornare.',
        ut: 'Ut',
        et: 'et?',
    });
    const handleImageChange = (event, setImage, imageKey) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const uploadedImage = e.target.result;
                setImage(uploadedImage);
                localStorage.setItem(imageKey, uploadedImage);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleEditAndSave = (field, e) => {
        if (e.key === 'Enter') {
            setContent((prevContent) => ({
                ...prevContent,
                [field]: e.target.textContent,
            }));
            setIsEditing(false);
        }
    };

    useEffect(() => {
        if (!bgImage) {
            setBgImage(Ig3);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='w-[479px] bg-[#fff] h-[479px]'>
            <p className='text-[#616161] text-center  top-0 w-full py-[6px] font-light bg-[#d9d9d9]'>PROUDLY <span className='font-bold'>RAYWHITE</span></p>
            <div className='mt-[17  px] text-center px-10 gap-[14px]'>
                <div className='font-poppins'>
                    <h1 className='text-[19px] mt-5 text-[#616161] font-semibold tracking-[3.8px]'
                        contentEditable={true} onBlur={(e) => handleEditAndSave('descripsion', e)} suppressContentEditableWarning={true}>{content.descripsion}</h1>
                    <h1 className='text-sm tracking-[2.8px] text-[#B0B0B0] mt-[4.79px] font-semibold'
                        contentEditable={true} onBlur={(e) => handleEditAndSave('ut', e)} suppressContentEditableWarning={true}>{content.ut} <span className='text-[#616161]' contentEditable={true} onBlur={(e) => handleEditAndSave('et', e)} suppressContentEditableWarning={true}>{content.et}</span></h1>
                </div>
            </div>
            <div
                className='w-full bg-slate-100 h-[328px] bg-cover bg-center bottom-0 bg-no-repeat absolute'
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <label htmlFor='imageUpload' className='border text-center text-xs font-roboto w-[120px] py-[6.75px] border-[#fff] rounded-[57px] text-[#fff] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                    Change Image
                </label>
                <input
                    type='file'
                    id='imageUpload'
                    accept='image/*'
                    style={{ display: 'none' }}
                    onChange={(e) => handleImageChange(e, setBgImage, 'instagram_5_image1')}
                />
            </div>
        </div>
    );
};

export default Instagram6;
