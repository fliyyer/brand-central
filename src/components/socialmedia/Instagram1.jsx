import React, { useState, useEffect } from "react";
import axios from "axios";
const Instagram1 = (props) => {
    const [bgImage, setBgImage] = useState(props.bgImage);
    const [bgImage2, setBgImage2] = useState(props.bgImage2);
    const [bgImage3, setBgImage3] = useState(props.bgImage3);
    const [content, setContent] = useState({
        text1: "",
        text2: "",
        image1: "",
        image2: "",
        image3: "",
    });

    const Image1 = content.image1;
    const Image2 = content.image2;
    const Image3 = content.image3;

    const instagram = async () => {
        try {
            const response = await axios.get(
                "https://brandcentralapi.raywhite.co.id/ig/create",
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                    },
                }
            );
            if (response.status === 200) {
                const Ig = response.data.row;
                setContent({
                    text1: Ig.text1,
                    text2: Ig.text2,
                    image1: Ig.image1_url,
                    image2: Ig.image2_url,
                    image3: Ig.image4_url,
                });
            }
        } catch { }
    };

    useEffect(() => {
        instagram();
    }, []);

    const saveProject = async () => {
        try {
            const response = await axios.post(
                'https://brandcentralapi.raywhite.co.id/ig/save',
                {
                    text1: content.text1,
                    text2: content.text2,
                    image1: content.image1,
                    image2: content.image2,
                    image4: content.image3,
                    text_type: 'a'
                },
                {
                    headers: {
                        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                    },
                }
            );

            if (response.status === 200) {
                console.log('Data berhasil disimpan');
                console.log(response.data);
            }
        } catch (error) {
            console.error('Gagal menyimpan data:', error);
        }
    };


    return (
        <div className="flex flex-col items-end justify-center">
            <div className="w-[479px] bg-[#fff] h-[479px] p-[18px]">
                <div className="flex gap-[14px]">
                    <div
                        className="w-[215px] bg-slate-100 h-[215px] bg-cover bg-center bg-no-repeat relative"
                        style={{ backgroundImage: `url(${props.bgImage || Image1})` }}
                    >
                        <button
                            onClick={props.onClick}
                            className="border text-center text-xs font-roboto w-[120px] py-[6.75px] border-[#fff] rounded-[57px] text-[#fff] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        >
                            Change Image
                        </button>
                    </div>
                    <div
                        className="w-[215px] bg-slate-100 h-[215px] bg-center bg-cover bg-no-repeat relative"
                        style={{ backgroundImage: `url(${props.bgImage2 || Image2})` }}
                    >
                        <button
                            onClick={props.onClick2}
                            htmlFor="imageUpload2"
                            className="border text-center text-xs font-roboto w-[120px] py-[6.75px] border-[#fff] rounded-[57px] text-[#fff] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        >
                            Change Image
                        </button>
                    </div>
                </div>
                <div className="flex mt-[14px] gap-[14px]">
                    <div className="w-[215px] font-poppins h-[215px]">
                        <h1
                            className="text-[#FFE716] font-semibold text-[19px] tracking-[3.8px]"
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                        >
                            {content.text1}
                        </h1>
                        <h1
                            className="text-[19px] w-[157px] text-[#616161] mt-[4.79px] font-semibold tracking-[3.8px]"
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                        >
                            {content.text2}
                        </h1>
                        <p className="text-[#616161] font-light bottom-20 absolute">
                            PROUDLY <span className="font-bold">RAYWHITE</span>
                        </p>
                    </div>
                    <div
                        className="w-[215px] bg-slate-100 h-[215px] bg-cover bg-center bg-no-repeat relative"
                        style={{ backgroundImage: `url(${props.bgImage3 || Image3})` }}
                    >
                        <button
                            onClick={props.onClick3}
                            className="border text-center text-xs font-roboto w-[120px] py-[6.75px] border-[#fff] rounded-[57px] text-[#fff] font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                        >
                            Change Image
                        </button>
                    </div>
                </div>
            </div>
            <button onClick={saveProject} className="px-4 md:px-6 w-36 md:w-[168px] h-12 md:h-[40px] mt-9 text-[#000] bg-primary-color dark:bg-transparent font-medium dark:text-primary-color text-sm md:text-base rounded-lg dark:hover:bg-[#3a3a3a] border border-primary-color">
                Save Project
            </button>
        </div>
    );
};

export default Instagram1;
