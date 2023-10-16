import React, { useState, useEffect } from "react";
import RwWhite from "../../../assets/images/raywhite-putih.png";
import RwYellow from "../../../assets/images/raywhite-putih2.png";
import axios from "axios";
import TextEditorPopup from "../../pop-up/TextEditorPopup";
import TitleOptionsPopup from "../../pop-up/TitleOptionsPopup";
import Call from "../../../assets/images/call.png";
import { convertTitle } from "../../../utils/optionConvert";

const Banner300x100 = () => {
    const [isNameEditing, setIsNameEditing] = useState(false);
    const [isMobileEditing, setIsMobileEditing] = useState(false);
    const [isTitleOptionsOpen, setIsTitleOptionsOpen] = useState(false);
    const [imageColor, setImageColor] = useState("yellow");
    const [backgroundColor, setBackgroundColor] = useState("yellow");
    const [content, setContent] = useState({
        title: "",
        agentName: "",
        agentPhone: "",
        agentOfficePhone: "",
        officeName: "",
        officeWebsite: "",
    });

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
                "https://brandcentralapi.raywhite.co.id/banner7/create",
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
                });
            } else {
                console.error("Eror ambil data:", response);
            }
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
        }
    };

    const handleNameEdit = () => {
        setIsNameEditing(true);
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

    const handleNameSave = (newAgentName) => {
        setIsNameEditing(false);
        const uppercaseName = newAgentName.toUpperCase();
        setContent((prevContent) => ({
            ...prevContent,
            agentName: uppercaseName,
        }));
    };

    const saveDataToAPI = async () => {
        try {
            let convertedTitle = convertTitle(content.title);
            const dataToBeSaved = {
                property_type: convertedTitle,
                agent_name: content.agentName,
                agent_mobile: content.agentPhone,
                color: imageColor,
            };

            const response = await axios.post(
                "https://brandcentralapi.raywhite.co.id/banner7/save",
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

    return (
        <div className="flex flex-col justify-center items-end">
            <div className={`w-[891px] h-[297px] ${imageColor === "yellow" ? "bg-primary-color text-[#3a3a3a]" : "bg-[#fff] text-[#595A5C]"} relative`}>
                <img
                    src={imageColor === "yellow" ? RwWhite : RwYellow}
                    alt="RayWhite"
                    className="absolute right-12 max-w-full"
                />
                <div className="px-12 py-12 relative">
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
                        {content.title}
                    </h1>
                    <div className="flex gap-3">
                        {isNameEditing && (
                            <TextEditorPopup
                                initialValue={content.agentName}
                                onSave={handleNameSave}
                                onCancel={handleNameCancel}
                            />
                        )}
                        <p className="text-[29px] font-bold uppercase cursor-pointer" onClick={handleNameEdit}>
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
                            className="text-[29px] font-bold font-lato cursor-pointer"
                            onClick={handleMobileEdit}
                        >
                            {content.agentPhone || "0812 1234 5678"}
                        </p>
                    </div>
                    <p className="text-[15px] font-bold">{content.agentEmail}</p>
                    <div className="flex justify-between">
                        <p className="flex items-center gap-2 text-[30px] font-bold">
                            <img className="w-8" src={Call} alt="Phone" />
                            <span>{content.agentOfficePhone || "(62-21) 2788 9777"}</span>
                        </p>
                        <div>
                            <p className="text-[15px] font-bold mt-4">{content.officeName}</p>
                            <p className="text-[15px] font-bold">{content.officeWebsite}</p>
                        </div>
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

export default Banner300x100;
