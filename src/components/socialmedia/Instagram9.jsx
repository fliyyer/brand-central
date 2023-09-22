import React, { useState, useEffect } from 'react';
import Ig5 from '../../assets/images/instagram/Ig5.jpeg';
import Raywhite from '../../assets/images/raywhite-kuning.png';

const Instagram9 = (props) => {
    const [bgImage, setBgImage] = useState(localStorage.getItem('instagram_9_image1') || Ig5);
    const [isPopImgOpen, setIsPopImgOpen] = useState(false);
    const [content, setContent] = useState({
        title: 'Nibh cras lacus orci at eu.',
        description: 'Diam interdum lacinia sed risus ultrices egestas lectus suspendisse. Morbi felis'
    });
    const openPopImg = () => {
        setIsPopImgOpen(true);
    };

    const closePopImg = () => {
        setIsPopImgOpen(false);
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
            setBgImage(Ig5);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='w-[479px] bg-[#fff] h-[479px] p-6 relative'>
            <div className='w-[431px] border border-[#000] p-7 h-[431px] relative' style={{ zIndex: 1 }}>
                <div className='font-poppins'>
                    <h1 className='text-[15px] text-[#616161] font-semibold tracking-[3px]'
                        contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.title}</h1>
                    <h1 className='text-[9.5px] text-[#616161] font-semibold w-[286px] tracking-[1.9px]'
                        contentEditable={true} onBlur={(e) => handleEditAndSave('description', e)} suppressContentEditableWarning={true}>{content.description}</h1>
                </div>
                <img src={Raywhite} alt="Raywhite" className='absolute top-0 right-0' style={{ zIndex: -1 }} />
            </div>
            <div
                className='w-[479px] bg-slate-100 h-[372px] bg-cover bg-center bg-no-repeat left-0 absolute bottom-0'
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <button onClick={props.onClick} htmlFor='imageUpload' className='border absolute text-center text-xs font-roboto w-[120px] py-[6.75px] border-[#fff] rounded-[57px] text-[#fff] font-medium z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                    Change Image
                </button>
            </div>
            <p className='text-[#616161] text-center w-full font-light absolute '>PROUDLY <span className='font-bold'>RAYWHITE</span></p>
        </div>

    );
};

export default Instagram9;
