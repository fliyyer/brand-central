import React from 'react';
import Banner_1x1 from '../../assets/images/banner/banner-1x1.png';
import Banner_2x1 from '../../assets/images/banner/banner-2x1.png';
import Banner_3x1 from '../../assets/images/banner/banner-3x1.png';
import Banner_4x1 from '../../assets/images/banner/banner-4x1.png';
import Banner_name2x1 from '../../assets/images/banner/banner-name2x1.png';
import Banner_x6x1 from '../../assets/images/banner/xbanner-6x160.png';

import Footer from '../../components/Footer';
import CardBanner from './CardBanner';

const Banner = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center py-12 gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center">
                    <CardBanner title='Banner 1 x 1' img={Banner_1x1} to='banner/edit/1x1' />
                    <CardBanner title='Banner 2 x 1' img={Banner_2x1} to='banner/edit/2x1' />
                    <CardBanner title='Banner 3 x 1' img={Banner_3x1} to='banner/edit/3x1' />
                    <CardBanner title='Banner 4 x 1' img={Banner_4x1} to='banner/edit/4x1' />
                    <CardBanner title='Banner 2 name 2 x 1' img={Banner_name2x1} to='banner/edit/22x1' />
                    <CardBanner title='X Banner 60 x 160' img={Banner_x6x1} to='banner/edit/60x160' />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Banner;
