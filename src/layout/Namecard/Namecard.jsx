import React from 'react'
import Footer from '../../components/Footer'
import CardNamecard from './CardNamecard'
import Namecard_1 from '../../assets/images/namecard/namecard 1.png'
import Namecard_2 from '../../assets/images/namecard/namecard 2.png'
import Namecard_3 from '../../assets/images/namecard/namecard 3.png'

const Namecard = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center py-12 gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
                    <CardNamecard title='Namecard 1' img={Namecard_1} to='namecard/edit/1' />
                    <CardNamecard title='Namecard 2' img={Namecard_2} to='namecard/edit/2' />
                    <CardNamecard title='Id Card' img={Namecard_3} to='namecard/edit/3' />
                </div>
            </div>
            <Footer position='bottom-0 md:absolute right-0 left-0' />
        </>
    )
}

export default Namecard
