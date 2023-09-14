import React, { useState, useEffect } from 'react';
import Ig4 from '../../assets/images/instagram/Ig4.jpeg';

const Instagram7 = () => {
    const [bgImage, setBgImage] = useState(localStorage.getItem('instagram_7_image1') || Ig4);

    const [content, setContent] = useState({
        descripsion: 'Nisl consectetur curabitur placerat qui.',
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
            setBgImage(Ig4);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='w-[479px] bg-[#fff] h-[479px]'>
            <div
                className='w-[479px] bg-slate-100 h-[383px] bg-cover bg-center bg-no-repeat relative'
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
            <div className='text-center px-3'>
                <div className='font-poppins'>
                    <h1 className='text-[15px] my-5 text-[#616161] font-semibold tracking-[3.8px]'
                        contentEditable={true} onBlur={(e) => handleEditAndSave('descripsion', e)} suppressContentEditableWarning={true}>{content.descripsion}</h1>
                </div>
            </div>
            <p className='text-[#616161] text-center  bottom-0 w-full py-[6px] font-light bg-[#d9d9d9]'>PROUDLY <span className='font-bold'>RAYWHITE</span></p>
        </div>
    );
};

export default Instagram7;
