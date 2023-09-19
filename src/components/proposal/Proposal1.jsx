import React, { useState, useEffect } from 'react'
import Id1 from '../../assets/images/imganual.png'
import Id2 from '../../assets/images/idcard.jpeg'


const Proposal1 = () => {
    const [bgImage, setBgImage] = useState(localStorage.getItem("id_card__image1") || Id1,);
    const [bgImage2, setBgImage2] = useState(localStorage.getItem("id_card__image2") || Id2,);
    const [content, setContent] = useState({
        title: 'KAMI BERADA DI ATAS PARA KOMPETITOR',
        name: 'Erwin Karya',
        position: 'Director of Ray White Projects, Commercial, and Cikarang',
        paragraf1: 'Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur.',
        paragraf2: 'Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur.',
        paragraf3: 'Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur.,',
        paragraf4: 'Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur.',
        paragraf5: 'Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur.',
        paragraf6: 'Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. Risus tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur. tempus arcu fermentum suspendisse libero duis augue odio ut.Lorem ipsum dolor sit amet consectetur.,'
    })
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
            setBgImage(Id1);
        } if (!bgImage2) {
            setBgImage(Id2);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='flex gap-[72px]'>
            <div className='w-[341.5px] h-[481.8px] bg-[#fff]'>
                <div
                    className="w-full mt-[21px] h-[119px] bg-cover bg-center bg-no-repeat relative"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <label
                        htmlFor="imageUpload"
                        className="border text-center text-xs font-roboto  w-[77px] py-[6.75px] border-[#fff] rounded-[57px] text-[#fff] font-medium absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    >
                        Add Image
                    </label>
                    <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(e) =>
                            handleImageChange(e, setBgImage, "id_card__image1")
                        }
                    />
                </div>
                <div className='px-[22px] -mt-7'>
                    <h1 className='text-[#3a3a3a] mt-[52px] text-xl font-lato font-extrabold' contentEditable={true} onBlur={(e) => handleEditAndSave('title', e)} suppressContentEditableWarning={true}>{content.title}</h1>
                    <div className='border-b-[3px] border-primary-color mt-[4.47px] w-[33px]'></div>
                    <div className='flex text-[#5c5c5c] mt-[19.1px] gap-[9.5px] text-[5.6px]'>
                        <div className='w-1/2 text-justify'>
                            <h1 contentEditable={true} onBlur={(e) => handleEditAndSave('paragraf1', e)} suppressContentEditableWarning={true}>{content.paragraf1}</h1>
                            <h1 className='mt-[6.74px]' contentEditable={true} onBlur={(e) => handleEditAndSave('paragraf2', e)} suppressContentEditableWarning={true}>{content.paragraf2}</h1>
                        </div>
                        <div className='w-1/2 text-justify'>
                            <h1 contentEditable={true} onBlur={(e) => handleEditAndSave('paragraf3', e)} suppressContentEditableWarning={true}>{content.paragraf3}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[343.178px] h-[481.8px] bg-[#fff] px-[26px]'>
                <h1 className='text-[#5C5C5C] mt-[52px] text-xl font-lato font-medium'>PRINCIPAL PROFILE</h1>
                <div className='border-b-[3px] border-primary-color w-[33px]'></div>
                <div className='font-lato gap-[13px] flex'>
                    <div
                        className="w-[125px] mt-[21px] h-[119px] bg-cover bg-center bg-no-repeat relative"
                        style={{ backgroundImage: `url(${bgImage2})` }}
                    >
                        <label
                            htmlFor="imageUpload2"
                            className="border text-center text-xs font-roboto  w-[77px] py-[6.75px] border-[#fff] rounded-[57px] text-[#fff] font-medium absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        >
                            Add Image
                        </label>
                        <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={(e) =>
                                handleImageChange(e, setBgImage2, "id_card__image2")
                            }
                        />
                    </div>
                    <div className='absolute right-10 top-48'>
                        <h1 className='text-[13.8px] text-text-board-color' contentEditable={true} onBlur={(e) => handleEditAndSave('name', e)} suppressContentEditableWarning={true}>{content.name}</h1>
                        <p className='text-[#5c5c5c] text-[5.6px]' contentEditable={true} onBlur={(e) => handleEditAndSave('position', e)} suppressContentEditableWarning={true}>{content.position}</p>
                    </div>
                </div>
                <div className='flex text-[#5c5c5c] mt-[19.1px] gap-[9.5px] text-[5.6px]'>
                    <div className='w-1/2 text-justify'>
                        <h1 contentEditable={true} onBlur={(e) => handleEditAndSave('paragraf4', e)} suppressContentEditableWarning={true}>{content.paragraf4}</h1>
                        <h1 className='mt-[6.74px]' contentEditable={true} onBlur={(e) => handleEditAndSave('paragraf5', e)} suppressContentEditableWarning={true}>{content.paragraf5}</h1>
                    </div>
                    <div className='w-1/2 text-justify'>
                        <h1 contentEditable={true} onBlur={(e) => handleEditAndSave('paragraf6', e)} suppressContentEditableWarning={true}>{content.paragraf6}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proposal1
