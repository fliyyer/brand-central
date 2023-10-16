import React, { useState, useRef, useEffect } from "react";
import RwWhite from "../../../assets/images/raywhite-putih.png";
import RwYellow from "../../../assets/images/raywhite-putih2.png";
import axios from "axios";
import ImageCropPopup from "../../pop-up/ImageCropPopup";
import Call from "../../../assets/images/call.png";
import { convertTitle } from "../../../utils/optionConvert";
import TextEditorPopup from "../../pop-up/TextEditorPopup";

const Banner6x16 = () => {
    const [isNameEditing, setIsNameEditing] = useState(false);
    const [isMobileEditing, setIsMobileEditing] = useState(false);
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
    const [isCropPopupOpen, setIsCropPopupOpen] = useState(false);
    const handleBackgroundColorChange = (event) => {
        const selectedColor = event.target.value;
        setBackgroundColor(selectedColor);
        const newImageColor = selectedColor === "white" ? "white" : "yellow";
        setImageColor(newImageColor);
    };
    useEffect(() => {
        defaultUser();
    }, []);
    const defaultUser = async () => {
        try {
            const response = await axios.get(
                "https://brandcentralapi.raywhite.co.id/xbanner/create",
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                    },
                }
            );
            if (response.status === 200) {
                const dataUser = response.data.row;
                setContent({
                    title: "Open House",
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
                "https://brandcentralapi.raywhite.co.id/xbanner/save",
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
        <div className="flex flex-col justify-center items-end">
            <div
                className={`w-[320px] font-lato h-[580px] ${imageColor === "yellow" ? "bg-primary-color text-[#3a3a3a]" : "bg-[#fff] text-[#595A5C]"} relative flex flex-col justify-center items-center`}
            >
                <img
                    src={imageColor === "yellow" ? RwWhite : RwYellow}
                    alt="RayWhite"
                    className="absolute w-[120px] right-13 top-0 justify-center max-w-full"
                />
                <h1 className="font-bold font-playfair text-center text-[60px] leading-[60px] mt-24">
                    Open House
                </h1>
                <div className={`w-24 h-2  ${imageColor === "yellow" ? "bg-[#fff]" : "bg-primary-color"
                    } my-2`}></div>
                <div className="w-[123px] h-[123px] rounded-full overflow-hidden">
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
                <div className="px-8 relative mt-2 text-center">
                    {isNameEditing && (
                        <TextEditorPopup
                            initialValue={content.agentName}
                            onSave={handleNameSave}
                            onCancel={handleNameCancel}
                        />
                    )}
                    <p
                        className="text-[20px] cursor-pointer uppercase font-bold"
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
                        className="text-base font-bold -mt-2 font-lato cursor-pointer"
                        onClick={handleMobileEdit}
                    >
                        ({content.agentPhone || "0812 1234 5678"})
                    </p>
                    <div>
                        <p className="flex items-center justify-center text-base gap-1 mt-5 font-bold">
                            <img src={Call} className="w-4" alt="Phone" />
                            <span>{content.agentOfficePhone}</span>
                        </p>
                        <p className="text-[14px] font-bold">{content.officeName}</p>
                        <p className="text-[10px] font-bold">{content.officeWebsite}</p>
                    </div>
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
                        <option
                            value="white"
                            className="bg-[#fff] dark:bg-text-board-color rounded-none"
                        >
                            White
                        </option>
                        <option
                            value="yellow"
                            className="bg-[#fff] dark:bg-text-board-color rounded-none"
                        >
                            Yellow
                        </option>
                    </select>
                    {backgroundColor === "white" && (
                        <div className="w-4 h-4 absolute right-2 top-1/2 mr-20 transform -translate-y-1/2 bg-white"></div>
                    )}
                    {backgroundColor === "yellow" && (
                        <div className="w-4 h-4 absolute right-2 top-1/2 mr-20 transform -translate-y-1/2 bg-yellow-500"></div>
                    )}
                </div>
                <button
                    onClick={saveDataToAPI}
                    className="px-4 md:px-6 w-28 md:w-[168px] h-7 md:h-[40px] mt-9 text-[#000] bg-primary-color dark:bg-transparent font-medium dark:text-primary-color text-sm md:text-base rounded-lg dark:hover:bg-[#3a3a3a] border border-primary-color"
                >
                    Save Project
                </button>
            </div>
        </div>
    );
};

export default Banner6x16;
