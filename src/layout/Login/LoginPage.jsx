import React, { useEffect } from 'react';
import InputLogin from '../../components/input/Login/inputLogin';
import BrandCentral from '../../assets/images/logo-brand-central.png';
import BcLight from '../../assets/images/bc-light.svg';
import RayWhite from '../../assets/images/logo-ray-white.png';

const LoginPage = () => {

    const theme = localStorage.getItem('theme') || 'light';
    const brandCentralImage = theme === 'light' ? BcLight : BrandCentral;

    return (
        <div
            className={`min-h-screen flex flex-col items-center justify-center dark:bg-bg-content bg-cover bg-no-repeat bg-white relative`}
        >
            <div className="absolute top-0">
                <img src={RayWhite} alt="Logo Ray White" />
            </div>
            <div className="p-2 md:px-4 mt-[46px] rounded font-poppins w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                <img src={brandCentralImage} alt="Logo Brand Central" className="mx-auto md:mt-[46px] mb-4" />
                <div className={`text-2xl md:text-3xl lg:text-4xl xl:text-[51.5px] dark:text-[#fff]  text-[#5C5C5C] text-center`}>
                    <div className='leading-[110%]'>
                        Build your<span className='font-bold leading-[139%]'> Marketing tools here.</span>
                    </div>
                </div>
                <div className='mt-8'>
                    <InputLogin />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
