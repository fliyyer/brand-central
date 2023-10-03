import React, { useState, useEffect } from 'react';
import Rw from '../../../assets/images/rw-hd.png'
import Sb1 from '../../../assets/images/instagram/ig1.jpeg';
import Sb2 from '../../../assets/images/instagram/ig2.jpeg';
import Sb4 from '../../../assets/images/instagram/ig5.jpeg';
import Sb3 from '../../../assets/images/instagram/ig3.jpeg';
import { RiHotelBedLine, RiWhatsappFill } from 'react-icons/ri';
import { FaBath } from 'react-icons/fa6';
import { FaCar } from 'react-icons/fa';
import { BiSolidPhoneCall } from 'react-icons/bi'
import { IoMdMail } from 'react-icons/io'
import Rwi from '../../../assets/images/rw-hd.png';
import Qr from '../../../assets/images/QR code.png';

const Signboard6qr = (props) => {
    const [bgImage, setBgImage] = useState(Sb1)
    const [bgImage2, setBgImage2] = useState(Sb2)
    const [bgImage3, setBgImage3] = useState(Sb3)
    const [bgImage4, setBgImage4] = useState(Sb4)
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
        if (!bgImage2) {
            setBgImage2(Sb2);
        }
        if (!bgImage3) {
            setBgImage3(Sb3);
        }
        if (!bgImage4) {
            setBgImage3(Sb4);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='w-[600px] h-[398px] flex bg-[#fff] dark:bg-[#f4f4f4]' >
            <div className='flex'>
                <div>
                    <img src={Rwi} className='w-[135px] h-[137px] mb-[2px]' alt="" />
                    <div
                        className='w-[135px] bg-slate-100 h-[259px] bg-cover bg-center bg-no-repeat relative'
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
                </div>
                <div>
                    <div
                        className='w-[212px] bg-slate-100 h-[273px] bg-cover bg-center bg-no-repeat relative'
                        style={{ backgroundImage: `url(${bgImage2})` }}
                    >
                        <button
                            htmlFor="imageUpload2"
                            className="border text-[6px] text-center font-roboto w-[47px] py-[2.75px] border-[#fff] bg-[#fff] rounded-[57px] text-[#3a3a3a] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                            onClick={props.onClick}
                            onChange={(e) => handleImageChange(e, setBgImage2)}
                        >
                            Change Image
                        </button>
                    </div>
                    <div
                        className='w-[212px] bg-slate-100 h-[124px] mt-[1px] bg-cover bg-center bg-no-repeat relative'
                        style={{ backgroundImage: `url(${bgImage3})` }}
                    >
                        <button
                            htmlFor="imageUpload3"
                            className="border text-[6px] text-center font-roboto w-[47px] py-[2.75px] border-[#fff] bg-[#fff] rounded-[57px] text-[#3a3a3a] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                            onClick={props.onClick}
                            onChange={(e) => handleImageChange(e, setBgImage3)}
                        >
                            Change Image
                        </button>
                    </div>
                </div>
            </div>
            <div className='px-7 mt-8'>
                <div className='border-b-2 border-[#8f8f8f] mb-[11.4px]'></div>
                <div className='font-inter justify-end mt-[15px] text-[12px] flex gap-4 text-[#3a3a3a] font-bold'>
                    <div className='flex gap-1 items-center'>
                        <h1 contentEditable={true} onBlur={(e) => handleEditAndSave('bed', e)} suppressContentEditableWarning={true}>{content.bed}</h1>
                        <RiHotelBedLine className='w-[24px] h-[18px]' />
                    </div>
                    <div className='flex gap-1 items-center'>
                        <h1 contentEditable={true} onBlur={(e) => handleEditAndSave('bath', e)} suppressContentEditableWarning={true}>{content.bath}</h1>
                        <FaBath className='w-[24px] h-[12px]' />
                    </div>
                    <div className='flex gap-1 items-center'>
                        <h1 contentEditable={true} onBlur={(e) => handleEditAndSave('car', e)} suppressContentEditableWarning={true}>{content.car}</h1>
                        <FaCar className='w-[24px] h-[11px]' />
                    </div>
                </div>
                <div className='mt-[12.5px]'>
                    <ul className='list-disc space-y-[3px] text-[#3a3a3a] text-[12px] font-lato leading-[140%]'>
                        <li className='list-inside' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('property1', e)}>{content.property1}</li>
                        <li className='list-inside' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('property2', e)}>{content.property2}</li>
                        <li className='list-inside' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('property3', e)}>{content.property3}</li>
                        <li className='list-inside' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('property4', e)}>{content.property4}</li>
                    </ul>
                    <div className='font-lato mt-7 space-y-[5px] text-[#3a3a3a]'>
                        <h1 className='font-bold text-[10.3px]'>Property tour schedule</h1>
                        <h2 className='font-light leading-[140%] text-[10px]' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('schedule1', e)}>{content.schedule1}</h2>
                        <h2 className='font-light leading-[140%] text-[10px]' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('schedule2', e)}>{content.schedule2}</h2>
                    </div>
                </div>
                <div className='font-lato text-[8px] mt-[22px] space-y-[6.18px] text-[#3a3a3a]'>
                    <h1 className='font-normal'>Agent Contact</h1>
                    <h1 className='font-bold' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('name', e)}>{content.name}</h1>
                    <div className='flex items-center text-[9px] gap-[6.6px]'>
                        <BiSolidPhoneCall className='w-[10px] h-[10.2px]' />
                        <p className='font-inter' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('phone', e)}>{content.phone}</p>
                    </div>
                    <div className='flex items-center text-[9px] gap-[6.6px]'>
                        <RiWhatsappFill className='w-[10px] h-[10.2px]' />
                        <p className='font-inter' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('wa', e)}>{content.wa}</p>
                    </div>
                    <div className='flex items-center gap-[6.6px]'>
                        <IoMdMail className='w-[10px] h-[10.2px]' />
                        <p className='text-[9px] font-inter' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('email', e)}>{content.email}</p>
                    </div>
                    <h1 className='font-lato text-sm text-[#3a3a3a] font-bold' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('website', e)}>{content.website}</h1>
                </div>
                <img src={Qr} className='absolute right-7 bottom-14' alt="QR Code" />
            </div>
        </div>
    )
}

export default Signboard6qr
