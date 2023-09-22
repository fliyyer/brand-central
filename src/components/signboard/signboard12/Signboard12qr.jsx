import React, { useState, useEffect } from 'react';
import Rw from '../../../assets/images/rw-hd.png'
import Sb1 from '../../../assets/images/instagram/ig4.jpeg';
import { RiHotelBedLine, RiWhatsappFill } from 'react-icons/ri';
import { FaBath } from 'react-icons/fa6';
import { FaCar } from 'react-icons/fa';
import { BiSolidPhoneCall } from 'react-icons/bi'
import { IoMdMail } from 'react-icons/io';
import Qr from '../../../assets/images/qrhd.png'


const Signboard12qr = (props) => {
    const [bgImage, setBgImage] = useState(Sb1)
    const [isPopImgOpen, setIsPopImgOpen] = useState(false);
    const [content, setContent] = useState({
        bed: '2',
        bath: '2',
        car: '0',
        property1: 'Property description here',
        property2: 'Property description here',
        property3: 'Property description here',
        property4: 'Property description here',
        schedule1: 'Monday May 12 2023, 12.00 am WIB',
        schedule2: 'Monday May 12 2023, 12.00 am WIB',
        website: 'www.raywhite.co.id',
        name: 'John Doe',
        phone: '081234567890',
        wa: '081234567890',
        email: 'john.doe@raywhite.co.id'
    });

    const openPopImg = () => {
        setIsPopImgOpen(true);
    };

    const closePopImg = () => {
        setIsPopImgOpen(false);
    };

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
            setBgImage(Sb1);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className='w-[750px] h-[531px] bg-[#fff] py-[7.43px] px-2'>
            <img src={Rw} alt="Raywhite" className='w-[94px] absolute right-10 z-10 h-[94px]' />
            <div className='w-[233px] h-[100px] bg-[#fff] px-[17px] py-2 absolute z-10 left-6 top-16'>
                <h1 className='text-[#585858] font-poppins text-[35px] tracking-[1.643px]'>AUCTION</h1>
                <h2 className='font-light leading-[140%] text-[11.6px] font-lato' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('schedule1', e)}>{content.schedule1}</h2>
                <h2 className='font-light leading-[140%] mt-[2px] text-[11.6px] font-lato' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('schedule2', e)}>{content.schedule2}</h2>
            </div>
            <div
                className='w-[728px] bg-slate-100 h-[434px] bg-cover bg-center bg-no-repeat relative'
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <button
                    htmlFor="imageUpload"
                    className="border text-[6px] text-center font-roboto w-[47px] py-[2.75px] border-[#fff] bg-[#fff] rounded-[57px] text-[#3a3a3a] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={props.onClick}
                    onChange={(e) => handleImageChange(e, props.setBgImage, 'bgImage')}
                >
                    Change Image
                </button>
            </div>
            <div className='mt-[6px] flex justify-between items-start'>
                <div className='font-lato text-[#3a3a3a]'>
                    <h1 className='font-normal text-[10.6px]'>Agent Contact</h1>
                    <div className='flex items-center text-[13.46px] gap-2 mt-[4.54px]'>
                        <h1 className='font-bold' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('name', e)}>{content.name}</h1>
                        <div className='flex items-center gap-[3.6px]'>
                            <BiSolidPhoneCall className='w-[16px] h-[16.2px]' />
                            <p className='font-inter' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('phone', e)}>{content.phone}</p>
                        </div>
                        <div className='flex items-center gap-[3.6px]'>
                            <RiWhatsappFill className='w-[16px] h-[16.2px]' />
                            <p className='font-inter' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('wa', e)}>{content.wa}</p>
                        </div>
                    </div>
                    <div className='flex items-center mt-[6.5px] gap-[6.6px]'>
                        <IoMdMail className='w-[16px] h-[16.2px]' />
                        <p className='text-[11px] font-inter' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('email', e)}>{content.email}</p>
                    </div>
                </div>
                <div className='font-inter flex gap-4 text-[#3a3a3a] font-bold'>
                    <div className='flex gap-[5px] items-center'>
                        <h1 className='text-[12px]' contentEditable={true} onBlur={(e) => handleEditAndSave('bed', e)} suppressContentEditableWarning={true}>{content.bed}</h1>
                        <RiHotelBedLine className='w-[30px] h-[20px]' />
                    </div>
                    <div className='flex gap-[5px] items-center'>
                        <h1 className='text-[12px]' contentEditable={true} onBlur={(e) => handleEditAndSave('bath', e)} suppressContentEditableWarning={true}>{content.bath}</h1>
                        <FaBath className='w-[20px] h-[16px]' />
                    </div>
                    <div className='flex gap-[5px] items-center'>
                        <h1 className='text-[12px]' contentEditable={true} onBlur={(e) => handleEditAndSave('car', e)} suppressContentEditableWarning={true}>{content.car}</h1>
                        <FaCar className='w-[30px] h-[20px]' />
                    </div>
                </div>
            </div>
            <img src={Qr} className='w-[80px] h-[80px] absolute right-12 bottom-28' alt="QR Code" />
            <div className='text-right absolute bottom-2 right-3'>
                <h1 className='text-text-board-color text-[10px]'>PROUDLY <span className='font-semibold'>RAY WHITE</span></h1>
                <h1 className='font-lato text-[12px] text-[#3a3a3a] mt-[1px] font-bold' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('website', e)}>{content.website}</h1>
            </div>
        </div>
    )
}

export default Signboard12qr
