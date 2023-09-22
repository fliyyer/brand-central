import React, { useState, useEffect } from "react";
import Ig5 from "../../assets/images/instagram/Ig5.jpeg";

const Instagram8 = (props) => {
    const [bgImage, setBgImage] = useState(
        localStorage.getItem("instagram_8_image1") || Ig5
    );
    const [isPopImgOpen, setIsPopImgOpen] = useState(false);
    const [content, setContent] = useState({
        descripsion: "Nisl consectetur curabitur placerat qui.",
    });
    const openPopImg = () => {
        setIsPopImgOpen(true);
    };

    const closePopImg = () => {
        setIsPopImgOpen(false);
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
            setBgImage(Ig5);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="w-[479px] bg-[#fff] h-[479px]">
            <p className="text-[#616161] text-center  w-full py-[6px] font-light bg-[#d9d9d9]">
                PROUDLY <span className="font-bold">RAYWHITE</span>
            </p>
            <div className="text-center px-3">
                <div className="font-poppins">
                    <h1
                        className="text-[15px] my-5 text-[#616161] font-semibold tracking-[3.8px]"
                        contentEditable={true}
                        onBlur={(e) => handleEditAndSave("descripsion", e)}
                        suppressContentEditableWarning={true}
                    >
                        {content.descripsion}
                    </h1>
                </div>
            </div>
            <div
                className="w-[479px] bg-slate-100 h-[383px] bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <button onClick={props.onClick}
                    htmlFor="imageUpload"
                    className="border text-center text-xs font-roboto w-[120px] py-[6.75px] border-[#fff] rounded-[57px] text-[#fff] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                >
                    Change Image
                </button>
            </div>
        </div>
    );
};

export default Instagram8;
