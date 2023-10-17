import React, { useEffect, useState } from "react";
import Rw from "../../assets/images/rw-hd.png";
import axios from "axios";
import TextEditorPopup from "../pop-up/TextEditorPopup";

const Namecard1 = () => {
    const [isNameEditing, setIsNameEditing] = useState(false);
    const [isPositionEditing, setIsPositionEditing] = useState(false);
    const [content, setContent] = useState({
        agentName: "",
        agentPhone: "",
        agentEmail: "",
        agentPosition: "",
        agentOfficePhone: "",
        officeName: "",
        officeWebsite: "",
        officeAddress: "",
        companyName: "",
        fax: "",
    });

    const defaultUser = async () => {
        try {
            const response = await axios.get(
                "https://brandcentralapi.raywhite.co.id/namecard/create",
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                    },
                }
            );

            if (response.status === 200) {
                const dataUser = response.data.row;
                setContent({
                    agentName: dataUser.agent_name,
                    agentPhone: dataUser.agent_mobile,
                    agentEmail: dataUser.agent_email,
                    agentPosition: dataUser.agent_position,
                    agentOfficePhone: dataUser.agent_phone,
                    officeName: dataUser.agent_office,
                    officeWebsite: dataUser.website,
                    officeAddress: dataUser.office_address,
                    companyName: dataUser.company_name,
                    fax: dataUser.fax,
                });
            } else {
                console.error("Eror ambil data:", response);
            }
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
        }
    };

    useEffect(() => {
        defaultUser();
    }, []);

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

    const handlePositionEdit = () => {
        setIsPositionEditing(true);
    };

    const handlePositionSave = (newAgentPosition) => {
        setIsPositionEditing(false);
        setContent((prevContent) => ({
            ...prevContent,
            agentPosition: newAgentPosition,
        }));
    };

    const handlePositionCancel = () => {
        setIsPositionEditing(false);
    };

    const saveDataToAPI = async () => {
        try {
            const dataToBeSaved = {
                agent_name: content.agentName,
                agent_position: content.agentPosition,
                agent_email: content.agentEmail,
                agent_mobile: content.agentPhone || '0812 3456 7890',
            };

            const response = await axios.post(
                "https://brandcentralapi.raywhite.co.id/namecard/save",
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
            <div>
                <div className="w-[440px] bg-[#fff] px-[37.7px] h-[269px]">
                    <img src={Rw} alt="Raywhite" className=" absolute right-8" />
                    <h1 className="absolute top-52">{content.officeName}</h1>
                </div>
                <div className="w-[440px] text-[#5F5C60] py-[22px] px-[37.7px] mt-[22px] bg-[#fff] h-[269px]">
                    {isNameEditing && (
                        <TextEditorPopup
                            initialValue={content.agentName}
                            onSave={handleNameSave}
                            onCancel={handleNameCancel}
                        />
                    )}
                    <h1
                        onClick={handleNameEdit}
                        className="font-lato  text-[20.6px] cursor-pointer font-medium leading-[34.78px] tracking-[0.178px]"
                    >
                        {content.agentName}
                    </h1>
                    {isPositionEditing && (
                        <TextEditorPopup
                            initialValue={content.agentPosition}
                            onSave={handlePositionSave}
                            onCancel={handlePositionCancel}
                        />
                    )}
                    <p
                        onClick={handlePositionEdit}
                        className="font-source-sans cursor-pointer leading-[34.78px] tracking-[0.178px"
                    >
                        {content.agentPosition}
                    </p>
                    <div className="flex gap-[3.45px] items-center">
                        <h1 className="font-medium text-[13.7px]">E</h1>
                        <p className="font-light text-[10px] font-source-sans">
                            {content.agentEmail}
                        </p>
                    </div>
                    <div className="border-primary-color border-b-[3px] t-2 "></div>
                    <h1 className="font-medium font-lato text-[15.5px] leading-[34.78px] tracking-[0.178px]">
                        {content.officeName}
                    </h1>
                    <h1 className="text-[10px] font-light font-source-sans tracking-[0.178px]">
                        {content.companyName}
                    </h1>
                    <div className="flex gap-[22px] mb-[6.9px]">
                        <div className="flex gap-[3.45px] items-center">
                            <h1 className="font-medium text-[15px]">T</h1>
                            <p className="font-light text-[13.7px]">
                                {content.agentOfficePhone}
                            </p>
                        </div>
                        <div className="flex gap-[3.45px] items-center">
                            <h1 className="font-medium text-[15px]">F</h1>
                            <p className="font-light text-[13.7px]">{content.fax}</p>
                        </div>
                    </div>
                    <p className="font-light text-[10px] font-source-sans tracking-[0.178px] mb-3">
                        {content.officeAddress}
                    </p>
                    <h1 className="font-medium text-[10px] font-source-sans">
                        {content.officeWebsite}
                    </h1>
                </div>
            </div>
            <button
                onClick={saveDataToAPI}
                className="px-4 md:px-6 w-28 md:w-[168px] h-7 md:h-[40px] mt-9 text-[#000] bg-primary-color dark:bg-transparent font-medium dark:text-primary-color text-sm md:text-base rounded-lg dark:hover:bg-[#3a3a3a] border border-primary-color"
            >
                Save Project
            </button>
        </div>
    );
};

export default Namecard1;
