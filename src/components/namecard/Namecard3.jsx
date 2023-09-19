import React, { useState, useEffect } from 'react'
import Rw from '../../assets/images/rw-hd.png';
import Id1 from '../../assets/images/idcard.jpeg'

const Namecard3 = () => {
    const [bgImage, setBgImage] = useState(
        localStorage.getItem("id_card__image1") || Id1
    );
    const [content, setContent] = useState({
        name: 'Nama Agent',
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
        if (e.key === "Enter") {
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
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='flex gap-[30px]'>
            <div className='w-[334px] bg-[#fff] h-[502px]'>
                <img src={Rw} alt="Ray White" className='mx-auto' />
                <div
                    className="w-[163px] mx-auto mt-[21px] h-[221px] bg-cover bg-center bg-no-repeat relative"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <label
                        htmlFor="imageUpload"
                        className="border text-center text-xs font-roboto w-[120px] py-[6.75px] border-[#fff] rounded-[57px] text-[#fff] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    >
                        Change Image
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
                <h1 className='text-[#3a3a3a] text-[22px] text-center font-inter mt-[7.28px]' contentEditable={true} onBlur={(e) => handleEditAndSave("name", e)} suppressContentEditableWarning={true}>Nama Agent</h1>
                <p className='text-center text-[#8f8f8f] font-inter'>Ray White Indonesia</p>
                <div className='bg-primary-color h-[35px] relative bottom-[-18px]'></div>
            </div>
            <div className='w-[334px] text-[#5F5C60] py-[22px] px-[52.7px] bg-[#fff] h-[502px]'>
                <ul className='text-[#3a3a3a] text-[12.7px] list-disc font-inter'>
                    <li className=''>Kartu identitas ini milik <span className='font-bold'>Ray White Indonesia</span>, Bilamana terjadi
                        kerusakan,atau kehilangan
                        pemegang kartu wajib mengganti
                        atas biaya sendiri.</li>
                    <li className='my-[27px]'>
                        Kartu Identitas harus selalu
                        dikenakan selama open house,
                        pameran dan bertugas.
                    </li>
                    <li>
                        Apabila karyawan berhenti bekerja,
                        kartu ini harus diserahkan kembali
                        ke <span className='font-bold'>Ray White Indonesia</span>
                    </li>
                    <li className='mt-[27px]'>
                        Bilamana menemukan kartu ini,
                        moho dikembalikan ke <span className='font-bold'>Ray White Indonesia</span>
                    </li>
                </ul>
                <p className='font-inter text-[12.7px] text-[#3a3a3a] mt-[25px] text-center'>
                    <span className='font-bold'>Sahid Sudirman Center</span>, 43rb Floor.
                    Jl. Jend. Sudirman No. 86 Jakarta Pusat.
                    DKI Jakarta 10220, Telp. (021) 2788 9777
                    www.raywhite.co.id
                </p>
            </div>
        </div>
    )
}

export default Namecard3
