import React, { useState, useRef, useEffect } from "react";
import RwWhite from "../../../assets/images/raywhite-putih.png";
import RwYellow from "../../../assets/images/raywhite-putih2.png";
import axios from "axios";
import ImageCropPopup from "../../pop-up/ImageCropPopup";
import Call from "../../../assets/images/call.png";
import { convertTitle } from "../../../utils/optionConvert";
import TextEditorPopup from "../../pop-up/TextEditorPopup";
import TitleOptionsPopup from "../../pop-up/TitleOptionsPopup";

const Banner100x100white = () => {
    const [isNameEditing, setIsNameEditing] = useState(false);
    const [isMobileEditing, setIsMobileEditing] = useState(false);
    const [isTitleOptionsOpen, setIsTitleOptionsOpen] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const fileInputRef = useRef(null);
    const [imageColor, setImageColor] = useState("yellow");
    const [backgroundColor, setBackgroundColor] = useState("yellow");
    const [content, setContent] = useState({
        title: "",
        agentName: "",
        agentPhone: "",
        agentEmail: "",
        agentOfficePhone: "",
        officeName: "",
        officeWebsite: "",
        defaultImg: "",
    });
    useEffect(() => {
        defaultUser();
    }, []);
    const defaultUser = async () => {
        try {
            const response = await axios.get(
                "https://brandcentralapi.raywhite.co.id/banner4/create",
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                    },
                }
            );
            if (response.status === 200) {
                const dataUser = response.data.row;
                setContent({
                    title: "Dijual",
                    agentName: dataUser.agent_name,
                    agentEmail: dataUser.agent_email,
                    agentPhone: dataUser.agent_mobile,
                    agentOfficePhone: dataUser.agent_phone,
                    officeName: dataUser.agent_office,
                    officeWebsite: dataUser.website,
                    defaultImg: dataUser.image1_url,
                });
            }
        } catch { }
    };
    const [isCropPopupOpen, setIsCropPopupOpen] = useState(false);
    const handleBackgroundColorChange = (event) => {
        const selectedColor = event.target.value;
        setBackgroundColor(selectedColor);
        const newImageColor = selectedColor === "white" ? "white" : "yellow";
        setImageColor(newImageColor);
    };

    const handleNameEdit = () => {
        setIsNameEditing(true);
    };
    const handleNameSave = (newAgentName) => {
        setIsNameEditing(false);
        const uppercaseName = newAgentName.toUpperCase();
        setContent((prevContent) => ({
            ...prevContent,
            agentName: uppercaseName,
        }));
    };
    const handleNameCancel = () => {
        setIsNameEditing(false);
    };

    const handleMobileEdit = () => {
        setIsMobileEditing(true);
    };

    const handleMobileSave = (newMobile) => {
        setIsMobileEditing(false);
        setContent((prevContent) => ({
            ...prevContent,
            agentPhone: newMobile,
        }));
    };

    const handleMobileCancel = () => {
        setIsMobileEditing(false);
    };

    const handleTitleEdit = () => {
        setIsTitleOptionsOpen(true);
    };

    const handleTitleSelect = (newTitle) => {
        setIsTitleOptionsOpen(false);
        setContent((prevContent) => ({
            ...prevContent,
            title: newTitle,
        }));
    };

    const handleTitleCancel = () => {
        setIsTitleOptionsOpen(false);
    };

    const saveDataToAPI = async () => {
        try {
            let convertedTitle = convertTitle(content.title);
            let imageData = null;
            if (profileImage) {
                const canvas = document.createElement("canvas");
                const img = new Image();
                img.src = profileImage;
                const width = 250;
                const height = 250;
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                ctx.beginPath();
                ctx.arc(width / 2, height / 2, width / 2, 0, Math.PI * 2);
                ctx.closePath();
                ctx.clip();
                ctx.drawImage(img, 0, 0, width, height);
                imageData = canvas.toDataURL("image/png");
            }

            const dataToBeSaved = {
                property_type: convertedTitle,
                agent_name: content.agentName,
                agent_mobile: content.agentPhone,
                image1: imageData,
                color: imageColor,
            };

            const response = await axios.post(
                "https://brandcentralapi.raywhite.co.id/banner4/save",
                dataToBeSaved,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                    },
                }
            );

            if (response.status === 200) {
                console.log("Data berhasil disimpan");
            } else {
                console.error("Gagal menyimpan data");
            }
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
        }
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
                openCropPopup();
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const openCropPopup = () => {
        setIsCropPopupOpen(true);
    };

    const closeCropPopup = () => {
        setIsCropPopupOpen(false);
    };

    const handleCropImage = (croppedImage) => {
        setProfileImage(croppedImage);
        closeCropPopup();
    };

    return (
        <div className="flex flex-col items-end justify-center">
            <div className={`w-[468px] h-[468px] text-[#3a3a3a] ${imageColor === "yellow" ? "bg-primary-color text-[#3a3a3a]" : "bg-[#fff] text-[#595A5C]"} relative`}>
                <img
                    src={imageColor === "yellow" ? RwWhite : RwYellow}
                    alt="RayWhite"
                    className="absolute right-8 max-w-full cursor-pointer"
                />
                <div className="px-8 font-lato py-16">
                    {isTitleOptionsOpen && (
                        <TitleOptionsPopup
                            isOpen={isTitleOptionsOpen}
                            onSelect={handleTitleSelect}
                            onClose={handleTitleCancel}
                        />
                    )}
                    <h1
                        className="text-[68px] font-playfair font-bold cursor-pointer"
                        onClick={handleTitleEdit}
                    >
                        {content.title || "Dijual"}
                    </h1>
                    <div className="relative w-[110px] h-[110px] rounded-full overflow-hidden mb-2">
                        {isCropPopupOpen && (
                            <ImageCropPopup
                                image={profileImage}
                                onSave={handleCropImage}
                                onCancel={closeCropPopup}
                            />
                        )}
                        <label
                            htmlFor="file-input"
                            className="w-full h-full bg-gray-200 flex items-center justify-center cursor-pointer"
                        >
                            {profileImage ? (
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <img
                                    src={content.defaultImg}
                                    alt="Default Profile"
                                    className="w-full h-full object-cover"
                                />
                            )}
                            <input
                                ref={fileInputRef}
                                id="file-input"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ display: "none" }}
                            />
                        </label>
                    </div>
                    <div className="flex gap-2 items-center">
                        {isNameEditing && (
                            <TextEditorPopup
                                initialValue={content.agentName}
                                onSave={handleNameSave}
                                onCancel={handleNameCancel}
                            />
                        )}
                        <p
                            className="text-[24px] cursor-pointer uppercase font-bold"
                            onClick={handleNameEdit}
                        >
                            {content.agentName}
                        </p>
                        {isMobileEditing && (
                            <TextEditorPopup
                                initialValue={content.agentPhone}
                                onSave={handleMobileSave}
                                onCancel={handleMobileCancel}
                            />
                        )}
                        <p
                            className="text-[24px] font-bold font-lato cursor-pointer"
                            onClick={handleMobileEdit}
                        >
                            ({content.agentPhone || "0812 1234 5678"})
                        </p>
                    </div>
                    <p className="text-[15px] font-bold">{content.agentEmail}</p>
                    <p
                        className="flex items-center gap-2 text-[30px] font-bold"
                    >
                        <img src={Call} className="w-6" alt="Phone" />
                        <span>{content.agentOfficePhone}</span>
                    </p>
                    <p className="text-[15px] font-bold mt-4">{content.officeName}</p>
                    <p className="text-[15px] font-bold">{content.officeWebsite}</p>
                </div>
            </div>
            <div className="flex items-end" style={{ zIndex: 1 }}>
                <div className="flex absolute top-1 right-0 items-center">
                    <select
                        id="backgroundColorSelect"
                        value={backgroundColor}
                        onChange={handleBackgroundColorChange}
                        className="text-[#fff] cursor-pointer text-sm font-medium bg-transparent rounded-sm px-2 py-1 relative"
                    >
                        <option value="white" className='bg-[#fff] dark:bg-text-board-color rounded-none'>
                            White
                        </option>
                        <option value="yellow" className='bg-[#fff] dark:bg-text-board-color rounded-none'>
                            Yellow
                        </option>
                    </select>
                    {backgroundColor === 'white' && (
                        <div className="w-4 h-4 absolute right-2 top-1/2 mr-20 transform -translate-y-1/2 bg-white"></div>
                    )}
                    {backgroundColor === 'yellow' && (
                        <div className="w-4 h-4 absolute right-2 top-1/2 mr-20 transform -translate-y-1/2 bg-yellow-500"></div>
                    )}
                </div>
                <button onClick={saveDataToAPI} className='px-4 md:px-6 w-36 md:w-[168px] h-12 md:h-[40px] mt-9 text-[#000] bg-primary-color dark:bg-transparent font-medium dark:text-primary-color text-sm md:text-base rounded-lg dark:hover:bg-[#3a3a3a] border border-primary-color'>Save Project</button>
            </div>
        </div >
    );
};

export default Banner100x100white;
