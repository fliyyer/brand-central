import React from 'react'
import Footer from '../../components/Footer'
import CardFlyer from './CardFlyer'
import flyer1 from '../../assets/images/flyer/flyer 1.png'
import flyer2 from '../../assets/images/flyer/flyer 2.png'
import flyer3 from '../../assets/images/flyer/flyer 3.png'

const Flyer = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center py-12 gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[23px] justify-center items-center">
                    <CardFlyer title='Flyer 1' img={flyer1} />
                    <CardFlyer title='Flyer 2' img={flyer2} />
                    <CardFlyer title='Flyer 3' img={flyer3} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Flyer
