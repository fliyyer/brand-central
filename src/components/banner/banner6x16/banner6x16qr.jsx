import React, { useState, useEffect } from "react";
import RwWhite from "../../../assets/images/raywhite-putih.png";
import RwYellow from "../../../assets/images/raywhite-putih2.png";
import axios from "axios";
import QrRw from "../../../assets/images/qr-rw.png";
import Call from "../../../assets/images/call.png";
import { convertTitle } from "../../../utils/optionConvert";
import TextEditorPopup from "../../pop-up/TextEditorPopup";
import LoanMarket from "../../../assets/images/lm-putih.png";
import LoanMarket2 from "../../../assets/images/lm-biru.png";

const Banner6x16qr = () => {
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
                "https://brandcentralapi.raywhite.co.id/banner3/create",
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                    },
                }
            );

            if (response.status === 200) {
                const dataUser = response.data.row;
                setContent({
                    title: 'Dijual',
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
            const dataToBeSaved = {
                property_type: convertedTitle,
                agent_name: content.agentName,
                agent_mobile: content.agentPhone,
                color: imageColor,
            };

            const response = await axios.post(
                "https://brandcentralapi.raywhite.co.id/banner3/save",
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
                <img src={QrRw} alt="QR Code Raywhite" className="w-[100px] mt-2" />
                <div className="flex gap-1 mt-4 items-baseline">
                    <p className="text-sm">In Partnership With</p>
                    <img
                        src={imageColor === "yellow" ? LoanMarket : LoanMarket2}
                        alt="Loan Market"
                        className="w-[28px]"
                    />
                </div>
                <div className="px-8 relative text-center">
                    {isNameEditing && (
                        <TextEditorPopup
                            initialValue={content.agentName}
                            onSave={handleNameSave}
                            onCancel={handleNameCancel}
                        />
                    )}
                    <p
                        className="text-[24px] cursor-pointer mt-4 uppercase font-bold"
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
                        className="text-[24px] font-bold -mt-2 font-lato cursor-pointer"
                        onClick={handleMobileEdit}
                    >
                        ({content.agentPhone || "0812 1234 5678"})
                    </p>
                    <p className="flex items-center mt-2 text-[22.5px] gap-2 font-bold">
                        <img src={Call} className="w-6" alt="Phone" />
                        <span>{content.agentOfficePhone}</span>
                    </p>
                    <p className="text-[14px] font-bold">{content.officeName}</p>
                    <p className="text-[10px] font-bold">{content.officeWebsite}</p>
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

export default Banner6x16qr;
