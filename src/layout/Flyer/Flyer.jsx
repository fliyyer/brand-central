import React, { useState } from 'react'
import Footer from '../../components/Footer'
import CardFlyer from './CardFlyer'
import flyer1 from '../../assets/images/flyer/flyer 1.png'
import flyer2 from '../../assets/images/flyer/flyer 2.png'
import flyer3 from '../../assets/images/flyer/flyer 3.png'
import Popup from '../../components/pop-up/Popup';

const Flyer = () => {
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[23px] justify-center items-center">
                    <CardFlyer title='Flyer 1' img={flyer1} onOpenPopup={() => openPopup('/flyer/edit/1')} />
                    <CardFlyer title='Flyer 2' img={flyer2} onOpenPopup={() => openPopup('/flyer/edit/2')} />
                    <CardFlyer title='Flyer 3' img={flyer3} onOpenPopup={() => openPopup('/flyer/edit/3')} />
                </div>
            </div>
            {isPopupOpen && <Popup onClose={closePopup} to={popupTo} />}
            <Footer />
        </>
    )
}

export default Flyer
