import React, { useState, useEffect } from 'react';
import Ig1 from '../../assets/images/instagram/ig1.jpeg';
import Ig2 from '../../assets/images/instagram/ig2.jpeg';
import Ig3 from '../../assets/images/instagram/ig3.jpeg';

const Instagram4 = () => {
    const [bgImage, setBgImage] = useState(localStorage.getItem('instagram_4_image1') || Ig1);
    const [bgImage2, setBgImage2] = useState(localStorage.getItem('instagram_4_image2') || Ig2);
    const [bgImage3, setBgImage3] = useState(localStorage.getItem('instagram_4_image3') || Ig3);

    const [content, setContent] = useState({
        descripsion: 'Id aliquam amet non senectus.',
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
            setBgImage(Ig1);
        }
        if (!bgImage2) {
            setBgImage2(Ig2);
        }
        if (!bgImage3) {
            setBgImage3(Ig3);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='w-[479px] bg-[#fff] h-[479px] p-[18px]'>
            <div className='flex gap-[14px]'>
                <div
                    className='w-[215px] bg-slate-100 h-[215px] bg-center bg-cover bg-no-repeat relative'
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
                        onChange={(e) => handleImageChange(e, setBgImage, 'instagram_4_image1')}
                    />
                </div>
                <div
                    className='w-[215px] bg-slate-100 h-[215px] bg-cover bg-center bg-no-repeat relative'
                    style={{ backgroundImage: `url(${bgImage2})` }}
                >
                    <label htmlFor='imageUpload2' className='border text-center text-xs font-roboto w-[120px] py-[6.75px] border-[#fff] rounded-[57px] text-[#fff] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                        Change Image
                    </label>
                    <input
                        type='file'
                        id='imageUpload2'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(e) => handleImageChange(e, setBgImage2, 'instagram_4_image2')}
                    />
                </div>
            </div>
            <div className='flex mt-[14px] gap-[14px]'>
                <div className='w-[215px] font-poppins h-[215px]'>
                    <h1 className='text-[19px] mt-10 w-[157px] text-[#616161] font-semibold tracking-[3.8px]'
                        contentEditable={true} onBlur={(e) => handleEditAndSave('descripsion', e)} suppressContentEditableWarning={true}>{content.descripsion}</h1>
                    <h1 className='text-sm tracking-[2.8px] text-[#B0B0B0] mt-[4.79px] font-semibold'
                        contentEditable={true} onBlur={(e) => handleEditAndSave('ut', e)} suppressContentEditableWarning={true}>{content.ut} <span className='text-[#616161]' contentEditable={true} onBlur={(e) => handleEditAndSave('et', e)} suppressContentEditableWarning={true}>{content.et}</span></h1>
                    <p className='text-[#616161] font-light bottom-3 absolute'>PROUDLY <span className='font-bold'>RAYWHITE</span></p>
                </div>
                <div
                    className='w-[215px] bg-slate-100 h-[215px] bg-cover bg-center bg-no-repeat relative'
                    style={{ backgroundImage: `url(${bgImage3})` }}
                >
                    <label htmlFor='imageUpload3' className='border text-center text-xs font-roboto w-[120px] py-[6.75px] border-[#fff] rounded-[57px] text-[#fff] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                        Change Image
                    </label>
                    <input
                        type='file'
                        id='imageUpload3'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(e) => handleImageChange(e, setBgImage3, 'instagram_4_image3')}
                    />
                </div>
            </div>
        </div>
    );
};

export default Instagram4;
