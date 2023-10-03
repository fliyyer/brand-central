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
import Qr from '../../../assets/images/Qr Code.png';

const Signboard5qr = (props) => {
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
        <div className='w-[329px] h-[493px] bg-[#fff] dark:bg-[#f4f4f4] px-[7px] py-[8.62px]'>
            <div className='flex gap-[3px]'>
                <div>
                    <div
                        className='w-[202px] bg-slate-100 h-[200px] bg-cover bg-center bg-no-repeat relative'
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
                    <div className='flex mt-[2.3px] gap-[2px]'>
                        <div
                            className='w-[100px] bg-slate-100 h-[84px] bg-cover bg-center bg-no-repeat relative'
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
                            className='w-[100px] bg-slate-100 h-[84px] bg-cover bg-center bg-no-repeat relative'
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
                <div>
                    <img src={Rw} className='w-[109px] h-[110px]' alt="RayWhite" />
                    <div
                        className='w-[109px] mt-[2.83px] bg-slate-100 h-[173px] bg-cover bg-center bg-no-repeat relative'
                        style={{ backgroundImage: `url(${bgImage4})` }}
                    >
                        <button
                            htmlFor="imageUpload2"
                            className="border text-[6px] text-center font-roboto w-[47px] py-[2.75px] border-[#fff] bg-[#fff] rounded-[57px] text-[#3a3a3a] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                            onClick={props.onClick}
                            onChange={(e) => handleImageChange(e, setBgImage4)}
                        >
                            Change Image
                        </button>
                    </div>
                </div>
            </div>
            <div className='font-inter justify-end mt-[15px] text-[7px] flex gap-[2px] text-[#3a3a3a] font-bold'>
                <div className='flex gap-1 items-center'>
                    <h1 contentEditable={true} onBlur={(e) => handleEditAndSave('bed', e)} suppressContentEditableWarning={true}>{content.bed}</h1>
                    <RiHotelBedLine className='w-[13px] h-[12px]' />
                </div>
                <div className='flex gap-1 items-center'>
                    <h1 contentEditable={true} onBlur={(e) => handleEditAndSave('bath', e)} suppressContentEditableWarning={true}>{content.bath}</h1>
                    <FaBath className='w-[13px] h-[9px]' />
                </div>
                <div className='flex gap-1 items-center'>
                    <h1 contentEditable={true} onBlur={(e) => handleEditAndSave('car', e)} suppressContentEditableWarning={true}>{content.car}</h1>
                    <FaCar className='w-[13px] h-[11px]' />
                </div>
            </div>
            <div className='border-b-2 border-[#8f8f8f] mt-[6.7px]'></div>
            <div className='flex justify-between items-baseline'>
                <div className='mt-[12.5px] px-2'>
                    <ul className='list-disc space-y-[3px] text-[#3a3a3a] text-[7px] font-lato leading-[140%]'>
                        <li className='list-inside' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('property1', e)}>{content.property1}</li>
                        <li className='list-inside' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('property2', e)}>{content.property2}</li>
                        <li className='list-inside' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('property3', e)}>{content.property3}</li>
                        <li className='list-inside' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('property4', e)}>{content.property4}</li>
                    </ul>
                    <div className='font-lato mt-7 space-y-[1.2px] text-[#3a3a3a] text-[7px]'>
                        <h1 className='font-bold '>Property tour schedule</h1>
                        <h2 className='font-light leading-[140%]' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('schedule1', e)}>{content.schedule1}</h2>
                        <h2 className='font-light leading-[140%]' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('schedule2', e)}>{content.schedule2}</h2>
                    </div>
                    <h1 className='font-lato text-[9.7px] mt-[7px] text-[#3a3a3a] font-bold leading-[140%]' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('website', e)}>{content.website}</h1>
                </div>
                <div className='font-lato space-y-[2.18px] text-[#3a3a3a]'>
                    <h1 className='text-[5.8px] font-normal'>Agent Contact</h1>
                    <h1 className='text-[7.642px] font-bold' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('name', e)}>{content.name}</h1>
                    <div className='flex items-center gap-[3.6px]'>
                        <BiSolidPhoneCall className='w-[8px] h-[7.2px]' />
                        <p className='text-[6.3px] font-inter' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('phone', e)}>{content.phone}</p>
                    </div>
                    <div className='flex items-center gap-[3.6px]'>
                        <RiWhatsappFill className='w-[8px] h-[7.2px]' />
                        <p className='text-[6.3px] font-inter' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('wa', e)}>{content.wa}</p>
                    </div>
                    <div className='flex items-center gap-[3.6px]'>
                        <IoMdMail className='w-[8px] h-[7.2px]' />
                        <p className='text-[6.3px] font-inter' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => handleEditAndSave('email', e)}>{content.email}</p>
                    </div>
                    <img src={Qr} className='w-14 pt-[10.7px]' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Signboard5qr
