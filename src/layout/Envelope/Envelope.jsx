import React from 'react'
import Footer from '../../components/Footer'
import CardEnvelope from './CardEnvelope'
import Envelope_1 from '../../assets/images/envelope/Envelope1.png'
import Envelope_2 from '../../assets/images/envelope/Envelope2.png'

const Envelope = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center py-12 gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[23px] justify-center items-center">
                    <CardEnvelope title='Envelope 1' img={Envelope_1} to='envelope/edit/1' />
                    <CardEnvelope title='Envelope 2' img={Envelope_2} to='envelope/edit/2' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Envelope
