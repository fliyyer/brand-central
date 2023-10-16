import React, { useState } from 'react';
import CardSignBoard from './CardSignBoard';
import SB_8x6 from '../../assets/images/sign-board/SB-8x6.png';
import SB_8x6l from '../../assets/images/sign-board/SB-8x6l.png';
import SB_8x10 from '../../assets/images/sign-board/SB-8x10.png';
import SB_8x10l from '../../assets/images/sign-board/SB-8x10l.png';
import SB_6x4 from '../../assets/images/sign-board/SB-6x4.png';
import SB_6x4l from '../../assets/images/sign-board/SB-6x4l.png';
import SB_8x4 from '../../assets/images/sign-board/SB-8x4.png';
import SB_8x4l from '../../assets/images/sign-board/SB-8x4l.png';
import SB_8x12 from '../../assets/images/sign-board/SB-8x12.png';
import SB_8x12l from '../../assets/images/sign-board/SB-8x12l.png';
import SB_8x12v2 from '../../assets/images/sign-board/SB-8x12v2.jpeg';
import SB_8x12v2l from '../../assets/images/sign-board/SB-8x12v2l.jpeg';
import SB_30x40 from '../../assets/images/sign-board/SB-30x40.png';
import SB_50x40 from '../../assets/images/sign-board/SB-50x40.png';
import SB_60x80 from '../../assets/images/sign-board/SB-60x80.png';
import SB_60x60 from '../../assets/images/sign-board/SB-60x60.png';
import Footer from '../../components/Footer';
import Popup from '../../components/pop-up/Popup';

const SignBoard = () => {
    const [popupTo, setPopupTo] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = (to) => {
        setIsPopupOpen(true);
        setPopupTo(to);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center py-12 gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
                    <CardSignBoard title="Sign Board 8 x 6" img={SB_8x6} width='w-[152px] h-[188px]' onOpenPopup={() => openPopup('/sign-board/edit1')} />
                    <CardSignBoard title="Sign Board 8 x 6 L" img={SB_8x6l} width='w-[163px] h-[120px]' onOpenPopup={() => openPopup('/sign-board/edit2')} />
                    <CardSignBoard title="Sign Board 8 x 10" img={SB_8x10} width='w-[151px] h-[185px]' onOpenPopup={() => openPopup('/sign-board/edit3')} />
                    <CardSignBoard title="Sign Board 8 x 10 L" img={SB_8x10l} width='w-[191px] h-[151px]' onOpenPopup={() => openPopup('/sign-board/edit4')} />
                    <CardSignBoard title="Sign board 6 x 4" img={SB_6x4} width='w-[134px] h-[183px]' onOpenPopup={() => openPopup('/sign-board/edit5')} />
                    <CardSignBoard title="Sign Board 6 x 4 L" img={SB_6x4l} width='w-[210px] h-[138px]' onOpenPopup={() => openPopup('/sign-board/edit6')} />
                    <CardSignBoard title="Sign Board 8 x 4" img={SB_8x4} width='w-[99px] h-[180px]' onOpenPopup={() => openPopup('/sign-board/edit7')} />
                    <CardSignBoard title="Sign Board 8 x 4 L" img={SB_8x4l} width='w-[174px] h-[86px]' onOpenPopup={() => openPopup('/sign-board/edit8')} />
                    <CardSignBoard title="Sign Board 8 x 12" img={SB_8x12} width='w-[129px] h-[185px]' onOpenPopup={() => openPopup('/sign-board/edit9')} />
                    <CardSignBoard title="Sign Board 8 x 12 L" img={SB_8x12l} width='w-[191px] h-[126px]' onOpenPopup={() => openPopup('/sign-board/edit10')} />
                    <CardSignBoard title="Sign Board 8 x 12 V2" img={SB_8x12v2} width='w-[137px] h-[195px]' onOpenPopup={() => openPopup('/sign-board/edit11')} />
                    <CardSignBoard title="Sign Board 8 x 12 V2 L" img={SB_8x12v2l} width='w-[231px] h-[164px]' onOpenPopup={() => openPopup('/sign-board/edit12')} />
                    <CardSignBoard title="Sign board 30 x 40 cm" img={SB_30x40} width='w-[146px] h-[195px]' to='/sign-board/edit13' />
                    <CardSignBoard title="Sign Board 50 x 40 cm" img={SB_50x40} width='w-[212px] h-[170px]' to='/sign-board/edit14' />
                    <CardSignBoard title="Sign Board 60 x 80 cm" img={SB_60x80} width='w-[142px] h-[189px]' to='/sign-board/edit15' />
                    <CardSignBoard title="Sign Board 60 x 60 cm" img={SB_60x60} width='w-[189px] h-[189px]' to='/sign-board/edit16' />
                </div>
            </div>
            {isPopupOpen && <Popup onClose={closePopup} to={popupTo} />}
            <Footer />
        </>
    );
}

export default SignBoard;
