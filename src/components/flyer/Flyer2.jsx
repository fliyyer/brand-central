import React, { useEffect, useState } from 'react'
import Flyr1 from '../../assets/images/instagram/ig1.jpeg'
import Flyr2 from '../../assets/images/instagram/ig2.jpeg'
import Flyr3 from '../../assets/images/instagram/ig3.jpeg'
import Bed from '../../assets/images/bed.png'
import Lt from '../../assets/images/lt.png'
import Shower from '../../assets/images/shower.png'
import Lb from '../../assets/images/lb.png'
import { FaLocationDot } from 'react-icons/fa6';
import { AiOutlineInstagram } from 'react-icons/ai';
import { PiTiktokLogoLight } from 'react-icons/pi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TbWorldWww } from 'react-icons/tb';
import Pentagon from '../../assets/images/pentagon.png';
import dotsyllow from '../../assets/images/dotsyllow 1.png'
const Flyer2 = () => {
    const [bgImage, setBgImage] = useState(localStorage.getItem('flyer_2_image1') || Flyr1);
    const [bgImage2, setBgImage2] = useState(localStorage.getItem('flyer_2_image2') || Flyr2);
    const [bgImage3, setBgImage3] = useState(localStorage.getItem('flyer_2_image3') || Flyr3);
    const [content, setContent] = useState({
        location: 'Lorem Lorem ipsum. amet.',
        desc: 'Lorem ipsum dolor sit amet consectetur',
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
        <><div className='w-[383px]  h-[574px] p-[11px] bg-[#fff]'>
            <div className='flex gap-[14px] justify-end items-center'>
                <img src={dotsyllow} alt="bg" className='absolute left-0 top-0' />
                <div className='text-[#585858]'>
                    <h1 className='bg-primary-color text-[15px] font-extrabold tracking-[3.2px] w-[104px] flex justify-center ml-16 h-6'>DIJUAL</h1>
                    <h1 className='bg-primary-color text-[15px] mt-[3.7px] font-extrabold tracking-[3.2px] flex justify-center ml-16 w-[104px] h-6'>RUMAH</h1>
                    <p className='bg-primary-color mt-[4.19px] w-[168px] px-[10px] h-[7.5px] text-[5px] font-medium' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.desc}</p>
                </div>
                <div className='absolute left-5 top-0'>
                    <img src={Pentagon} alt="" />
                    <div className='text-[#585858] text-[10.639px] font-poppins absolute font-semibold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <div className='border w-2 border-[#585858]'></div>
                        <h1 className=''>JUAL</h1>
                        <h1 className='-mt-1'>CEPAT</h1>
                    </div>
                </div>
            </div>
            <div className='flex mt-4 gap-[5.75px]'>
                <div
                    className='w-[184px] h-[337px] bg-cover bg-center bg-no-repeat relative'
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <label
                        htmlFor='imageUpload'
                        className='border text-center text-[8px] font-roboto w-[81px] py-1 border-[#fff] rounded-[57px] text-[#fff] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'
                    >
                        Change Image
                    </label>
                    <input
                        type='file'
                        id='imageUpload'
                        accept='image/*'
                        style={{ display: 'none' }}
                        onChange={(e) => handleImageChange(e, setBgImage, 'flyer_2_image1')}
                    />
                </div>

                <div>
                    <div
                        className='w-[168px] h-[164px] bg-cover bg-center bg-no-repeat relative'
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
                            onChange={(e) => handleImageChange(e, setBgImage2, 'flyer_2_image2')} />
                    </div>
                    <div
                        className='w-[168px] h-[164px] mt-[6px] bg-cover bg-center bg-no-repeat relative'
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
                            onChange={(e) => handleImageChange(e, setBgImage3, 'flyer_2_image3')} />
                    </div>
                </div>
            </div>
            <div className='flex gap-7 font-poppins'>
                <div>
                    <div className='font-poppins mt-4'>
                        <div className='bg-primary-color rounded-r-[10px] absolute left-0 top-96 w-[129px] h-[52px] px-2 flex items-center gap-2'>
                            <div className='bg-primary-[#616161] w-[22px] h-[22px] flex justify-center rounded-full'>
                                <FaLocationDot className='text-[#616161]  my-auto'></FaLocationDot>
                            </div>
                            <h1 className='text-[#616161] text-[9.5px] font-bold' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.location}</h1>
                        </div>
                    </div>
                </div>
                <div className='flex gap-8 items-center mt-[30px]'>
                    <div className='flex-row justify-center'>
                        <img src={Lt} className='w-full mx-auto' alt="Luas Tanah" />
                        <h1 className='whitespace-nowrap text-[8px] text-center' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.lt}</h1>
                    </div>
                    <div>
                        <img src={Lb} className='w-full mx-auto' alt="Luas Bangunan" />
                        <h1 className='whitespace-nowrap text-[8px] text-center' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.lb}</h1>
                    </div>
                    <div className='flex-row justify-center items-center'>
                        <img src={Bed} alt="Luas Tanah" className='w-[30px] h-7 mx-auto' />
                        <h1 className='whitespace-nowrap text-[8px] text-center' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.bed}</h1>
                    </div>
                    <div className='justify-center flex-row items-center'>
                        <img src={Shower} className='w-[30px] h-7 mx-auto' alt="Luas Bangunan" />
                        <h1 className='whitespace-nowrap text-[8px] text-center' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.bath}</h1>
                    </div>
                </div>
            </div>
            <h1 className='text-center text-[#585858] text-[12.5px] tracking-[-0.5px] font-poppins mt-[22px]'>PROUDLY RAY WHITE</h1>
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

export default Flyer2
