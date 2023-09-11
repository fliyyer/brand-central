import React from 'react'
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

const SocialMedia = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center py-12 gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
                    <CardSocialMedia title='Instagram 1' img={IG_1} />
                    <CardSocialMedia title='Instagram 2' img={IG_2} />
                    <CardSocialMedia title='Instagram 3' img={IG_3} />
                    <CardSocialMedia title='Instagram 4' img={IG_4} />
                    <CardSocialMedia title='Instagram 5' img={IG_5} />
                    <CardSocialMedia title='Instagram 6' img={IG_6} />
                    <CardSocialMedia title='Instagram 7' img={IG_7} />
                    <CardSocialMedia title='Instagram 8' img={IG_8} />
                    <CardSocialMedia title='Instagram 9' img={IG_9} />
                    <CardSocialMedia title='Instagram 10' img={IG_10} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SocialMedia
