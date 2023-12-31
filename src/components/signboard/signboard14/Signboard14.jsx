import React, { useEffect, useState } from "react";
import RwWhite from "../../../assets/images/raywhite-putih.png";
import RwYellow from "../../../assets/images/raywhite-putih2.png";
import axios from "axios";
import TextEditorPopup from "../../pop-up/TextEditorPopup";
import TitleOptionsPopup from "../../pop-up/TitleOptionsPopup";
import Call from "../../../assets/images/call.png";
import { convertTitle } from "../../../utils/optionConvert";

const Signboard14 = () => {
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
                "https://brandcentralapi.raywhite.co.id/signboard6/create",
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

    const handleNameSave = (newAgentName) => {
        setIsNameEditing(false);
        setContent((prevContent) => ({
            ...prevContent,
            agentName: newAgentName,
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
            const dataToBeSaved = {
                property_type: convertedTitle,
                agent_name: content.agentName,
                agent_mobile: content.agentPhone,
                color: imageColor,
            };

            const response = await axios.post(
                "https://brandcentralapi.raywhite.co.id/signboard6/save",
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
            <div
                className={`w-[611px] h-[488px] ${imageColor === "yellow" ? "bg-primary-color" : "bg-[#fff]"
                    } relative`}
            >
                <img
                    src={imageColor === "yellow" ? RwWhite : RwYellow}
                    alt="Raywhite"
                    className="w-[123px] h-[123px] absolute top-0 right-[73px]"
                />
                <div className="text-[#3a3a3a] font-lato px-[43px] pt-[91px]">
                    {isTitleOptionsOpen && (
                        <TitleOptionsPopup
                            isOpen={isTitleOptionsOpen}
                            onSelect={handleTitleSelect}
                            onClose={handleTitleCancel}
                        />
                    )}
                    <h1
                        className="text-[90px] font-playfair font-bold cursor-pointer"
                        onClick={handleTitleEdit}
                    >
                        {content.title}
                    </h1>
                    <div className="flex gap-4 mt-3">
                        {isNameEditing && (
                            <TextEditorPopup
                                initialValue={content.agentName}
                                onSave={handleNameSave}
                                onCancel={handleNameCancel}
                            />
                        )}
                        <h1
                            className="text-[40px] font-bold cursor-pointer"
                            onClick={handleNameEdit}
                        >
                            {content.agentName}
                        </h1>
                        {isMobileEditing && (
                            <TextEditorPopup
                                initialValue={content.agentPhone}
                                onSave={handleMobileSave}
                                onCancel={handleMobileCancel}
                            />
                        )}
                        <p
                            className="text-[40px] font-bold font-lato cursor-pointer"
                            onClick={handleMobileEdit}
                        >
                            {content.agentPhone || "0812 1234 5678"}
                        </p>
                    </div>
                    <p className="text-[19px] font-bold">{content.agentEmail}</p>
                    <p className="flex items-center mt-3 gap-2 text-[30px] font-bold">
                        <img src={Call} className="w-6 mt-1" alt="phone" />
                        <span>{content.agentOfficePhone || "(62-21) 2788 9777"}</span>
                    </p>
                    <p className="text-[16px] font-lato font-bold mt-4">
                        {content.officeName || "Ray White Indonesia"}
                    </p>
                    <p className="text-[10px] font-lato font-bold">
                        {content.officeWebsite || "raywhite.co.id"}
                    </p>
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

export default Signboard14;
