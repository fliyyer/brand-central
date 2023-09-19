import React, { useEffect, useState } from 'react'
import Flyr1 from '../../assets/images/instagram/ig1.jpeg'
import Flyr2 from '../../assets/images/instagram/ig2.jpeg'
import Flyr3 from '../../assets/images/instagram/ig3.jpeg'
import Check from '../../assets/images/check.png'
import Bed from '../../assets/images/bed.png'
import Lt from '../../assets/images/lt.png'
import Shower from '../../assets/images/shower.png'
import Lb from '../../assets/images/lb.png'
import { FaLocationDot } from 'react-icons/fa6';
import { AiOutlineInstagram } from 'react-icons/ai';
import { PiTiktokLogoLight } from 'react-icons/pi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { TbWorldWww } from 'react-icons/tb'
const Flyer1 = () => {
    const [bgImage, setBgImage] = useState(localStorage.getItem('flyer_1_image1') || Flyr1);
    const [bgImage2, setBgImage2] = useState(localStorage.getItem('flyer_1_image2') || Flyr2);
    const [bgImage3, setBgImage3] = useState(localStorage.getItem('flyer_1_image3') || Flyr3);
    const [content, setContent] = useState({
        location: 'Lorem Lorem ipsum. dolor sit, amet.',
        day: 'Day, Date Time',
        lt: '0 m²',
        lb: '0 m²',
        bed: '0 + 0 Bedroooms',
        bath: '0 + 0 Bathroooms',

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
            setBgImage(Flyr1);
        }
        if (!bgImage2) {
            setBgImage2(Flyr2);
        }
        if (!bgImage3) {
            setBgImage3(Flyr3);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <><div className='w-[343px] h-[514px] p-[22px] bg-[#fff]'>
            <div className='flex gap-[14px] items-center'>
                <div>
                    <h1 className='font-poppins text-[#585858] text-[19px] font-extrabold'>Open House.</h1>
                    <div className='border-b-4 w-[133px] border-primary-color'></div>
                </div>
                <h1 className='font-calligraft text-[#FAE10E] text-[23px] font-normal'>Come Visit Us!</h1>
            </div>
            <div className='flex mt-4 gap-[5.75px]'>
                <div
                    className='w-[146px] h-[240px] bg-cover bg-center bg-no-repeat relative'
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <label htmlFor='imageUpload' className='border text-center text-[8px] font-roboto w-[81px] py-1 border-[#fff] rounded-[57px] text-[#fff] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                        Change Image
                    </label>
                    <input
                        type='file'
                        id='imageUpload'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(e) => handleImageChange(e, setBgImage, 'flyer_1_image1')} />
                </div>
                <div>
                    <div
                        className='w-[161px] h-[104px] bg-cover bg-center bg-no-repeat relative'
                        style={{ backgroundImage: `url(${bgImage2})` }}
                    >
                        <label htmlFor='imageUpload2' className='border text-center text-[8px] font-roboto w-[81px] py-1 border-[#fff] rounded-[57px] text-[#fff] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                            Change Image
                        </label>
                        <input
                            type='file'
                            id='imageUpload2'
                            accept='image/*'
                            style={{ display: 'none' }}
                            onChange={(e) => handleImageChange(e, setBgImage2, 'flyer_1_image2')} />
                    </div>
                    <div
                        className='w-[161px] h-[130px] mt-[6px] bg-cover bg-center bg-no-repeat relative'
                        style={{ backgroundImage: `url(${bgImage3})` }}
                    >
                        <label htmlFor='imageUpload3' className='border text-center text-[8px] font-roboto w-[81px] py-1 border-[#fff] rounded-[57px] text-[#fff] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                            Change Image
                        </label>
                        <input
                            type='file'
                            id='imageUpload3'
                            accept='image/*'
                            style={{ display: 'none' }}
                            onChange={(e) => handleImageChange(e, setBgImage3, 'flyer_1_image3')} />
                    </div>
                </div>
            </div>
            <div className='flex gap-7 font-poppins'>
                <div>
                    <div className='font-poppins mt-4'>
                        <div className='flex items-center gap-2'>
                            <div className='bg-primary-color w-[22px] h-[22px] flex justify-center rounded-full'>
                                <FaLocationDot className='text-[#fff]  my-auto'></FaLocationDot>
                            </div>
                            <h1 className='text-[#616161] text-[9.5px] font-bold' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.location}</h1>
                        </div>
                        <div className='border-b-2 mt-[6.67px] border-primary-color'></div>
                    </div>
                    <div>
                        <h1 className='text-[#616161] mt-2 text-[9.5px] font-bold'>Start From:</h1>
                        <div className='flex mt-6 gap-3'>
                            <img src={Check} alt="Check In" />
                            <h1 className='text-[#616161] mt-2 font-medium text-[9.5px]' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.day}</h1>
                        </div>
                    </div>
                </div>
                <div className='text-[#616161] text-[7.6px] tracking-[-0.3px] text-center'>
                    <div className='flex ml-3 gap-14 mt-7'>
                        <div>
                            <img src={Lt} alt="Luas Tanah" />
                            <h1 contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.lt}</h1>
                        </div>
                        <div>
                            <img src={Lb} alt="Luas Bangunan" />
                            <h1 contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.lb}</h1>
                        </div>
                    </div>
                    <div className='flex mt-6 gap-5'>
                        <div className='flex-row items-center '>
                            <img src={Bed} alt="Luas Tanah" className='mx-auto' />
                            <h1 className='whitespace-nowrap' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.bed}</h1>
                        </div>
                        <div className='justify-center flex-row items-center'>
                            <img src={Shower} className='mx-auto' alt="Luas Bangunan" />
                            <h1 className='whitespace-nowrap' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.bath}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-b-4 mt-6 border-primary-color'></div>
            <h1 className='text-center text-[#585858] text-[11px] tracking-[-0.5px] font-poppins mt-[6px]'>PROUDLY RAY WHITE</h1>
        </div><footer className='bg-primary-color justify-between flex px-[10px] py-[7px] -mt-4 text-[#585858]'>
                <div className='flex items-center gap-[2.8px]'>
                    <AiOutlineInstagram className='w-[10.481px] h-[10.481px]' />
                    <PiTiktokLogoLight className='w-[10.481px] h-[10.481px]' />
                    <p className='text-[7.1px]'>@raywhiteindonesia</p>
                </div>
                <div className='flex gap-[2.86px] items-center'>
                    <div className='w-[10.481px] h-[10.481px] border border-[#585858] flex items-center justify-center rounded-full'>
                        <BsFillTelephoneFill className='w-[5.481px] h-[5.481px]' />
                    </div>
                    <p className='text-[7.1px]'>021 - 0000000</p>
                </div>
                <div className='item-center flex gap-[2.86px]'>
                    <TbWorldWww className='w-[10.481px] h-[10.481px]' />
                    <p className='text-[7.1px]'>cdindonesia.raywhite.co.id</p>
                </div>
            </footer></>
    )
}

export default Flyer1
