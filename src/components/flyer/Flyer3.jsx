import React, { useEffect, useState } from 'react'
import Flyr1 from '../../assets/images/instagram/ig1.jpeg'
import Rw from '../../assets/images/raywhite-kuning.png'
import { FaBed } from 'react-icons/fa'
import { FaPhoneVolume } from 'react-icons/fa6'
import { BiSolidBath, BiSolidCar } from 'react-icons/bi'
import Loca from '../../assets/images/u&t.png'
import Service from '../../assets/images/service.png'

const Flyer3 = () => {
    const [bgImage, setBgImage] = useState(localStorage.getItem('flyer_3_image1') || Flyr1);
    const [content, setContent] = useState({
        location: 'Utara & Timur',
        title: 'LOREM IPSUM',
        description: 'Nulla at aliquam adipiscing',
        bed: '0',
        bath: '0',
        car: '0',
        price: '3,5',
        lt: '0',
        lb: '0',
        list1: 'Unit hook',
        list2: 'Ukuran kamar 3x4',
        list3: 'Akses jalan 3 mobil',
        list4: 'Akses jalan 3 mobil',
        list5: 'Ukuran kamar 3x4',
        list6: 'Unit hook',
        rw: 'Fatmawati Boulevard',
        rwd: 'FB',
        no: '(021) 0000000'

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div
            className='w-[308px] h-[548px] bg-cover bg-center relative'
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className='bg-black absolute top-0 left-0 w-full h-full opacity-[20%]'></div>
            <div className='font-poppins absolute justify-between gap-[171px] px-[26px] flex'>
                <div className='text-[#fff] text-[21.4px] font-extrabold'>
                    <h1>RW</h1>
                    <h1 className='-mt-3' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.rwd}<span className='text-primary-color'>.</span></h1>
                </div>
                <img className='w-[47px] h-[47px] fixed right-7' src={Rw} alt="Ray White" />
            </div>
            <label htmlFor='imageUpload' className='border text-center text-[8px] font-roboto w-[81px] py-1 border-[#fff] rounded-[57px] text-[#fff] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                Change Image
            </label>
            <input
                type='file'
                id='imageUpload'
                accept='image/*'
                style={{ display: 'none' }}
                onChange={(e) => handleImageChange(e, setBgImage, 'flyer_3_image1')}
            />
            <div className='flex px-7 gap-[22px] absolute bottom-32'>
                <div className='font-poppins  text-[#fff]'>
                    <h1 className='text-[17.px] font-extrabold tracking-[1.7px] uppercase' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.title}</h1>
                    <p className='text-[8px] font-medium italic tracking-[0.813px]' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.description}</p>
                    <div className='flex gap-6 '>
                        <div>
                            <div className='flex gap-4'>
                                <div className='flex gap-[8px] text-xs tracking-[1.1px]'>
                                    <p>LT</p>
                                    <p className='font-extrabold' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.lt}</p>
                                    <p>M²</p>
                                </div>
                                <div className='flex gap-[8px] text-xs tracking-[1.1px]'>
                                    <p>LB</p>
                                    <p className='font-extrabold' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.lb}</p>
                                    <p>M²</p>
                                </div>
                            </div>
                            <div className='flex gap-3 mt-6'>
                                <div className='flex items-center gap-[3.43px]'>
                                    <FaBed />
                                    <p className='text-[10px] font-light' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.bed}</p>
                                </div>
                                <div className='flex items-center gap-[3.43px]'>
                                    <BiSolidBath />
                                    <p className='text-[10px] font-light' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.bath}</p>
                                </div>
                                <div className='flex items-center gap-[3.43px]'>
                                    <BiSolidCar />
                                    <p className='text-[10px] font-light' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.car}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='font-poppins text-[#fff]'>
                    <h1 className='text-[10.8px] font-normal tracking-[2.141px]'>For Sale</h1>
                    <h1 className='text-[38px] -mt-2 font-bold tracking-[3.8px]' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.price}<span className='text-[17px] tracking-[1.7px]'>M</span></h1>
                    <div className='flex items-center gap-[3.09px]'>
                        <img src={Loca} alt="Location" />
                        <p className='text-[10px] mt-1 tracking-[0.5px]' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.location}</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-3 absolute px-8 bottom-16 font-poppins text-[#fff]'>
                <img className='w-[14.5px] h-[14.5px]' src={Service} alt="Service" />
                <div className='flex gap-[27px]'>
                    <div>
                        <ul className='text-[5.5px] list-disc font-light list-inside'>
                            <li contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.list1}</li>
                            <li className='my-[5px]' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.list2}</li>
                            <li contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.list3}</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='text-[5.5px] list-disc font-light list-inside'>
                            <li contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.list4}</li>
                            <li className='my-[5px]' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.list5}</li>
                            <li contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.list6}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex gap-9 px-5 absolute bottom-4'>
                <h1 className='text-[#fff] text-[10px] font-light tracking-[2.9px]' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.rw}</h1>
                <p className='flex items-center text-[10px] gap-1 text-[#fff]' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}><FaPhoneVolume className='w-[13px] h-[13px]' />{content.no}</p>
            </div>
        </div>
    )
}

export default Flyer3
