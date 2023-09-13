import React, { useState } from 'react';
import { FaBed, FaPhone } from 'react-icons/fa';
import { AiOutlineCar } from 'react-icons/ai';
import { BiBath } from 'react-icons/bi';
import RaywhiteYellow from '../../assets/images/raywhite-kuning.png'
const SignBoard8x6 = () => {

    const [selectedImage1, setSelectedImage1] = useState(null);
    const [selectedImage2, setSelectedImage2] = useState(null);
    const [selectedImage3, setSelectedImage3] = useState(null);
    const [selectedImage4, setSelectedImage4] = useState(null);

    const handleImageChange1 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage1(imageUrl);
        }
    };
    const handleImageChange2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage2(imageUrl);
        }
    };
    const handleImageChange3 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage3(imageUrl);
        }
    };
    const handleImageChange4 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage4(imageUrl);
        }
    };

    const [isEditingPropertyDescription, setIsEditingPropertyDescription] = useState(false);
    const [propertyDescriptions, setPropertyDescriptions] = useState([
        'Property description here',
        'Property description here',
        'Property description here',
        'Property description here'
    ]);

    const [isEditingPropertyTourSchedule, setIsEditingPropertyTourSchedule] = useState(false);
    const [propertyTourSchedule, setPropertyTourSchedule] = useState([
        'Property Tour',
        'Monday May 12 2023, 12.00 am WIB',
        'Monday May 12 2023, 12.00 am WIB'
    ]);

    const [isEditingAgentContact, setIsEditingAgentContact] = useState(false);
    const [agentContact, setAgentContact] = useState({
        name: 'John Doe',
        phone1: '0812 4568 8771',
        phone2: '0812 4568 8771',
        email: 'john.doe@raywhite.co.id'
    });

    const handleEditClick = (section) => {
        if (section === 'propertyDescriptions') {
            setIsEditingPropertyDescription(true);
        } else if (section === 'propertyTourSchedule') {
            setIsEditingPropertyTourSchedule(true);
        } else if (section === 'agentContact') {
            setIsEditingAgentContact(true);
        }
    };

    const handleSaveClick = (section, newValue) => {
        if (section === 'propertyDescriptions') {
            setIsEditingPropertyDescription(false);
            setPropertyDescriptions(newValue);
        } else if (section === 'propertyTourSchedule') {
            setIsEditingPropertyTourSchedule(false);
            setPropertyTourSchedule(newValue);
        } else if (section === 'agentContact') {
            setIsEditingAgentContact(false);
            setAgentContact(newValue);
        }
    };

    return (
        <div className='bg-[#F4F4F4] p-2 w-[329px]'>
            <div className='flex '>
                <div>
                    <div>
                        {selectedImage1 ? (
                            <img src={selectedImage1} className='w-[201px] h-[200px]' alt="Selected Image 1" />
                        ) : (
                            <label htmlFor="imageInput1" className="cursor-pointer">
                                <img src={RaywhiteYellow} className='w-[201px] h-[200px]' alt="Choose Image 1" />
                            </label>
                        )}
                        <input
                            type="file"
                            id="imageInput1"
                            accept="image/*"
                            onChange={handleImageChange1}
                            style={{ display: 'none' }}
                        />
                    </div>
                    <div className='flex'>
                        {selectedImage2 ? (
                            <img src={selectedImage2} className='w-[100px] h-[84px]' alt="Selected Image 2" />
                        ) : (
                            <label htmlFor="imageInput2" className="cursor-pointer">
                                <img src={RaywhiteYellow} className='w-[100px] h-[84px]' alt="Choose Image 2" />
                            </label>
                        )}
                        <input
                            type="file"
                            id="imageInput2"
                            accept="image/*"
                            onChange={handleImageChange2}
                            style={{ display: 'none' }}
                        />
                        {selectedImage3 ? (
                            <img src={selectedImage3} className='w-[100px] h-[84px]' alt="Selected Image 3" />
                        ) : (
                            <label htmlFor="imageInput3" className="cursor-pointer">
                                <img src={RaywhiteYellow} className='w-[100px] h-[84px]' alt="Choose Image 3" />
                            </label>
                        )}
                        <input
                            type="file"
                            id="imageInput3"
                            accept="image/*"
                            onChange={handleImageChange3}
                            style={{ display: 'none' }}
                        />
                    </div>
                </div>
                <div>
                    <img src={RaywhiteYellow} className='w-[109px] h-[110px] ' alt="Logo Raywhite Kuning" />
                    <div>
                        {selectedImage4 ? (
                            <img src={selectedImage4} className='w-[109px] h-[173px]' alt="Selected Image 4" />
                        ) : (
                            <label htmlFor="imageInput4" className="cursor-pointer">
                                <img src={RaywhiteYellow} className='w-[109px] h-[173px]' alt="Choose Image 4" />
                            </label>
                        )}
                        <input
                            type="file"
                            id="imageInput4"
                            accept="image/*"
                            onChange={handleImageChange4}
                            style={{ display: 'none' }}
                        />
                    </div>
                </div>
            </div>
            <div className='flex gap-3 cursor-pointer font-inter text-text-board-color'>
                <div className='flex items-center ml-auto gap-2'>
                    <p>1</p>
                    <FaBed alt='Kamar Tidur' />
                </div>
                <div className='flex items-center gap-2'>
                    <p>2</p>
                    <BiBath alt='Kamar Mandi' />
                </div>
                <div className='flex items-center gap-2'>
                    <p>0</p>
                    <AiOutlineCar alt='Garasi' />
                </div>
            </div>
            <div className='border-b-2 border-[#8F8F8F]'></div>
            <div className='flex justify-between items-baseline'>
                <div className='font-inter mt-3 font-light text-[7px] text-text-board-color'>
                    <ul>
                        {propertyDescriptions.map((text, index) => (
                            <li
                                key={index}
                                onClick={() => handleEditClick('propertyDescriptions')}
                                contentEditable={isEditingPropertyDescription}
                                onBlur={(e) => {
                                    const updatedDescriptions = [...propertyDescriptions];
                                    updatedDescriptions[index] = e.target.textContent;
                                    handleSaveClick('propertyDescriptions', updatedDescriptions);
                                }}
                            >
                                {text}
                            </li>
                        ))}
                    </ul>

                    <h1
                        className='mt-7 font-bold'
                        onClick={() => handleEditClick('propertyTourSchedule')}
                        contentEditable={isEditingPropertyTourSchedule}
                        onBlur={(e) => handleSaveClick('propertyTourSchedule', e.target.textContent)}
                    >
                        {propertyTourSchedule[0]}
                    </h1>
                    <p
                        onClick={() => handleEditClick('propertyTourSchedule')}
                        contentEditable={isEditingPropertyTourSchedule}
                        onBlur={(e) => handleSaveClick('propertyTourSchedule', [e.target.textContent, propertyTourSchedule[1], propertyTourSchedule[1]])}
                    >
                        {propertyTourSchedule[1]}
                    </p>
                    <p
                        onClick={() => handleEditClick('propertyTourSchedule')}
                        contentEditable={isEditingPropertyTourSchedule}
                        onBlur={(e) => handleSaveClick('propertyTourSchedule', [propertyTourSchedule[2], e.target.textContent, propertyTourSchedule[2]])}
                    >
                        {propertyTourSchedule[2]}
                    </p>
                    <p
                        className='mt-2 font-bold'
                        onClick={() => handleEditClick('agentContact')}
                        contentEditable={isEditingAgentContact}
                        onBlur={(e) => handleSaveClick('agentContact', { ...agentContact, email: e.target.textContent })}
                    >
                        {agentContact.email}
                    </p>

                    <p className='mt-2 font-bold'>Citraland.raywhite.co.id</p>
                </div>
                <div>
                    <p className='text-[6px]'>Agen Contact</p>
                    <p className='text-[7.6px] font-bold'>John Doe</p>
                    <p className='flex items-center gap-1'>
                        <FaPhone className='w-2' />
                        <p className='text-[6.37px]'>
                            0812 4568 8771
                        </p>
                    </p>
                    <p className='flex items-center gap-1'>
                        <FaPhone className='w-2' />
                        <p className='text-[6.37px]'>
                            0812 4568 8771
                        </p>
                    </p>
                    <p className='flex items-center gap-1'>
                        <FaPhone className='w-2' />
                        <p className='text-[6.37px]'>
                            john.doe@raywhite.co.id
                        </p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignBoard8x6;
