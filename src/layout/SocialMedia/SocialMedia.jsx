import React, { useState } from 'react'
import Footer from '../../components/Footer'
import CardSocialMedia from './CardSocialMedia'
import IG_1 from '../../assets/images/socmed/instagram-1.png'
import IG_2 from '../../assets/images/socmed/instagram-2.png'
import IG_3 from '../../assets/images/socmed/instagram-3.png'
import IG_4 from '../../assets/images/socmed/instagram-4.png'
import IG_5 from '../../assets/images/socmed/instagram-5.png'
import IG_6 from '../../assets/images/socmed/instagram-6.png'
import IG_7 from '../../assets/images/socmed/instagram-7.png'
import IG_8 from '../../assets/images/socmed/instagram-8.png'
import IG_9 from '../../assets/images/socmed/instagram-9.png'
import IG_10 from '../../assets/images/socmed/instagram-10.png'
import Popup from '../../components/pop-up/Popup';

const SocialMedia = () => {
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
                    <CardSocialMedia title='Instagram 1' img={IG_1} onOpenPopup={() => openPopup('/socialmedia/edit/1')} />
                    <CardSocialMedia title='Instagram 2' img={IG_2} onOpenPopup={() => openPopup('/socialmedia/edit/2')} />
                    <CardSocialMedia title='Instagram 3' img={IG_3} onOpenPopup={() => openPopup('/socialmedia/edit/3')} />
                    <CardSocialMedia title='Instagram 4' img={IG_4} onOpenPopup={() => openPopup('/socialmedia/edit/4')} />
                    <CardSocialMedia title='Instagram 5' img={IG_5} onOpenPopup={() => openPopup('/socialmedia/edit/5')} />
                    <CardSocialMedia title='Instagram 6' img={IG_6} onOpenPopup={() => openPopup('/socialmedia/edit/6')} />
                    <CardSocialMedia title='Instagram 7' img={IG_7} onOpenPopup={() => openPopup('/socialmedia/edit/7')} />
                    <CardSocialMedia title='Instagram 8' img={IG_8} onOpenPopup={() => openPopup('/socialmedia/edit/8')} />
                    <CardSocialMedia title='Instagram 9' img={IG_9} onOpenPopup={() => openPopup('/socialmedia/edit/9')} />
                    <CardSocialMedia title='Instagram 10' img={IG_10} onOpenPopup={() => openPopup('/socialmedia/edit/10')} />
                </div>
            </div>
            {isPopupOpen && <Popup onClose={closePopup} to={popupTo} />}
            <Footer />
        </>
    )
}

export default SocialMedia
