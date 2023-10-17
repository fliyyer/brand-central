import React, { useState, useEffect } from "react";
import RwWhite from "../../../assets/images/raywhite-putih.png";
import RwYellow from "../../../assets/images/raywhite-putih2.png";
import Arrow from "../../../assets/images/aleft.png";
import axios from "axios";
import TextEditorPopup from "../../pop-up/TextEditorPopup";
import TitleOptionsPopup from "../../pop-up/TitleOptionsPopup";
import Call from "../../../assets/images/call.png";
import { convertTitle } from "../../../utils/optionConvert";

const Signboard16 = () => {
    const [isNameEditing, setIsNameEditing] = useState(false);
    const [isMobileEditing, setIsMobileEditing] = useState(false);
    const [isTitleOptionsOpen, setIsTitleOptionsOpen] = useState(false);
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
                "https://brandcentralapi.raywhite.co.id/arrow_sign2/create",
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
                    agentEmail: dataUser.agent_email,
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
                direction: "left",
            };

            const response = await axios.post(
                "https://brandcentralapi.raywhite.co.id/arrow_sign2/save",
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
        <div className="flex flex-col items-end justify-center">
            <div
                className={`w-[509px] font-lato h-[509px] ${imageColor === "yellow" ? "bg-primary-color" : "bg-[#fff]"
                    }`}
            >
                <img
                    src={Arrow}
                    className="w-[171px] h-[171px] absolute top-14 left-4"
                    alt="Arrow Left"
                />
                <img
                    src={imageColor === "yellow" ? RwWhite : RwYellow}
                    alt="Raywhite"
                    className="w-[125px] h-[125px] absolute top-11 right-9"
                />
                <div
                    className={`text-right px-8 pt-32 ${imageColor === "yellow" ? "text-[#3a3a3a]" : "text-[#595A5C]"
                        }`}
                >
                    {isTitleOptionsOpen && (
                        <TitleOptionsPopup
                            isOpen={isTitleOptionsOpen}
                            onSelect={handleTitleSelect}
                            onClose={handleTitleCancel}
                        />
                    )}
                    <h1
                        onClick={handleTitleEdit}
                        className="text-[77px] font-playfair font-bold"
                    >
                        {content.title}
                    </h1>
                    {isNameEditing && (
                        <TextEditorPopup
                            initialValue={content.agentName}
                            onSave={handleNameSave}
                            onCancel={handleNameCancel}
                        />
                    )}
                    <p onClick={handleNameEdit} className="text-[38px] font-bold">
                        {content.agentName}
                    </p>
                    {isMobileEditing && (
                        <TextEditorPopup
                            initialValue={content.agentPhone}
                            onSave={handleMobileSave}
                            onCancel={handleMobileCancel}
                        />
                    )}
                    <p className="text-[38px] font-bold">
                        {content.agentPhone || "0812 3456 7890"}
                    </p>
                    <p className="text-[19px] font-bold">{content.agentEmail}</p>
                    <p className="flex items-center absolute right-8 gap-2 text-[30px] font-bold">
                        <img src={Call} className="w-7 mt-1" alt="phone" />
                        <span>{content.agentOfficePhone}</span>
                    </p>
                    <div className="justify-between pt-16 flex items-end">
                        <p className="text-[17.8px] font-bold">{content.officeName}</p>
                        <p className="text-[11px] font-bold">{content.officeWebsite}</p>
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

export default Signboard16;
