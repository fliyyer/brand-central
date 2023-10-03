import React, { useState, useEffect } from "react";
import Ig5 from "../../assets/images/instagram/ig5.jpeg";
import Rwtext from "../../assets/images/rw-text.png";
const Instagram10 = (props) => {
    const [bgImage, setBgImage] = useState(
        localStorage.getItem("instagram_10_image1") || Ig5
    );
    const [isPopImgOpen, setIsPopImgOpen] = useState(false);

    const [content, setContent] = useState({
        title: "Nibh cras lacus orci at.",
        descripsion: "Diam interdum lacinia sed risus ultrices egestas lectus suspendisse. Morbi felis",
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
        <div className="w-[480px] bg-[#fff] flex h-[480px]">
            <div>
                <div
                    className="w-[297px] bg-slate-100 h-full bg-cover bg-no-repeat bg-center relative"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <button onClick={props.onClick}
                        htmlFor="imageUpload"
                        className="border text-center text-xs font-roboto w-[120px] py-[6.75px] border-[#fff] rounded-[57px] text-[#fff] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    >
                        Change Image
                    </button>
                    <p className="text-[#616161] text-center bottom-0 absolute  w-full py-[6px] font-light">
                        PROUDLY <span className="font-bold">RAYWHITE</span>
                    </p>
                </div>
            </div>
            <div>
                <div className="px-4">
                    <div className="font-poppins">
                        <h1
                            className="text-[15px] my-5 text-[#616161] font-semibold tracking-[3.8px]"
                            contentEditable={true}
                            onBlur={(e) => handleEditAndSave("descripsion", e)}
                            suppressContentEditableWarning={true}
                        >
                            {content.title}
                        </h1>
                        <div className="border-2 border-primary-color"></div>
                        <h1
                            className="text-[9.8px] my-5 text-[#616161] font-semibold tracking-[1.9px]"
                            contentEditable={true}
                            onBlur={(e) => handleEditAndSave("descripsion", e)}
                            suppressContentEditableWarning={true}
                        >
                            {content.descripsion}
                        </h1>
                    </div>
                    <div className="w-[117px] mt-40 h-[117px] ml-3 bg-primary-color rounded-full flex items-center justify-center">
                        <img src={Rwtext} alt="RayWhite" className="max-h-full max-w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instagram10;
